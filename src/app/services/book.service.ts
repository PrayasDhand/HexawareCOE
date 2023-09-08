import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private REST_API_SERVER = 'http://localhost:5293/api/books';

  constructor(private httpClient: HttpClient) {}
  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
