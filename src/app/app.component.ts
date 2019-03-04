import { Component } from '@angular/core';
import { Employee } from 'projects/ng-o-chart/src/models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'o-chart';
  employee: Employee = {
    name: 'Jeremiah Malicdem',
    position: 'Developer',
    heading: 'FFUF Manila Inc',
    img: 'https://cdn.lynda.com/authors/380801_250x250_thumb.jpg?v=736654044',
    subContent: 'Responsibilites: N/A',
    subordinates: [
      {
        name: 'Subordinate 1',
        position: 'Vice President',
        heading: 'FFUF Manila Inc',
        subContent: 'Responsibilites: <br> <>'
                + '<li>Internal</li>'
                + '</ul>'
      },
      {
        name: 'Subordinate 2',
        position: 'Vice President',
        heading: 'FFUF Manila Inc',
        subContent: 'Responsibilites: <br> <>'
                + '<li>External</li>'
                + '</ul>',
        img: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg'
      }
    ]
  };
}
