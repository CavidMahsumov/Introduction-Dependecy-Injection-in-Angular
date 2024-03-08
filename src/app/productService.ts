import { Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})

export class ProductService{
  getProducts():Product[]{
      return [{name:"mouse",quantity:4},{name:"keyboard",quantity:14},{name:"headphone",quantity:5}]

  }
}

export class Product{
  name:string;
  quantity:number;
};
