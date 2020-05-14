import { Component, OnInit } from '@angular/core';
import {IProduct} from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title = 'Products App';
products: IProduct[] = [];
imageWidth: number =  50;
imageMargin: number = 2;
showImage = false;
searchValue = '';

ngOnInit() {
  this.products = this.getProducts();
}

toggleImages() {
 this.showImage = !this.showImage;
}
getProducts() : IProduct[] {
  return [
    {
      "ProductId": 1,
      "productName": "Nike",
      "productCode": "NIK-70-42",
      "releaseDate": "March 19, 1951",
      "description": "Its a Nike Brand",
      "price": 19.90,
      "starRating": 3.2,
      "imageUrl": 'assets/Images/nike.jpeg'
    },
    {
      "ProductId": 2,
      "productName": "Adidas",
      "productCode": "ADI-50-342",
      "releaseDate": "April 20, 1947",
      "description": "It's a Adidas Brand",
      "price": 20.23,
      "starRating": 4.0,
      "imageUrl": 'assets/Images/adidas.jpg'
    },
    {
      "ProductId": 3,
      "productName": "PUMA",
      "productCode": "PMA-50-342",
      "releaseDate": "April 20, 1980",
      "description": "It's a PUMA Brand",
      "price": 50.23,
      "starRating": 3.8,
      "imageUrl": 'assets/Images/puma.jpeg'
    },
    {
      "ProductId": 4,
      "productName": "UCB",
      "productCode": "UCB-30-708",
      "releaseDate": "April 20, 1947",
      "description": "It's a Adidas Brand",
      "price": 20.23,
      "starRating": 4.0,
      "imageUrl": 'assets/Images/ucb.jpg'
    }
    
  ];
  
}
}

