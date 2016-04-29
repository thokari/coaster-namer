System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NameGenerator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NameGenerator = (function () {
                function NameGenerator() {
                    this.generatedName = '';
                }
                NameGenerator.prototype.ngOnInit = function () {
                    this.generateName();
                };
                NameGenerator.prototype.generateName = function () {
                    var rng = Math.random;
                    var randomFromArray = function (items) {
                        return items[Math.floor(rng() * items.length)];
                    };
                    var maybePresent = function (item, probability) {
                        if (probability === void 0) { probability = 0.5; }
                        return rng() <= probability ? item : '';
                    };
                    var articles = [
                        'The'
                    ];
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
                    ];
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
                    ];
                    var suffixes = [
                        'of Steel',
                        'of Fear',
                        'of Screaming',
                        'of Phobia',
                        'of Fright',
                        'of Terror'
                    ];
                    var generate = function () {
                        var combine = function (parts) {
                            return parts.join(' ').replace(/\s+/g, ' ');
                        };
                        var article = maybePresent(randomFromArray(articles));
                        var prefix = maybePresent(randomFromArray(prefixes));
                        var main = randomFromArray(mains);
                        var suffix = maybePresent(randomFromArray(suffixes), 0.25);
                        var name = combine([article, prefix, main, suffix]);
                        // prevent boring and very long names
                        if ((article === '' && prefix === '' && suffix === '') || (name.length >= 35)) {
                            name = generate();
                        }
                        // prevent identical prefix and suffix
                        if (suffix.indexOf(prefix) !== -1) {
                            name = generate();
                        }
                        // if all parts are present, remove the article
                        if (article !== '' && prefix !== '' && suffix !== '') {
                            name = combine([prefix, main, suffix]);
                        }
                        return name;
                    };
                    this.generatedName = generate();
                };
                NameGenerator = __decorate([
                    core_1.Component({
                        selector: 'name-generator',
                        template: "\n    <div class=\"billboard-wrapper\">\n      <object type=\"image/svg+xml\"\n        data=\"/image/billboard-frame.svg\">\n      </object>\n      <div class=\"billboard-content\">\n        <div class=\"generated-name\">{{ generatedName }}</div>\n        <div id=\"generate-button\" (click)=\"generateName()\"></div>\n        <div class=\"feedback-buttons\">\n          <div id=\"thumbs-up\"></div>\n          <div id=\"thumbs-down\"></div>\n        </div>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NameGenerator);
                return NameGenerator;
            }());
            exports_1("NameGenerator", NameGenerator);
        }
    }
});
//# sourceMappingURL=name-generator.component.js.map