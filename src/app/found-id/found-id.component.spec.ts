import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundIdComponent } from './found-id.component';

describe('FoundIdComponent', () => {
  let component: FoundIdComponent;
  let fixture: ComponentFixture<FoundIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
