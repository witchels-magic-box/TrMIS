
import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';



function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = ["coursecat1","coursecat2","coursecat3","coursecat4"];
	var name2 = ["Evening","Morning","Afternoon","Night","Company"];

	var name = name1[getRandomInt(0, name1.length + 1)] + '-' + name2[getRandomInt(0, name2.length + 1)];
	return name;

}




export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '10s', // total duration
      preAllocatedVUs: 10, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    
        "name": "test211",
        "duration": 2,
        "coordinator": getRandomInt(1,5),
        "organization": getRandomInt(1,5),
        "source_of_fund": getRandomInt(1,5),
        "collaboration": getRandomInt(1,5),
        "training_course_schedule": 2,
        "initial_cost": 1000,
        "final_cost": 100000,
        "status":1
      
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+accesso };
  http.post(url+'training-course/training-schedule/', payload, { headers });
}
