import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherHeroComponent } from './other-hero.component';

describe('OtherHeroComponent', () => {
  let component: OtherHeroComponent;
  let fixture: ComponentFixture<OtherHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
