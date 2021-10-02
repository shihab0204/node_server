//***********************************************//
/**** CREATING A NODE SERVER USING HTTPS *********/
//***********************************************//

// const https = require("https");
// const fs = require("fs");

// const hostname = "127.0.0.1";
// const port = 4300;

// const options = {
// 	key: fs.readFileSync("key.pem"),
// 	cert: fs.readFileSync("cert.pem"),
// };

// const server = https.createServer(options, (req, res) => {
// 	res.writeHead(200);

// 	res.end("Hello World\n");
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at https://${hostname}:${port}`);
// });

//***********************************************//
/**** CREATING A NODE SERVER USING HTTP *********/
//***********************************************//

const http = require("http");

const hostname = "127.0.0.1";
const port = 4300;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello World\n");
});

server.listen(port, hostname, () => {
	console.log(`Server running at https://${hostname}:${port}`);
});
