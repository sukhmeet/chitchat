import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { MatDialogRef } from "@angular/material";
@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {
  name: string;
  constructor(public dialogRef: MatDialogRef<LogindialogComponent>) { }

  ngOnInit() {
  }
  startchat() {
    this.dialogRef.close(this.name);
  }

}
