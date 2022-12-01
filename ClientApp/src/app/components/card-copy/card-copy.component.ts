import { Component, Input, OnInit } from '@angular/core';
import { Class } from 'src/app/interfaces/class';

@Component({
  selector: 'app-card-copy',
  templateUrl: './card-copy.component.html',
  styleUrls: ['./card-copy.component.css']
})
export class CardCopyComponent implements OnInit {

  @Input() class !: Class;
  constructor() { }

  ngOnInit(): void {
  }

}
