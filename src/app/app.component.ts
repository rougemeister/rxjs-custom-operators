
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

  originalValues = [5, 8, 'Hello', 13, 'World', 54];
  transformedValues: any[] = [];
  factor = 2; 

  // Applying the custom operator

  ngOnInit() {

    const source$ = of(...this.originalValues);


      // Applying the custom operator
    source$.pipe(multiplyBy(this.factor)).subscribe(value => {
      this.transformedValues.push(value);
    });
  }
}
