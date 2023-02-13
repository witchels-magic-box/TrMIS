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
function generatetrainer(){
var trainers = [876747152,4976892,774169529,20527581,611613978,925205513,5555,1859449,2880117,7318843,647386,3603755,3288251,3011942,486651,6642464,33454]
var phn = trainers[getRandomInt(0, trainers.length + 1)];
return phn;}

function generateboard(){
    var divisions = [    "Dhaka",    "Chittagong",    "Rajshahi",    "Khulna",    "Barisal",    "Sylhet",    "Rangpur",    "Mymensingh"]
    var div = divisions[getRandomInt(0, divisions.length + 1)];
    return div;
}
export const options = {
    scenarios: {
        my_scenario1: {
            executor: 'constant-arrival-rate',
            duration: '10s', // total duration
            preAllocatedVUs: 11, // to allocate runtime resources     preAll
            rate: 1, // number of constant iterations given `timeUnit`
            timeUnit: '1s',
        },
    },
};
export default function () {
    const payload = JSON.stringify({
        "degree": generateName(),
        "board": generateboard(),
        "grade_type": "A",
        "institution": "University",
        "result": "nice",
        "passing_year": "2022",
        "trainer": generatetrainer()
    });
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accesso };
    http.post(url + 'trainer/education-detail/', payload, { headers });
}