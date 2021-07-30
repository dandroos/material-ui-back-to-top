"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=require("react"),t=require("@material-ui/core");function e(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var i=e(o),n=function(){return(n=Object.assign||function(o){for(var t,e=1,i=arguments.length;e<i;e++)for(var n in t=arguments[e])Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}).apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */exports.BackToTop=function(o){var e=n({buttonPosition:{bottom:15,right:15},fadeDuration:void 0,color:void 0,size:void 0,showText:!1,text:"Back to top",scrollPositionThreshold:200,buttonShowDuration:3e3,disableSmoothScroll:!1,scrollTopOffset:0,icon:void 0,FadeProps:{},FabProps:{style:{}}},o),r=i.default.useState(0),a=r[0],u=r[1],l=i.default.useState(),s=l[0],c=l[1],d=i.default.useState(!1),f=d[0],v=d[1];i.default.useEffect((function(){document.addEventListener("scroll",(function(){u(window.scrollY)}))}),[]),i.default.useEffect((function(){a>e.scrollPositionThreshold?(s&&(window.clearTimeout(s),c(void 0)),v(!0),c(window.setTimeout((function(){v(!1)}),e.buttonShowDuration))):(window.clearTimeout(s),c(void 0),v(!1))}),[a]);return i.default.createElement(t.Fade,n({in:f,timeout:e.fadeDuration?e.fadeDuration:void 0},e.FadeProps),i.default.createElement(t.Fab,n({color:e.color?e.color:void 0,variant:e.showText?"extended":void 0,size:e.size?e.size:void 0,onClick:function(){window.scrollTo({top:e.scrollTopOffset,behavior:e.disableSmoothScroll?"auto":"smooth"})},onMouseEnter:function(){s&&(window.clearTimeout(s),c(void 0)),v(!0)},onMouseLeave:function(){var o=window.setTimeout((function(){v(!1)}),e.buttonShowDuration);c(o)}},e.FabProps,{style:n(n(n({},e.FabProps.style),{position:"fixed"}),e.buttonPosition)}),e.icon?e.icon:i.default.createElement(t.SvgIcon,null,i.default.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),e.showText&&e.text))};
//# sourceMappingURL=index.js.map
