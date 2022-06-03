import './style.css';
import $ from 'jquery';
import ColorButton from './components/ColorButton';

$(function() {
  console.log('hello');
  let title = $('<h1>').text('Hello Vite!');
  let link = $('<a>').text('Documentation')
    .prop({ href: 'https://vitejs.dev/guide/features.html', target: '_blank' });
  
  $('#app').append(title, link);
  new ColorButton($('#app'), ['red', 'green', 'blue', 'yellow']);
});
