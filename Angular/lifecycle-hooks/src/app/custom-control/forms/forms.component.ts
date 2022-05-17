import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  form: FormGroup;
  updateOutput = 1;
  multiLine = false;
  style = "none";

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Content1: ['', {updateOn: 'change'}],
      Content2: ['', {updateOn: 'blur'}],
      Content3: ['', {updateOn: 'submit'}]
    });
  }
  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
    console.log(this.updateOutput);
  }

  switchOutput() {
    this.updateOutput += 1;
    if(this.updateOutput == 4){
      this.updateOutput = 1;
    }
    console.log(this.updateOutput)
  }

  switchInput() {
    this.multiLine = !this.multiLine;
  }

  setCase(contentCase: string) {
    this.style = contentCase;
  }

  get Content1() {
    return this.form.get('Content1')!;
  }

  get Content2() {
    return this.form.get('Content2')!;
  }

  get Content3() {
    return this.form.get('Content3')!;
  }

}
