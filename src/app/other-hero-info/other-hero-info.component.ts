import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-other-hero-info',
  templateUrl: './other-hero-info.component.html',
  styleUrls: ['./other-hero-info.component.css']
})


export class OtherHeroInfoComponent implements OnInit {
  @Input() hero: Hero;
  @Input() options:any;
  @Output() deleteRequest = new EventEmitter<Hero>();

  constructor() { }



  ngOnInit() {

  }

  onDelete(){
    this.deleteRequest.emit(this.hero);
  }
}
