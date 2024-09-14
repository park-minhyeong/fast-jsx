import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { Buffer } from "buffer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  const distPath = path.join(__dirname, "dist");
  const styleCssPath = path.join(__dirname, "src/globals.css");
  const assetPath = path.join(__dirname, "src", "asset");
  const packageJsonPath = path.join(__dirname, "package.json");
  const tailwindConfigPath = path.join(__dirname, "tailwind.config.ts");
  const readmePath = path.join(__dirname, "docs", "README.md");

  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }

  const source = fs.readFileSync(packageJsonPath).toString("utf-8");
  const sourceObj = JSON.parse(source);
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};

  if (sourceObj.main && sourceObj.main.startsWith("/dist/")) {
    sourceObj.main = sourceObj.main.slice(5);
  }

  const distAssetPath = path.join(distPath, "asset");
  const distStyleCssPath = path.join(distPath, "globals.css");
  const distPackageJsonPath = path.join(distPath, "package.json");
  const versionFilePath = path.join(distPath, "version.txt");
  const npmignorePath = path.join(distPath, ".npmignore");
  const distTailwindConfigPath = path.join(distPath, "tailwind.config.ts");
  const distReadmePath = path.join(distPath, "README.md");

  fs.writeFileSync(
    distPackageJsonPath,
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8")
  );
  fs.writeFileSync(versionFilePath, Buffer.from(sourceObj.version, "utf-8"));

  if (fs.existsSync(styleCssPath)) {
    fs.copyFileSync(styleCssPath, distStyleCssPath);
  }
  if (fs.existsSync(npmignorePath)) {
    fs.copyFileSync(npmignorePath, path.join(distPath, ".npmignore"));
  }
  if (fs.existsSync(tailwindConfigPath)) {
    fs.copyFileSync(tailwindConfigPath, distTailwindConfigPath);
  }
  if (fs.existsSync(readmePath)) {
    fs.copyFileSync(readmePath, distReadmePath);
  }
  copyDirectory(assetPath, distAssetPath);
}

main();
