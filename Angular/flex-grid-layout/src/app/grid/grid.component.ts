import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CollectionView }  from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import { AllowSorting }from '@grapecity/wijmo.grid';

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

  filter(pFilter: any) {
    let filter = (<HTMLInputElement>pFilter.target).value.toLowerCase();
    this.grid.collectionView.filter = (item: any) => {
        return filter.length == 0 || item.Unit.toLowerCase().indexOf(filter) > -1
    }
  }

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
        case 'Cây':
          row.cssClass = 'unit-cay';
          break;
      }
    }
  }

}
