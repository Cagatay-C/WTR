import { Subject, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MessageService {
  private subject = new Subject<String>();

  sendMessage(message: string) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
