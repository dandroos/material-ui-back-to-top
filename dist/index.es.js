import o from"react";import{Fade as t,Fab as e,SvgIcon as i}from"@material-ui/core";
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
***************************************************************************** */var n=function(){return(n=Object.assign||function(o){for(var t,e=1,i=arguments.length;e<i;e++)for(var n in t=arguments[e])Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}).apply(this,arguments)},r=function(r){var s=n({buttonPosition:{bottom:15,right:15},fadeDuration:void 0,color:void 0,size:void 0,showText:!1,text:"Back to top",scrollPositionThreshold:200,buttonShowDuration:3e3,disableSmoothScroll:!1,scrollTopOffset:0,icon:void 0,FadeProps:{},FabProps:{style:{}}},r),a=o.useState(0),l=a[0],c=a[1],u=o.useState(),d=u[0],f=u[1],w=o.useState(!1),m=w[0],v=w[1];o.useEffect((function(){document.addEventListener("scroll",(function(){c(window.scrollY)}))}),[]),o.useEffect((function(){l>s.scrollPositionThreshold?(d&&(window.clearTimeout(d),f(void 0)),v(!0),f(window.setTimeout((function(){v(!1)}),s.buttonShowDuration))):(window.clearTimeout(d),f(void 0),v(!1))}),[l]);return o.createElement(t,n({in:m,timeout:s.fadeDuration?s.fadeDuration:void 0},s.FadeProps),o.createElement(e,n({color:s.color?s.color:void 0,variant:s.showText?"extended":void 0,size:s.size?s.size:void 0,onClick:function(){window.scrollTo({top:s.scrollTopOffset,behavior:s.disableSmoothScroll?"auto":"smooth"})},onMouseEnter:function(){d&&(window.clearTimeout(d),f(void 0)),v(!0)},onMouseLeave:function(){var o=window.setTimeout((function(){v(!1)}),s.buttonShowDuration);f(o)}},s.FabProps,{style:n(n(n({},s.FabProps.style),{position:"fixed"}),s.buttonPosition)}),s.icon?s.icon:o.createElement(i,null,o.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),s.showText&&s.text))};export{r as BackToTop};
//# sourceMappingURL=index.es.js.map
