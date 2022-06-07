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
      id: "Trading",
      name: "Loại giao dịch",
      isSelected: false,
      options: [
        {
          id: "CustomerCareTradingCode",
          name: "Chăm sóc khách hàng",
          isSelected: false
        },
        {
          id: "OrderTradingCode",
          name: "Yêu cầu / Khiếu nại",
          isSelected: false
        }
      ]
    }
  ]
  ratingCheckList = [
    {
      id: "Rating",
      name: "Loại đánh giá",
      isSelected: false,
      options: [
        {
          id: "AttitudeRatingCode",
          name: "Thái độ nhân viên",
          isSelected: false
        },
        {
          id: "QualityRatingCode",
          name: "Chất lượng sản phẩm, dịch vụ",
          isSelected: false
        },
        {
          id: "WorkRatingCode",
          name: "Chất lượng công việc",
          isSelected: false
        },
      ]
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
