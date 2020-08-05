!function(e){function t(t){for(var n,s,c=t[0],o=t[1],l=t[2],d=0,m=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(t);m.length;)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={0:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([144,1]),a()}({101:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);a(101);var n=a(0),r=a.n(n),i=a(52),s=a.n(i),c=a(9),o=a(5),l=a.n(o),u=a(7),d=a.n(u),m=a(2),f=a.n(m),p=a(17),h=a.n(p),b=function(e){var t=e.webmapId,a=e.initialMapCenterLocation,i=e.onStationary,s=e.children,o=r.a.useRef(),u=r.a.useState(null),m=f()(u,2),p=m[0],h=m[1],b=function(){var e=d()(l.a.mark((function e(){var n,r,i,s,u,d,m,p,b,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.loadModules)(["esri/views/MapView","esri/WebMap"]);case 3:n=e.sent,r=f()(n,2),i=r[0],s=r[1],d=(u=a||{}).lat,m=u.lon,p=u.zoom,b=m&&d?[m,d]:void 0,(v=new i({container:o.current,center:b,zoom:p,map:new s({portalItem:{id:t}})})).when((function(){h(v)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=d()(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.loadModules)(["esri/core/watchUtils"]);case 3:t=e.sent,a=f()(t,1),a[0].whenTrue(p,"stationary",(function(){if(-1!==p.zoom){var e={lat:p.center&&p.center.latitude?+p.center.latitude.toFixed(3):0,lon:p.center&&p.center.longitude?+p.center.longitude.toFixed(3):0,zoom:p.zoom};i(e)}})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Object(c.loadCss)(),b()}),[]),r.a.useEffect((function(){p&&v()}),[p]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:o}),r.a.Children.map(s,(function(e){return r.a.cloneElement(e,{mapView:p})})))},v=function(e){var t=e.activeTrend,a=e.features,r=e.visibleScale,i=e.size,s=void 0===i?20:i,o=e.mapView,u=Object(n.useState)(),m=f()(u,2),p=m[0],h=m[1],b=Object(n.useState)(!1),v=f()(b,2),y=v[0],g=v[1],E=function(){var e=d()(l.a.mark((function e(){var t,a,n,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.loadModules)(["esri/layers/GraphicsLayer","esri/core/watchUtils"]);case 3:t=e.sent,a=f()(t,2),n=a[0],i=a[1],s=new n({minScale:r&&r.min,maxScale:r&&r.max}),o.map.add(s),h(s),i.whenTrue(o,"stationary",(function(){var e=o.scale<r.min&&o.scale>r.max;g(e)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=d()(l.a.mark((function e(a){var n,r,i,o,u,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.loadModules)(["esri/symbols/CIMSymbol","esri/Graphic","esri/geometry/Point"]);case 3:n=e.sent,r=f()(n,3),i=r[0],o=r[1],u=r[2],d=a.map((function(e){var a=e.geometry,n={confirmed:e.confirmed,death:e.deaths,"new-cases":e.newCases}[t],r=n.frame,c=n.path,l=new i({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,scaleSymbolsProportionally:!1,respectFrame:!1,size:s,frame:r,markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[c]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:1,color:[161,13,34,255]}]}}]}]}}});return new o({geometry:new u({latitude:a.y,longitude:a.x}),symbol:l})})),p.addMany(d),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o&&E()}),[o]),Object(n.useEffect)((function(){p&&a&&(p.removeAll(),y&&w(a))}),[p,a,t]),Object(n.useEffect)((function(){a&&y&&!p.graphics.length&&w(a)}),[y]),null},y=function(e){var t=e.itemId,a=e.outFields,r=e.mapView,i=e.visibleScale,s=e.onStart,o=e.onSelect,u=Object(n.useState)(),m=f()(u,2),p=m[0],h=m[1],b=function(){var e=d()(l.a.mark((function e(){var a,n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.loadModules)(["esri/layers/FeatureLayer"]);case 3:a=e.sent,n=f()(a,1),r=n[0],s=new r({portalItem:{id:t},minScale:i&&i.min,maxScale:i&&i.max}),h(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=d()(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.scale<p.minScale&&r.scale>p.maxScale)){e.next=6;break}return s(),e.next=4,p.queryFeatures({where:"1=1",geometry:r.toMap(t),returnGeometry:!0,outFields:a||["*"]});case 4:n=e.sent,o(n.features&&n.features.length?n.features[0]:void 0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r&&b()}),[r]),Object(n.useEffect)((function(){p&&r&&r.on("click",(function(e){v(e)}))}),[p]),null},g={"webmap-id":"1bff921ddf7044c3b5ba34e8494a2073","us-states-feature-layer-item-id":"99fd67933e754a1181cc755146be21ca","us-counties-feature-layer-item-id":"7566e0221e5646f99ea249a197116605","static-files-host":"https://static.vannizhang.com/covid19/","covid19-data-us-states-json":"us-states-paths.json","covid19-data-us-counties-json":"us-counties-paths.json","us-counties-layer-visible-scale":{min:75e5,max:0},"us-states-layer-visible-scale":{min:73957190,max:7500001}},E="#A10D22",w="#E8E2D2",x="#EFEADB",O="#B1A483",j="#B2A584",S=[{label:"WEEKLY CASES",value:"new-cases"},{label:"CASES",value:"confirmed"},{label:"DEATHS",value:"death"}],k=function(e){var t=e.isMobile,a=e.activeTrend,n=e.activeTrendOnChange,i=e.infoBtnOnClick;return r.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",left:t?"10px":"unset",maxWidth:"420px",boxShadow:"0 0 10px 2px #B1A483"}},r.a.createElement("div",{style:{backgroundColor:E,color:x,lineHeight:"20px",width:"100%",textAlign:"center"}},r.a.createElement("span",{className:"avenir-bold",style:{fontSize:"11px"}},"COVID-19 TRENDS PER 100,000 PEOPLE, SINCE FEBRUARY, UPDATED DAILY")),r.a.createElement("div",{style:{display:"flex",height:"60px",width:"100%",boxSizing:"border-box",backgroundColor:w}},S.map((function(e){var i=e.value,s=e.label;return r.a.createElement("div",{key:i,style:{width:t?"auto":"120px",flexGrow:t?1:0,height:"100%",color:E,backgroundColor:a===i?x:"transparent",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",borderBottom:"solid 4px ".concat(a===i?E:"transparent"),borderRight:"solid 1px #E0D8C1",cursor:"pointer"},onClick:n.bind(void 0,i)},r.a.createElement("span",{className:"avenir-bold",style:{fontSize:"12px"}},s))})),r.a.createElement("div",{style:{width:"60px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},onClick:i},r.a.createElement("svg",{viewBox:"0 0 24 24",height:"24",width:"24",fill:j},r.a.createElement("path",{d:"M12.5 7.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1zM13 18V9h-2v1h1v8h-1v1h3v-1zm9.8-5.5A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"}),r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})))))},C=a(23),N=a.n(C),M=a(6),F=a(53),A=a.n(F);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){N()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D={top:15,right:20,bottom:30,left:40},I=function(e){var t=e.xDomain,a=e.yDomain,i=e.children,s=A()(),c=Object(n.useRef)(),o=Object(n.useRef)(),l=r.a.useState(),u=f()(l,2),d=u[0],m=u[1],p=r.a.useState(),h=f()(p,2),b=h[0],v=h[1],y=function(){v((function(e){return P(P({},e),{},{lastUpdateTime:new Date})}))};return Object(n.useEffect)((function(){!function(){var e=c.current,n=e.offsetWidth-D.left-D.right,r=e.offsetHeight-D.top-D.bottom;o.current={height:r,width:n},Object(M.i)(e).append("svg").attr("width","100%").attr("height",r+D.top+D.bottom).append("g").attr("transform","translate(".concat(D.left,", ").concat(D.top,")"));var i=Object(M.i)(e).select("svg"),s=i.node(),l=i.select("g").node(),u=Object(M.f)().paddingInner(.2).range([0,n]).domain(t),d=Object(M.g)().range([r,0]).domain(a).nice();m({svg:s,g:l,margin:D,dimension:o.current}),v({x:u,y:d})}()}),[]),Object(n.useEffect)((function(){b&&a&&(b.y.domain(a).nice(),y())}),[a]),r.a.useEffect((function(){!function(){var e=c.current;if(e&&d&&b){var t=b.x,a=e.offsetWidth-D.left-D.right;o.current.width=a,t.range([0,a]),y()}}()}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:c,style:{position:"relative",width:"100%",height:"100%"}}),r.a.Children.map(i,(function(e){return r.a.cloneElement(e,{svgContainerData:d,scales:b})})))},z=a(8),L=Object(M.j)("%b"),R=function(e){var t=e.svgContainerData,a=e.scales;return r.a.useEffect((function(){var e,n,r,i,s,c,o,l,u,d,m,f,p;t&&a&&(e=t.dimension,n=t.g,r=e.height,i=e.width,s=Object(M.i)(n),c=a.x.domain(),o=c[0].split("-").map((function(e){return+e})),l=new Date(o[0],o[1]-1,o[2]),u=c[c.length-1].split("-").map((function(e){return+e})),d=new Date(u[0],u[1]-1,u[2]),m=Object(M.h)().range([0,i]).domain([l,d]),f=Object(M.a)(m).tickFormat((function(e){return L(e)})),(p=s.selectAll(".x.axis")).size()?p.attr("transform","translate(0,"+r+")").call(f):s.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").call(f),function(){var e=t.g,n=t.dimension.width,r=a.y,i=Object(M.i)(e),s=Object(M.b)(r).ticks(3).tickSizeInner(-n).tickPadding(5).tickFormat((function(e){return z.numberFns.abbreviateNumber(+e,0)})),c=i.selectAll(".y.axis");c.size()?c.call(s):i.append("g").attr("class","y axis").call(s)}())}),[t,a]),null},B=a(18),W="bar-rect-group-".concat(Object(B.generate)()),U="bar-rect-".concat(Object(B.generate)()),_=function(e){var t=e.data,a=e.fillColor,n=e.svgContainerData,i=e.scales,s=r.a.useRef(),c=function(){var e=Object(M.i)(s.current).selectAll(".".concat(W));e.size()&&e.remove()};return r.a.useEffect((function(){var e;n&&(e=n.g,s.current=Object(M.i)(e).append("g").node())}),[n]),r.a.useEffect((function(){var e,r,o;n&&i&&t&&(e=n.dimension.height,r=i.x,o=i.y,c(),Object(M.i)(s.current).append("g").attr("class",W).selectAll(".".concat(U)).data(t).enter().append("rect").attr("class",U).style("fill",a).attr("x",(function(e){return r(e.x)})).attr("width",r.bandwidth()).attr("y",(function(e){return o(e.y)})).attr("height",(function(t){return e-o(t.y)})))}),[i,t]),null},H="line-".concat(Object(B.generate)()),G=function(e){var t=e.data,a=e.strokeColor,n=e.svgContainerData,i=e.scales,s=r.a.useRef(),c=function(){var e=Object(M.i)(s.current).selectAll(".".concat(H));e.size()&&e.remove().exit()};return r.a.useEffect((function(){var e;n&&(e=n.g,s.current=Object(M.i)(e).append("g").node())}),[n]),r.a.useEffect((function(){var e,r,o,l,u;n&&i&&t&&(e=Object(M.i)(s.current),r=i.x,o=i.y,l=r.bandwidth()/2,u=Object(M.c)().x((function(e){return r(e.x)+l})).y((function(e){return o(e.y)})),c(),e.append("path").data([t]).attr("class",H).attr("d",u).style("fill","none").style("stroke",a).style("stroke-width",2))}),[i,t]),null},V=function(e){var t=e.data,a=e.svgContainerData,i=e.scales,s=e.onHover,c=r.a.useRef(),o=r.a.useRef(),l=function(e){o.current=e,u(),s(e)},u=function(){var e=i.x,t=o.current,a=Object(M.i)(c.current).select(".".concat("vertical-ref-line")),n=t?e(t.attributes.dt)+e.bandwidth()/2:0,r=t?1:0;a.attr("x1",n).attr("x2",n).style("opacity",r)},d=function(e){for(var a=-1,n=i.x,r=0,s=t.length;r<s;r++){var c=n(t[r].attributes.dt),o=t[r+1]?r+1:r,l=n(t[o].attributes.dt);if(e>=c&&e<=l){a=Math.abs(e-c)<Math.abs(e-l)?r:o;break}}return t[a]};return Object(n.useEffect)((function(){a&&t.length&&function(){var e=a.g,t=a.dimension,n=t.height,r=t.width;c.current=Object(M.i)(e).append("g").node();var i=Object(M.i)(c.current);i.append("line").attr("class","vertical-ref-line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",n).style("opacity",0).attr("stroke-width",.5).attr("stroke","rgba(255,255,255,.75)").style("fill","none"),i.append("rect").attr("width",r).attr("height",n).attr("fill","rgba(0,0,0,0)").on("mouseleave",(function(){l(null)})).on("mousemove",(function(){var e=Object(M.e)(this)[0];l(d(e))}))}()}),[a,t]),Object(n.useEffect)((function(){if(a&&i){var e=a.dimension.width;Object(M.i)(c.current).select("rect").attr("width",e)}}),[i]),null},q=function(e){var t,a,i,s,c,o,l,u,d,m,p=e.svgContainerData,h=e.scales,b=e.data,v=r.a.useRef(),y=r.a.useState({top:0,left:0}),g=f()(y,2),E=g[0],w=g[1];return Object(n.useEffect)((function(){!function(){var e=v.current;if(e){var t=p.dimension,a=p.margin,n=t.width,r=h.x,i=(h.y,e.offsetWidth),s=-(e.offsetHeight/2-a.top),c=r(b.attributes.dt)+a.left,o=c+i/2>=n+a.left?c-i:c-i/2;o=o>=a.left?o:a.left,w({top:s,left:o})}}()}),[b]),b?(t=E.top,a=E.left,i=b.attributes,s=i.dt,c=i.Confirmed,o=i.Deaths,l=i.NewCases,i.Population,u=z.numberFns.numberWithCommas(l),d=z.numberFns.numberWithCommas(c),m=z.numberFns.numberWithCommas(o),r.a.createElement("div",{ref:v,style:{position:"absolute",left:"".concat(a,"px"),top:"".concat(t,"px"),padding:"7px 10px",background:x,color:"#fff",pointerEvents:"none",boxSizing:"border-box",boxShadow:"0 0 10px 2px ".concat(O)}},r.a.createElement("div",{className:"font-size--3 avenir-demi"},r.a.createElement("span",{className:"text-theme-color-khaki"},s)),r.a.createElement("div",{className:"font-size--2 avenir-bold"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-theme-color-khaki"},"new cases: ",r.a.createElement("span",{className:"text-theme-color-red"},u))),r.a.createElement("div",null,r.a.createElement("span",{className:"text-theme-color-khaki"},"cumulative cases: ",r.a.createElement("span",{className:"text-theme-color-red"},d))),r.a.createElement("div",null,r.a.createElement("span",{className:"text-theme-color-khaki"},"cumulative deaths: ",r.a.createElement("span",{className:"text-theme-color-red"},m)))))):null},J={"new-cases":"NewCases",death:"Deaths",confirmed:"Confirmed"},Y=function(e){var t,a=e.activeTrend,i=e.data,s=J[a],c=Object(n.useState)(!1),o=f()(c,2),l=o[0],u=(o[1],Object(n.useState)()),d=f()(u,2),m=d[0],p=d[1],h=function(){if(!i||!i.length||"new-cases"!==a)return[];for(var e=[],t=i.length-1;t>0;t--){var n=i[t],r=n.attributes.dt,c=0,o=t-6>=0?t-6:0,u=t+1,d=i.slice(o,u);d.forEach((function(e){return c+=e.attributes[s]}));var m=c/d.length;l&&(m=m/n.attributes.Population*1e5),m=(m=Math.round(m))<0?0:m,e.push({x:r,y:m})}return e};return r.a.createElement("div",{style:{width:"100%",height:"170px",backgroundColor:x}},i&&i.length?r.a.createElement(I,{xDomain:i.map((function(e){return e.attributes.dt})),yDomain:(t=i.map((function(e){return l?Math.round(e.attributes[s]/e.attributes.Population*1e5):e.attributes[s]})),[0,Object(M.d)(t)||1])},r.a.createElement(R,null),r.a.createElement(_,{fillColor:j,data:i&&i.length?i.map((function(e){var t=l?Math.round(e.attributes[s]/e.attributes.Population*1e5):e.attributes[s];return{x:e.attributes.dt,y:t}})):[]}),r.a.createElement(G,{strokeColor:E,data:h()}),r.a.createElement(q,{data:m}),r.a.createElement(V,{data:i,onHover:p})):null)},K=function(e){var t=e.showLoadingIndicator,a=e.children;return r.a.createElement("div",{style:{position:"absolute",left:"15px",right:"15px",bottom:"25px",boxSizing:"border-box",boxShadow:"0 0 10px 2px ".concat(O),backgroundColor:x}},t?r.a.createElement("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"225px"}},r.a.createElement("div",{className:"loader is-active"},r.a.createElement("div",{className:"loader-bars"}))):a)},Q=a(147),X=a(146),Z=a(148);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(Object(a),!0).forEach((function(t){N()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var te=function(e){var t=e.locationName,a=e.data,n=e.isMobile,i=void 0!==n&&n,s=e.closeBtnOnClick;return r.a.createElement("div",{style:{position:"relative",width:"100%",padding:".4rem 1.35rem",display:i?"block":"flex",alignItems:"center",boxSizing:"border-box",backgroundColor:w}},r.a.createElement("div",{style:{color:E,textTransform:"uppercase",maxWidth:i?"320px":"auto"}},r.a.createElement("span",{className:"avenir-bold font-size-2"},t)),r.a.createElement("div",{style:{flexGrow:1}},function(){if(!a||!a.length)return null;var e=a[a.length-7],t=a[a.length-1],n=z.numberFns.numberWithCommas(t.attributes.Confirmed),s=z.numberFns.numberWithCommas(t.attributes.Deaths),c=z.numberFns.numberWithCommas(t.attributes.Confirmed-e.attributes.Confirmed),o=z.numberFns.numberWithCommas(t.attributes.Deaths-e.attributes.Deaths),l=z.numberFns.numberWithCommas(t.attributes.Population),u={padding:i?"0":"0 .65rem",borderRight:i?"none":"solid 1px rgba(178, 165, 132, .5)",display:i?"block":"flex",alignItems:"center"};return r.a.createElement("div",{className:"font-size--2 avenir-bold text-theme-color-khaki",style:{display:i?"block":"flex",alignItems:"strech",padding:"0 ".concat(i?"0":"1rem")}},r.a.createElement("div",{style:ee(ee({},u),{},{display:"block"})},r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},"Biggest Weekly Jump")," ",i?null:r.a.createElement("br",null)," ",function(){for(var e=a[0],t=Number.NEGATIVE_INFINITY,n=Object(Q.a)(a[0].attributes.dt,"yyyy-MM-dd",new Date),r=Object(X.a)(n),i=0,s=a.length;i<s;i++){var c=i%7+r;if(1===(c=c>7?c-7:c)){var o=a[i].attributes.Confirmed-(i-6>=0?a[i-6]:a[0]).attributes.Confirmed;o>t&&(t=o,e=a[i])}}var l=Object(Q.a)(e.attributes.dt,"yyyy-MM-dd",new Date);return Object(Z.a)(l,"MMMM dd, yyyy")}())),r.a.createElement("div",{style:u},r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},"Population")," ",l)),r.a.createElement("div",{style:u},r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},c)," new cases and ",r.a.createElement("span",{className:"text-theme-color-red"},o)," deaths this week")),r.a.createElement("div",{style:ee(ee({},u),{},{borderRight:"none"})},r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},n)," cumulative cases and ",r.a.createElement("span",{className:"text-theme-color-red"},s)," deaths")))}()),r.a.createElement("div",{style:ee({cursor:"pointer"},i?{position:"absolute",top:".5rem",right:".5rem"}:null),onClick:s},r.a.createElement("svg",{viewBox:"0 0 32 32",height:"32",width:"32",fill:j},r.a.createElement("path",{d:"M23.985 8.722L16.707 16l7.278 7.278-.707.707L16 16.707l-7.278 7.278-.707-.707L15.293 16 8.015 8.722l.707-.707L16 15.293l7.278-7.278z"}),r.a.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}))))},ae=function(e){var t=e.queryResult,a=e.mapView,r=Object(n.useState)(),i=f()(r,2),s=i[0],o=i[1],u=function(){var e=d()(l.a.mark((function e(){var t,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.loadModules)(["esri/layers/GraphicsLayer"]);case 3:t=e.sent,n=f()(t,1),r=n[0],i=new r,a.map.add(i),o(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=d()(l.a.mark((function e(){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.loadModules)(["esri/symbols/SimpleFillSymbol"]);case 2:a=e.sent,n=f()(a,1),r=n[0],t.symbol=new r({color:[0,0,0,0],outline:{color:"rgba(178,165,132,.7)",width:1}}),s.add(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a&&u()}),[a]),Object(n.useEffect)((function(){s&&(s.removeAll(),t&&m())}),[t]),null},ne=(a(143),a(31)),re=function(e){var t=e.isOpen,a=e.closeBtnOnClicked;return Object(n.useEffect)((function(){Object(ne.modal)()}),[]),Object(n.useEffect)((function(){t?ne.bus.emit("modal:open",{id:"about"}):ne.bus.emit("modal:close")}),[t]),r.a.createElement("div",{className:"js-modal modal-overlay about-modal","data-modal":"about"},r.a.createElement("div",{className:"modal-content column-20",role:"dialog","aria-labelledby":"modal"},r.a.createElement("div",{className:"close-btn",onClick:a},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24"},r.a.createElement("path",{d:"M18.01 6.697L12.707 12l5.303 5.303-.707.707L12 12.707 6.697 18.01l-.707-.707L11.293 12 5.99 6.697l.707-.707L12 11.293l5.303-5.303z"}))),r.a.createElement("div",{className:"block-group block-group-3-up"},r.a.createElement("div",{className:"block"},r.a.createElement("h4",{className:"header-red avenir-bold"},"WEEKLY CASES"),r.a.createElement("p",null,"These lines mark the weekly averages of new cases, per 100,000 population, per week—useful for showing the local fluctuations of cases throughout the outbreak. When seen together regional patterns emerge. The Y-axis of these charts are scaled to fit the maximum weekly increase when new cases are greater than 25 per 100,000. Please see the note on the Y-axis below for an explanation.")),r.a.createElement("div",{className:"block"},r.a.createElement("h4",{className:"header-red avenir-bold"},"CASES"),r.a.createElement("p",null,"These lines track the ongoing cumulative number of cases, per 100,000 population, per week. Because it is a cumulative count, the lines will never trend downward, though their rate of increase over time can provide an impression of the local history of the outbreak. An upward-bending line indicates a slow start and rapidly rising outbreak. A generally diagonal line indicates a consistent rate of transmission. An s-shaped line indicates a local “flattening of the curve” associated with a decrease in local cases. A stair-stepped line indicates multiple waves of transmission.")),r.a.createElement("div",{className:"block"},r.a.createElement("h4",{className:"header-red avenir-bold"},"DEATHS"),r.a.createElement("p",null,"These lines track the ongoing cumulative number of deaths, per 100,000 population. Interpretations of these lines is consistent with the description of cases, above. Given the incubation and illness period of the virus, this line will show a similar pattern, though with a lag, compared to cases."))),r.a.createElement("div",null,r.a.createElement("h4",{className:"header-khaki avenir-bold"},"ABOUT THE Y-AXIS"),r.a.createElement("p",null,"Each trend line has a dynamic y-axis such that if the maximum rate of cases exceeds 25 cases per 100,000 population (quite high), then the height is compressed to fit into the rectangular bounds of the chart container. While this prevents a direct comparison between locations, it ensures that areas with very low populations (and therefore highly fluctuating case rates) do not by comparison suppress (to nearly flat) the rates of moderate and high-population areas. This compromise allows for a general visual reference of local trends while specific counts can be accessed when a location is selected.")),r.a.createElement("div",null,r.a.createElement("h4",{className:"header-khaki avenir-bold"},"SOURCES"),r.a.createElement("p",null,"These counts are sourced from the Johns Hopkins University features service of ",r.a.createElement("a",{href:"https://services9.arcgis.com/6Hv9AANartyT7fJW/ArcGIS/rest/services"},"US County Cases")," and normalized into rates using ",r.a.createElement("a",{href:"https://www.arcgis.com/home/item.html?id=99fd67933e754a1181cc755146be21ca"},"state")," and ",r.a.createElement("a",{href:"https://www.arcgis.com/home/item.html?id=7566e0221e5646f99ea249a197116605"},"county")," populations from the US Census Bureau accessed via ",r.a.createElement("a",{href:"https://livingatlas.arcgis.com/en/browse/#d=2&q=usa%20population"},"Living Atlas"),". The Khaki basemap is ",r.a.createElement("a",{href:"https://livingatlas.arcgis.com/en/browse/#d=2&q=khaki"},"available via Living Atlas"),".")),r.a.createElement("div",null,r.a.createElement("h4",{className:"header-khaki avenir-bold"},"CREATORS"),r.a.createElement("p",null,"This application was created by ",r.a.createElement("a",{href:"https://github.com/vannizhang/"},"Jinnan Zhang")," and ",r.a.createElement("a",{href:"https://adventuresinmapping.com/"},"John Nelson"),", of Esri, with help from ",r.a.createElement("a",{href:"https://github.com/ycabon"},"Yann Cabon"),", inspired by the ",r.a.createElement("a",{href:"https://datagistips.hypotheses.org/488"},"trend line maps of Mathieu Rajerison")," and the ",r.a.createElement("a",{href:"https://twitter.com/rileydchampine/status/1243552850728411143"},"local 1918 flu charts of Riley D. Champine"),". We are not medical professionals but saw a need for a visual sense of local rates and trends and created this primarily as a resource for ourselves but are making it available to the public in the event that it is a helpful resource for understanding patterns. We make no claims of officiality and share it only as a reference."))))},ie={},se=function(){var e=d()(l.a.mark((function e(t){var a,n,r,i,s,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.countyFIPS,n=t.stateName,!ie[r=a||n]){e.next=4;break}return e.abrupt("return",ie[r]);case 4:return i="".concat("https://services9.arcgis.com/6Hv9AANartyT7fJW/ArcGIS/rest/services/USCounties_cases_V1/FeatureServer/1","/query"),s=a?{f:"json",where:"FIPS='".concat(a,"'"),outFields:"dt,Confirmed,Deaths,NewCases,Population",orderByFields:"dt"}:{f:"json",where:"ST_Name='".concat(n,"'"),outFields:"*",orderByFields:"dt",groupByFieldsForStatistics:"ST_Name,dt",outStatistics:JSON.stringify([{statisticType:"sum",onStatisticField:"Confirmed",outStatisticFieldName:"Confirmed"},{statisticType:"sum",onStatisticField:"Deaths",outStatisticFieldName:"Deaths"},{statisticType:"sum",onStatisticField:"NewCases",outStatisticFieldName:"NewCases"},{statisticType:"sum",onStatisticField:"Population",outStatisticFieldName:"Population"}])},e.prev=6,e.next=9,h.a.get(i,{params:new URLSearchParams(s)});case 9:if(c=e.sent,!(o=c.data)||!o.features){e.next=14;break}return ie[r]=o.features,e.abrupt("return",o.features);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6);case 19:return e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(n.useState)(function(){var e=z.urlFns.parseQuery();if(!e["@"])return null;var t=e["@"].split(",").map((function(e){return+e})),a=f()(t,3);return{lon:a[0],lat:a[1],zoom:a[2]}}()),t=f()(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){if(a){var e=a.lon,t=a.lat,n=a.zoom;z.urlFns.updateQueryParam({key:"@",value:"".concat(e,",").concat(t,",").concat(n)})}}),[a]),{locationFromURL:a,saveLocationInURL:r}},oe=z.miscFns.isMobileDevice(),le=z.urlFns.parseQuery().trend,ue=function(){var e=ce(),t=e.locationFromURL,a=e.saveLocationInURL,i=Object(n.useState)(le||"new-cases"),s=f()(i,2),c=s[0],o=s[1],u=Object(n.useState)(),m=f()(u,2),p=m[0],E=m[1],w=Object(n.useState)(),x=f()(w,2),O=x[0],j=x[1],S=Object(n.useState)(),C=f()(S,2),N=C[0],M=C[1],F=Object(n.useState)(),A=f()(F,2),T=A[0],P=A[1],D=Object(n.useState)(!1),I=f()(D,2),z=I[0],L=I[1],R=Object(n.useState)(!1),B=f()(R,2),W=B[0],U=B[1],_=function(){var e=d()(l.a.mark((function e(){var t,a,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=(t=g["static-files-host"])+g["covid19-data-us-counties-json"],n=t+g["covid19-data-us-states-json"],e.next=6,h.a.get(n);case 6:return r=e.sent,j(r.data),e.next=10,h.a.get(a);case 10:i=e.sent,E(i.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=d()(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return q(),e.abrupt("return",!1);case 3:return P({graphic:t,locationName:"".concat(t.attributes.NAME," CO, ").concat(t.attributes.STATE_NAME)}),e.next=6,se({countyFIPS:t.attributes.FIPS});case 6:a=e.sent,M(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=d()(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return q(),e.abrupt("return",!1);case 3:return a=t.attributes.STATE_NAME,P({graphic:t,locationName:t.attributes.STATE_NAME}),e.next=7,se({stateName:a});case 7:n=e.sent,M(n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){M(void 0),L(!0)},q=function(){L(!1),M(void 0),P(void 0)};return Object(n.useEffect)((function(){_()}),[]),Object(n.useEffect)((function(){N&&L(!1)}),[N]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{webmapId:g["webmap-id"],initialMapCenterLocation:t,onStationary:a},r.a.createElement(ae,{queryResult:T?T.graphic:void 0}),r.a.createElement(v,{key:"US-Counties",features:p,activeTrend:c,size:20,visibleScale:g["us-counties-layer-visible-scale"]}),r.a.createElement(v,{key:"US-States",features:O,activeTrend:c,size:24,visibleScale:g["us-states-layer-visible-scale"]}),r.a.createElement(y,{key:"query-4-US-Counties",itemId:g["us-counties-feature-layer-item-id"],outFields:["FIPS","NAME","STATE_NAME"],visibleScale:g["us-counties-layer-visible-scale"],onStart:V,onSelect:H}),r.a.createElement(y,{key:"query-4-US-States",itemId:g["us-states-feature-layer-item-id"],outFields:["STATE_NAME"],visibleScale:g["us-states-layer-visible-scale"],onStart:V,onSelect:G})),r.a.createElement(k,{isMobile:oe,activeTrend:c,activeTrendOnChange:o,infoBtnOnClick:U.bind(void 0,!0)}),N||z?r.a.createElement(K,{showLoadingIndicator:z},r.a.createElement(te,{locationName:T?T.locationName:void 0,data:N,isMobile:oe,closeBtnOnClick:q}),r.a.createElement(Y,{activeTrend:c,data:N})):null,r.a.createElement(re,{isOpen:W,closeBtnOnClicked:U.bind(void 0,!1)}))};Object(c.setDefaultOptions)({url:"https://js.arcgis.com/next/"}),s.a.render(r.a.createElement(ue,null),document.getElementById("root"))}});
//# sourceMappingURL=main.bb74dda5ea474fb9d89e.js.map