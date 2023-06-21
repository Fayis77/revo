import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderCardsComponent } from './builder-cards.component';

describe('BuilderCardsComponent', () => {
  let component: BuilderCardsComponent;
  let fixture: ComponentFixture<BuilderCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
