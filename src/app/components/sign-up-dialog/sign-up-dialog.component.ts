import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  MatFormField,
  MatSuffix,
  MatPrefix,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { EcommerceStore } from '../../store/ecommerce.store';
import { SignUpParams } from '../../models/user';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';

@Component({
  selector: 'app-sign-up-dialog',
  imports: [
    MatIconButton,
    MatIcon,
    MatDialogClose,
    MatFormField,
    MatInput,
    MatPrefix,
    MatAnchor,
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up-dialog.component.html',
  styleUrl: './sign-up-dialog.component.scss',
})
export class SignUpDialogComponent {

  fb = inject(NonNullableFormBuilder);
  dialogRef = inject(MatDialogRef);
  store = inject(EcommerceStore);
  matDialog = inject(MatDialog);
  data = inject<{ checkout: boolean }>(MAT_DIALOG_DATA);


  signUpForm = this.fb.group({
    name: ['John D', Validators.required],
    email: ['johnd@test.com', Validators.required],
    password: ['johnd@test.com', Validators.required],
    confirmPassword: ['johnd@test.com', Validators.required],
  });

  signUp() {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    const { name, email, password } = this.signUpForm.value;

    this.store.signUp({
      name,
      email,
      password,
      checkout: this.data?.checkout,
      dialogId: this.dialogRef.id,
    } as SignUpParams);
  }

  openSignInDialog() {
    this.dialogRef.close();
    this.matDialog.open(SignInDialogComponent, {
      disableClose: true,
      data: {
        checkout: this.data?.checkout,
      },
    });
  }
}
