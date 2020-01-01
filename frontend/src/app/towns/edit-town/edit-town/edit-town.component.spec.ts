import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTownComponent } from './edit-town.component';

describe('EditTownComponent', () => {
  let component: EditTownComponent;
  let fixture: ComponentFixture<EditTownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
