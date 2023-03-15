import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postBooks(data:any){
    return this.http.post<any>("http://localhost:55480/api/books",data);
  }
  getBook(){
    return this.http.get<any>("http://localhost:55480/api/books/");
  }
  putBook(data:any,bookId:number){

    return this.http.put<any>("http://localhost:55480/api/books/"+bookId,data);


  }
  deleteBook(bid:number){
    return this.http.delete<any>("http://localhost:55480/api/books/"+bid);
  }
}
