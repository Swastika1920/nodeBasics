function myFunction(){
  console.log('Function was Called');
}

var myString = 'String!';

//to make the functions and variables available oustise of this file.. we can use module object

module.exports.function1 =myFunction;
module.exports.string12 = myString;
