import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CollectionView }  from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';

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
      // create a paged CollectionView with 12 items per page
      this.products = new CollectionView(data, {pageSize: 12});
    })
  }

  onloadedRows(pGrid: wjGrid.FlexGrid) {
    for (let i = 0; i < pGrid.rows.length; i++) {
        let row = pGrid.rows[i];
        let item = row.dataItem;
        if(item.ItemTypeName == "Dịch vụ") {
          row.cssClass = 'service';
        } else if(item.ItemTypeName == "Thành phẩm") {
          row.cssClass = 'product';
        } else if(item.ItemTypeName == "Vật tư hàng hóa") {
          row.cssClass = 'supplies';
        }
    }
  }

}
