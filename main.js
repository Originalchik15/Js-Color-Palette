import express from 'express';
import { create as exphbs } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hbs = exphbs({
  defaultLayout: 'main',
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'), 
  partialsDir: path.join(__dirname, 'views', 'partials') 
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); 

app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('gradients', {
    title: 'Main',
    bodyClass: 'gradient-black-white',
  });
});


app.get('/cranberry', (req, res) => {
  res.render('cranberry', {
    title: 'Cranberry Punch',
    bodyClass: 'gradient-cranberry-punch',
  });
});

app.get('/velvet', (req, res) => {
  res.render('velvet', {
    title: 'Velvet Night',
    bodyClass: 'gradient-velvet-night',
  });
});

app.get('/azure', (req, res) => {
  res.render('azure', {
    title: 'Azure Orchid',
    bodyClass: 'gradient-azure-orchid',
  });
});

app.get('/golden', (req, res) => {
  res.render('golden', {
    title: 'Golden Horizon',
    bodyClass: 'gradient-golden-horizon',
  });
});

app.get('/matcha', (req, res) => {
  res.render('matcha', {
    title: 'Midnight Matcha',
    bodyClass: 'gradient-midnight-matcha',
  });
});



async function start() {
  try {
    app.listen(port, () => {
      console.log('Сервер прогресс репорта - запущен');
      console.log('Порт:', port);
    });
  } catch (e) {
    console.log('Ошибка запуска сервера:', e);
  }
}

await start();