import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css']
})
export class OnPushComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
    selector: 'a-comp',
    template: `
        <span>I am A component</span>
        <b-comp></b-comp>
    `
})
export class AComponent {}

@Component({
    selector: 'b-comp',
    template: `<span>I am B component</span>`
})
export class BComponent {}