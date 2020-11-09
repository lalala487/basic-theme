import { Injectable } from '@angular/core';
import {gsap,Power2,Elastic} from 'gsap/all'

import { TimelineMax , TimelineLite} from "gsap";
@Injectable({
  providedIn: 'root'
})
export class GsapService {

  constructor() { }

  public fFadeFrom(e, tym, alfa, dlay) {
    gsap.from(e, { duration: tym, opacity: alfa, delay: dlay });


  }
  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
  public fTextEffect(e)
  {
    var tl = gsap.timeline(), 
    mySplitText = new SplitText("#quote", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

    gsap.set("#quote", {perspective: 400});

    tl.from(chars, {duration: 0.8, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
    tl.restart();
  }
  public fRandomizeText(e)
  {
    
    var mySplitText = new SplitText(e, {
      type: "chars",
      charsClass: "text-animation"
    })
    var shuffleCharArray = this.shuffleArray(mySplitText.chars)
    var masterTL = new TimelineLite();
  
  
    shuffleCharArray.forEach(function(elem, index) {
      var tl = new TimelineLite();
  
      tl.set(elem, { className: " text-animation state-1" });
      tl.set(elem, { delay: 0.3, className: " text-animation state-1 state-2" });
      tl.set(elem, { delay: 0.3, className: " text-animation state-1  state-2 state-3" });
    
      masterTL.add(tl, index * 0.02);
    });
    masterTL.restart();
    masterTL.play();
    
   
  }
  
  public fClassBoxIndex(ec)
  {
    gsap.to(ec, {
      x: (index, target) => {
        console.log(index, target);
        return (index + 1) * 100 // 100, 200, 300
      }
    });
  }

  public fSnap(e, tym, alfa, dlay) {
    // snap animate.
    gsap.to(e, {duration: 2, x: 300, y: 200, alpha: 1.0, snap: {
      x: 50, // Snaps to the nearest incrememt of 50 (0, 50, 100, etc.)
      y: [10, 30, 70, 100, 150] // Snaps to the nearest value in the given array
    }});
  }

  public fSnapRadius(e, tym, alfa, dlay) {
    // snap animate.
    gsap.to(e, {
      duration:4,
      x: 150,
      snap: {
        // x snaps to the closest value in the array but only when it's within 20 pixels of it.
        x: {values: [0, 10, 20, 40], radius: 20} ,
        y: [10, 30, 70, 100, 150] 
      }
      
    });
    
  }
  /**
   *  pixi plugin
   */
  public  fFixi(image) {
    /*
    console.log ("apply fixi to " + image )
    gsap.to(image, {duration: 1, pixi:{colorize:"red", colorizeAmount:1, combineCMF:true}});
    gsap.to(image, {duration: 1, pixi:{saturation:0, combineCMF:true}});
    gsap.to(image, {duration: 1, pixi:{hue:180, combineCMF:true}});
    gsap.to(image, {duration: 1, pixi:{brightness:3, combineCMF:true}});
    gsap.to(image, {duration: 1, pixi:{contrast:3, combineCMF:true}});
    gsap.to(image, {duration: 1, pixi:{blur:20}});
    //gsap.to(image, {duration: 1, pixi:{colorMatrixFilter:null, blur:0}});
    */
  }

  public fWiggle(ele)
  {
    //gsap.registerPlugin(CustomWiggle);
    //CustomWiggle
    //CustomWiggle.create("funWiggle", {wiggles:10, type:"anticipate"});
    //CustomWiggle.create("funWiggle", {wiggles:10, type:"easeOut"});
    //CustomWiggle.create("funWiggle", {wiggles:10, type:"easeInOut"});
    //CustomWiggle.create("funWiggle", {wiggles:10, type:"anticipate"});
    var tl = gsap.timeline({repeat:50, repeatDelay:1, delay:1});
    tl.add(gsap.to(ele, {duration: 1, rotation:30, ease:"easeOut"})); 
    tl.play();
  }
  public tweroen(box,btnArr) {
    
    //TweenLite.to(box, 1, {opacity: 1});
    //TweenLite.to(btnArr, 2, {opacity: 1});
  }
}
