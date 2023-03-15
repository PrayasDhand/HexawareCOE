import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean = true
  isAdmin:boolean = true

  constructor(){}
  ngOnInit(): void {
      this.isLoggedIn = localStorage.getItem("User")!=null;
      var x = localStorage.getItem("User");
      if(x)this.isAdmin = JSON.parse(x).isAdmin==true
  }
}
