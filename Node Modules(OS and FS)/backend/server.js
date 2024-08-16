// Importing required modules
const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

// HTTP Server Example
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, world!\n");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// File Handling Example (CRUD Operations)

// File paths
const filePath = path.join(__dirname, "example.txt");

// Create and write to file
fs.writeFile(filePath, "Hello, this is a test file!", (err) => {
  if (err) throw err;
  console.log("File created and data written.");

  // Read file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);

    // Append to file
    fs.appendFile(filePath, "\nAppended text!", (err) => {
      if (err) throw err;
      console.log("Data appended.");

      // Read file again
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw err;
        console.log("Updated file content:", data);

        // Delete file
        fs.unlink(filePath, (err) => {
          if (err) throw err;
          console.log("File deleted.");
        });
      });
    });
  });
});

// OS Module Example
console.log("OS Platform:", os.platform());
console.log("OS Release:", os.release());
console.log("OS CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("System Uptime:", os.uptime(), "seconds");
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());
console.log("OS Endianness:", os.endianness());
