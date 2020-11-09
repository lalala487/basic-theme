import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GsapService } from '../../shared/common/services/gsap.service';
import { TimelineMax , gsap ,Power3 , Linear , Elastic } from 'gsap';
import PixiPlugin from 'gsap/PixiPlugin'
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import CustomWiggle from 'gsap'
import { ScriptService } from 'src/app/shared/common/services/script.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  menu = new TimelineMax({paused:true, reversed:true});
  lines = new TimelineMax({repeat:5, repeatDelay:1})

  //@ViewChild('test') test: ElementRef;
  constructor(
    private _gsapService: GsapService, 
    private _script : ScriptService
    ) { }

  ngOnInit(): void {
    const anim = this._gsapService;

    // load script
    this._script.load('splittext').then(data => {
        console.log('script loaded ', data);
        gsap.registerPlugin(PixiPlugin); // Register ScrollTo plugin
        anim.fRandomizeText ( '#developer');
        anim.fTextEffect ( '#quote')
    }).catch(error => console.log(error));

  
    //gsap.registerPlugin(CustomWiggle);


    this.fOpeningAnim();
    this.createMenuAnim();

  }



  public fOpeningAnim() {
 
    const anim = this._gsapService;
    const mainContainer = '#test';
    const mainContainer1 = '#test1';
    const mainContainer2 = '#test2';
    const mainContainer3 = '#anticipate';
    const image = '#logoTest'
    anim.fFadeFrom ( mainContainer, 1, 0, 1 );
    //anim.fSnap ( mainContainer1, 1, 0, 1 );
    anim.fSnapRadius ( mainContainer2, 1, 0, 1 );
    //anim.fFixi ( image );
    //anim.fWiggle ( mainContainer );
    anim.fClassBoxIndex( '.testbox');
   // anim.tween(this.test.nativeElement,mainContainer1);
 }

  createMenuAnim(){
    console.log('create menu anim');

    var tl = gsap.timeline({repeat: 30, repeatDelay: 1});
    tl.to(".green", {duration: 1, x: 200});
    tl.to(".orange", {duration: 1, x: 200, scale: 0.2});
    tl.to(".grey", {duration: 1, x: 200, scale: 2, y: 20});
    this.menu.to("#topLine", .5, {rotation:'50', ease:"Expo.easeInOut"},0)
    this.menu.to("#midLine", .5, {opacity:'0', ease:"Expo.easeInOut"},0)
    this.menu.to("#botLine", .5, {rotation:'-30', ease:"Expo.easeInOut"},0)
  }

  scroll(event: any, el: HTMLElement) {
    console.log("clicked !!!!!!!!!!!" + HTMLElement);
    event.stopPropagation();
    const topY = el.getBoundingClientRect().top;
    console.log(topY);
    gsap.to(window, {
      duration: 2,
      rotation:'50',
      scrollTo:{
          y: el,
          offsetY: 5, 
          autoKill: true
      }, 
      ease: "power3"
    });
  }

  menuClick() {
    this.menu.reversed() ? this.menu.play() : this.menu.reverse();	
    this.lines.reversed() ? this.lines.play() : this.lines.reverse();	

    return console.log('clicked');
  }
}
