import { Component, OnInit } from '@angular/core';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcChart from '@grapecity/wijmo.chart';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  data = [
    { brand: 'Samsung', sales: 321 },
    { brand: 'Apple', sales: 215 },
    { brand: 'Huawei', sales: 160 },
    { brand: 'OPPO', sales: 112 },
    { brand: 'Vivo', sales: 100 },
    { brand: 'Others', sales: 638 }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectSlice(pie: any) {
    var selectedIndex = pie.selectedIndex;
    pie.hostElement.addEventListener('click',(e: any)=>{
      let htInfo = pie.hitTest(e);

      if(selectedIndex == pie.selectedIndex) {
        pie.selectedIndex = -1;
        selectedIndex = -1;
      }
      else {
        selectedIndex = pie.selectedIndex;
      }

      if(selectedIndex !== -1)
        console.log(htInfo.name, htInfo.value);
    });
  }

}
