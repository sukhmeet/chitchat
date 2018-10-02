import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Message} from './classes/message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  constructor(private http:HttpClient) { }

  sendMessage(message:Message) {

    let body = JSON.stringify(message);
    return this.http.post('http://messages.getsandbox.com/messages', body, httpOptions);
            
  }

}
