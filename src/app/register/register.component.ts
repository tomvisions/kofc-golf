import {Component, OnInit, ChangeDetectorRef, ViewEncapsulation} from '@angular/core';
import { ImageService } from '../image.service';
import {FormBuilder, FormGroup, FormArray, ValidationErrors} from '@angular/forms';
import { RegisterService } from './register.service';
import { Register, RegisterResponse } from './register.type';
import {empty, Observable} from 'rxjs';
import { FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {ConsoleLogger} from "@angular/compiler-cli";

interface RegisterUI {
  team: string;
  players: string[];
  body: string;
}

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  registrationForm:FormGroup;
  golfCoverImage: string = '';
  golfSideImage: string = '';
  submitted = false;
//  register: Register = {team_name: "", player: [], body:"", email_type: ""}
  register: Register;
  check = {}


  constructor(private _changeDetectorRef: ChangeDetectorRef,
                      private _imageService: ImageService, private _formBuilder: FormBuilder, private _registerService: RegisterService) {
//    this.registrationForm = this._formBuilder.group({});
    this.registrationForm = this._formBuilder.group({});

  }


  ngOnInit() {
    this._imageService.setBannerPrefix();
    this.golfCoverImage = this._imageService.loadImage1920x940('loch-march-background.jpeg');
    this._imageService.setSitePrefix();
    this.golfSideImage = this._imageService.loadImage450x450( 'tournament-sidepic.png');


    this.registrationForm = this._formBuilder.group({
      team_name: '',
      players : this._formBuilder.array([]),
      body: ''
    });
    // Create the selected product form


    //(this.registrationForm.get('player') as UntypedFormArray).clear();

    // Setup the emails form array
    const golfFormGroups = [];
    this.registrationForm.addControl(
      'players', this._formBuilder.group({
        player: this._formBuilder.control('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]),
        email: this._formBuilder.control('',
          [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        phone: this._formBuilder.control('', [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(11)
        ]),
      }));

/*
    const defaultControl = {
      player: this._formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: [this.register.players[0].email, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: [this.register.players[0].phone, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(11)
      ]],
    }

    golfFormGroups.push(
      this._formBuilder.group({
        player: new Form['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]],
        email: [this.register.players[0].email, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        phone: [this.register.players[0].phone, [
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
*/
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

    const length = this.registrationForm.controls['players']['controls'].length
    // Create an empty email form group
    const emailFormGroup = this._formBuilder.group({
      player: ['', [Validators.required, Validators.minLength(3),
        Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required,Validators.minLength(9),  Validators.maxLength(20)]],
    });



    // Add the email form group to the emails form array
    (this.registrationForm.get('players') as UntypedFormArray).push(emailFormGroup);

    console.log(this.registrationForm.get('players'))
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }

  get f() {
    console.log('error check')
    return this.registrationForm.controls;
  }

  get playersForm() {
    return this.registrationForm.get('players') as FormArray
  }
  get playerCheck() {
//    console.log('checlk')
//    console.log(index)

  //  console.log(this.registrationForm.get('players')['controls'][index].get('player'));
    //console.log(this.registrationForm.get('players')['controls'][index].get('player').invalid);
//      playerCheck(playerIndex).invalid
   // console.log('boo')
    //console.log(this.registrationForm.get('players')['controls'][index].get('player').errors)
//    return this.registrationForm.get('players')['controls'][index].get('player');
    return this.registrationForm.get('players')['controls'];
  }

  submitToRegister() {
 //   console.log('start')
    this.submitted = true;
   // console.log('booyah')
    console.log(this.registrationForm);
    console.log('valid')
    console.log(this.registrationForm.valid);

//    return;
    if (!this.registrationForm.valid) {
      console.log('hlelo')

        //console.log(document.getElementsByClassName('invalid-feedback'))
     /* var list = document.getElementsByClassName('invalid-feedback');

      for (let item of list) {
        console.log(item);
      }
      console.log('list')
      console.log(list)
      console.log(list[0])
      for (var i = 0; i <= list.length; i++) {
        console.log('loop')
        console.log(list[0]); //second console output
      } */
      console.log('error here')
 //     console.log('register form')
 //     console.log(this.registrationForm);
   //   console.log('register control')
 //     console.log(this.registrationForm.controls);
      for (const control of Object.keys(this.registrationForm.controls)) {
         if (control === "players") {
//           console.log('the players there')
  //         console.log(this.registrationForm.controls[control]['controls'].length)
    //       console.log(this.registrationForm.controls[control]['controls']);
           for (let x = 0;x< this.registrationForm.controls[control]['controls'].length; x++) {

//             console.log('the mark')
        //     console.log(this.registrationForm.controls[control]['controls'][x]);
             for (const control2 of Object.keys(this.registrationForm.controls[control]['controls'][x]['controls'])) {
               this.registrationForm.controls[control]['controls'][x]['controls'][control2].markAsTouched();
              // console.log('contsrols2')
             //  console.log(control2)
             }
           //  for (const control2 of Object.values(this.registrationForm.controls[control]['controls'][x][control])) {

            // }
         //  for (const control2 of Object.values(this.registrationForm.controls[control]['controls'])) {
           /*  for (let player in control2['value']) {
                console.log('the player')
               this.registrationForm.controls[control]['controls'].markAsTouched();
                console.log(player)
             } */
//             console.log(control2['value'])
           }
         } else {
           this.registrationForm.controls[control].markAsTouched();
         }
      }
      return;
    }
    // stop here if form is invalid

    const register = this.registrationForm.getRawValue();

    register.email_type = 'register';

    this._registerService.sendRegistration(register).subscribe((register: any) => {

      if (register.success) {
        document.querySelector('div.contact-form')?.classList.add('hide');
        document.querySelector('div.success')?.classList.remove('hide');
      } else {
        document.querySelector('div.contact-form')?.classList.add('hide');
        document.querySelector('div.fail')?.classList.remove('hide');

      }
    });
  }
}
