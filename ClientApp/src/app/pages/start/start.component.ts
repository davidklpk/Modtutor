import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event: MatSlideToggleChange) {
    console.log($event);

    if($event.checked) {
      document.getElementById('dark-mode')?.classList.add("dark");
    } else {
      document.getElementById('dark-mode')?.classList.remove("dark");
    }
  }
}
