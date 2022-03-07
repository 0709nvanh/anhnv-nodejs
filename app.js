const http = require('http');

const server =  http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if(url === '/product'){
        res.setHeader('Content-Type', 'application/json');
        const data = [{id: "1", name: "B"}, {id: "2", name: "A"}];
        res.end(JSON.stringify(data));
    } else if(url === '/posts'){
        res.setHeader('Content-Type', 'application/json');
        const data = [{id: "1", name: "C"}, {id: "2", name: "A"}];
        res.end(JSON.stringify(data));
    } else if(url === '/user'){
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<body>");
            res.write("<h1>User</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end()
    } else {res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<body>");
            res.write("<h1>Hello Page</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end()
    }
})

const PORT = 3004;

server.listen(PORT, () => {
    console.log(`server is running port ${PORT}`);
})