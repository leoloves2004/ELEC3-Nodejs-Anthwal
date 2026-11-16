
/*
Name: Leomhel P. Anthwal
Section: IV-BSIT C
Activity: N3 - File Manager
Date: November 16, 2026
*/

const fs = require("fs");
const path = require("path");

// Folder where all text files will be stored
const filesFolder = path.join(__dirname, "files");

// Create the files folder if it does not exist
if (!fs.existsSync(filesFolder)) {
    fs.mkdirSync(filesFolder);
}

// Read commands from the terminal
const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

// Build file paths using path.join()
function getFilePath(name) {
    if (!name || path.basename(name) !== name ||
        path.extname(name) !== ".txt") {
        throw new Error("Please provide a valid .txt filename.");
    }

    return path.join(filesFolder, name);
}

try {
    switch (command) {
        case "create": {
            const filePath = getFilePath(fileName);

            if (fs.existsSync(filePath)) {
                console.log("Error: File already exists.");
                break;
            }

            fs.writeFileSync(filePath, content, { flag: "wx" });
            console.log("File created successfully: " + fileName);
            break;
        }

        case "read": {
            const filePath = getFilePath(fileName);

            if (!fs.existsSync(filePath)) {
                console.log("Error: File does not exist.");
                break;
            }

            const data = fs.readFileSync(filePath, "utf8");
            console.log("File: " + fileName);
            console.log("Contents: " + data);
            break;
        }

        case "append":
        case "update": {
            const filePath = getFilePath(fileName);

            if (!fs.existsSync(filePath)) {
                console.log("Error: File does not exist.");
                break;
            }

            fs.appendFileSync(filePath, content);
            console.log("File updated successfully: " + fileName);
            break;
        }

        case "delete": {
            const filePath = getFilePath(fileName);

            if (!fs.existsSync(filePath)) {
                console.log("Error: File does not exist.");
                break;
            }

            fs.unlinkSync(filePath);
            console.log("File deleted successfully: " + fileName);
            break;
        }

        case "list": {
            const files = fs.readdirSync(filesFolder)
                .filter(name => path.extname(name) === ".txt");

            if (files.length === 0) {
                console.log("No text files found.");
                break;
            }

            console.log("========== FILE LIST ==========");

            files.forEach(name => {
                const filePath = path.join(filesFolder, name);
                const fileContents = fs.readFileSync(filePath, "utf8");

                console.log("-------------------------------");
                console.log("Full Path: " + filePath);
                console.log("File Name: " + path.basename(filePath));
                console.log("Extension: " + path.extname(filePath));
                console.log("Contents: " + fileContents);
            });

            break;
        }

        default:
            console.log("Invalid command.");
            console.log("Available commands:");
            console.log("create, read, append, update, delete, list");
    }
} catch (error) {
    console.log("Error: " + error.message);
}
