(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"186y":function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),r=a("Hk+Y"),l=a.n(r),i=a("5rCv"),s=a.n(i),c=a("xV1m"),d=a.n(c),u=a("32VJ"),p=a.n(u),f=a("1IiC"),h=a.n(f),m=a("E49Y"),g=a.n(m),y=a("ZPUd"),b=a.n(y),v=(a("91GP"),a("y4MT")),E={root:Object.assign({},v.h,{position:"relative",padding:"20px 15px",lineHeight:"20px",marginBottom:"20px",fontSize:"14px",backgroundColor:"white",color:"#555555",borderRadius:"0px",maxWidth:"100%",minWidth:"auto",boxShadow:"0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"}),info:Object.assign({backgroundColor:"#00d3ee",color:"#ffffff"},v.k),success:Object.assign({backgroundColor:"#5cb860",color:"#ffffff"},v.s),warning:Object.assign({backgroundColor:"#ffa21a",color:"#ffffff"},v.x),danger:Object.assign({backgroundColor:"#f55a4e",color:"#ffffff"},v.e),primary:Object.assign({backgroundColor:"#af2cc5",color:"#ffffff"},v.n),message:{padding:"0",display:"block",maxWidth:"89%"},close:{width:"14px",height:"14px"},iconButton:{width:"24px",height:"24px",float:"right",fontSize:"1.5rem",fontWeight:"500",lineHeight:"1",position:"absolute",right:"-4px",top:"0",padding:"0"},icon:{display:"block",float:"left",marginRight:"1.071rem"},container:Object.assign({},v.d,{position:"relative"})};var x=function(e){var t,a;function o(t){var a;(a=e.call(this,t)||this).closeAlert=a.closeAlert.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a));var o=t.classes,r=t.message,l=t.color,i=t.close,s=t.icon,c=[];void 0!==i&&(c=[n.a.createElement(h.a,{className:o.iconButton,key:"close","aria-label":"Close",color:"inherit",onClick:a.closeAlert},n.a.createElement(b.a,{className:o.close}))]);var d=null;switch(typeof s){case"function":d=n.a.createElement(t.icon,{className:o.icon});break;case"string":d=n.a.createElement(g.a,{className:o.icon},t.icon);break;default:d=null}return a.state={alert:n.a.createElement(p.a,{message:n.a.createElement("div",null,d,r,void 0!==i?c:null),classes:{root:o.root+" "+o[l],message:o.message+" "+o.container}})},a}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=o.prototype;return r.closeAlert=function(){this.setState({alert:null})},r.render=function(){return this.state.alert},o}(n.a.Component),k=l()(E)(x);var w=l()({clearfix:{"&:after,&:before":{display:"table",content:'" "'},"&:after":{clear:"both"}}})((function(e){var t=Object.assign({},e).classes;return n.a.createElement("div",{className:t.clearfix})})),C={section:{backgroundColor:"#FFFFFF",display:"block",width:"100%",position:"relative",padding:"0"},title:Object.assign({},v.v,{marginTop:"30px",minHeight:"32px",textDecoration:"none"}),container:v.d};var N=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props.classes;return n.a.createElement("div",{className:e.section,id:"notifications"},n.a.createElement("div",{className:e.container},n.a.createElement("div",{className:e.title},n.a.createElement("h3",null,"Notifications"))),n.a.createElement(k,{message:n.a.createElement("span",null,n.a.createElement("b",null,"INFO ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"info",icon:"info_outline"}),n.a.createElement(k,{message:n.a.createElement("span",null,n.a.createElement("b",null,"SUCCESS ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"success",icon:s.a}),n.a.createElement(k,{message:n.a.createElement("span",null,n.a.createElement("b",null,"WARNING ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"warning",icon:d.a}),n.a.createElement(k,{message:n.a.createElement("span",null,n.a.createElement("b",null,"DANGER ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"danger",icon:"info_outline"}),n.a.createElement(w,null))},o}(n.a.Component);t.default=l()(C)(N)},"1IiC":function(e,t,a){"use strict";a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=o(a("5Mw+"))},"32VJ":function(e,t,a){"use strict";a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=o(a("GTII"))},"5Mw+":function(e,t,a){"use strict";a("eM6i"),a("dZ+Y"),a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=o(a("pVnL")),r=o(a("lSNA")),l=o(a("QILm")),i=o(a("q1tI")),s=(o(a("17x9")),o(a("TSYQ"))),c=(a("j4Xf"),o(a("Hk+Y"))),d=a("wClv"),u=o(a("U0j5")),p=a("gasH"),f=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,d.fade)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}};function h(e){var t,a=e.children,o=e.classes,c=e.className,d=e.color,f=e.disabled,h=(0,l.default)(e,["children","classes","className","color","disabled"]);return i.default.createElement(u.default,(0,n.default)({className:(0,s.default)(o.root,(t={},(0,r.default)(t,o["color".concat((0,p.capitalize)(d))],"default"!==d),(0,r.default)(t,o.disabled,f),t),c),centerRipple:!0,focusRipple:!0,disabled:f},h),i.default.createElement("span",{className:o.label},a))}t.styles=f,h.defaultProps={color:"default",disabled:!1};var m=(0,c.default)(f,{name:"MuiIconButton"})(h);t.default=m},"5rCv":function(e,t,a){"use strict";a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),n.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),"Check");t.default=r},"6ZaM":function(e,t,a){"use strict";a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=o(a("v3sT"))},"8KHB":function(e,t,a){"use strict";a("8+KV"),a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=o(a("lSNA")),r=o(a("QILm")),l=o(a("pVnL")),i=o(a("q1tI")),s=(o(a("17x9")),o(a("TSYQ"))),c=(o(a("2W6z")),a("j4Xf"),o(a("Hk+Y"))),d=function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),(0,l.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:e.shape.borderRadius}},t)};function u(e){var t=e.classes,a=e.className,o=e.component,c=e.square,d=e.elevation,u=(0,r.default)(e,["classes","className","component","square","elevation"]),p=(0,s.default)(t.root,t["elevation".concat(d)],(0,n.default)({},t.rounded,!c),a);return i.default.createElement(o,(0,l.default)({className:p},u))}t.styles=d,u.defaultProps={component:"div",elevation:2,square:!1};var p=(0,c.default)(d,{name:"MuiPaper"})(u);t.default=p},GTII:function(e,t,a){"use strict";a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=o(a("pVnL")),r=o(a("QILm")),l=o(a("lSNA")),i=o(a("q1tI")),s=(o(a("17x9")),o(a("TSYQ"))),c=o(a("Hk+Y")),d=o(a("pPbJ")),u=o(a("6ZaM")),p=a("wClv"),f=function(e){var t,a="light"===e.palette.type?.8:.98,o=(0,p.emphasize)(e.palette.background.default,a);return{root:(t={color:e.palette.getContrastText(o),backgroundColor:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 24px"},(0,l.default)(t,e.breakpoints.up("md"),{minWidth:288,maxWidth:568,borderRadius:e.shape.borderRadius}),(0,l.default)(t,e.breakpoints.down("sm"),{flexGrow:1}),t),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:24,marginRight:-8}}};t.styles=f;var h=(0,c.default)(f,{name:"MuiSnackbarContent"})((function(e){var t=e.action,a=e.classes,o=e.className,l=e.message,c=(0,r.default)(e,["action","classes","className","message"]);return i.default.createElement(d.default,(0,n.default)({component:u.default,headlineMapping:{body1:"div",body2:"div"},role:"alertdialog",square:!0,elevation:6,className:(0,s.default)(a.root,o)},c),i.default.createElement("div",{className:a.message},l),t?i.default.createElement("div",{className:a.action},t):null)}));t.default=h},ZPUd:function(e,t,a){"use strict";a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Close");t.default=r},pPbJ:function(e,t,a){"use strict";a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=o(a("8KHB"))},v3sT:function(e,t,a){"use strict";a("V+eJ"),a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=o(a("pVnL")),r=o(a("lSNA")),l=o(a("QILm")),i=o(a("q1tI")),s=(o(a("17x9")),o(a("TSYQ"))),c=(a("j4Xf"),o(a("Hk+Y"))),d=a("gasH"),u=function(e){return{root:{display:"block",margin:0},display4:e.typography.display4,display3:e.typography.display3,display2:e.typography.display2,display1:e.typography.display1,headline:e.typography.headline,title:e.typography.title,subheading:e.typography.subheading,body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},inline:{display:"inline"}}};t.styles=u;var p={display4:"h1",display3:"h2",display2:"h3",display1:"h4",headline:"h5",title:"h6",subheading:"subtitle1"};var f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3"};function h(e){var t,a=e.align,o=e.classes,c=e.className,u=e.color,h=e.component,m=e.gutterBottom,g=e.headlineMapping,y=e.inline,b=(e.internalDeprecatedVariant,e.noWrap),v=e.paragraph,E=e.theme,x=e.variant,k=(0,l.default)(e,["align","classes","className","color","component","gutterBottom","headlineMapping","inline","internalDeprecatedVariant","noWrap","paragraph","theme","variant"]),w=function(e,t){var a=e.typography,o=t;return o||(o=a.useNextVariants?"body2":"body1"),a.useNextVariants&&(o=p[o]||o),o}(E,x),C=(0,s.default)(o.root,(t={},(0,r.default)(t,o[w],"inherit"!==w),(0,r.default)(t,o["color".concat((0,d.capitalize)(u))],"default"!==u),(0,r.default)(t,o.noWrap,b),(0,r.default)(t,o.gutterBottom,m),(0,r.default)(t,o.paragraph,v),(0,r.default)(t,o["align".concat((0,d.capitalize)(a))],"inherit"!==a),(0,r.default)(t,o.inline,y),t),c),N=h||(v?"p":g[w]||f[w])||"span";return i.default.createElement(N,(0,n.default)({className:C},k))}h.defaultProps={align:"inherit",color:"default",gutterBottom:!1,headlineMapping:f,inline:!1,noWrap:!1,paragraph:!1};var m=(0,c.default)(u,{name:"MuiTypography",withTheme:!0})(h);t.default=m},xV1m:function(e,t,a){"use strict";a("HAE/");var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),n.default.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),"Warning");t.default=r}}]);
//# sourceMappingURL=component---src-pages-components-sections-section-notifications-jsx-83998422bf551b4e18f4.js.map