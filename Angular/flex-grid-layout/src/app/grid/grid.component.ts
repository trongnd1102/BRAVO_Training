import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CollectionView }  from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import { AllowSorting }from '@grapecity/wijmo.grid';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @ViewChild('grid', { static: true }) grid!: wjGrid.FlexGrid;

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

  // Styling rows
  onloadedRows(pGrid: wjGrid.FlexGrid) {
    for (var i = 0; i < pGrid.rows.length; i++) {
      var row = pGrid.rows[i];
      var item = row.dataItem;
      switch(item.Unit) {
        case 'Bảng':
          row.cssClass = 'unit-bang';
          break;
        case 'Cái':
          row.cssClass = 'unit-cai';
          break;
        case 'Chuyến':
          row.cssClass = 'unit-chuyen';
          break;
        case 'PCS':
          row.cssClass = 'unit-pcs';
          break;
        case 'Chiếc':
          row.cssClass = 'unit-chiec';
          break;
        case 'Bộ':
          row.cssClass = 'unit-bo';
          break;
        case 'Lon':
          row.cssClass = 'unit-lon';
          break;
      }
    }
  }

  allowSorting = AllowSorting.None;
  allowSortingOptions = 'None,SingleColumn,MultiColumn'.split(',');

  // change the allowSorting value
  setAllowSorting(value: number) {
      this.products.sortDescriptions.clear(); // remove current sort
      this.allowSorting = value; // apply the new setting
  }

}
