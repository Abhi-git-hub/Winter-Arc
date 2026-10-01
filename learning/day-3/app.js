import {add, subtract} from "./math.js";
import {createUser} from "./user.js";
import {validate} from "./validator.js";
console.log(add(10,20))
console.log(subtract(20,10))
console.log(subtract(10,20))
const user = createUser("Abhi Yadav")
console.log(validate(user))
