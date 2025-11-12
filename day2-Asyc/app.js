import fs from "fs/promises";


// Synchronous example
console.log("Start");
console.log("Processing");
console.log("End");

// Asynchronous example u
console.log("Start");
setTimeout(() => console.log("Processing After 2 secounds"), 2000);
console.log("End");


// CallBack exam
function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    const user = { name: "Madhu", age: 22 };
    callback(user);
  }, 2000);
}

fetchUserData((data) => {
  console.log("User data received:", data);
});



// callback hell


function step1(cb) {
  setTimeout(() => {
    console.log("Step 1 complete");
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(() => {
    console.log("Step 2 complete");
    cb();
  }, 1000);
}

function step3(cb) {
  setTimeout(() => {
    console.log("Step 3 complete");
    cb();
  }, 1000);
}

// Callback hell (nested callbacks)
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});


// using Promises

function stepPromise(stepName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${stepName} complete`);
      resolve();
    }, 1000);
  });
}

stepPromise("Step 1")
  .then(() => stepPromise("Step 2"))
  .then(() => stepPromise("Step 3"))
  .then(() => console.log("All steps completed"))
  .catch((err) => console.error("Error:", err));


//   async/await
async function runSteps() {
  try {
    await stepPromise("Step 1");
    await stepPromise("Step 2");
    await stepPromise("Step 3");
    console.log("All steps completed");
  } catch (error) {
    console.error("Error:", error);
  }
}

runSteps();


// read, write file with promises



async function readAndWriteFile() {
  try {
    const data = await fs.readFile("data.json", "utf-8");
    console.log("File content:", data);
    await fs.writeFile("output.txt", "This is written asynchronously!");
    console.log("File written ");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

readAndWriteFile();


// Data fetching 



async function fetchData() {
  console.log("Fetching data...");
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate delay

    const data = await fs.readFile("data.json", "utf-8");
    console.log("Data received!");
    const users = JSON.parse(data);

    console.log("Displaying users:");
    users.forEach((u) => console.log(`${u.id}. ${u.name} (${u.age})`));
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("Done!");
  }
}

fetchData();

