
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

    
    
        "title": generateName(),
        "training_course": getRandomInt(1,10),
        "training_center": getRandomInt(1,10),
        "start_date": "2023-01-25",
        "end_date": "2023-03-25"
      
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+accesso };
  http.post(url+'training-course/training-schedule/', payload, { headers });
}
