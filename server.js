// connects session to sequelize Database
const routes = require('./controllers');
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});
const session = require('express-session');
const helpers = require('./utils/helpers');
const path = require('path');
const app = express();
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create session 
const sess = {
  secret: "Secret",
  cookie: { originalMaxAge: 600100 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// turns on routes
app.use(session(sess));
app.use(express.json());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// connects db and server
sequelize.sync({ force: false }).then(() => {
});