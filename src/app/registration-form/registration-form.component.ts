import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
  ngOnInit(): void {
  }
  formModel:any={Age:null}
  itemForm:FormGroup;
  constructor(private formbuilder: FormBuilder, private router:Router){
    this.itemForm=this.formbuilder.group({
      FullName:[this.formModel.FullName,[Validators.required]],
      Age:[this.formModel.Age,[Validators.required]],
      Type:[this.formModel.Type,[Validators.required, this.wrongType]]
    });
  }
  wrongType(control:AbstractControl<any, any>):ValidationErrors|null{
    const selectedType=control.value;
    if(selectedType==="Pakistani")
       return{'wrongType':true};
  return null;
  }

  onRegister(){
    if(this.itemForm.valid)
    {
      this.router.navigateByUrl('/welcome')
    }
    else{
      this.itemForm.markAllAsTouched();
      this.router.navigateByUrl('error');
    }
  }
}
