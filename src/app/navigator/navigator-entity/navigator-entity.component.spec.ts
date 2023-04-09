import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorEntityComponent } from './navigator-entity.component';

describe('NavigatorEntityComponent', () => {
  let component: NavigatorEntityComponent;
  let fixture: ComponentFixture<NavigatorEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatorEntityComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavigatorEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
