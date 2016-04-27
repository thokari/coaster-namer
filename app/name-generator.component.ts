import {Component} from 'angular2/core'

@Component({
  selector: 'name-generator',
  template: `
    <div class="generated-name">{{ generatedName }}</div>
    <button (click)="generateName()">Generate!</button>
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
      'Iron',
      'Steep',
      'Deep',
      'High',
      'Fast',
      'Great',
      'Screaming'
    ]

    var mains = [
      'Corsair',
      'Cruiser',
      'Curse',
      'Diver',
      'Rattler',
      'Titan',
      'Colossus',
      'Kraken',
      'Widow'
    ]

    var suffixes = [
      'of Steel',
      'of Fear',
      'of Screaming'
    ]

    var article = maybeNotEmpty(randomFromArray(articles))
    var prefix = maybeNotEmpty(randomFromArray(prefixes))
    var main = randomFromArray(mains)
    var suffix = maybeNotEmpty(randomFromArray(suffixes), 0.25)

    this.generatedName = [article, prefix, main, suffix].join(' ').replace(/\s+/g, ' ')

  }
}
