import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { globalCurrentPage } from 'src/app/services/global-var';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  currentPage : string = globalCurrentPage;
  darkMode : boolean = false;
  themeIcon : string = "light_mode";
  themeTitle : string = "Dark Theme"

  constructor(private router : Router, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void { 
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
         this.changeTitle(event.url);
      }
   });
  }


  changeTitle(url : string) {
    let cleanedName = url.split('?')[0].split('/').pop()
    console.log(cleanedName)
    this.currentPage != cleanedName;
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
