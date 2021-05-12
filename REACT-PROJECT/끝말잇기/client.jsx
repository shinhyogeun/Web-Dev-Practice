const React = require('react');
const ReactDom = require('react-dom');

import Player from './Player.jsx';
import music from './music.js';

ReactDom.render(<Player music={music} />,
  document.querySelector("#root")
);

