import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  products: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  // get data from JSON file
  getData() {
    this.httpClient.get("assets/product.json").subscribe((data) => {
      this.products = data;
      console.log(this.products);
    })
  }


}
