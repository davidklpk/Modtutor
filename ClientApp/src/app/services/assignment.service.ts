import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AssignmentService {

  private selectedAssignmentViaButton = new BehaviorSubject<string>('');

  emitAssignmentEvent(assignmentName: string){
    console.log("emit")
    this.selectedAssignmentViaButton.next(assignmentName)
  }

  assignmentEventListner(){
    console.log("return to service")
    return this.selectedAssignmentViaButton.asObservable();
  } 

  constructor() { }

}
