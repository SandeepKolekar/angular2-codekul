import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-sample-component',
  template: `
    <p>
      inner-sample-component Works!
    </p>
  `,
  styles: []
})
export class InnerSampleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
