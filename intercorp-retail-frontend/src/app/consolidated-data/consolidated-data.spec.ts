import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsolidatedDataComponent } from './consolidated-data';

describe('ConsolidatedData', () => {
  let component: ConsolidatedDataComponent;
  let fixture: ComponentFixture<ConsolidatedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolidatedDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsolidatedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
