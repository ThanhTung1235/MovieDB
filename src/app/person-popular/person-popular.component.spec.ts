import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPopularComponent } from './person-popular.component';

describe('PersonPopularComponent', () => {
  let component: PersonPopularComponent;
  let fixture: ComponentFixture<PersonPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
