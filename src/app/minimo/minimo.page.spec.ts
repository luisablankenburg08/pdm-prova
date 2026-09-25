import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinimoPage } from './minimo.page';

describe('MinimoPage', () => {
  let component: MinimoPage;
  let fixture: ComponentFixture<MinimoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
