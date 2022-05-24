import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CollectionView }  from '@grapecity/wijmo';

import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjCore from '@grapecity/wijmo';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @ViewChild('grid1', { static: true }) grid1!: wjGrid.FlexGrid;

  products: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    console.log(this.grid1)
    this.getData();
    // luôn khởi tạo trước khi binding
  }

  getData () {
    // get data from JSON file
    this.httpClient.get("assets/product.json").subscribe((data) => {
    // create a paged CollectionView with 100 items per page
      this.products = new CollectionView(data, {
        pageSize: 100,
        sortDescriptions: [ 'Unit', 'ItemGroupCode' ],
        groupDescriptions: [ 'Unit', 'ItemGroupCode' ]
      });
      this.grid1.itemsSource = this.products
    })
  }

  // Styling rows
  onloadedRows(pGrid: wjGrid.FlexGrid) {
    for (var i = 0; i < pGrid.rows.length; i++) {
      var row = pGrid.rows[i];
      var item = row.dataItem;
      switch(item.Unit) {
        case 'Tuýp':
          row.cssClass = 'unit-tuyp';
          break;
        case 'Cái':
          row.cssClass = 'unit-cai';
          break;
        case 'Lọ':
          row.cssClass = 'unit-lo';
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
        case 'Chai':
          row.cssClass = 'unit-chai';
          break;
        case 'Hộp':
          row.cssClass = 'unit-hop';
          break;
      }
    }
  }

  // filter by Unit
  filter(e: any) {
    let filter = (<HTMLInputElement>e.target).value.toLowerCase();
    this.grid1.collectionView.filter = (item: any) => {
      return filter.length == 0 || item.Unit.toLowerCase().indexOf(filter) > -1
    }
  }

}
