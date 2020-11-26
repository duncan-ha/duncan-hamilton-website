const express = require('express');
const path = require('path');

const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure({ noCache: true });

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', require('./routes'));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// error handling
app.use((req, res, next) => {
    res.status(404);
    res.render('404', { url: req.url });
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Uh oh — something broke! Our minions are working on it.');
  });

//5000 dev
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
 