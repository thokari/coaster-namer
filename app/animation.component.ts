import {Component, OnInit} from 'angular2/core'

// declare var SVG: any;

@Component({
  selector: 'animation',
  template: `
    <div id="coaster-animation"></div>
  `
})

export class Animation implements OnInit {

  // SVGObj: any

  constructor () {
    // this.SVGObj = SVG
  }

  ngOnInit () {
    console.log('loaded animation component')
  }
}
