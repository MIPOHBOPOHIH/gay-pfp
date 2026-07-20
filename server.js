// Simple zero-dependency HTTP server for development
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3005;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Prevent directory traversal attacks
    let safeUrl = req.url.split('?')[0];
    if (safeUrl === '/') safeUrl = '/index.html';
    
    const filePath = path.join(__dirname, safeUrl);

    // Ensure the requested file is inside this directory
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/html' });
        res.end('<h1>403 Forbidden</h1>', 'utf-8');
        return;
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 File Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`<h1>500 Server Error</h1><p>${error.code}</p>`);
            }
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate'
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`\x1b[32m[Pride PFP Maker] Development server started!\x1b[0m`);
    console.log(`\x1b[36mOpen your browser at: http://localhost:${PORT}/\x1b[0m`);
});
