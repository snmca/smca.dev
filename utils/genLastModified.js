const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "..", "content");
const outputFile = path.join(__dirname, "..", "_data", "lastModified.json");

function getGitModified(filePath) {
  try {
    const result = execSync(`git log -1 --format=%aI -- "${filePath}"`, {
      encoding: "utf-8"
    });
    return result.trim();
  } catch {
    return null;
  }
}

function walkDir(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (entry.name.endsWith(".md")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allFiles = walkDir(contentDir);
const modifiedTimes = {};

for (const file of allFiles) {
  const relativePath = path.relative(process.cwd(), file);
  const gitTime = getGitModified(file);
  if (gitTime) {
    modifiedTimes[relativePath] = gitTime;
  }
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(modifiedTimes, null, 2));
console.log(`✅ Git last-modified times written to: ${outputFile}`);

