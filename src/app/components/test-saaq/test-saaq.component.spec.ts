import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSaaqComponent } from './test-saaq.component';

describe('TestSaaqComponent', () => {
  let component: TestSaaqComponent;
  let fixture: ComponentFixture<TestSaaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSaaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestSaaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
