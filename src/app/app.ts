import { Component } from '@angular/core';
import { Toolbar } from './template/toolbar/toolbar';;

@Component({
  selector: 'app-root',
  imports: [Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
