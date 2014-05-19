/** @jsx React.DOM */
var React = require('react');
var List = require('./list/list');

React.renderComponent(
  <List/>,
  document.getElementById('list')
);
