import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroControlPanelComponent } from './retro-control-panel.component';

describe('RetroControlPanelComponent', () => {
  let component: RetroControlPanelComponent;
  let fixture: ComponentFixture<RetroControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroControlPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
