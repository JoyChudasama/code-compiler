const http = require('http');
const {VM, VMScript} = require('vm2');


const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/run') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const vm = new VM();
                const script = new VMScript(data.code);

                try {
                    const result =  vm.run(script);
                    console.log(result)
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(result.toString());
                } catch (vmError) {
                    console.log(vmError)
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(`Execution error: ${vmError.message}`);
                }

            } catch (err) {
                console.log(err)
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid JSON input');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
