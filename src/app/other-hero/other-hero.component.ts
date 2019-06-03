import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-other-hero',
  templateUrl: './other-hero.component.html',
  styleUrls: ['./other-hero.component.css']
})
export class OtherHeroComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  selectedHero1: Hero;
  options:any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.setWuweiInfo(hero);  
  }
  
  setWuweiInfo(hero: Hero){
    this.options = {
      title : {
          text: '',
          subtext: ''
      },
      tooltip : {
          trigger: 'axis'
      },
      toolbox: {
          show : false,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : false,
      polar : [
          {
              indicator : [
                { text: '统帅', max: 100},
                { text: '武力', max: 100},
                { text: '智力', max: 100},
                { text: '政治', max: 100},
                { text: '魅力', max: 100},
              ],
              radius : 130
          }
      ],
      series : [
          {
              name: '',
              type: 'radar',
              itemStyle: {
                  normal: {
                      areaStyle: {
                          type: 'default'
                      }
                  }
              },
              data : [
                {
                  value : [ hero.commander,hero.force,hero.intellect,hero.politics,hero.charm],
                  name :hero.name
                }
              ]
          }
      ]
    }
  }
}
