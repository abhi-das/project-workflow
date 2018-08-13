import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @Input()
  parentComp: ElementRef;
  constructor(private elRef: ElementRef) {}

  ngOnInit() {}

  calculate = (a, b) => {
    return a * b;
  };
}
