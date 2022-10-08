import { render } from './render';
var h = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element')



var count = 0;


function createDiv(count) {
  return h('div', {
    style: {
      textAlign: 'center',
      lineHeight: (100 + count) + 'px',
      border: '1px solid red',
      width: (100 + count) + 'px',
      height: (100 + count) + 'px'
    }
  }, [String(count)]);
}

var tree = createDiv(count);               // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
debugger
document.body.appendChild(rootNode);




render()





