import {Component} from 'angular2/core'
import {NameGenerator} from './name-generator.component'

@Component({
  selector: 'coaster-namer',
  template: `
    <h1 class="headline">Coaster Namer</h1>
    <p class="description">
      Need a name for a roller coaster? Click the <span class="new-label"></span> label on the billboard to generate a new one!<br>
    </p>
    <name-generator></name-generator>
  `,
  directives: [NameGenerator]
})

export class AppComponent {}
