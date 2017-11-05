import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subTitle: ['', [Validators.required, Validators.pattern('\\d+')]],
      people: this.fb.array([
        this.addPersonCtrl(),
        this.addPersonCtrl()
      ])
    });

  }

  addPerson() {
    const people = this.form.get('people') as FormArray;
    people.push(this.addPersonCtrl());
  }

  addPersonCtrl(): FormGroup {
    return this.fb.group({
      name: '',
      mobile: '',
      email: ''
    });
  }

}
