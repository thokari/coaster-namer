import {Component} from 'angular2/core'
import {NameGenerator} from './name-generator.component'

@Component({
  selector: 'coaster-namer',
  template: `
    <h1 class="headline">Coaster Namer</h1>
    <name-generator></name-generator>
  `,
  directives: [NameGenerator]
})

export class AppComponent {}
