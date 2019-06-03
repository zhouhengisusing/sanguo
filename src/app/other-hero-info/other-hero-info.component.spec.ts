import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherHeroInfoComponent } from './other-hero-info.component';

describe('OtherHeroInfoComponent', () => {
  let component: OtherHeroInfoComponent;
  let fixture: ComponentFixture<OtherHeroInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherHeroInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherHeroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
