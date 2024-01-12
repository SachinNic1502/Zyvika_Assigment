import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-visiting-card-form',
  templateUrl: './visiting-card-form.component.html',
  styleUrls: ['./visiting-card-form.component.css']
})
export class VisitingCardFormComponent {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      companyname: ['', Validators.required],
      designation: ['', Validators.required]
    });
  }
}
