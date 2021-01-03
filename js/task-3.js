const findBestEmployee = function(employees) {
 let maxPoints = 0;
    let mostPowerfullName = "";

    for (const key in employees) {
        if (employees[key] > maxPoints) {
            maxPoints = employees[key];
            mostPowerfullName = key;
        } 
    } 
   
    return mostPowerfullName;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux