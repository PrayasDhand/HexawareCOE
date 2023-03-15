import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BookService } from '../../../services/book.service';
import { LibraryService } from '../../../services/library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: any;

  constructor(private bs: BookService, private sanitizer: DomSanitizer , private ls : LibraryService) {
    this.books = sanitizer.bypassSecurityTrustResourceUrl(this.books);
  }

  ngOnInit(): void {
    this.bs.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.books = data;
    });
  }
  addTolibrary(book:any){
    this.ls.addtoLibrary(book);


  }
}
