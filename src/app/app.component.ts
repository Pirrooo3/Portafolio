import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  header = document.querySelector("header");
  title = 'portafolio';


  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

  } 
}
