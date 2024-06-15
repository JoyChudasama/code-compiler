const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/run') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            const script = data.code;

            exec(`node -e "${script}"`, (error, stdout, stderr) => {
                if (error) {
                    res.writeHead(500);
                    res.end(`Execution Error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    res.writeHead(400);
                    res.end(`Script Error: ${stderr}`);
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(stdout);
            });
        });
    } else {
        res.writeHead(404);
        res.end('Endpoint Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
