import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCollectionSummaryComponent } from './home-collection-summary.component';

describe('HomeCollectionSummaryComponent', () => {
  let component: HomeCollectionSummaryComponent;
  let fixture: ComponentFixture<HomeCollectionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCollectionSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCollectionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
