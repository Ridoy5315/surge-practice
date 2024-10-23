// task -1: console log the secondary school location of Sophia 
// let data = {
//      Sophia: {
//          id: 33,
//          study: [
//              {
//                  primary:
//                      [
//                          { school_name: "ABC primary school" },
//                          { location: "Peters burg" }
//                      ]
//              },
//              {
//                  secondary:
//                      [
//                          { school_name: "ABC secondary school" },
//                          { location: "St Lorence" }
//                      ]
//              },
//          ]
//      }
//  }

//  console.log(data.Sophia.study[1].secondary[1].location);
 
 // task-2: console .log  output: Petersburg, Herry
 
//  let students = {
//      2222: {
//          name: "Jack",
//          section: "C",
//          class: "IX",
//          address: {
//              "building no": 12,
//              "street": "St. Jonson",
//              "city": "Petersburg",
//              "country": "UK"
//          }
//      },
//      3333: {
//          name: "Herry",
//          section: "D",
//          class: "X",
//          address: {
//              "building no": 85,
//              "street": "DC road",
//              "city": "Kachukhet",
//              "country": "Bangladesh"
//          }
//      }
//  }

//  console.log(students[2222].address.city + " , " + students[3333].name);
// console.log(`${students[2222].address.city} , ${students[3333].name}`);
 
 
 // task-3 : access and then show habluder adda
//  show output Beginner
//  let data2 = {
//      data:
//          [
//              {
//                  bookId: 1,
//                  bookDetails: {
//                      name: "habluder adda",
//                      category: "XYZ",
//                      price: "20$",
//                  },
//                  bookCategory: "Basic",
//              },
//              {
//                  bookId: 2,
//                  bookDetails: {
//                      name: "gobluder adda",
//                      category: "ABC",
//                      price: "40$",
//                  },
//                  bookCategory: "Beginner",
//              }
//          ]
//  }

//  console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory); 

// let array = [1, 3 , 5, 7, 9];

// let array2 = array.map(num => num+1);

// console.log(array2);

// let array = [33, 50, 79, 78, 90, 101, 30];

// let array2 = array.filter(num => num % 10 === 0);

// console.log(array2)
// let array = [33, 50, 79, 78, 90, 101, 30];

// let array2 = array.find(num => num % 10 === 0);

// console.log(array2)

// const instructor = [{name: 'nodi', age:28, position: 'Senior'}, {name: 'akil', age:26, position: 'Junior'},{name: 'Shobuj', age:30, position: 'Senior'}];

// const getIt = instructor.filter( person => person.position ==='Senior');

// console.log(getIt);

// const people = [
//      {name: 'Meena', age: 20},
//      {name: 'Rina', age: 15},
//      {name: 'Suchorita', age: 22}
// ];
// const total = people.reduce((pre, curr) => pre+curr.age, 0);

// console.log(total);

const student = {
     firstName: 'rakib',
     lastName: 'hossain',
     age: 30,
     job: 'Waiter',
}
const student2 = {
     firstName: 'Sagar',
     lastName: 'hossain',
     age: 34,
}

const {firstName, lastName, age, job= "unemployed"} = student;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);



