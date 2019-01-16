import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutNavComponent } from './shortcut-nav.component';

describe('ShortcutNavComponent', () => {
  let component: ShortcutNavComponent;
  let fixture: ComponentFixture<ShortcutNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
