import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  showSnackbar(text: string) {
    this.snackBar.open(text, '', {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: 1500
    });
  }


}
