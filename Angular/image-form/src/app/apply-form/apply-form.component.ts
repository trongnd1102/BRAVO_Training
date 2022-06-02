import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Image1: ['', {updateOn: 'change'}],
      Image2: ['', {updateOn: 'change'}],
      Image3: ['', {updateOn: 'change'}],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value)
    })
  }

  get Image1() {
    return this.form.get('Image1')!;
  }

  get Image2() {
    return this.form.get('Image2')!;
  }

  get Image3() {
    return this.form.get('Image3')!;
  }

  convertBase64ToImage(e: any, pFormName: any) {
    this.form.get(pFormName)!.setValue(e.target.value);
  }
}
