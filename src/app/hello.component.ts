import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <button (click)="Send()">Send data to parent</button>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input('aName') name: string;
  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();

  Send() {
    this.sendData.emit(this.test());
    this.sendData.emit('jig')
    this.sendData.emit(localStorage.getItem('editorLastConnected'))
  }

  test() {
    return 'hai';
  }
}
