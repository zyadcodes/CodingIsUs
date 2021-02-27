// This will export a named function that halts the execution of a function for a specified number of milliseconds
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// Exports the function
export { sleep };
