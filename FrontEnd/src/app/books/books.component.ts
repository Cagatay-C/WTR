import { Component } from "@angular/core";
import { MessageService } from "../shared/message.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
  providers: []
})
export class BooksComponent {
  constructor(private messageService: MessageService) {}
  sendMessage() {
    this.messageService.sendMessage("message from books-component");
  }
}
