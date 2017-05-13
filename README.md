# vue-card-layer
It is very simple vue-card-layer.

# Example
![example](./static/images/readme.gif)

# Install
~~~bash
$ git clone https://github.com/jicjjang/vue-card-layer
$ npm install
~~~

# Usage

##### If it was look difficult, See the index.html and src/index.js file.

## Vue.use
~~~javascript
import Vue from 'vue'

import App from './App.vue'
import VueCardLayer from '../vue-card-layer'

Vue.use(VueCardLayer, { // options
  cardWidth: '364px',
  cardHeight: '340px',
  cardListMaxWidth: ''
})

new Vue({
  el: "#app",
  render: h => h(App)
})

~~~

# License

### MIT License

#### Copyright (c) 2017 junseok

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
