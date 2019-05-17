import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TopRightSnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  public openTopRightSnackBar(message: string, action: string, styleClass: string) {
    let config = new MatSnackBarConfig();
    let verticalPosition: MatSnackBarVerticalPosition = 'top';
    let horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    config.horizontalPosition = horizontalPosition;
    config.verticalPosition = verticalPosition;
    config.panelClass = styleClass,
    config.duration = 6000
    this.snackBar.open(message, action, config);
  }
}
