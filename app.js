const http = require('http'),url = require('url');

const hostname = 'luciod.helioho.st';
const port = 80;

const server = http.createServer((req, res) => {
	const query = url.parse(req.url,true).query;
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
	//const resJson = JSON.stringify(query); 
	//res.end(query["hub.challenge"]);
	res.end('Valor: ' + process.env.var);
});

server.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
});
