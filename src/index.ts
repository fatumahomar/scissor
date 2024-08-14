import express from 'express';
import routes from './routes';
import path from 'path';
import connectToDatabase from './config/mongoose';
connectToDatabase();
const port = 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"./views"));
app.use(express.static('./assets'));

app.use('/', routes);

app.listen(port, (error?: Error) => {
  if (error) console.log('Error express:', error);
  console.log('server is running on port:', port);
});