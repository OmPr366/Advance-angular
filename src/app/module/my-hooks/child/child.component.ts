import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnDestroy {
  time = 0;
  interval :any
  name = ''
  constructor() {
    console.log('Child Constructor is called ');
  }

  ngOnInit() {
    console.log('Child OnInit is Called');
    this.interval =  setInterval(() => {
      this.time = this.time + 1;
      console.log(this.time);
    },1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log('Child onDestroy is Called');


  }
}
