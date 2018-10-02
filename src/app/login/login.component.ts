import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { LogindialogComponent } from '../logindialog/logindialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.openDialog()
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.dialog.open(LogindialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`); 
      this.router.navigate(['/chat'], { queryParams: { user: value}});

    });
  }
}
