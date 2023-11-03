// function showTime() {
//     let dateTime=new Date();
//     let time=dateTime.toLocaleTimeString();
//     console.log(time);
// }
// let display= showTime();
const person = {
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  for (let key in person) {
    console.log(key, person[key]);
  }
  
