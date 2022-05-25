import './style.css';
import $ from 'jquery';

$(function() {
  console.log('hello');
  let title = $('<h1>').text('Hello Vite!');
  let link = $('<a>').text('Documentation')
    .prop({ href: 'https://vitejs.dev/guide/features.html', target: '_blank' });
  
  $('#app').append(title, link);
});
