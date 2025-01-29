const fs = require("fs");
const readline = require("readline");
const execSync = require("child_process").execSync; // Import child_process for Git commands

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

  return folderName; // Return the folder name for Git commit
};

const commitChanges = (folderName) => {
  try {
    execSync("git add ."); // Stage all changes
    execSync(`git commit -m "Add ${folderName}"`); // Commit with a message
    console.log(`Changes committed to Git: Add ${folderName}`);
  } catch (error) {
    console.error("Error committing changes to Git:", error.message);
  }
};

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

(async () => {
  console.log("Welcome to the Question Automation Script!");

  const number = await askQuestion("Enter the question number: ");
  const title = await askQuestion("Enter the question title: ");
  const description = await askQuestion("Enter the question description: ");

  const folderName = createQuestionFolder(number, title, description);

  // Automatically commit the new folder to Git
  commitChanges(folderName);

  rl.close();
})();
