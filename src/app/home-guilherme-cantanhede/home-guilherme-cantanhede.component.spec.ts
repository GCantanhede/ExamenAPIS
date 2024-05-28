import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGuilhermeCantanhedeComponent } from './home-guilherme-cantanhede.component';

describe('HomeGuilhermeCantanhedeComponent', () => {
  let component: HomeGuilhermeCantanhedeComponent;
  let fixture: ComponentFixture<HomeGuilhermeCantanhedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGuilhermeCantanhedeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeGuilhermeCantanhedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
