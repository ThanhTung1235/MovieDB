import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvOnTVComponent } from './tv-on-tv.component';

describe('TvOnTVComponent', () => {
  let component: TvOnTVComponent;
  let fixture: ComponentFixture<TvOnTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvOnTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvOnTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
