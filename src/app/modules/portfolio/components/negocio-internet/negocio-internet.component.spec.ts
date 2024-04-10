import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioInternetComponent } from './negocio-internet.component';

describe('NegocioInternetComponent', () => {
  let component: NegocioInternetComponent;
  let fixture: ComponentFixture<NegocioInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegocioInternetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegocioInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
