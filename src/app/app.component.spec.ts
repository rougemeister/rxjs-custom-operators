import { TestBed, ComponentFixture } from '@angular/core/testing';  // <-- Import TestBed and ComponentFixture
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]  // <-- Declare the component here
    }).compileComponents();  // <-- Compile the components

    fixture = TestBed.createComponent(AppComponent);  // <-- Initialize the fixture
    component = fixture.componentInstance;  // <-- Get the component instance
  });

  it('should display original values', () => {
    fixture.detectChanges();  // <-- Trigger change detection
    const compiled = fixture.nativeElement;  // <-- Access the DOM elements
    const originalValues = compiled.querySelectorAll('ul:nth-of-type(1) li');
    
    expect(originalValues.length).toBe(6);  // <-- Ensure correct length
    expect(originalValues[0].textContent).toBe('1');
    expect(originalValues[2].textContent).toBe('Hello');
  });

  it('should display transformed values using multiplyBy operator', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const transformedValues = compiled.querySelectorAll('ul:nth-of-type(2) li');
    
    expect(transformedValues.length).toBe(6);
    expect(transformedValues[0].textContent).toBe('2');  // 1 * 2 = 2
    expect(transformedValues[2].textContent).toBe('Hello');  // Ignored non-numeric value
  });
});
