import { Class } from "./class";

export interface Student {
    name : string,
    id : string,
    FFgrade: number, 
    MSgrade: number,
    STgrade:number, 
    AAgrade: number,
    classes : Class[],
}
