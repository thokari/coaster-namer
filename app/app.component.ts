import {Component} from 'angular2/core'
import {NameGenerator} from './name-generator.component'
import {Animation} from './animation.component'


@Component({
  selector: 'coaster-namer',
  template: `
    <h1>Coaster Namer</h1>
    <animation></animation>
    <name-generator></name-generator>
  `,
  directives: [NameGenerator, Animation]
})

export class AppComponent {}
