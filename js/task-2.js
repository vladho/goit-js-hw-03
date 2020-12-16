const countProps = function (obj) {

return Object.values(obj).length

};

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }))