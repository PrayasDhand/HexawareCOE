import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  public libraryItemList : any=[]
  public books = new BehaviorSubject<any>([]);

  constructor() { }
  getBooks(){
     return this.books.asObservable();
  }
  setBooks(book : any){
    this.libraryItemList.push(...book);
    this.books.next(book);
  }
  addtoLibrary(book:any): void{
    this.libraryItemList.push(book);
    this.books.next(this.libraryItemList);
  }
  removeLibraryItem(book:any){
    this.libraryItemList.map((a:any , index:any)=>{
      if(book.id === a.id){
        this.libraryItemList.splice(index ,1);

      }
    })
    this.books.next(this.libraryItemList);
  }
  
  
}
