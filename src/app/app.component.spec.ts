import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';  // Standalone component

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]  
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Ensure initial change detection
  });

  it('should display original values', () => {
    fixture.detectChanges();  // Trigger change detection
    const compiled = fixture.nativeElement;
    const originalValues = compiled.querySelectorAll('ul:nth-of-type(1) li');
    
    expect(originalValues.length).toBe(component.originalValues.length);  // Use component's length
    component.originalValues.forEach((value, index) => {
      expect(originalValues[index].textContent).toBe(value.toString());
    });
  });

  it('should display transformed values using multiplyBy operator', () => {
    fixture.detectChanges();  // Trigger change detection
    const compiled = fixture.nativeElement;
    const transformedValues = compiled.querySelectorAll('ul:nth-of-type(2) li');
    
    expect(transformedValues.length).toBe(component.transformedValues.length);  // Use component's length
    component.transformedValues.forEach((value, index) => {
      expect(transformedValues[index].textContent).toBe(value.toString());
    });
  });
});
