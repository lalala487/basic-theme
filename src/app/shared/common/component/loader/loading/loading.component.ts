import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  height = '100px';

  standard:string = "true";
  @Input('small') set small(value: any) {
    this.height = !value ? '80px' : this.height;
  }

  @Input('normal') set normal(value: any) {
    this.height = !value ? '100px' : this.height;
  }

  @Input('large') set large(value: any) {
    this.height = !value ? '120px' : this.height;
  }

  @Input('gif') set gif(value:any)
  {
    this.standard = "false";
  }  
  constructor() { }

  ngOnInit(): void {
    console.log(this.standard);
  }

}
