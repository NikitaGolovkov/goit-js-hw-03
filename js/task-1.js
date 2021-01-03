const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

let objectKeysValue = "";
let list= "";

let keys = Object.keys(user);

for (const keys in user) {
    
    objectKeysValue = user[keys];
    list = `${keys}: ${objectKeysValue}`;
   console.log(list);
}  

