export let globalCurrentPage : string = "Fallback";

export const START : string = "Overview"
export const COURSE : string = "Course: "
export const ASSIGNMENT : string = "Assignment: "
export const TEACHER_PROFILE : string = "Your Profile"
export const STUDENT_PROFILE : string = "Profile of "

export function setGlobalCurrentPage(pageName : string) {
    globalCurrentPage = pageName;
}

export function getGlobalCurrentPage() : string {
    return globalCurrentPage;
}