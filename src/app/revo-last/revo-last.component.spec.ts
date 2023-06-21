import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevoLastComponent } from './revo-last.component';

describe('RevoLastComponent', () => {
  let component: RevoLastComponent;
  let fixture: ComponentFixture<RevoLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevoLastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevoLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
