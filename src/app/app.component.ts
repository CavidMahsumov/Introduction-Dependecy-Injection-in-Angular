import { Component } from '@angular/core';
import { ProductService } from './productService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DependecyInjectionFirst';
  constructor(private productService:ProductService){
    console.log(productService.getProducts());
  }
}
