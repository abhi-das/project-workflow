import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'abdas-rect-status',
  template: `
  <div class="circle-container">
    <div class="circle">
      <span [ngClass]="color"></span>
    </div>
  </div>
  `,
  styleUrls: ['./rect-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RectStatusComponent implements OnInit {
  @Input()
  status: string;

  color: string;

  constructor() {}

  ngOnInit() {
    this.color = this.status;
  }
}
