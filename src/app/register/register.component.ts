import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ImageService } from '../image.service';
import {FormBuilder, FormGroup, FormArray, ValidationErrors} from '@angular/forms';
import { RegisterService } from './register.service';
import { Register, RegisterResponse } from './register.type';
import {empty, Observable} from 'rxjs';
import { FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registrationForm:FormGroup;
  golfCoverImage: string = '';
  submitted = false;
  register: Register = {team_name: "", player: [], body:"", email_type: ""}

  check = {}


  constructor(private _changeDetectorRef: ChangeDetectorRef,
                      private _imageService: ImageService, private _formBuilder: FormBuilder, private _registerService: RegisterService) {
//    this.registrationForm = this._formBuilder.group({});


  }


  ngOnInit() {
    this._imageService.setBannerPrefix();
    this.golfCoverImage = this._imageService.loadImage1920x940('loch-march-background.jpeg');

    this.registrationForm = this._formBuilder.group({
      team_name: '',
      players : this._formBuilder.array([]),
      body: ''
    });
    // Create the selected product form


    //(this.registrationForm.get('player') as UntypedFormArray).clear();

    // Setup the emails form array
    const golfFormGroups = [];

    golfFormGroups.push(
      this._formBuilder.group({
        player: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]],
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        phone: ['', [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(11)
        ]],
      }),
    );


    // Add the email form groups to the emails form array
    golfFormGroups.forEach((golfFormGroup) =>
    {
      (this.registrationForm.get('players') as UntypedFormArray).push(golfFormGroup);
    });

    console.log('test')
    const boo = this.registrationForm.get('players')['controls'];
    console.log('boo');
    console.log(boo);
    for (let player of boo) {
      console.log('players')
        console.log(player.get('player'));
    }

    this._changeDetectorRef.markForCheck();
  }
  /**
   * Add the email field
   */
  addEmailField(): void
  {

    if (this.playersForm.length >= 3 ) {
        document.getElementById('AddPlayer').innerText = ""
    }
    // Create an empty email form group
    const emailFormGroup = this._formBuilder.group({
      player: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', Validators.required],
    });



    // Add the email form group to the emails form array
    (this.registrationForm.get('players') as UntypedFormArray).push(emailFormGroup);

    console.log(this.registrationForm.get('players'))
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }


  getFormValidationErrors() {
    Object.keys(this.registrationForm.controls).forEach(key => {
      console.log('the key')
      console.log(key)
      const controlErrors: ValidationErrors = this.registrationForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
      if (key === 'players') {
        Object.keys(this.registrationForm.get(key)['controls']).forEach(key2 => {
          console.log('key2')
            console.log(this.registrationForm.get(key)['controls'][key2].errors);
        })
/*        Object.keys(this.registrationForm.get('players')['controls']).forEach(key => {
          console.log('the key2')
          console.log(key)
          console.log(this.registrationForm.get('players')['controls'][key])
          const controlErrors: ValidationErrors = this.registrationForm.get('players');
          const check = controlErrors['controls']['players'][key].errors;
          if (check != null) {
            Object.keys(check).forEach(keyError => {
              console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            });
          }
        }) */
      }
    });

  }
  get f() {
    console.log('error check')
    return this.registrationForm.controls;
  }

  get playersForm() {
    return this.registrationForm.get('players') as FormArray
  }

  submitToRegister() {
    this.getFormValidationErrors();
    console.log('woot')
    this.submitted = true;

  console.log('checking')
    console.log(this.registrationForm.invalid)
    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      console.log('invalid')
      return;
    }

    const register = this.registrationForm.getRawValue();
    console.log('the data');
    console.log(register);
  //  register.email_type = 'register';
    let check:any = {}
    let errors:any = []


    /*      let keyExist = Object.keys(register).some(item => {
            console.log('the check')
            console.log(item);
          });

          for (let item in register) {
          if (!(register[item])) {

          }

        }
    /*    this.formCheck.map((item: string) => {

          let keyExist = Object.keys(register).some(item => {
            console.log('the check')
            console.log(item);
          });

        }); */

/*    this._registerService.sendRegistration(register).subscribe((register: any) => {

      if (register.success) {
        document.querySelector('div.contact-form')?.classList.add('hide');
        document.querySelector('div.success')?.classList.remove('hide');
      } else {
        document.querySelector('div.contact-form')?.classList.add('hide');
        document.querySelector('div.fail')?.classList.remove('hide');

      }
    }); */
  }
}
