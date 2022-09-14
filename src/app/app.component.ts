import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    title : string = "Hukamma Mokusama";
    imgURL : string = "../favicon.ico";
    size : number = 300;

    changeImage(event : KeyboardEvent) : void 
    {
        this.imgURL = (event.target as HTMLInputElement).value;
    }
}
