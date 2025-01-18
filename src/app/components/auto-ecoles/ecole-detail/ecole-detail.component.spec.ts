import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoleDetailComponent } from './ecole-detail.component';

describe('EcoleDetailComponent', () => {
  let component: EcoleDetailComponent;
  let fixture: ComponentFixture<EcoleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoleDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
