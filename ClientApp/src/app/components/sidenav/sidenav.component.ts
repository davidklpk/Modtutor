import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { map, Observable, share } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  // Checks for the current viewport size and reports it
  isMobile$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
  .pipe(
    map(result => result.matches),
    share()
  );

  currentRoute = this.router.url;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
    console.log(this.currentRoute);
   }

  /**
   * Sets or removes a class in the global <html> tag to toggle
   * darkmode scheme
   * 
   * @param $event the state of the slide toggle (true or false)
   */
  onChange($event: MatSlideToggleChange) {
    if($event.checked) {
      document.documentElement?.classList.add("dark");
    } else {
      document.documentElement?.classList.remove("dark");
    }
  }
}
