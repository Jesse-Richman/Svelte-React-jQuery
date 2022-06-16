import './style.css';
import $ from 'jquery';
import ColorButton from './components/ColorButton';
import ListControl from './components/ListControl';

$(function() {
  const $app = $('#app');
  new ColorButton($app, ['red', 'green', 'blue', 'yellow']);
  new ListControl($app, ['write code', 'think', 'fix code you wrote']);
});
