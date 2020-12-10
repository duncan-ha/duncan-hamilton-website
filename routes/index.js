const app = require('express').Router();
module.exports = app;

app.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

app.get('/index', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

app.get('/test', (req, res, next) => {
  res.render('test', { title: 'Success' });
});
app.get('/reading', (req, res, next) => {
  res.render('reading', { title: 'Reading' });
});
app.get('/now', (req, res, next) => {
  res.render('now', { title: 'Now' });
});
app.get('/mondays', (req, res, next) => {
  res.render('mondays', { title: 'Mondays' });
});
app.get('/running', (req, res, next) => {
  res.render('running', { title: 'Running' });
});
app.get('/404', (req, res, next) => {
  res.render('404', { title: '404' });
});





