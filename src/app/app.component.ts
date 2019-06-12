import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '练习';
  selectStr = "dashboard"

  onSelect(str){
    this.selectStr = str;
  }
}
