import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import{DataService} from '../data.service';
import { Order } from '../models/order';
import { MatSnackBar } from '@angular/material/snack-bar';




export class MyErrorStateMatcher implements ErrorStateMatcher  {
 
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
  
})
export class OrderFormComponent implements OnInit {

  ngOnInit() {
  }

  onReset(form: NgForm) {
    form.reset();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  minDate: Date;
  maxDate: Date;
  selectedRating: string;

  constructor(private dataService: DataService, private snackBar: MatSnackBar) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 28);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    this.selectedRating = '5';
  }

  onSubmit(form: NgForm) {
    const order: Order = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      phoneNo: form.value.phoneNo,
      email: form.value.email,
      address: form.value.address,
      city: form.value.city,
      state: form.value.state,
      postal: form.value.postal,
      date: form.value.date,
      message: form.value.message,
      rating: form.value.rating,
      experience: form.value.experience
    };
    this.dataService.submitOrder(order).subscribe(
      res => console.log(res),
      err => console.log(err)
    );

    this.snackBar.open('Form submitted successfully', 'Dismiss', {
      duration: 2000,
    });
  }

  }
  
  


