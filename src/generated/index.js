const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const typesDirectory = path.join(
  __dirname,
  "../../src/",
  "database",
  "schemas"
);
const outputDirectory = path.join(__dirname, "../../src", "swagger", "schemas");

const directories = fs.readdirSync(typesDirectory);

const readDirectory = (index) => {
  const dir = path.join(typesDirectory, directories[index]);
  const files = fs.readdirSync(dir);
  return files;
};

const writeSchema = (type, directory, filePath) => {
  const schemaPath = path.join(outputDirectory, `${directory}.schema.json`);

  execSync(
    `npx ts-json-schema-generator --path ${path.join(
      typesDirectory,
      directory,
      filePath
    )} --type ${type} --tsconfig tsconfig.schema.json > ${schemaPath}`
  );
};
directories.forEach((directory, index) => {
  const files = readDirectory(index);
  const indexFile = files.indexOf("types.ts");
  const filePath = files[indexFile];
  if (filePath) {
    const name = directory.slice(0, directory.length - 1);

    const types = [
      name.charAt(0).toUpperCase() + name.slice(1) + "Schema" + "Type",
      name.charAt(0).toUpperCase() + name.slice(1) + "List" + "Schema" + "Type",
    ];

    types.forEach((type) => {
      writeSchema(type, directory, filePath);
    });
  }
});
