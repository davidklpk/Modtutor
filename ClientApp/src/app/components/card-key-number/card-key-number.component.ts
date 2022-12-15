import { Component, Input, OnInit } from '@angular/core';
import { KeyCard } from 'src/app/pages/all-tab/all-tab.component';

@Component({
  selector: 'app-card-key-number',
  templateUrl: './card-key-number.component.html',
  styleUrls: ['./card-key-number.component.css']
})
export class CardKeyNumberComponent implements OnInit {

  @Input() keyCard !: KeyCard;

  constructor() { }

  ngOnInit(): void {
  }

}
