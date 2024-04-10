import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPortfolioComponent } from './banner-portfolio.component';

describe('BannerPortfolioComponent', () => {
  let component: BannerPortfolioComponent;
  let fixture: ComponentFixture<BannerPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
