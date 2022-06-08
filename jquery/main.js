import './style.css';
import $ from 'jquery';
import ColorButton from './components/ColorButton';
import ListControl from './components/ListControl';

$(function() {
  let title = $('<h1>').text('Hello Vite!');
  let link = $('<a>').text('Documentation')
    .prop({ href: 'https://vitejs.dev/guide/features.html', target: '_blank' });
  
  const $app = $('#app');
  $app.append(title, link);
  new ColorButton($app, ['red', 'green', 'blue', 'yellow']);
  new ListControl($app, ['write code', 'think', 'fix code you wrote']);
});
