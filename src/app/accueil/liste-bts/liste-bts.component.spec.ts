import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBTSComponent } from './liste-bts.component';

describe('ListeBTSComponent', () => {
  let component: ListeBTSComponent;
  let fixture: ComponentFixture<ListeBTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
