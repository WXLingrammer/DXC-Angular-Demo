import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{"Data received from parent: "+msg}}</h2>
  <button (click)="sendData()">Send Data </button>
  <h2 *ngIf="false">Welcome to Angular</h2>
  <h2 *ngIf="disp; else elseBlock">Hello</h2>
  <ng-template #elseBlock>
    <h2>Bye</h2>
  </ng-template>
  <div *ngIf="disp; then valueTrue; else valueFalse"></div>
  <ng-template #valueTrue>
    <h2>Hi</h2>
  </ng-template>
  <ng-template #valueFalse>
    <h2>By</h2>
  </ng-template>
    <div [ngSwitch]="day">
      <div *ngSwitchCase="'mon'">You have choosen Monday</div>
      <div *ngSwitchCase="'tue'">You have choosen Tuesday</div>
      <div *ngSwitchCase="'wed'">You have choosen Wednesday</div>
      <div *ngSwitchCase="'thur'">You have choosen Thursday</div>
      <div *ngSwitchCase="'fri'">You have choosen Friday</div>
      <div *ngSwitchCase="'sat'">You have choosen Saturday</div>
      <div *ngSwitchCase="'sun'">You have choosen Sunday</div>
      <div *ngSwitchDefault>You have choosen a wrong day!! Please choose correctly!!</div>
    </div>
    <h1>Participants in Odd Positions are</h1>
    <div *ngFor="let individual of participants; index as index; odd as o">
      
      <h2 *ngIf=o>{{o}} {{index}} {{individual}}</h2>
    </div>
    <div *ngFor="let a of pairs|keyvalue">
        <h2>Key = {{a.key}} and Value = {{a.value}}</h2>
    </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public disp = true;
  public day = "thur";
  public participants = ["A","B","C","D","E","F","G","H","I","J","K"];
  public pairs = {
    "A" : "B",
    "C" : "D",
    "E" : "F",
    "G" : "H",
    "I" : "J"
  }
  @Input('dataFromParent') public msg="";
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    this.childEvent.emit("Hello Parent");
  }

}
