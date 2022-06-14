import { ChecklistControlComponent } from './checklist-control/checklist-control.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit, AfterViewInit {
  @ViewChild('trading', {static: true}) tradingControl!: ChecklistControlComponent;
  @ViewChild('rating', {static: true}) ratingControl!: ChecklistControlComponent;

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

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Trading: ['', {updateOn: 'change'}],
      Rating: ['', {updateOn: 'change'}],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value)
    })
    this.form.get('Trading')!.setValue('OrderTradingCode,CustomerCareTradingCode')
    this.form.get('Rating')!.setValue('AttitudeRatingCode,QualityRatingCode')
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.tradingData.length; i++) {
      this.tradingControl.addOption(this.tradingData[i].name,
        this.tradingData[i].text, this.tradingData[i].value)
    }
    this.ratingControl.readOnly = true;
    for (let i = 0; i < this.ratingData.length; i++) {
      this.ratingControl.addOption(this.ratingData[i].name,
        this.ratingData[i].text, this.ratingData[i].value)
    }
  }

}
