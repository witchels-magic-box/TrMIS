
import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateAddress(){
  var numb = getRandomInt(1, 25) ;
  var name1 = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoe", "Natalie", "Leah", "Hannah", "Lillian", "Evelyn", "Addison", "Aubree", "Ellie", "Stella", "Natalie", "Zoey", "Jasmine", "Hazel", "Natalie", "Aurora", "Brooklyn", "Bella", "Claire", "Skylar", "Liliana", "Natalie", "Aubree", "Rylee", "Allison", "Brooklyn", "Brielle", "Adalyn", "Raelynn", "Maria", "Athena", "Ximena", "Avery", "Aaliyah", "Jordyn", "Mackenzie", "Adalynn", "Harmony", "Adeline", "Ryleigh", "Melody", "Isabelle", "Brooklyn", "Arya", "Annabelle", "Kaylee", "Aaliyah", "Aurora", "Hailee", "Jasmine", "Gianna", "Aubree", "Bella", "Autumn", "Makayla", "Avery", "Brooklyn", "Brooklynn", "Bella", "Adalynn", "Raelynn", "Maria", "Lydia", "Peyton", "Makayla", "Avery", "Mariana", "Avery", "Eleanor", "Cameron", "Adalyn", "Makayla", "Avery", "Aria", "Avery", "Maria", "Naomi", "Avery", "Avery", "Mackenzie", "Autumn", "Makayla", "Avery", "Avery", "Maria", "Mackenzie", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery"];
  var addre = (numb+" "+name1[getRandomInt(0, name1.length + 1)]+" Road").toString();
  return addre;

}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = ["Uttora","JDhanmondi","Pubali","Rupali"];

 

	var name2 = ["Boxoffice","Training center","House","Agency","Company"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
	return name;

}



export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '14s', // total duration
      preAllocatedVUs: 15, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({

    
        "name": generateName(),
        "division": getRandomInt(1,8),
        "district": getRandomInt(1,64),
        "sub_district": getRandomInt(1,491),
        "address": generateAddress(),
        "serial_no": Math.floor(Math.random() * 1000000)
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+accesso };
  http.post(url+'training-center/', payload, { headers });
}
