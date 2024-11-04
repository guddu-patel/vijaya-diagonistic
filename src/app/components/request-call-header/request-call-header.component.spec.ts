import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCallHeaderComponent } from './request-call-header.component';

describe('RequestCallHeaderComponent', () => {
  let component: RequestCallHeaderComponent;
  let fixture: ComponentFixture<RequestCallHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestCallHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCallHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
