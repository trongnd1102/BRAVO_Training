import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CollectionView }  from '@grapecity/wijmo';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  products: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData() {
    // get data from JSON file
    this.httpClient.get("assets/product.json").subscribe((data) => {
      // create a paged CollectionView with 10 items per page
      this.products = new CollectionView(data, {pageSize: 10});
    })
  }


}
