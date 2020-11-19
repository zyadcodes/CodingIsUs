// This will contain all of the languages supported by the compiler and their attributes
export default [
  {
    value: "java",
    label: "Java",
    editorMode: 'java',
    compilerID: 10, 
    template: `
public class Main {
  public static void main(String[] args) {
    // Type your code here
    
  }
}
  `,
  },
  {
    value: "c",
    label: "C",
    editorMode: 'c_cpp',
    compilerID: 11, 
    template: `
int main()
{
  // Type your code here
  
  return 0;
}
  `,
  },
  {
    value: "csharp",
    label: "C#",
    editorMode: 'csharp',
    compilerID: 27, 
    template: `
using System;

class Test {
  static void Main(string[] args)
  {
      // Type your code here
      
  }
}`,
  },
  {
    value: "cpp",
    label: "C++",
    editorMode: 'c_cpp',
    compilerID: 44, 
    template: `
#include <iostream>
using namespace std;
  
int main() {
    // Type your code here
    
    return 0;
}`,
  },
  {
    value: "node.js",
    label: "Node.JS",
    editorMode: 'javascript',
    compilerID: 56, 
    template: `
// Type your code here

`,
  },
  {
    value: "python",
    label: "Python",
    editorMode: 'python',
    compilerID: 116, 
    template: `# your code goes here`,
  },
  {
    value: "sqliteq",
    label: "SQLite - Queries",
    editorMode: 'sql',
    compilerID: 52, 
    template: `
-- your code goes here

  `,
  },
  {
    value: "sqlites",
    label: "SQLite - Schema",
    editorMode: 'sql',
    compilerID: 40, 
    template: `
-- your code goes here

  `,
  },
  {
    value: "php",
    label: "PHP",
    editorMode: 'php',
    compilerID: 29, 
    template: `
<?php

// your code goes here
    
  `,
  },
  {
    value: "kotlin",
    label: "Kotlin",
    editorMode: 'kotlin',
    compilerID: 47, 
    template: `
import java.util.*
 
fun main(args: Array<String>) {
    val sc = Scanner(System.\`in\`)
        
    // your code goes here

}
    
  `,
  },
  {
    value: "swift",
    label: "Swift",
    editorMode: 'swift',
    compilerID: 85, 
    template: `
// your code goes here

  `,
  },
  {
    value: "ruby",
    label: "Ruby",
    editorMode: 'ruby',
    compilerID: 17, 
    template: `
# your code goes here

  `,
  },
];
