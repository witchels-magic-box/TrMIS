import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';



function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}
function generateDivision(){
	

 

	

	var name = getRandomInt(5, 22)
	return name;

}
function generateName(){
	var name1 = ["Technical", "Sessional", "Laboratory", "Trainee", "Operators", "Officers", "Executive"];
    var name2 = ["pop","punch","quit","reply","representative","resist","rip","rub","silly","smile","spell","stretch","stupid","tear","temporary","tomorrow","wake","wrap","yesterday","Thomas","Tom","Lieuwe",];

	var name = name1[getRandomInt(0, name1.length + 1)] + ' ' + name2[getRandomInt(0, name2.length + 1)];

	return name;

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
    
        "title": generateName(),
        "description": "string",
        "training_course": generateDivision()
      

    
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post(url+'training-course/course-topic/', payload, { headers });

}