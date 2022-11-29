import { Component, Input, OnInit } from '@angular/core';
import { Class } from 'src/app/interfaces/class';

@Component({
  selector: 'app-card-class',
  templateUrl: './card-class.component.html',
  styleUrls: ['./card-class.component.css']
})
export class CardClassComponent implements OnInit {

  @Input() class !: Class;

  constructor() { }

  ngOnInit(): void {
  }

}
