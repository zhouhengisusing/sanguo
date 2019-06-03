import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';




@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  options:any;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        this.setWuweiInfo(this.hero);
      });
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
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


