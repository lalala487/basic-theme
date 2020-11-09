import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import {VideoconfComponent} from '../videoconf/videoconf.component';
import { UtilsService } from '../shared/common/services/utils.service';

export interface Section {
  name: string;
  updated: Date;
}
export interface DialogData {
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {


  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  constructor(
    public dialog: MatDialog,
    private utilsSrv: UtilsService
    ) { }

  ngOnInit(): void {
  }

  

  openDialog(): void {
    const dialogRef = this.dialog.open(VideoconfComponent, {
      width: '500px',
      data:{}
    });
  }

  openErrorDialog():void {
    this.utilsSrv.showErrorMessage('There was an error initializing the token:', 'You can check this error more carefully . lately we are using this elements. \n okay?');
  }
}
