import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvAiringComponent } from './tv-airing.component';

describe('TvAiringComponent', () => {
  let component: TvAiringComponent;
  let fixture: ComponentFixture<TvAiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvAiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvAiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
