//require('dotenv').config();

const server = require('./server');

//const PORT = process.env.PORT || 3300;
const PORT = 3300 || 5432;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));