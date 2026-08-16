import { Component, inject, signal } from '@angular/core';
import { MatIconButton, MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from "@angular/material/dialog"
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatPrefix, MatSuffix} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input'
import { EcommerceStore } from '../../store/ecommerce.store';
import { SignInParams } from '../../models/user';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';

@Component({
  selector: 'app-sign-in-dialog',
  imports: [MatIconButton, MatIcon, MatDialogClose, MatFormField, MatInput, MatSuffix, MatPrefix, MatAnchor, MatButton, ReactiveFormsModule],
  templateUrl: './sign-in-dialog.component.html',
  styleUrl: './sign-in-dialog.component.scss',
})
export class SignInDialogComponent {

  store = inject(EcommerceStore);

  data = inject<{checkout: boolean}>(MAT_DIALOG_DATA);

  dialogRef = inject(MatDialogRef);

  matDialog = inject(MatDialog);

  passwordVisible = signal(false);
  fb = inject(NonNullableFormBuilder);

  signInForm = this.fb.group({
    email : ['johnd@test.com' , Validators.required],
    password : ['test123', Validators.required]
  });

  signIn(){
    if(!this.signInForm.valid){
      this.signInForm.markAllAsTouched();
      return;
    }
    const {email, password} = this.signInForm.value;

    this.store.signIn({email, password, checkout: this.data?.checkout, dialogId: this.dialogRef.id} as SignInParams);
  }

  openSignUpDialog(){
    this.dialogRef.close();
    this.matDialog.open(SignUpDialogComponent, {
      disableClose: true,
      data: {
        checkout: this.data?.checkout
      }
    })
  }

}
