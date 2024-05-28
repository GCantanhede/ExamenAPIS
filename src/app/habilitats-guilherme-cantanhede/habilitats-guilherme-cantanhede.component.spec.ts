import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitatsGuilhermeCantanhedeComponent } from './habilitats-guilherme-cantanhede.component';

describe('HabilitatsGuilhermeCantanhedeComponent', () => {
  let component: HabilitatsGuilhermeCantanhedeComponent;
  let fixture: ComponentFixture<HabilitatsGuilhermeCantanhedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilitatsGuilhermeCantanhedeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabilitatsGuilhermeCantanhedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
