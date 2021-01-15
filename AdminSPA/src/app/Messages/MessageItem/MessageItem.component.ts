import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/Interfaces/Message';

@Component({
  selector: 'app-MessageItem',
  templateUrl: './MessageItem.component.html',
  styleUrls: ['./MessageItem.component.scss']
})
export class MessageItemComponent implements OnInit {
  @Input() message:Message;
  constructor() { }

  ngOnInit() {
  }

}
