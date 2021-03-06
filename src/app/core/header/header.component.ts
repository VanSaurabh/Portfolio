import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'About Me', homePath: '/about', fragment: '', pagePath: '/about' },
    { title: 'My Projects', homePath: '/projects', fragment: '', pagePath: '/projects' },
    { title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog' },
    { title: 'Contact', homePath: '/contact', fragment: '', pagePath: '/contact' }
  ];

  constructor(private bioService: BioService, private headerService: HeaderService) { }
}