(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[944],{2449:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var o=c(n(7294)),r=c(n(5697)),i=n(6674),u=n(7990);function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(c,t);var e,n,r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=l(c);return t=e?Reflect.construct(n,arguments,l(this).constructor):n.apply(this,arguments),t&&("object"===a(t)||"function"==typeof t)?t:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function c(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,c),r.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById(u.COMMENT_COUNT_SCRIPT_ID)?p():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),u.COMMENT_COUNT_SCRIPT_ID,t.body)}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.COMMENT_COUNT_SCRIPT_ID,t.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config),n=t.children,r=t.className,i=function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["shortname","config","children","className"]);return o.default.createElement("span",s({},i,{className:"".concat(u.COMMENT_COUNT_CLASS).concat(r?" ".concat(r):""),"data-disqus-identifier":e.identifier,"data-disqus-url":e.url}),n)}}],function(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(c.prototype,n),c}(o.default.Component);e.CommentCount=d,d.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string}).isRequired,className:r.default.string,children:r.default.node}},5890:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var o=u(n(7294)),r=u(n(5697)),i=n(7990);function u(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(i,t);var e,n,r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=f(i);return t=e?Reflect.construct(n,arguments,f(this).constructor):n.apply(this,arguments),t&&("object"===c(t)||"function"==typeof t)?t:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function i(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,i),r.apply(this,arguments)}return n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){var t=this.props,e=t.width,n=t.height,r=(t.commentId,t.showMedia,t.showParentComment,function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["width","height","commentId","showMedia","showParentComment"]));return o.default.createElement("iframe",a({},r,{src:this.getSrc(),width:e,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}],function(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(i.prototype,n),i}(o.default.Component);e.CommentEmbed=l,l.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},l.propTypes={commentId:r.default.string.isRequired,showMedia:r.default.bool,showParentComment:r.default.bool,width:r.default.number,height:r.default.number,className:r.default.string}},4811:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var o=c(n(7294)),r=c(n(5697)),i=n(6674),u=n(7990);function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(c,t);var e,n,r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=l(c);return t=e?Reflect.construct(n,arguments,l(this).constructor):n.apply(this,arguments),t&&("object"===a(t)||"function"==typeof t)?t:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function c(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,c),r.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById(u.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),u.EMBED_SCRIPT_ID,t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.EMBED_SCRIPT_ID,t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=t.getElementById(u.THREAD_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.sso&&(this.sso=t.sso),t.language&&(this.language=t.language),u.CALLBACKS.forEach(function(n){e.callbacks[n]=[t[n]]})}}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["shortname","config"]));return o.default.createElement("div",s({},e,{id:u.THREAD_ID}))}}],function(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(c.prototype,n),c}(o.default.Component);e.DiscussionEmbed=p,p.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string,categoryID:r.default.string,remoteAuthS3:r.default.string,apiKey:r.default.string,preData:r.default.func,preInit:r.default.func,onInit:r.default.func,onReady:r.default.func,afterRender:r.default.func,preReset:r.default.func,onIdentify:r.default.func,beforeComment:r.default.func,onNewComment:r.default.func,onPaginate:r.default.func,sso:r.default.shape({name:r.default.string,button:r.default.string,icon:r.default.string,url:r.default.string,logout:r.default.string,profile_url:r.default.string,width:r.default.string,height:r.default.string})}).isRequired}},4573:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Recommendations=void 0;var o=c(n(7294)),r=c(n(5697)),i=n(6674),u=n(7990);function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(c,t);var e,n,r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=l(c);return t=e?Reflect.construct(n,arguments,l(this).constructor):n.apply(this,arguments),t&&("object"===a(t)||"function"==typeof t)?t:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function c(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,c),r.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.language=t.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(u.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),u.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(u.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var t=window.document.getElementById(u.RECOMMENDATIONS_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["shortname","config"]));return o.default.createElement("div",s({},e,{id:u.RECOMMENDATIONS_ID}))}}],function(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(c.prototype,n),c}(o.default.Component);e.Recommendations=p,p.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string})}},7990:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CALLBACKS=e.RECOMMENDATIONS_SCRIPT_ID=e.RECOMMENDATIONS_ID=e.COMMENT_EMBED_HEIGHT=e.COMMENT_EMBED_WIDTH=e.COMMENT_COUNT_SCRIPT_ID=e.COMMENT_COUNT_CLASS=e.EMBED_SCRIPT_ID=e.THREAD_ID=void 0,e.THREAD_ID="disqus_thread",e.EMBED_SCRIPT_ID="dsq-embed-scr",e.COMMENT_COUNT_CLASS="disqus-comment-count",e.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr",e.COMMENT_EMBED_WIDTH=420,e.COMMENT_EMBED_HEIGHT=320,e.RECOMMENDATIONS_ID="disqus_recommendations",e.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr",e.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:(t,e,n)=>{"use strict";Object.defineProperty(e,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var o=n(2449),r=n(5890),i=n(4811),u=n(4573);o.CommentCount,r.CommentEmbed,i.DiscussionEmbed,u.Recommendations},6674:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(function(t){return t.remove()})},e.debounce=function(t,e,n){var o;return function(){var r=this,i=arguments,u=n&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,n||t.apply(r,i)},e),u&&t.apply(r,i)}},e.isReactElement=u,e.shallowComparison=function t(e,n){var o,c=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return i(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,void 0)}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,u=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return u=t.done,t},e:function(t){c=!0,r=t},f:function(){try{u||null==o.return||o.return()}finally{if(c)throw r}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(c.s();!(o=c.n()).done;){var a=o.value;if("object"===r(e[a])){if(t(e[a],n[a]))return!0}else if(e[a]!==n[a]&&!u(e[a]))return!0}}catch(t){c.e(t)}finally{c.f()}return!1};var o=function(t){return t&&t.__esModule?t:{default:t}}(n(7294));function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function u(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some(function(t){return o.default.isValidElement(t)})}},2703:(t,e,n)=>{"use strict";var o=n(414);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,i,u){if(u!==o){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5697:(t,e,n)=>{t.exports=n(2703)()},414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);