import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  imgParent = ''

  showImg = true;

  

  onLoaded(img: string) {
    console.log('log padre', img)
  }

  toggleImg() {
    this.showImg = !this.showImg
  }

}
