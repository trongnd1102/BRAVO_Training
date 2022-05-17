import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
  products: any;
  currentTime = new Date()

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/product.json").subscribe((data) => {
      this.products = data;
      console.log(this.products);
    })
  }

  selectProduct: any;
  onSelect(pProduct: any) {
    this.selectProduct = pProduct;
  }

  bOpenSideBar = false;
  bShowSideBarOption = false;
  bOpenSubTable = false;
  bOpenSubTable2 = false;
  bChangeContentDisplay = false;
}
