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
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }

  const sassPath = path.join(__dirname, "src", "_sass");
  const distSassPath = path.join(distPath, "_sass");

  const packageJsonPath = path.join(__dirname, "package.json");
  const distPackageJsonPath = path.join(distPath, "package.json");

  const source = fs.readFileSync(packageJsonPath).toString("utf-8");
  const sourceObj = JSON.parse(source);
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};
  if (sourceObj.main && sourceObj.main.startsWith("/dist/")) {
    sourceObj.main = sourceObj.main.slice(5);
  }
  // const distAssetPath = path.join(distPath, "asset");
  const versionFilePath = path.join(distPath, "version.txt");
  fs.writeFileSync(
    distPackageJsonPath,
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8")
  );
  fs.writeFileSync(versionFilePath, Buffer.from(sourceObj.version, "utf-8"));
  copyDirectory(sassPath, distSassPath);
  // copyDirectory(assetPath, distAssetPath);
}

main();
