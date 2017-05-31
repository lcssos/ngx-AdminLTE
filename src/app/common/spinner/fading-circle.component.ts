import { Component } from '@angular/core';
import { SpinnerComponent, SpinnerTemplate } from './spinner.component';

@Component({
  selector: 'sk-fading-circle',
  styles: [`
    .fading-circle-spinner {
      position: relative;
      margin: 25px auto;
      width: 40px;
      height: 40px;
    }
    
    .fading-circle-spinner div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent !important;
    }
    
    .fading-circle-spinner div:before {
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      border-radius: 100%;
      background-color: #333;
      content: '';
      -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
      animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    }
    
    .fading-circle-spinner .circle2 {
      -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
      transform: rotate(30deg);
    }
    
    .fading-circle-spinner .circle3 {
      -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
      transform: rotate(60deg);
    }
    
    .fading-circle-spinner .circle4 {
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    
    .fading-circle-spinner .circle5 {
      -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
      transform: rotate(120deg);
    }
    
    .fading-circle-spinner .circle6 {
      -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
      transform: rotate(150deg);
    }
    
    .fading-circle-spinner .circle7 {
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    
    .fading-circle-spinner .circle8 {
      -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
      transform: rotate(210deg);
    }
    
    .fading-circle-spinner .circle9 {
      -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
      transform: rotate(240deg);
    }
    
    .fading-circle-spinner .circle10 {
      -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
      transform: rotate(270deg);
    }
    
    .fading-circle-spinner .circle11 {
      -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
      transform: rotate(300deg);
    }
    
    .fading-circle-spinner .circle12 {
      -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
      transform: rotate(330deg);
    }
    
    .fading-circle-spinner .circle2:before {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    
    .fading-circle-spinner .circle3:before {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
    
    .fading-circle-spinner .circle4:before {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    
    .fading-circle-spinner .circle5:before {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
    
    .fading-circle-spinner .circle6:before {
      -webkit-animation-delay: -0.7s;
      animation-delay: -0.7s;
    }
    
    .fading-circle-spinner .circle7:before {
      -webkit-animation-delay: -0.6s;
      animation-delay: -0.6s;
    }
    
    .fading-circle-spinner .circle8:before {
      -webkit-animation-delay: -0.5s;
      animation-delay: -0.5s;
    }
    
    .fading-circle-spinner .circle9:before {
      -webkit-animation-delay: -0.4s;
      animation-delay: -0.4s;
    }
    
    .fading-circle-spinner .circle10:before {
      -webkit-animation-delay: -0.3s;
      animation-delay: -0.3s;
    }
    
    .fading-circle-spinner .circle11:before {
      -webkit-animation-delay: -0.2s;
      animation-delay: -0.2s;
    }
    
    .fading-circle-spinner .circle12:before {
      -webkit-animation-delay: -0.1s;
      animation-delay: -0.1s;
    }
    
    @-webkit-keyframes sk-circleFadeDelay {
      0%, 39%, 100% {
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
    }
    
    @keyframes sk-circleFadeDelay {
      0%, 39%, 100% {
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
    }
  `],
  template: SpinnerTemplate
})

export class FadingCircleComponent extends SpinnerComponent {
  public baseClass: string = 'fading-circle-spinner';
  public childClass: string = 'circle';
  public numItems: number = 12;
}
