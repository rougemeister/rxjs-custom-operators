
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { multiplyBy } from '../custom-operators/custom-operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rxjs-custom-operators';
  originalValues = [1, 2, 'Hello', 3, 'World', 4];
  transformedValues: any[] = [];
  factor = 2; // The multiplication factor

  ngOnInit() {
    const source$ = of(...this.originalValues);
    
    // Applying the custom operator
    source$.pipe(multiplyBy(this.factor)).subscribe(value => {
      this.transformedValues.push(value);
    });
  }
}
