import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLabTestComponent } from './home-lab-test.component';

describe('HomeLabTestComponent', () => {
  let component: HomeLabTestComponent;
  let fixture: ComponentFixture<HomeLabTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLabTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLabTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
