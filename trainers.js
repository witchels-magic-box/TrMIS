import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';



function generateAddress(){
    var numb = getRandomInt(1, 25) ;
    var name1 = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoe", "Natalie", "Leah", "Hannah", "Lillian", "Evelyn", "Addison", "Aubree", "Ellie", "Stella", "Natalie", "Zoey", "Jasmine", "Hazel", "Natalie", "Aurora", "Brooklyn", "Bella", "Claire", "Skylar", "Liliana", "Natalie", "Aubree", "Rylee", "Allison", "Brooklyn", "Brielle", "Adalyn", "Raelynn", "Maria", "Athena", "Ximena", "Avery", "Aaliyah", "Jordyn", "Mackenzie", "Adalynn", "Harmony", "Adeline", "Ryleigh", "Melody", "Isabelle", "Brooklyn", "Arya", "Annabelle", "Kaylee", "Aaliyah", "Aurora", "Hailee", "Jasmine", "Gianna", "Aubree", "Bella", "Autumn", "Makayla", "Avery", "Brooklyn", "Brooklynn", "Bella", "Adalynn", "Raelynn", "Maria", "Lydia", "Peyton", "Makayla", "Avery", "Mariana", "Avery", "Eleanor", "Cameron", "Adalyn", "Makayla", "Avery", "Aria", "Avery", "Maria", "Naomi", "Avery", "Avery", "Mackenzie", "Autumn", "Makayla", "Avery", "Avery", "Maria", "Mackenzie", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery"];
    var addre = (numb+" "+name1[getRandomInt(0, name1.length + 1)]+" Road"+ " , Dhaka").toString();
    return addre;

}
function generatecourseName(){
	var name1 = [    "Anatomy",     "Physiology",     "Microbiology",     "Biochemistry",     "Genetics",     "Evolution",     "Ecology",     "Marine Biology",     "Botany",     "Zoology",     "Immunology",     "Cell Biology",     "Developmental Biology"];

	var name = name1[getRandomInt(0, name1.length + 1)];
	return name;

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateNamemail() {
    var name1 = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoe", "Natalie", "Leah", "Hannah", "Lillian", "Evelyn", "Addison", "Aubree", "Ellie", "Stella", "Natalie", "Zoey", "Jasmine", "Hazel", "Natalie", "Aurora", "Brooklyn", "Bella", "Claire", "Skylar", "Liliana", "Natalie", "Aubree", "Rylee", "Allison", "Brooklyn", "Brielle", "Adalyn", "Raelynn", "Maria", "Athena", "Ximena", "Avery", "Aaliyah", "Jordyn", "Mackenzie", "Adalynn", "Harmony", "Adeline", "Ryleigh", "Melody", "Isabelle", "Brooklyn", "Arya", "Annabelle", "Kaylee", "Aaliyah", "Aurora", "Hailee", "Jasmine", "Gianna", "Aubree", "Bella", "Autumn", "Makayla", "Avery", "Brooklyn", "Brooklynn", "Bella", "Adalynn", "Raelynn", "Maria", "Lydia", "Peyton", "Makayla", "Avery", "Mariana", "Avery", "Eleanor", "Cameron", "Adalyn", "Makayla", "Avery", "Aria", "Avery", "Maria", "Naomi", "Avery", "Avery", "Mackenzie", "Autumn", "Makayla", "Avery", "Avery", "Maria", "Mackenzie", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery"];
    var ret = name1[getRandomInt(1,60)]+"@gmail.com"; 
    return ret;
}
function generateName() {
    var name1 = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoe", "Natalie", "Leah", "Hannah", "Lillian", "Evelyn", "Addison", "Aubree", "Ellie", "Stella", "Natalie", "Zoey", "Jasmine", "Hazel", "Natalie", "Aurora", "Brooklyn", "Bella", "Claire", "Skylar", "Liliana", "Natalie", "Aubree", "Rylee", "Allison", "Brooklyn", "Brielle", "Adalyn", "Raelynn", "Maria", "Athena", "Ximena", "Avery", "Aaliyah", "Jordyn", "Mackenzie", "Adalynn", "Harmony", "Adeline", "Ryleigh", "Melody", "Isabelle", "Brooklyn", "Arya", "Annabelle", "Kaylee", "Aaliyah", "Aurora", "Hailee", "Jasmine", "Gianna", "Aubree", "Bella", "Autumn", "Makayla", "Avery", "Brooklyn", "Brooklynn", "Bella", "Adalynn", "Raelynn", "Maria", "Lydia", "Peyton", "Makayla", "Avery", "Mariana", "Avery", "Eleanor", "Cameron", "Adalyn", "Makayla", "Avery", "Aria", "Avery", "Maria", "Naomi", "Avery", "Avery", "Mackenzie", "Autumn", "Makayla", "Avery", "Avery", "Maria", "Mackenzie", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery"];

    var name = name1[getRandomInt(1, 60)];
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

        "phone": Math.floor(Math.random() * 100000000),
        "name": generateName(),
        "nid": Math.floor(Math.random() * 10000000),
        "email": generateNamemail(),
        "gender": 1,
        "dob": "2023-01-24",
        "marital_status": 1,
        "address": generateAddress(),
        "area_of_specialization": generatecourseName(),
        "designation": getRandomInt(3, 5),
        "organization": getRandomInt(15, 19),
        "division": getRandomInt(1, 8),
        "district": getRandomInt(1, 64),
        "sub_district": getRandomInt(1, 491),



    });
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accesso };
    http.post(url + 'trainer/', payload, { headers });

}