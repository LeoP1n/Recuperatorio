const express = require('express');
const mainRouter = require('./routes/main');
const mainApiRouter = require('./routes/api/main');
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/', mainRouter);
app.use('/api', mainApiRouter);

app.listen(3001, () => {
  console.log('listening in http://localhost:3001');
});
