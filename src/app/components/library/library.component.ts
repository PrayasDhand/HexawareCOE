import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {

   public books : any = [] ;

  constructor(private ls:LibraryService) {}
  ngOnInit(): void {

    this.ls.getBooks().subscribe((data: any) => {
      console.log(data);
      this.books = data;
    });

    

    

    
    
    
  }
  removeLibraryItem(book:any){
    this.ls.removeLibraryItem(book);
  }

}
