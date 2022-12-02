import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { STUDENT_PROFILE, setGlobalCurrentPage } from 'src/app/shared/global-var';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  studentName : string = "var"

  constructor() { 
    setGlobalCurrentPage(STUDENT_PROFILE + this.studentName);
  }

  ngOnInit(): void { }

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
}
