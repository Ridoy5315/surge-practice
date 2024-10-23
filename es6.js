// const array = [12, 16, 11, 12, 19, 10];
// const max = Math.max(...array);

// console.log(max);

// const add = [10, 22, 19, 26, 18, 26, 11];

// const add2 = add;

// const add3 = [...add2];

// add.push(123);

// console.log(add2);
// console.log(add);
// console.log(add3);

// const num = [2, 5, 3, 8, 5];

// const [red, green, blue] = [22, 34, 64];

// console.log(green);
// 
// function test (a, b) {
//      return [a*2, b*2];
// }

// const [prothom, second] = test(2, 3);

// console.log(second);


// const vai = {
//      nai: 'akbor',

//      phone: '017418247018',
//      id: 12746,
//      name: 'thuk',
// }

// Object.seal(vai);

// vai.source = 'bangladesh';

// vai.id = 22222;
// console.log(vai);


// const st = 'MAhbubul Islam Ridoy';

// const arr = ['kola', 'banana', 'anaros'];

// const person = {
//      name: 'ridoy',
//      age: 12,
//      id: 17256,
//      phone: '16961391693',

// }

// for( let s in person){
//      console.log(person[s]);
// }


// const multiple = (num1, num2, num3) => num1*num2*num3;

// console.log(multiple(2,3,4));

// const str = `I am a web developer.
// I love to code.
// I love to eat biryani.`

// console.log(str);

// const defa = (num1, num2 = 2) => num1+num2;

// console.log(defa(4));

// const friends = (arr) =>{
//      let newArray = [];
//      for( let friend of arr){
//           if(friend.length % 2 === 0){
//                newArray.push(friend);
//           }
//      }
//      return newArray;
// }

// console.log(friends(['abir', 'talha', 'Johir', 'Sheikh']));

// const square = (arr) =>{
//      let sum = 0;;
//      for( let sq of arr){
//           let squ = sq*sq;
//           sum += squ;
//      }
//      let average = sum/ arr.length;
//      return average;
// }

// console.log(square([2,3,4,5,6,7]));

// const num = (arr1, arr2) => {

//      const newArray = [...arr1, ...arr2];

//      const maxNum = Math.max(...newArray);

//      return maxNum;
// }

// console.log(num([5, 2, 6, 7,8 ], [5, 2,3, 9, 4, 6,3]));

// const product = [{no: 1, name: 'laptop', price: 92863}];

// const products = {
//      count: 1331,

//      product: [{no:1, name: 'mac', price: 128776},
//           {no:2, name: 'lenovo', price: 12474}
//      ],

//      isBenefit: true,
// }

// console.log(products.product[0].price);

// const num = [2, 3, 4,5 ];

// const paici =  num.map(n => n*2);

// console.log(paici);

// const friends = ['Abir', 'Shakib', 'Tamim', 'Mashrafi'];

// const length = friends.map(fri => fri[0]);
// const length = friends.find(fri => fri.length > 5);

// console.log(length);

// const prices = [23, 24, 56, 12];

// const total = prices.reduce( (acumolator, current) => acumolator + current, 0);

// console.log(total);

// class vehicle {

//      constructor(name, model, price){
//           this.name = name;
//           this.model = model;
//           this.price = price;
//      }

//      move(){
//           console.log(`left and right`);
//      }

// }

// class tesla extends vehicle {

//      constructor(name, model, price, year, seat){
//           super(name, model, price);
//           this.year = year;
//           this.seat = seat;
//      }

// }

// const car = new vehicle('Tesla', 'g20', 12344334);

// const privatcar = new tesla('Tesla', 'g20', 12344334, 2000, 21);

// console.log(privatcar);

// console.log(car);



