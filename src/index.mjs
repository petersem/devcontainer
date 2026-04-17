import { add } from "./utils/calc.mjs"
console.clear();
console.log(`

Hello from Node JS!

`);
console.log(`Adding...  5 + 6 = ${add(5,6)}`);

async function getRandomDadJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json",
        "User-Agent": "MyApp (https://example.com)" // optional but recommended
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    return data.joke; // string
  } catch (err) {
    console.error("Failed to fetch dad joke:", err);
    return null;
  }
}

// Example usage:
getRandomDadJoke().then(joke => {
  if (joke) console.log("😂 Dad Joke:", joke);
});
