import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { LinkService } from 'src/app/services/link.service';
import { getGlobalCurrentPage } from 'src/app/shared/global-var';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  currentPage !: string;
  
  darkMode : boolean = false;
  themeIcon : string = "light_mode";
  themeTitle : string = "Dark Theme"

  constructor(private router : Router, private linkService : LinkService) {
    this.router.events.subscribe(e =>{
      this.currentPage = getGlobalCurrentPage();
    })
  }

  ngOnInit(): void {
    this.linkService.currentPageName.subscribe(name=>{
      this.currentPage = name;
      console.log("PAGENAME: ", name);
    })
   }

  /**
   * Sets or removes a class in the global <html> tag to toggle
   * darkmode scheme. Adds also new icon and text to the button
   * 
   */
  enableTheme() {
    if(!this.darkMode) {
      this.darkMode = true;
      this.themeTitle = "Light Theme"
      this.themeIcon = "light_mode"
      document.documentElement?.classList.add("dark");
    } else {
      this.darkMode = false;
      this.themeTitle = "Dark Theme"
      this.themeIcon = "dark_mode"
      document.documentElement?.classList.remove("dark");
    }
  }
}
