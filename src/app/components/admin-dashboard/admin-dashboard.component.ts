import { AfterViewInit,Component, NgZone, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog ,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../../services/api.service';
import { AddBookComponent } from './add-book/add-book.component';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = ['bookId', 'bookName', 'authorName', 'price','path','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
    
  constructor(private fb:FormBuilder,private router : Router,private ngZone:NgZone,public dialog:MatDialog,private api:ApiService ) {
    
  }

  getAllBooks(){
    this.api.getBook().subscribe({
      next:(res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
          alert("error while fetching records");
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editBook(row:any){
    this.dialog.open(AddBookComponent,{
      width:'80%',
      height:'60%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllBooks();
      }

      })
    
  }
  deleteBook(bookId:number){
    this.api.deleteBook(bookId).subscribe({next:(res)=>{
      alert("Deleted Successfully....");
    },
    error:()=>{
      alert("Error While Deleting...");
    }
  })

  }
  openDialog(){
    this.dialog.open(AddBookComponent,{
      width:'70%',
      height:'70%'

    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllBooks();

      }

    })
  }
  

  ngOnInit(): void {
    this.getAllBooks();
    
    }
      
  }

