// "use strict"

function makeUser() {
    let obj = {
      name: "John",
      ref: this.name, //() { return this; },
    };

    return obj
  }
  
let user = makeUser();

console.log( user.ref ); // Каким будет результат?