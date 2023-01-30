import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateName(){
    var name1 = ["Accounting", "Aerospace Engineering", "Agriculture", "Anthropology", "Architecture", "Art History", "Biology", "Business Administration", "Chemical Engineering", "Computer Science", "Criminal Justice", "Economics", "Education", "Electrical Engineering", "Environmental Science", "Finance", "Gender and Women's Studies", "Geography", "Geology", "History"];
    var name = name1[getRandomInt(0, name1.length + 1)];
    return name;
}
// function generateboard(){
//     var name = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barisal",
//     "Sylhet", "Rangpur", "Mymensingh", "Dhaka", "Chittagong"];
//  var name = name[getRandomInt(0, name.length + 1)];
//  return name;
// }
// function instit(){
//     var name1 = ["Technical ", "Sessional ", "Laboratory ", "For Trainers", "Operation", "Office Management", "Medical"];
//  var name = name1[getRandomInt(0, name1.length + 1)];
//  return name;
// }
export const options = {
    scenarios: {
        my_scenario1: {
            executor: 'constant-arrival-rate',
            duration: '3s', // total duration
            preAllocatedVUs: 3, // to allocate runtime resources     preAll
            rate: 1, // number of constant iterations given `timeUnit`
            timeUnit: '1s',
        },
    },
};
export default function () {
    const payload = JSON.stringify({
        "degree": generateName(),
        "board": "Dhaka",
        "grade_type": "A",
        "institution": "oiuyt",
        "result": "nice",
        "passing_year": "2022",
        "trainer": getRandomInt(1,2)
    });
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accesso };
    http.post(url + 'trainer/education-detail/', payload, { headers });
}