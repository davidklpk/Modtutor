import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignments } from 'src/app/models/assignment';
import { Criteria } from 'src/app/models/criteria';
import { DBService } from 'src/app/services/db.service';
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
  @Input() assignment !: Assignments;
  @Output() newItemEvent = new EventEmitter<number>();

  slug !: number;
  criteria !: Criteria[];
  avgGrade = 0;

  constructor(private assService : LinkService,  private dbService : DBService) {  }

  ngOnInit(): void { 
    this.fetchCriteria();
  }

  /**
   * Emits the name of the assignment to the parent component after 
   * clicking on a button in order to select a assignment in the profile 
   * 
   * @param assignment the Assignment that has been selected
   */
  emitAssignment(assignment : number) {
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

    if(this.avgGrade >= 8) {
      return generatedFlag = {
        colorFont: "text-amber-500",
        icon: "stars",
        title: "doing superb"
      }
    } else if(this.avgGrade >= 7) {
      return generatedFlag = {
        colorFont: "text-thuas-groen-base",
        icon: "check_circle",
        title: "no worries"
      }
    } else if(this.avgGrade > 1) {
      return generatedFlag = {
        colorFont: "text-thuas-rood-base",
        icon: "error_circle",
        title: "in danger"
      }
    } else if(this.avgGrade <= 0) {
      return generatedFlag = {
        colorFont: "text-gray-500/80",
        icon: "timer",
        title: "not started"
      }
    }
    return generatedFlag = {
      colorFont: "text-gray-500/80",
      icon: "help_circle",
      title: "unknown status"
    }
  }

  fetchCriteria(){
    this.dbService.getAssignmentsCriterias(this.assignment.assignmentID)
    .subscribe((result : Criteria[]) => {
      this.criteria = result;
      this.calculateAverageGrade();
    });
  }

/**
 * Calculates the average grade for the all-tab
 */
  calculateAverageGrade() {
    let sum = 0;

    this.criteria.forEach(criteria => {
      if(criteria.grade === null) {
        criteria.grade = 0;
      }
      sum += criteria.grade;
    })

    if(sum === 0) {
      this.avgGrade = 0;
    } else {
      this.avgGrade = Math.round((sum/this.criteria.length)*100)/100;
    }
  }
}
