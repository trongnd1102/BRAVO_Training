import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {
  form: FormGroup;
  zBindingUrl: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Image1: ['', {updateOn: 'change'}],
    });
  }

  ngOnInit(): void {
    this.Image1.valueChanges.subscribe(value => {
      this.zBindingUrl = this.Image1.value
    })
  }

  get Image1() {
    return this.form.get('Image1')!;
  }
}
