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
      Image: ['', {updateOn: 'change'}],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value)
    })
  }
}
