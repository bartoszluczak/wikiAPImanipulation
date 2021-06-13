import { Component, Input, OnInit } from '@angular/core';
import { ReplaceStringPipe } from '../shared/pipes/replace-string.pipe';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
})
export class ListComponentComponent implements OnInit {
  @Input() searchResults: Array<any> = [];
  @Input() searchedPhrase: string = '';
  @Input() allStringsToReplace: string = '';
  @Input() replaceStringFirst: string = '';

  constructor(private replaceStringPipe: ReplaceStringPipe) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.allStringsToReplace) {
      this.replaceAllString();
    }
    if (this.replaceStringFirst) {
      this.replaceFirstOccurrence();
    }
  }

  replaceAllString() {
    this.searchResults.forEach((item) => {
      item.snippet = this.replaceStringPipe.transform(
        item.snippet,
        this.allStringsToReplace,
        this.searchedPhrase,
        false
      );
    });
  }

  replaceFirstOccurrence(): void {
    this.searchResults[0].snippet = this.replaceStringPipe.transform(
      this.searchResults[0].snippet,
      this.replaceStringFirst,
      this.searchedPhrase,
      true
    );
  }
}
