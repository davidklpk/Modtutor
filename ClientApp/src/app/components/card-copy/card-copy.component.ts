import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/app/interfaces/assignment';

@Component({
  selector: 'app-card-copy',
  templateUrl: './card-copy.component.html',
  styleUrls: ['./card-copy.component.css']
})
export class CardCopyComponent implements OnInit {

  @Input() assignment !: Assignment;
  constructor() { }

  ngOnInit(): void {
  }

}
