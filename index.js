const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3001; // Render benötigt eine flexible PORT

server.use(cors());

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log(`JSON Server läuft auf Port ${PORT}`);
});