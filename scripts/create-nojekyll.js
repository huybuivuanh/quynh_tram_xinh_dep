const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");
const noJekyllPath = path.join(outDir, ".nojekyll");

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(noJekyllPath, "", { encoding: "utf8" });
  // eslint-disable-next-line no-console
  console.log("Created", path.relative(process.cwd(), noJekyllPath));
} catch (err) {
  // eslint-disable-next-line no-console
  console.error("Failed to create .nojekyll:", err);
  process.exitCode = 1;
}

