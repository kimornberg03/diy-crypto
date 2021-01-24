import { ceasarEncypt, ceasarDecypt } from "./diycrypto.js"


var stringTemp1 = ceasarEncypt("ILOVEYOULISA", 1)

console.log(stringTemp1)

console.log(ceasarDecypt(stringTemp1, 1))