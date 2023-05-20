import {plays} from "./plays.json.js"
import {invoices} from "./invoices.json.js";
import {statement} from "./bill.js";

console.log(plays)
console.log(invoices)
console.log(statement(invoices[0], plays))