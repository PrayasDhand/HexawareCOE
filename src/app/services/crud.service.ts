import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders , HttpErrorResponse} from '@angular/common/http'
import { Book } from './book';
import { catchError, Observable,throwError ,map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API:string = "http://localhost:5293/api/";
  httpHeaders = new HttpHeaders().set('Content-Type','application/json')


  constructor(private httpClient :HttpClient) { }

  //for adding Book
  AddBook(data:Book):Observable<any>{
    let API_URL = `${this.REST_API}/add-book`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }
  updateBook(id:any , data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update-book/${id}`;
    return this.httpClient.put(API_URL,data,{headers:this.httpHeaders}).pipe(catchError(this.handleError))
  }
  deleteBook(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    return this.httpClient.delete(API_URL,{headers:this.httpHeaders}).pipe(catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse)
  {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
      
    }
    else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);

  }
  
}
