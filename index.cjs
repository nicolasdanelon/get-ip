const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the base directory and the file path
    const basePath = path.join(__dirname, 'dist');
    const filePath = path.join(basePath, req.url);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File does not exist
            res.statusCode = 404;
            res.end('File not found');
            return;
        }

        // Read the file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                // Error reading the file
                res.statusCode = 500;
                res.end('Error reading file');
                return;
            }

            // Set the appropriate Content-Type header based on the file extension
            const ext = path.extname(filePath);
            let contentType = 'text/plain';
            if (ext === '.html') {
                contentType = 'text/html';
            } else if (ext === '.css') {
                contentType = 'text/css';
            } else if (ext === '.js') {
                contentType = 'text/javascript';
            } else if (ext === '.json') {
                contentType = 'application/json';
            } else if (ext === '.svg') {
                contentType = 'image/svg+xml';
            }

            // Set the Content-Type header
            res.setHeader('Content-Type', contentType);

            // Send the file data
            res.end(data);
        });
    });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
