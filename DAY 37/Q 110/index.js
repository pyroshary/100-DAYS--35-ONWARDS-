"use strict";
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "FAIL";
    }
}
console.log(assignGrade(80));
console.log(assignGrade(70));
console.log(assignGrade(40));
