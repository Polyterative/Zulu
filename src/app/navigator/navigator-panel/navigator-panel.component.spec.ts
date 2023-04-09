import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorPanelComponent } from './navigator-panel.component';

describe('NavigatorPanelComponent', () => {
  let component: NavigatorPanelComponent;
  let fixture: ComponentFixture<NavigatorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatorPanelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavigatorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
