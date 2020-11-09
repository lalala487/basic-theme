import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ScriptService } from 'src/app/shared/common/services/script.service';
import {gsap,Power2,Elastic} from 'gsap/all'
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  @ViewChild('tasknote') input: ElementRef;

  constructor(     
    private _script : ScriptService
    ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Part 1
    gsap.to('header', { autoAlpha: 0, 
        scrollTrigger: {
          scroller:".wrapper",
          id: 'header',
          trigger: '.scrollTriggerLogo',
          start: 'top top+=100',
          end: '+=200',
          scrub: true,
          // markers: true
        } 
    });

    gsap.to('#text', { width: "150%", 
      scale: 2, 
      ease: "power2",
      yoyo: true, 
      scrollTrigger: {
        scroller:".wrapper",
        id: 'header',
        trigger: '.scrollTriggerLogo',
        start: 'top top+=100',
        end: '+=200',
        scrub: true,
        // markers: true
      } 
    });
  
    
    // Part 2
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
      gsap.to(section, {autoAlpha: 1,
        scrollTrigger: {
          scroller:".wrapper",
          trigger: section,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
          // markers: true
        }
      });
      
      ScrollTrigger.create({
        trigger: section,
        scroller:".wrapper",

        start: 'top center',
        end: () => `+=${section.clientHeight + 30}`,
        toggleActions: 'play reverse none reverse',
        toggleClass: {targets: section, className: "is-active"},
        // markers: true
      })
      
    })
    
  }
  public callTrigger()
  {
    console.log('call trigger');
    //gsap.from('progress', { duration: 1, opacity: 0.5, delay: 1 });
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#animation", {
      scrollTrigger: "#test2", // start the animation when ".box" enters the viewport (once)
      x: 500
    });
  }
}
