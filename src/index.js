import { render } from './render';
var h = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element')
import { useState, useEffect } from './hooks'

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
// document.body.appendChild(rootNode);



const rootEle = document.getElementById('root')
function caseEle() {
  let [text, textUpdate] = useState('hi')
  let [counter, counterUpdate] = useState(0)

  useEffect(() => {

  }, [])


  let React = {
    createElement
  }
  return (
    <div>hi</div>
  )
}




render(caseEle(), rootEle)





