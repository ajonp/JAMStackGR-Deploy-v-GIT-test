import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jamstackgr2LibraryComponent } from './jamstackgr2-library.component';

describe('Jamstackgr2LibraryComponent', () => {
  let component: Jamstackgr2LibraryComponent;
  let fixture: ComponentFixture<Jamstackgr2LibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jamstackgr2LibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jamstackgr2LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
