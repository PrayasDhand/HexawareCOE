import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {

   public books : any = [] ;
   public grandTotal : number = 0;
   

  constructor(private ls:LibraryService,private toastr : ToastrService) {}
 showSuccess(){
  this.toastr.success("Order placed Successfully","Success");
  window.location.reload();
 }
  ngOnInit(): void {

    this.ls.getBooks().subscribe((data: any) => {
      console.log(data);
      this.books = data;
      this.grandTotal = this.ls.getTotalPrice();

      this.books.forEach((a:any)=> {
        Object.assign(a,{total:a.price});
        
      });
    });

    

    

    
    
    
  }
 
  removeLibraryItem(book:any){
    this.ls.removeLibraryItem(book);
  }

}
