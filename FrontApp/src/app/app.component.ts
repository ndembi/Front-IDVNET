import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  src1 = "assets/images/black-p.jpg";
  src2 = "assets/images/avanger.jpg";
  src3 = "assets/images/tueurs.jpg";
  src4 = "assets/images/reine-n.jpg"
  label1= "WAKANDA FOR LIFE";
    itemStringsLeft = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];
 
  itemStringsRight = ['Mr. O', 'Tomato'];
}
