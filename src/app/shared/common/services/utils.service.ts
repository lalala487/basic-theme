import { Injectable } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog'
import { DialogErrorComponent } from '../component/dialog-error/dialog-error.component'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {
	private dialogRef: MatDialogRef<DialogErrorComponent, any>;

  constructor(public dialog: MatDialog) { }

  showErrorMessage(header: string, message: string, disableClose: boolean = false) {
		this.dialogRef = this.dialog.open(DialogErrorComponent, {
			data: { header: header, message: message },
			disableClose
		});
	}

	closeDialog() {
		this.dialogRef?.close();
	}
}
