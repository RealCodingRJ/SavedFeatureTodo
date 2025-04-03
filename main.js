import fs from "fs";
import readline from "readline-sync";
import { getDB } from "./DB/db.js";

export var appendText = readline.question("Enter Feature to Learn: ");
const checkMark = "\u2713";

const title = [];

const text = "You Have to Implement: " + appendText + " Feature";
const isCompleted = String(readline.question("Completed Y | N: "));

const isChecked = false;

if (isChecked && isCompleted == "Y") {
  fs.appendFile("ListedCompleted.Lc", checkMark + " " + text + "\n", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("written");
    }
  });
} else {
  fs.appendFileSync("ListedCompleted.Lc", text + "\n", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("written");
    }
  });
}

getDB(appendText).catch(console.dir);
