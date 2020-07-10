import {Component, HostListener} from '@angular/core';
import { NgForm } from '@angular/forms';
import {DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  direccion = '';
  title = 'marco-Orquestador';
  iframe = false;
  evento = false;

  constructor(public sanitizer: DomSanitizer){}

  cargar(){

    console.log(this.direccion);
    this.iframe = true;
  }

  @HostListener('window:message', ['$event'])
  onPostMessage(event) {
    console.log('evento de mensaje recibido: ', event);
    if (event.data && event.data.name === 'poc') {
      this.evento = true;
    }
    //controlar el origen del evento:
    /*if(event.origin !== 'https://example.com')
      return;*/
  }
}
