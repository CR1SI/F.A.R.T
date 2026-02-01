import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSignUp } from './about-sign-up';

describe('AboutSignUp', () => {
  let component: AboutSignUp;
  let fixture: ComponentFixture<AboutSignUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSignUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSignUp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
