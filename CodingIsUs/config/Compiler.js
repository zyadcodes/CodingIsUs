// This method will allow the app to have a compiler and run code from a variety of different languages
import {c, cpp, node, python, java} from 'compile-run';

// The method will take in the string containing the code to compile. It will also take in a string that will
// determine the language to compile
const runCode = async (code, language) => {
  let result = '';
  switch (language) {
    case 'c':
      result = await c.runSource(code);

    case 'cpp':
      result = await cpp.runSource(code);

    case 'js':
      result = await node.runSource(code);

    case 'python':
      result = await python.runSource(code);

    case 'java':
      result = await java.runSource(code);
  }
  return result;
};

export {runCode};
