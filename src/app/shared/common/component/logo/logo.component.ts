import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  height = '15%';
  
  @Input() sizeType:string;

  @Input('small') set small(value: any) {
    this.height = !value ? '10%' : this.height;
  }

  @Input('normal') set normal(value: any) {
    this.height = !value ? '15%' : this.height;
  }

  @Input('large') set large(value: any) {
    this.height = !value ? '20%' : this.height;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.sizeType);
  }

}
