import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { LogindialogComponent } from './logindialog/logindialog.component';
import { ChatComponent } from './chat/chat.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogindialogComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyMaterialModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  entryComponents: [LogindialogComponent]
})
export class AppModule { }
