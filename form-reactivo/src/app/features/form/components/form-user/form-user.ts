import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  standalone: false,
  templateUrl: './form-user.html',
  styleUrl: './form-user.scss',
})
export class FormUser {
  form: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombreCompleto: [
        null, 
        [
          Validators.required,
          Validators.minLength(3)
        ]],
      email: [
        null, 
        [
          Validators.required, 
          Validators.email
        ]],
      nombreUsuario: [
        null, 
        [
          Validators.required, 
          Validators.pattern(/^[a-zA-Z0-9_]+$/)
        ]],
      contraseña: [
        null, 
        [
          Validators.required, 
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+/),
        ]],
      confirmarContraseña: [
        null, 
        [
          Validators.required, 
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+/),
        ]],
      edad: [
        null, 
        [
          Validators.required, 
          Validators.min(15), 
          Validators.max(90)
        ]],
      terminosCondiciones: [
        false, 
        [
          Validators.requiredTrue
        ]]
    }, { validators: this.passwordsMatch });
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.form.get(controlName);
    return control ? control.hasError(errorCode) && (control.dirty || control.touched) : false;
  }

  hasGroupError(errorCode: string): boolean {
    const group = this.form;
    const passCtrl = group.get('contraseña');
    const confirmCtrl = group.get('confirmarContraseña');
    return group.hasError(errorCode) && ((passCtrl?.dirty ?? false) || (passCtrl?.touched ?? false) || (confirmCtrl?.dirty ?? false) || (confirmCtrl?.touched ?? false));
  }

  onClick() {
    if (this.form.valid) {
      const { contraseña, confirmarContraseña, ...datos } = this.form.value;
      this.submittedData = datos;
      this.form.disable();
    } else {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsTouched();
      });
    }
  }
  passwordsMatch(group: FormGroup): ValidationErrors | null {
    const pass = group.get('contraseña')?.value;
    const confirm = group.get('confirmarContraseña')?.value;
    return pass === confirm ? null : { mismatch: true };
}

}