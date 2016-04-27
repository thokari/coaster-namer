import {Component} from 'angular2/core'

@Component({
  selector: 'name-generator',
  template: `
    <button (click)="generateName()">Generate!</button>
    <div class="generated-name">{{ generatedName }}</div>
  `
})

export class NameGenerator {
  generatedName = ''

  generateName () {

    var rng = Math.random

    let randomFromArray = function (items: Array<String>): String {
      return items[Math.floor(rng() * items.length)]
    }

    let maybeNotEmpty = function (item: String, probability = 0.5): String {
      return rng() <= probability ? item : ''
    }

    var articles = [
      'The'
    ]

    var prefixes = [
      'Red',
      'Blue',
      'Booty',
      'Steep',
      'Deep'
    ]

    var mains = [
      'Corsair',
      'Cruiser',
      'Diver',
      'Rattler',
      'Titan',
      'Colossus'
    ]

    var suffixes = [
      'of Steel',
    ]

    var article = maybeNotEmpty(randomFromArray(articles))
    var prefix = maybeNotEmpty(randomFromArray(prefixes))
    var main = randomFromArray(mains)
    var suffix = maybeNotEmpty(randomFromArray(suffixes), 0.33)

    this.generatedName = [article, prefix, main, suffix].join(' ')

  }
}
