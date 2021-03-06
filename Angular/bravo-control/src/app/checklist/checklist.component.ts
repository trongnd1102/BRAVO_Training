import { ChecklistControlComponent } from './checklist-control/checklist-control.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlowDirection } from './flow-direction';
import { AppearanceStyleEnum } from './appearance-style';

import * as wjc from '@grapecity/wijmo';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit, AfterViewInit {
  @ViewChild('trading', {static: true}) tradingControl!: ChecklistControlComponent;
  @ViewChild('rating', {static: true}) ratingControl!: ChecklistControlComponent;
  @ViewChild('timing', {static: true}) timingControl!: ChecklistControlComponent;

  tradingData = [
    {
      name: "CustomerCareTrading",
      text: "Chăm sóc khách hàng",
      value: "CustomerCareTradingCode"
    },
    {
      name: "OrderTrading",
      text: "Yêu cầu / Khiếu nại",
      value: "OrderTradingCode"
    }
  ]

  ratingData = [
    {
      name: "AttitudeRating",
      text: "Thái độ nhân viên",
      value: "AttitudeRatingCode"
    },
    {
      name: "QualityRating",
      text: "Chất lượng sản phẩm, dịch vụ",
      value: "QualityRatingCode"
    },
    {
      name: "WorkRating",
      text: "Chất lượng công việc",
      value: "WorkRatingCode"
    }
  ]

  timingData = [
    {
      name: "Month",
      text: "Theo tháng",
      value: "MonthCode"
    },
    {
      name: "Quarter",
      text: "Theo quý",
      value: "QuarterCode"
    },
    {
      name: "Year",
      text: "Theo năm",
      value: "YearCode"
    }
  ]

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Trading: ['', {updateOn: 'change'}],
      Rating: ['', {updateOn: 'change'}],
      Timing: ['', {updateOn: 'change'}],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value)
    })

    this.tradingControl.zText = "Loại giao dịch";
    this.tradingControl.zValueListSeparator = ",";
    this.tradingControl.bAllowSelectMultiValue = false;
    this.tradingControl.flowDirection = FlowDirection.TopDown;
    this.form.get('Trading')?.setValue("CustomerCareTradingCode")

    this.ratingControl.zText = "Loại đánh giá";
    this.ratingControl.flowDirection = FlowDirection.TopDown;

    this.timingControl.checkAppearance = AppearanceStyleEnum.Button;
    this.form.get('Timing')?.setValue("QuarterCode")
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.tradingData.length; i++) {
      this.tradingControl.addOption(this.tradingData[i].name,
        this.tradingData[i].text, this.tradingData[i].value)
    }

    for (let i = 0; i < this.ratingData.length; i++) {
      this.ratingControl.addOption(this.ratingData[i].name,
        this.ratingData[i].text, this.ratingData[i].value)
    }

    for (let i = 0; i < this.timingData.length; i++) {
      this.timingControl.addOption(this.timingData[i].name,
        this.timingData[i].text, this.timingData[i].value)
    }

    // Calc width
    let nWidthTrade = this.tradingControl.getPreferredSize().width;
    let nWidthRate = this.ratingControl.getPreferredSize().width;
    let nWidthTime = this.timingControl.getPreferredSize().width
    let nWidthCompare = (nWidthTrade > nWidthRate ? nWidthTrade : nWidthRate);
    let nWidth = (nWidthCompare > nWidthTime ? nWidthCompare : nWidthTime);

    const checklist = document.getElementsByClassName('checklist') as HTMLCollectionOf<HTMLElement>;
    wjc.setCss(checklist, {width: `${nWidth}px`});

    const box = Array.from(document.getElementsByClassName('box') as HTMLCollectionOf<HTMLElement>);
    box.forEach(element => {
      wjc.setCss(element, {width: `calc((100% - 20px - 2*10px - ${nWidth}px)/2)`});
    })
  }

}
