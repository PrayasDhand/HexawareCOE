import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogModule , MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books  : any;
  bookForm !: FormGroup;
  actionBtn : string ="Save"
  constructor(private fb:FormBuilder,private router : Router,private ngZone:NgZone,public dialog:MatDialogModule,private api:ApiService , private dialogRef:MatDialogRef<AddBookComponent>,@Inject(MAT_DIALOG_DATA) public editData:any, ) {
    
  }
  

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      id:['',Validators.required],
      bookName:['',Validators.required],
      authorName:['',Validators.required],
      price:['',Validators.required],
      path:['',Validators.required],
    });
    if(this.editData){
      this.actionBtn = "Update";
      this.bookForm.controls['id'].setValue(this.editData.bookId);
      this.bookForm.controls['bookName'].setValue(this.editData.bookName);
      this.bookForm.controls['authorName'].setValue(this.editData.authorName);
      this.bookForm.controls['price'].setValue(this.editData.price);
      this.bookForm.controls['path'].setValue(this.editData.path);
    }


      console.log(this.editData);
  }
  
  
  addBooks(){
    console.log(this.bookForm.value);
    if(!this.editData){
      if(this.bookForm.valid){
        this.api.postBooks(this.bookForm.value)
        .subscribe({
          next:(res)=>{
            alert("Product added Successfully");
            this.bookForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Book added Successfully.");
          }
        })
      }
    }else{
      this.updateBook()
    }
  }
  updateBook(){
    this.api.putBook(this.bookForm.value,this.editData.id).subscribe({
      next:(res)=>{
        alert("Book Updated..");
        this.bookForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("An Error Ocurred while updating...");
      }
    })

  }

}
