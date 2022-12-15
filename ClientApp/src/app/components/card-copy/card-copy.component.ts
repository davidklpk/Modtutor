import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from 'src/app/interfaces/assignment';
import { LinkService } from 'src/app/services/link.service';

// Interface for the indicator
export interface Flag {
  colorFont : string,
  icon : string,
  title : string
}

@Component({
  selector: 'app-card-copy',
  templateUrl: './card-copy.component.html',
  styleUrls: ['./card-copy.component.css']
})

export class CardCopyComponent implements OnInit {
  
  @Input() assignment !: Assignment;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private assService : LinkService) {  }

  ngOnInit(): void {   }

  /**
   * Emits the name of the assignment to the parent component after 
   * clicking on a button in order to select a assignment in the profile 
   * 
   * @param assignment the Assignment that has been selected
   */
  emitAssignment(assignment : string) {
    this.assService.emitAssignmentEvent(assignment);
  }

  /**
   * Sets the flag by checking the parameters.
   * Changes icon and title depending on the result.
   * Therefore, it returns a flag, build with the fitting attributes.
   * TODO: Parameter Student or smth like that 
   */
  setFlag() : Flag {
    let generatedFlag : Flag;

    if(this.assignment.week == 4) {
      return generatedFlag = {
        colorFont: "text-amber-500",
        icon: "stars",
        title: "doing superb"
      }
    } else if(this.assignment.week == 1) {
      return generatedFlag = {
        colorFont: "text-thuas-groen-base",
        icon: "check_circle",
        title: "no worries"
      }
    } else if(this.assignment.week == 3) {
      return generatedFlag = {
        colorFont: "text-thuas-rood-base",
        icon: "error_circle",
        title: "in danger"
      }
    }
    return generatedFlag = {
      colorFont: "text-gray-500/80",
      icon: "help_circle",
      title: "unknown"
    }
  }
}
