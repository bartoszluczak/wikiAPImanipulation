import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'xtm-task';
  public searchResults: Array<any> = [];
  public searchedPhrase: string = '';
  public allStringsToReplace = '';
  public replaceStringFirst = '';
}
