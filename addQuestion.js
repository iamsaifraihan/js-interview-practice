const fs = require("fs");
const readline = require("readline");

// Utility to get user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createQuestionFolder = (number, title, description) => {
  const folderName = `${number.toString().padStart(2, "0")}-${title.replace(/\s+/g, "-").toLowerCase()}`;
  const folderPath = `./${folderName}`;
  const readmeContent = `# ${title}\n\n${description}\n\n## Examples:\n\n- Add your examples here.\n\n`;
  const solutionTemplate = `// Solution for: ${title}\n\nfunction solution() {\n  // Write your solution here\n}\n\nmodule.exports = solution;\n`;

  // Create folder
  fs.mkdirSync(folderPath, { recursive: true });

  // Create README.md
  fs.writeFileSync(`${folderPath}/README.md`, readmeContent);

  // Create solution.js
  fs.writeFileSync(`${folderPath}/solution.js`, solutionTemplate);

  console.log(`Folder for "${title}" created successfully at ${folderPath}.`);
};

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

(async () => {
  console.log("Welcome to the Question Automation Script!");

  const number = await askQuestion("Enter the question number: ");
  const title = await askQuestion("Enter the question title: ");
  const description = await askQuestion("Enter the question description: ");

  createQuestionFolder(number, title, description);

  rl.close();
})();
