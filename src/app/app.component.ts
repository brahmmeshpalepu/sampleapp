import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sampleapp';
  arr = [{id:1,name:"test"},{id:2,name:"test2"},{id:3,name:"test3"},{id:4,name:"test4"}]
}
