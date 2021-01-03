const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
   let oneProductObject;
    let oneValueArray = [];
    let keys;
  
  for (let i = 0; i < products.length; i++){
      oneProductObject = products[i];
     
      keys = Object.keys(oneProductObject); 
      for (const key of keys) {
          if (key === prop) {
              oneValueArray.push(oneProductObject[key]);
            }         
          }    
     } return oneValueArray;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []