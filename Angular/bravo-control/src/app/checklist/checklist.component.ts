import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  tradingCheckList = [
    {
      id: "CustomerCareTradingCode",
      name: "Chăm sóc khách hàng",
    },
    {
      id: "OrderTradingCode",
      name: "Yêu cầu / Khiếu nại",
    }
  ]
  ratingCheckList = [
    {
      id: "AttitudeRatingCode",
      name: "Thái độ nhân viên"
    },
    {
      id: "QualityRatingCode",
      name: "Chất lượng sản phẩm, dịch vụ"
    },
    {
      id: "WorkRatingCode",
      name: "Chất lượng công việc"
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
  }

}
