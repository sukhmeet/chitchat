import { Component, OnInit, OnDestroy, ElementRef , ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../message.service';
import { Message } from '../classes/message';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  user: string;
  messages : Message[]= [];
  responseMessage : Message;
  chattext: string;
  inputPlaceHolder: string = "Start Chatting..."
  @ViewChild("elemforscroll") elemforscroll: ElementRef;
  private subscriptions: Subscription[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService) {}

  ngOnInit() {
    
    this.subscriptions.push(
      this.route
      .queryParams
      .subscribe(params => {
        this.user = params['user'] || '';
      })
    );
        
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  sendMessage() {
    var message = new Message();
    message.message = this.chattext;
    message.sender = this.user;
    this.messages.push(message);
    this.subscriptions.push(
      this.messageService.sendMessage(message)
      .subscribe(data => {
          this.responseMessage = data as Message;
          this.responseMessage.sender = "echo service"
          this.messages.push(this.responseMessage);
          if (this.messages.length > 1 ) {
            this.inputPlaceHolder = "Enter Message"
            this.elemforscroll.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
      })
    );
    this.chattext = "";
    
  }


}
