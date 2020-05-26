!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("abc_select",[],e):"object"==typeof exports?exports.abc_select=e():t.abc_select=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=34)}({0:function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e),n.d(e,"setArray",(function(){return o})),n.d(e,"setArrayRange",(function(){return s})),n.d(e,"inArray",(function(){return r}));var o=function t(e,n){for(var o in e)"function"==typeof e[o]?e[o]=e[o]:"object"!==i(e[o])||"value"===o||"compare"===o?e[o]=o in n?n[o]:e[o]:"object"===i(e[o])&&n[o]&&n[o].length?e[o]=n[o]:"object"===i(e[o])&&(e[o]=o in n?t(e[o],n[o]):e[o]);return e},s=function(t,e,n){e.min=e.min?e.min:{},e.max=e.max?e.max:{};var i=e.name?n.querySelector('[name="'.concat(e.name,'"]')):n.querySelector('[name="'.concat(e.min.name,'"]'));i&&(e.min.value=i.value,e.min.min=i.getAttribute("min"));var s=!!e.max&&n.querySelector('[name="'.concat(e.max.name,'"]'));return s&&(e.max.value=s.value,e.max.max=s.getAttribute("max")),o(t,e)},r=function(t,e,n){var i=e.split(".");n=t;for(var o=i,s=function(t,e){n=void 0!==n[t]&&n[t]},r=0;r<o.length;r++)s(o[r]);return n}},1:function(t,e,n){"use strict";n.r(e),n.d(e,"error",(function(){return i})),n.d(e,"isTarget",(function(){return o})),n.d(e,"isTargetSelected",(function(){return s})),n.d(e,"closest",(function(){return r}));var i=function(t){console.error(t)},o=function(t,e){return e.target=t.target.hasAttribute("id")?t.target.getAttribute("id"):t.target.value,r(t.target,e.name,e.name)||t.target.getAttribute("name")===e.name},s=function(t,e,n){var i=t.target.getAttribute("rel");if(""===i||null===i||"default"===i||"all"===i)return!0;var o=i?n.querySelector('[name="'.concat(e.name,'"] [value="').concat(i,'"]')):t.target;return o?r(o,"select","select")||o.getAttribute("name")===e.name:void 0},r=function(t,e,n){for(var i=null;t;){if(t.matches(e)){i=t;break}if(n&&t.matches(n))break;t=t.parentElement}return i};Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1})},22:function(t,e,n){var i=n(23);t.exports={init:function(t){if(t.all){var e=document.querySelectorAll(t.target);if(!e)return;for(var n=e,o=function(e){return new i(e).construct(t)},s=0;s<n.length;s++)o(n[s])}else{var r=document.querySelector(t.target);if(!r)return;new i(r).construct(t)}}}},23:function(t,e,n){var i=n(0).setArray,o=n(1).closest,s=n(24),r=n(25),a=n(26);function u(t){this.input={multiple:!1,tag:"div",target:!1,open:!1,openClass:"abc-select--open"},this.el=t,this.open=!1,this.body=new r,this.head=new s,this.options=new a,this.focus=-1}t.exports=function(t){return new u(t)},u.prototype.bindEvents=function(){var t=this;document.addEventListener("click",(function(e){!0===t.open&&e.target!=t.body.target&&e.target!=o(e.target,t.body.className,t.body.className)&&e.target!=t.head.target&&e.target!=o(e.target,t.head.className,t.head.className)&&t.update(!1)})),this.head.target.addEventListener("click",(function(e){e.preventDefault(),t.update()})),this.head.target.addEventListener("keydown",(function(e){13===e.keyCode?t.update():[38,40].indexOf(e.keyCode)>-1?t.update(!0):[27].indexOf(e.keyCode)>-1&&(t.update(!1),t.options.els[t.focus].blur()),t.options.selected&&t.options.selected[0]?(t.focus=t.options.selected[0].index,t.options.selected[0].related.focus()):t.options.els[0].focus()})),this.body.target.addEventListener("keydown",(function(e){t.focus!=t.options.els.length-1&&40===e.keyCode&&(t.focus=t.focus+1),0!=t.focus&&38===e.keyCode&&(t.focus=t.focus-1),t.focus>-1&&[38,40].indexOf(e.keyCode)>-1&&(t.options.els[t.focus].focus(),t.input.multiple||(t.options.single(t.options.els[t.focus]),t.head.update(t.options))),t.focus>-1&&13===e.keyCode&&!t.input.multiple?(t.update(!1),t.options.els[t.focus].blur()):t.focus>-1&&13===e.keyCode&&t.input.multiple?(t.options.multi(t.options.els[t.focus]),t.head.update(t.options)):t.focus>-1&&[27,9].indexOf(e.keyCode)>-1&&(t.update(!1),t.options.els[t.focus].blur())}));for(var e=this.options.els,n=function(e){e.addEventListener("click",(function(){t.input.multiple?(t.options.multi(e),t.head.update(t.options)):(t.options.single(e),t.update(!1),e.blur())}))},i=0;i<e.length;i++)n(e[i])},u.prototype.update=function(t){this.open=t||!this.open,this.state()},u.prototype.construct=function(t){t&&(this.input=i(this.input,t)),0!=t.body&&t.body?this.body=i(this.body,t.body):!1===t.body&&(this.body=!1),0!=t.head&&t.head?this.head=i(this.head,t.head):!1===t.head&&(this.head=!1),0!=t.options&&t.options?this.options=i(this.options,t.options):!1===t.options&&(this.options=!1),this.create()},u.prototype.create=function(){this.options.options=this.el.options,this.options.selected=this.el.selectedOptions,this.container=document.createElement(this.input.tag),this.container.classList.add("abc-select"),this.el.parentNode.insertBefore(this.container,this.el),this.container.appendChild(this.el),this.head&&this.head.construct(this),this.body&&this.body.construct(this),this.head.default||(this.head.target.innerHTML=this.options.options[0].innerHTML),this.state(),this.bindEvents()},u.prototype.state=function(){this.open?this.container.classList.add(this.input.openClass):this.container.classList.remove(this.input.openClass),this.body.state(this.open),this.head.update(this.options)}},24:function(t,e){function n(){return this.tag="button",this.className="abc-select__head",this.default="",this.auto=!0,this.join=",",this.max_char=!1,this}t.exports=function(){return new n},n.prototype.construct=function(t){this.target=document.createElement(this.tag),t.container.appendChild(this.target),this.target.classList.add(this.className),this.target.setAttribute("aria-hasPopup","listbox"),this.default=this.default?this.default:t.options.options[0].innerHTML,this.target.innerHTML=this.default},n.prototype.update=function(t){if(this.auto){var e=t.selected&&t.selected.length>0?t.default.join(this.join):this.default;this.target.innerHTML=this.max_char&&e.length>this.max_char?e.slice(0,this.max_char)+"…":e}}},25:function(t,e){function n(){return this.tag="ul",this.className="abc-select__body",this.target=!1,this.auto_height=!0,this.close=0,this}t.exports=function(){return new n},n.prototype.construct=function(t){this.target=document.createElement(t.body.tag),t.container.appendChild(this.target),t.options&&(this.els=t.options.construct(this.target)),this.target.classList.add(this.className),this.target.setAttribute("role","listbox"),this.target.setAttribute("tabindex","-1"),this.auto_height&&this.setHeight()},n.prototype.setHeight=function(){this.height=this.getHeight(),this.target.style.height="".concat(this.height,"px")},n.prototype.getHeight=function(){return this.target.scrollHeight},n.prototype.state=function(t){this.target.style.height="".concat(t?this.height:this.close,"px")}},26:function(t,e){function n(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(){this.tag="li",this.className="abc-select__item",this.targets=!1,this.values=[],this.els=[],this.default=[]}t.exports=function(){return new i},i.prototype.construct=function(t){for(var e=this,i=this.options,o=function(n){for(var i=document.createElement(e.tag),o=n.attributes,s=function(t){"value"===t.name&&t.value?i.setAttribute("abc-value",t.value):"id"===t.name&&t.value?i.setAttribute("abc-".concat(t.name),t.value):t.name&&t.value&&i.setAttribute(t.name,t.value)},r=0;r<o.length;r++)s(o[r]);i.innerHTML=n.innerHTML,i.setAttribute("role","option"),i.setAttribute("tabindex","-1"),i.classList.add(e.className),i.related=n,n.related=i,t.appendChild(i),e.els.push(i)},s=0;s<i.length;s++)o(i[s]);for(var r=n(this.selected),a=function(t){return t.value},u=[],c=0;c<r.length;c++)u.push(a(r[c]));return this.values=u,this.default=this.selected?n(this.selected).map((function(t){return t.innerHTML})):this.options[0].innerHTML,this.els},i.prototype.single=function(t){for(var e=this,n=this.els,i=function(n){n!=t?(n.removeAttribute("selected"),n.removeAttribute("aria-selected"),n.related.removeAttribute("selected")):(n.setAttribute("selected","selected"),n.setAttribute("aria-selected",!0),n.related.setAttribute("selected","selected"),e.selected=[n],e.default=[n.innerHTML],e.values=[n.value])},o=0;o<n.length;o++)i(n[o])},i.prototype.multi=function(t){if(t.hasAttribute("selected")){t.removeAttribute("selected"),t.related.removeAttribute("selected");var e=this.default.indexOf(t.related.innerHTML),n=this.values.indexOf(t.related.value);e>-1&&this.default.splice(e,1),n>-1&&this.values.splice(n,1)}else t.setAttribute("selected","selected"),t.related.setAttribute("selected","selected"),t.setAttribute("aria-selected",!0),this.default.push(t.related.innerHTML),this.values.push(t.related.value)}},34:function(t,e,n){t.exports=n(22)}})}));