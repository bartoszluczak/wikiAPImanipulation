import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetDataServerService } from '../services/get-data-server.service';

import { debounce } from 'lodash';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  @Output() searchResults = new EventEmitter<Array<any>>();
  @Output() searchedPhrase = new EventEmitter<string>();
  @Output() replaceString = new EventEmitter<string>();
  @Output() replaceStringFirst = new EventEmitter<string>();

  searchForm = new FormGroup({
    searchPhrase: new FormControl('', Validators.minLength(3)),
    replacePhrase: new FormControl('', Validators.minLength(3)),
  });

  constructor(private getDataService: GetDataServerService) {
    this.searchForPhrase = debounce(this.searchForPhrase, 1000);
  }

  ngOnInit(): void {}

  clearInput(inputName: string): void {
    this.searchForm.controls[inputName].setValue('');
    this.replaceString.emit('');
    this.replaceStringFirst.emit('');
  }

  get searchFormControls(): any {
    return this.searchForm.controls;
  }

  searchForPhrase(searchingPhrase: any): void {
    const searchedValue = searchingPhrase ? searchingPhrase.target.value : '';
    this.replaceString.emit('');
    this.replaceStringFirst.emit('');

    if (searchedValue) {
      this.getDataFromServer(searchedValue);
      this.searchedPhrase.emit(searchedValue);
    }
  }

  getDataFromServer(searchPhrase: string): void {
    this.getDataService.getDataFromWiki(searchPhrase).subscribe((res) => {
      this.searchResults.emit(res.query.search);
    });
  }

  submitSearch(): void {
    const searchedValue = this.searchFormControls.searchPhrase
      ? this.searchFormControls.searchPhrase.value
      : '';
    this.searchForPhrase(searchedValue);
  }

  replaceFirstOccurrence(): void {
    this.replaceStringFirst.emit(this.searchFormControls.replacePhrase.value);
  }

  replaceAll(): void {
    this.replaceString.emit(this.searchFormControls.replacePhrase.value);
  }
}
