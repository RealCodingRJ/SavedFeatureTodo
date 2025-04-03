import fs from "fs";
import readline from "readline-sync";
import { getDB } from "./DB/db.js";
import { message } from "./DateForNow/DateConfirmed.js";

export var appendText = readline.question("Enter Feature to Learn: ");
const checkMark = "\u2713";

const title = [];

const text = "You Have to Implement: " + appendText;
const isCompleted = String(readline.question("Completed Y | N: "));

const isChecked = false;

if (!isChecked && isCompleted == "Y") {
  fs.appendFile(
    "ListedCompleted.Lc",
    "Date Due:" + message + " " + text + "\n" + checkMark + " " + text + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("written");
      }
    }
  );
} else {
  fs.appendFileSync(
    "ListedCompleted.Lc",
    "Date Due:" + message + " " + text + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("written");
      }
    }
  );
}

getDB(appendText).catch(console.dir);
