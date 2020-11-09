import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
}


interface Variable {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-videoconf',
  templateUrl: './videoconf.component.html',
  styleUrls: ['./videoconf.component.scss']
})
export class VideoconfComponent implements OnInit {

  currentView:string = '1';
  cameras: Variable[] = [
    {value: 'steak-0', viewValue: 'Deafult Camera'},
    {value: 'pizza-1', viewValue: 'WebCam - 1'},
    {value: 'tacos-2', viewValue: 'Ip Cam'}
  ];

  audios: Variable[] = [
    {value: 'steak-0', viewValue: 'Deafult Audio'},
    {value: 'pizza-1', viewValue: 'Realteak - 1'},
    {value: 'tacos-2', viewValue: 'Mono Audio'}
  ];


  constructor(public dialogRef: MatDialogRef<VideoconfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick():void{
    this.dialogRef.close();
  }

  onContinueClick():void{
    this.currentView = '2'

  }

  onSend():void{

  }
}
