import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTableListComponent } from './home-table-list.component';

describe('HomeTableListComponent', () => {
  let component: HomeTableListComponent;
  let fixture: ComponentFixture<HomeTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
