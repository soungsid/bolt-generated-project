import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEcoleComponent } from './liste-ecole.component';

describe('ListeEcoleComponent', () => {
  let component: ListeEcoleComponent;
  let fixture: ComponentFixture<ListeEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEcoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
