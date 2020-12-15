const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// const changeUser = function (user) {
//    let {mood, hobby, premium } = user;
//     mood = "happy";
//     hobby = "skydiving";
//     premium = false;

//     return {...user, mood, hobby, premium};
// }

const changeUser = function (user) {
    user.mood = "happy"
    user.hobby = "skydiving";
    user.premium = false;
    return user;
}

console.table(changeUser(user));