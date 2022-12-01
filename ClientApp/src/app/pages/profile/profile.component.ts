import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Calculates the current scroll-height to apply the stickiness
  @HostListener("window:scroll", []) onWindowScroll() {

    var sideBar = document.getElementById("sidebar");
    let verticalOffset = window.scrollY;
    let topOffset = sideBar?.getBoundingClientRect().top !+ window.scrollY !- sideBar?.ownerDocument.documentElement.clientTop!;

    console.log(verticalOffset, topOffset);

    if (verticalOffset >= topOffset!) {
      console.log("fd");
      sideBar?.classList.add("fixed");
      sideBar?.classList.remove("flex");
      sideBar?.classList.add("mt-96");

    } else {
      sideBar?.classList.remove("fixed");
    }
  }

  constructor() { 
  }

  ngOnInit(): void {
  }


}
