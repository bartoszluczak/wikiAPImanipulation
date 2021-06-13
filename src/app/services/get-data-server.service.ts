import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataServerService {
  constructor(private http: HttpClient) {}

  getDataFromWiki(searchPhrase: string): Observable<any> {
    return this.http.get(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${searchPhrase}&srlimit=10&origin=*`
    );
  }
}
