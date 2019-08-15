import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appPosts = [
    {
      title: 'My first blog',
      content: 'Hi guys, I finally managed to create my first blog app',
      loveIts: '3',
      creationDate: 'Aug 15, 2019 12:00:00'
    },
    {
      title: 'Boring',
      content: 'Everything about Angular is boring',
	  loveIts: '-5',
	  creationDate: 'Aug 14, 2019 12:00:00'
    },
    {
      title: 'Anonymous',
      content: 'Dummy content',
	  loveIts: '0',
	  creationDate: 'Aug 13, 2019 12:00:00'
    },
    {
      title: 'OpenClassroom rocks!',
      content: 'The content of the angular tutorial is clear and precise',
	  loveIts: '10',
	  creationDate: 'Aug 12, 2019 12:00:00'
    }
  ];

    constructor() {

  }
}
