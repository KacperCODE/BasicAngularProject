import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

// example component integrating native JS code 
// https://codepen.io/Karokendo/pen/pWNLgG

@Component({
  selector: 'app-fullscreen-background',
  templateUrl: './fullscreen-background.component.html',
  styleUrls: ['./fullscreen-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullscreenBackgroundComponent implements OnInit {

  private svg: any;

  private SVGdot = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  private dots: any[] = [];
  private dotNumber = 100;

  private speedMod = 0.2;
  private colors = [
    ,
    'rgb(240 152 25)',
    'rgb(240 223 25)',
    'rgb(240 120 25)',
    'rgb(231, 76, 60)',
  ];

  private screenWidth = 0;
  private screenHeight = 0;

  
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.destroy();
    this.initialize();
  }

  ngOnInit() {
    this.svg = document.querySelector('#svg');
    this.initialize();
    this.startAnimation();
  }

  initialize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    for (let i = 0; i < this.dotNumber; i++) {
      this.dots[i] = {};
      this.dots[i].element = this.SVGdot.cloneNode(false);
      this.dots[i].currentPosX = Math.floor(
        Math.random() * this.screenWidth + 1
      );
      this.dots[i].currentPosY = Math.floor(
        Math.random() * this.screenHeight + 1
      );
      this.dots[i].radius = Math.floor(Math.random() * 18 + 1);
      this.dots[i].color = Math.floor(Math.random() * 5 + 1);

      this.dots[i].element.setAttribute('cx', this.dots[i].currentPosX);
      this.dots[i].element.setAttribute('cy', this.dots[i].currentPosY);
      this.dots[i].element.setAttribute('r', this.dots[i].radius);
      this.dots[i].element.setAttribute(
        'fill',
        this.colors[this.dots[i].color]
      );
      this.svg.appendChild(this.dots[i].element);

      this.dots[i].dirX = Math.random() * 201 - 100;
      this.dots[i].dirY = Math.random() * 201 - 100;
    }
  }

  matrixUpdate() {
    for (let i = 0; i < this.dotNumber; i++) {
      this.dots[i].currentPosX += this.speedMod * Math.cos(this.dots[i].dirX);
      this.dots[i].currentPosY += this.speedMod * Math.cos(this.dots[i].dirY);

      if (this.dots[i].currentPosY < 0) {
        this.dots[i].currentPosY = this.screenHeight - 1;
      }

      if (this.dots[i].currentPosY > this.screenHeight) {
        this.dots[i].currentPosY = 1;
      }

      if (this.dots[i].currentPosX < 0) {
        this.dots[i].currentPosX = this.screenWidth - 1;
      }

      if (this.dots[i].currentPosX > this.screenWidth) {
        this.dots[i].currentPosX = 1;
      }

      this.dots[i].element.setAttribute('cx', this.dots[i].currentPosX);
      this.dots[i].element.setAttribute('cy', this.dots[i].currentPosY);
    }
  }

  startAnimation() {
    setInterval(() => {
      this.matrixUpdate();
    }, 20);
  }

  destroy() {
    while (this.svg?.firstChild) {
      this.svg.removeChild(this.svg.firstChild);
    }
    this.dots.length = 0;
  }
}
