// This will contain all of the languages supported by the compiler and their attributes
export default [
  {
    value: "java",
    label: "Java",
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
    template: `
  #include <iostream>
  using namespace std;
  
  int main() {
      // Type your code here
      return 0;
  }`,
  },
  { value: "js", label: "JavaScript" },
  { value: "python", label: "Python" },
];
