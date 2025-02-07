import { generate} from "random-words";
import figlet from "figlet";
let word = generate();
figlet(word, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});