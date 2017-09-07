import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

// new code for server side rendering
import ReactDOMServer from 'react-dom/server';
import App from '../src/components/App';
import React from 'react';

const DOM = React.DOM;
const body = DOM.body;
const div = DOM.div;
const script = DOM.script;
// const App = React.createFactory(AppComponent);


/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
  /*if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    /!*var html = ReactDOMServer.renderToStaticMarkup(
      body(null,div({id: 'app', dangerouslySetInnerHTML:{__html: ReactDOMServer.renderToString(AppComponent)}}),
        script({src: '../src/bundle.js'}))
    );*!/
    let domstring = ReactDOMServer.renderToString(<App />);


    res.json(domstring);
  }*/
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
