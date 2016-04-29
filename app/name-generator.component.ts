import {Component, OnInit} from 'angular2/core'

@Component({
  selector: 'name-generator',
  template: `
    <div class="billboard-wrapper">
      <object type="image/svg+xml"
        data="/image/billboard-frame.svg">
      </object>
      <div class="billboard-content">
        <div class="generated-name">{{ generatedName }}</div>
        <div id="generate-button" (click)="generateName()"></div>
        <div class="feedback-buttons">
          <div id="thumbs-up"></div>
          <div id="thumbs-down"></div>
        </div>
      </div>
    </div>
  `
})

export class NameGenerator implements OnInit {
  generatedName = ''

  ngOnInit () {
    this.generateName()
  }

  generateName () {
    var rng = Math.random

    let randomFromArray = function (items: Array<string>): string {
      return items[Math.floor(rng() * items.length)]
    }

    let maybePresent = function (item: string, probability = 0.5): string {
      return rng() <= probability ? item : ''
    }

    var articles = [
      'The'
    ]

    var prefixes = [
      'Apex',
      'Zenith',
      'Bump',
      'Red',
      'Blue',
      'Black',
      'Green',
      'Booty',
      'Jacksie',
      'Iron',
      'Steep',
      'Speed',
      'Steel',
      'Deep',
      'Big',
      'High',
      'Fast',
      'Great',
      'Hell'
    ]

    var mains = [
      'Beast',
      'Corsair',
      'Dragon',
      'Serpent',
      'Cruiser',
      'Curse',
      'Diver',
      'Rattler',
      'Dipper',
      'Flight',
      'Titan',
      'Colossus',
      'Emperor',
      'Imperator',
      'Kraken',
      'Widow',
      'Wiggler',
      'Joggler',
      'Rocker',
      'Peak',
      'Summit',
      'Shaker'
    ]

    var suffixes = [
      'of Steel',
      'of Fear',
      'of Screaming',
      'of Phobia',
      'of Fright',
      'of Terror'
    ]

    let generate = function (): string {

      let combine = function (parts: Array<string>): string {
        return parts.join(' ').replace(/\s+/g, ' ')
      }

      var article = maybePresent(randomFromArray(articles))
      var prefix = maybePresent(randomFromArray(prefixes))
      var main = randomFromArray(mains)
      var suffix = maybePresent(randomFromArray(suffixes), 0.25)
      var name = combine([article, prefix, main, suffix])
      // prevent boring and very long names
      if ((article === '' && prefix === '' && suffix === '') || (name.length >= 35)) {
        name = generate()
      }
      // prevent identical prefix and suffix
      if (suffix.indexOf(prefix) !== -1) {
        name = generate()
      }
      // if all parts are present, remove the article
      if (article !== '' && prefix !== '' && suffix !== '') {
        name = combine([prefix, main, suffix])
      }
      return name
    }

    this.generatedName = generate()
  }
}
