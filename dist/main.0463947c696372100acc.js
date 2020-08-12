!function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);m.length;)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([145,1]),a()}({102:function(e,t,a){},130:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);a(102);var n=a(0),r=a.n(n),i=a(52),o=a.n(i),s=a(9),c=a(5),l=a.n(c),u=a(8),d=a.n(u),m=a(1),p=a.n(m),f=a(16),h=a.n(f),b=(a(130),a(31)),v=function(e){var t=e.isOpen,a=e.closeBtnOnClicked;return Object(n.useEffect)((function(){Object(b.modal)()}),[]),Object(n.useEffect)((function(){t?b.bus.emit("modal:open",{id:"about"}):b.bus.emit("modal:close")}),[t]),r.a.createElement("div",{className:"js-modal modal-overlay about-modal","data-modal":"about"},r.a.createElement("div",{className:"modal-content column-20",role:"dialog","aria-labelledby":"modal"},r.a.createElement("div",{className:"close-btn",onClick:a},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24"},r.a.createElement("path",{d:"M18.01 6.697L12.707 12l5.303 5.303-.707.707L12 12.707 6.697 18.01l-.707-.707L11.293 12 5.99 6.697l.707-.707L12 11.293l5.303-5.303z"}))),r.a.createElement("div",{className:"block-group block-group-3-up tablet-block-group-1-up phone-block-group-1-up"},r.a.createElement("div",{className:"block"},r.a.createElement("h4",{className:"header-red avenir-bold"},"WEEKLY CASES"),r.a.createElement("p",null,"These lines mark the weekly averages of new cases, per 100,000 population, per week—useful for showing the local fluctuations of cases throughout the outbreak. When seen together regional patterns emerge. The Y-axis of these charts are scaled to fit the maximum weekly increase when new cases are greater than 25 per 100,000. Please see the note on the Y-axis below for an explanation.")),r.a.createElement("div",{className:"block"},r.a.createElement("h4",{className:"header-red avenir-bold"},"CASES"),r.a.createElement("p",null,"These lines track the ongoing cumulative number of cases, per 100,000 population, per week. Because it is a cumulative count, the lines will never trend downward, though their rate of increase over time can provide an impression of the local history of the outbreak. An upward-bending line indicates a slow start and rapidly rising outbreak. A generally diagonal line indicates a consistent rate of transmission. An s-shaped line indicates a local “flattening of the curve” associated with a decrease in local cases. A stair-stepped line indicates multiple waves of transmission.")),r.a.createElement("div",{className:"block"},r.a.createElement("h4",{className:"header-red avenir-bold"},"DEATHS"),r.a.createElement("p",null,"These lines track the ongoing cumulative number of deaths, per 100,000 population. Interpretations of these lines is consistent with the description of cases, above. Given the incubation and illness period of the virus, this line will show a similar pattern, though with a lag, compared to cases."))),r.a.createElement("div",null,r.a.createElement("h4",{className:"header-khaki avenir-bold"},"ABOUT THE Y-AXIS"),r.a.createElement("p",null,"Each trend line has a dynamic y-axis such that if the maximum rate of cases exceeds 25 cases per 100,000 population (quite high), then the height is compressed to fit into the rectangular bounds of the chart container. While this prevents a direct comparison between locations, it ensures that areas with very low populations (and therefore highly fluctuating case rates) do not by comparison suppress (to nearly flat) the rates of moderate and high-population areas. This compromise allows for a general visual reference of local trends while specific counts can be accessed when a location is selected.")),r.a.createElement("div",null,r.a.createElement("h4",{className:"header-khaki avenir-bold"},"SOURCES"),r.a.createElement("p",null,"These counts are sourced from the Johns Hopkins University features service of ",r.a.createElement("a",{target:"_blank",href:"https://services9.arcgis.com/6Hv9AANartyT7fJW/ArcGIS/rest/services"},"US County Cases")," and normalized into rates using ",r.a.createElement("a",{target:"_blank",href:"https://www.arcgis.com/home/item.html?id=99fd67933e754a1181cc755146be21ca"},"state")," and ",r.a.createElement("a",{target:"_blank",href:"https://www.arcgis.com/home/item.html?id=7566e0221e5646f99ea249a197116605"},"county")," populations from the US Census Bureau accessed via ",r.a.createElement("a",{target:"_blank",href:"https://livingatlas.arcgis.com/en/browse/#d=2&q=usa%20population"},"Living Atlas"),". The Khaki basemap is ",r.a.createElement("a",{target:"_blank",href:"https://livingatlas.arcgis.com/en/browse/#d=2&q=khaki"},"available via Living Atlas"),".")),r.a.createElement("div",null,r.a.createElement("h4",{className:"header-khaki avenir-bold"},"CREATORS"),r.a.createElement("p",null,"This application was created by ",r.a.createElement("a",{target:"_blank",href:"https://github.com/vannizhang/"},"Jinnan Zhang")," and ",r.a.createElement("a",{target:"_blank",href:"https://adventuresinmapping.com/"},"John Nelson"),", of Esri, with help from ",r.a.createElement("a",{target:"_blank",href:"https://github.com/ycabon"},"Yann Cabon"),", inspired by the ",r.a.createElement("a",{target:"_blank",href:"https://datagistips.hypotheses.org/488"},"trend line maps of Mathieu Rajerison")," and the ",r.a.createElement("a",{target:"_blank",href:"https://twitter.com/rileydchampine/status/1243552850728411143"},"local 1918 flu charts of Riley D. Champine"),". We are not medical professionals but saw a need for a visual sense of local rates and trends and created this primarily as a resource for ourselves but are making it available to the public in the event that it is a helpful resource for understanding patterns. We make no claims of officiality and share it only as a reference."))))},g=function(e){var t=e.webmapId,a=e.initialMapCenterLocation,i=e.onStationary,o=e.children,c=r.a.useRef(),u=r.a.useState(null),m=p()(u,2),f=m[0],h=m[1],b=function(){var e=d()(l.a.mark((function e(){var n,r,i,o,u,d,m,f,b,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.loadModules)(["esri/views/MapView","esri/WebMap"]);case 3:n=e.sent,r=p()(n,2),i=r[0],o=r[1],d=(u=a||{}).lat,m=u.lon,f=u.zoom,b=m&&d?[m,d]:void 0,(v=new i({container:c.current,center:b,zoom:f,map:new o({portalItem:{id:t}})})).when((function(){h(v)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=d()(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.loadModules)(["esri/core/watchUtils"]);case 3:t=e.sent,a=p()(t,1),a[0].whenTrue(f,"stationary",(function(){if(-1!==f.zoom){var e={lat:f.center&&f.center.latitude?+f.center.latitude.toFixed(3):0,lon:f.center&&f.center.longitude?+f.center.longitude.toFixed(3):0,zoom:f.zoom};i(e)}})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Object(s.loadCss)(),b()}),[]),r.a.useEffect((function(){f&&v()}),[f]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:c}),r.a.Children.map(o,(function(e){return r.a.cloneElement(e,{mapView:f})})))},y=a(54),E={"webmap-id":"1bff921ddf7044c3b5ba34e8494a2073","us-states-feature-layer-item-id":"99fd67933e754a1181cc755146be21ca","us-counties-feature-layer-item-id":"7566e0221e5646f99ea249a197116605","static-files-host":"https://static.vannizhang.com/covid19/","covid19-data-us-states-json":"us-states-paths.json","covid19-data-us-counties-json":"us-counties-paths.json","covid19-latest-numbers-json":"latest-numbers.json","us-counties-layer-visible-scale":{min:75e5,max:0},"us-states-layer-visible-scale":{min:73957190,max:7500001}},w="#A10D22",x="#E8E2D2",O="#EFEADB",S="#B1A483",k="#B2A584",j={Emergent:[212,158,198,255],Spreading:[165,51,110,255],Epidemic:[128,11,76,255],Controlled:[147,195,195,255],"End Stage":[91,160,168,255],"Zero Cases":[100,100,100,255]},C=a(7),N=function(e){var t=e.position,a=e.data,i=Object(n.useRef)(),o=Object(y.a)(),s=p()(o,2),c=s[0],l=s[1];return a?r.a.createElement("div",{ref:i,style:{position:"absolute",top:function(){if(!t)return-99999;var e=i.current?i.current.offsetHeight:150;return t.y+e>l?t.y-e-10:t.y+10}()+"px",left:function(){if(!t)return-99999;var e=i.current?i.current.offsetWidth:200;return t.x+e>c?t.x-e-10:t.x+10}()+"px",padding:"7px 15px",background:O,pointerEvents:"none",boxSizing:"border-box",boxShadow:"0 0 10px 2px ".concat(S),zIndex:5}},r.a.createElement("div",null,r.a.createElement("span",{className:"text-theme-color-red avenir-demi font-size--1"},a.locationName)),r.a.createElement("div",{className:"text-theme-color-khaki avenir-demi font-size--2"},r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},C.numberFns.numberWithCommas(a.weeklyNewCases))," new cases this week"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},C.numberFns.numberWithCommas(a.confirmed))," cumulative cases"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},C.numberFns.numberWithCommas(a.deaths))," deaths"))):null},A=a(23),M=a.n(A),T=a(6),F=a(53),I=a.n(F);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){M()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D={top:15,right:20,bottom:30,left:40},L=function(e){var t=e.xDomain,a=e.yDomain,i=e.children,o=I()(),s=Object(n.useRef)(),c=Object(n.useRef)(),l=r.a.useState(),u=p()(l,2),d=u[0],m=u[1],f=r.a.useState(),h=p()(f,2),b=h[0],v=h[1],g=function(){v((function(e){return P(P({},e),{},{lastUpdateTime:new Date})}))};return Object(n.useEffect)((function(){!function(){var e=s.current,n=e.offsetWidth-D.left-D.right,r=e.offsetHeight-D.top-D.bottom;c.current={height:r,width:n},Object(T.i)(e).append("svg").attr("width","100%").attr("height",r+D.top+D.bottom).append("g").attr("transform","translate(".concat(D.left,", ").concat(D.top,")"));var i=Object(T.i)(e).select("svg"),o=i.node(),l=i.select("g").node(),u=Object(T.f)().paddingInner(.2).range([0,n]).domain(t),d=Object(T.g)().range([r,0]).domain(a).nice();m({svg:o,g:l,margin:D,dimension:c.current}),v({x:u,y:d})}()}),[]),Object(n.useEffect)((function(){b&&a&&(b.y.domain(a).nice(),g())}),[a]),r.a.useEffect((function(){!function(){var e=s.current;if(e&&d&&b){var t=b.x,a=e.offsetWidth-D.left-D.right;c.current.width=a,t.range([0,a]),g()}}()}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:s,style:{position:"relative",width:"100%",height:"100%"}}),r.a.Children.map(i,(function(e){return r.a.cloneElement(e,{svgContainerData:d,scales:b})})))},R=Object(T.j)("%b"),_=function(e){var t=e.svgContainerData,a=e.scales;return r.a.useEffect((function(){var e,n,r,i,o,s,c,l,u,d,m,p,f;t&&a&&(e=t.dimension,n=t.g,r=e.height,i=e.width,o=Object(T.i)(n),s=a.x.domain(),c=s[0].split("-").map((function(e){return+e})),l=new Date(c[0],c[1]-1,c[2]),u=s[s.length-1].split("-").map((function(e){return+e})),d=new Date(u[0],u[1]-1,u[2]),m=Object(T.h)().range([0,i]).domain([l,d]),p=Object(T.a)(m).tickFormat((function(e){return R(e)})),(f=o.selectAll(".x.axis")).size()?f.attr("transform","translate(0,"+r+")").call(p):o.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").call(p),function(){var e=t.g,n=t.dimension.width,r=a.y,i=Object(T.i)(e),o=Object(T.b)(r).ticks(3).tickSizeInner(-n).tickPadding(5).tickFormat((function(e){return C.numberFns.abbreviateNumber(+e,0)})),s=i.selectAll(".y.axis");s.size()?s.call(o):i.append("g").attr("class","y axis").call(o)}())}),[t,a]),null},B=a(18),W="bar-rect-group-".concat(Object(B.generate)()),H="bar-rect-".concat(Object(B.generate)()),U=function(e){var t=e.data,a=e.fillColor,n=e.svgContainerData,i=e.scales,o=r.a.useRef(),s=function(){var e=Object(T.i)(o.current).selectAll(".".concat(W));e.size()&&e.remove()};return r.a.useEffect((function(){var e;n&&(e=n.g,o.current=Object(T.i)(e).append("g").node())}),[n]),r.a.useEffect((function(){var e,r,c;n&&i&&t&&(e=n.dimension.height,r=i.x,c=i.y,s(),Object(T.i)(o.current).append("g").attr("class",W).selectAll(".".concat(H)).data(t).enter().append("rect").attr("class",H).style("fill",a).attr("x",(function(e){return r(e.x)})).attr("width",r.bandwidth()).attr("y",(function(e){return c(e.y)})).attr("height",(function(t){return e-c(t.y)})))}),[i,t]),null},V="line-".concat(Object(B.generate)()),G=function(e){var t=e.data,a=e.strokeColor,n=e.svgContainerData,i=e.scales,o=r.a.useRef(),s=function(){var e=Object(T.i)(o.current).selectAll(".".concat(V));e.size()&&e.remove().exit()};return r.a.useEffect((function(){var e;n&&(e=n.g,o.current=Object(T.i)(e).append("g").node())}),[n]),r.a.useEffect((function(){var e,r,c,l,u;n&&i&&t&&(e=Object(T.i)(o.current),r=i.x,c=i.y,l=r.bandwidth()/2,u=Object(T.c)().x((function(e){return r(e.x)+l})).y((function(e){return c(e.y)})),s(),e.append("path").data([t]).attr("class",V).attr("d",u).style("fill","none").style("stroke",a).style("stroke-width",2))}),[i,t]),null},q=function(e){var t=e.data,a=e.svgContainerData,i=e.scales,o=e.onHover,s=r.a.useRef(),c=r.a.useRef(),l=function(e){c.current=e,u(),o(e)},u=function(){var e=i.x,t=c.current,a=Object(T.i)(s.current).select(".".concat("vertical-ref-line")),n=t?e(t.attributes.dt)+e.bandwidth()/2:0,r=t?1:0;a.attr("x1",n).attr("x2",n).style("opacity",r)},d=function(e){for(var a=-1,n=i.x,r=0,o=t.length;r<o;r++){var s=n(t[r].attributes.dt),c=t[r+1]?r+1:r,l=n(t[c].attributes.dt);if(e>=s&&e<=l){a=Math.abs(e-s)<Math.abs(e-l)?r:c;break}}return t[a]};return Object(n.useEffect)((function(){a&&t.length&&function(){var e=a.g,t=a.dimension,n=t.height,r=t.width;s.current=Object(T.i)(e).append("g").node();var i=Object(T.i)(s.current);i.append("line").attr("class","vertical-ref-line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",n).style("opacity",0).attr("stroke-width",.5).attr("stroke","rgba(255,255,255,.75)").style("fill","none"),i.append("rect").attr("width",r).attr("height",n).attr("fill","rgba(0,0,0,0)").on("mouseleave",(function(){l(null)})).on("mousemove",(function(){var e=Object(T.e)(this)[0];l(d(e))}))}()}),[a,t]),Object(n.useEffect)((function(){if(a&&i){var e=a.dimension.width;Object(T.i)(s.current).select("rect").attr("width",e)}}),[i]),null},J=function(e){var t,a,i,o,s,c,l,u,d,m,f=e.svgContainerData,h=e.scales,b=e.data,v=r.a.useRef(),g=r.a.useState({top:0,left:0}),y=p()(g,2),E=y[0],w=y[1];return Object(n.useEffect)((function(){!function(){var e=v.current;if(e){var t=f.dimension,a=f.margin,n=t.width,r=h.x,i=(h.y,e.offsetWidth),o=-(e.offsetHeight/2-a.top),s=r(b.attributes.dt)+a.left,c=s+i/2>=n+a.left?s-i:s-i/2;c=c>=a.left?c:a.left,w({top:o,left:c})}}()}),[b]),b?(t=E.top,a=E.left,i=b.attributes,o=i.dt,s=i.Confirmed,c=i.Deaths,l=i.NewCases,i.Population,u=C.numberFns.numberWithCommas(l),d=C.numberFns.numberWithCommas(s),m=C.numberFns.numberWithCommas(c),r.a.createElement("div",{ref:v,style:{position:"absolute",left:"".concat(a,"px"),top:"".concat(t,"px"),padding:"7px 10px",background:O,color:"#fff",pointerEvents:"none",boxSizing:"border-box",boxShadow:"0 0 10px 2px ".concat(S)}},r.a.createElement("div",{className:"font-size--3 avenir-demi"},r.a.createElement("span",{className:"text-theme-color-khaki"},o)),r.a.createElement("div",{className:"font-size--2 avenir-bold"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-theme-color-khaki"},"new cases: ",r.a.createElement("span",{className:"text-theme-color-red"},u))),r.a.createElement("div",null,r.a.createElement("span",{className:"text-theme-color-khaki"},"cumulative cases: ",r.a.createElement("span",{className:"text-theme-color-red"},d))),r.a.createElement("div",null,r.a.createElement("span",{className:"text-theme-color-khaki"},"cumulative deaths: ",r.a.createElement("span",{className:"text-theme-color-red"},m)))))):null},Y={"new-cases":"NewCases",death:"Deaths",confirmed:"Confirmed"},K=function(e){var t,a=e.activeTrend,i=e.data,o=Y[a],s=Object(n.useState)(!1),c=p()(s,2),l=c[0],u=(c[1],Object(n.useState)()),d=p()(u,2),m=d[0],f=d[1],h=function(){if(!i||!i.length||"new-cases"!==a)return[];for(var e=[],t=i.length-1;t>0;t--){var n=i[t],r=n.attributes.dt,s=0,c=t-6>=0?t-6:0,u=t+1,d=i.slice(c,u);d.forEach((function(e){return s+=e.attributes[o]}));var m=s/d.length;l&&(m=m/n.attributes.Population*1e5),m=(m=Math.round(m))<0?0:m,e.push({x:r,y:m})}return e};return r.a.createElement("div",{style:{width:"100%",height:"170px",backgroundColor:O}},i&&i.length?r.a.createElement(L,{xDomain:i.map((function(e){return e.attributes.dt})),yDomain:(t=i.map((function(e){return l?Math.round(e.attributes[o]/e.attributes.Population*1e5):e.attributes[o]})),[0,Object(T.d)(t)||1])},r.a.createElement(_,null),r.a.createElement(U,{fillColor:k,data:i&&i.length?i.map((function(e){var t=l?Math.round(e.attributes[o]/e.attributes.Population*1e5):e.attributes[o];return{x:e.attributes.dt,y:t}})):[]}),r.a.createElement(G,{strokeColor:w,data:h()}),r.a.createElement(J,{data:m}),r.a.createElement(q,{data:i,onHover:f})):null)},Q=function(e){var t=e.showLoadingIndicator,a=e.children;return r.a.createElement("div",{style:{position:"absolute",left:"15px",right:"15px",bottom:"25px",boxSizing:"border-box",boxShadow:"0 0 10px 2px ".concat(S),backgroundColor:O}},t?r.a.createElement("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"225px"}},r.a.createElement("div",{className:"loader is-active"},r.a.createElement("div",{className:"loader-bars"}))):a)},Z=[{label:"WEEKLY CASES",value:"new-cases"},{label:"CASES",value:"confirmed"},{label:"DEATHS",value:"death"}],X=function(e){var t=e.isMobile,a=e.activeTrend,n=e.activeTrendOnChange,i=e.infoBtnOnClick;return r.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",left:t?"10px":"unset",boxShadow:"0 0 10px 2px #B1A483"}},r.a.createElement("div",{style:{backgroundColor:w,color:O,lineHeight:"20px",width:"100%",textAlign:"center"}},r.a.createElement("span",{className:"avenir-bold",style:{fontSize:"12px"}},"NOVEL CORONAVIRUS TRENDS PER 100,000 PEOPLE, SINCE FEBRUARY, UPDATED DAILY")),r.a.createElement("div",{style:{display:"flex",height:"60px",width:"100%",boxSizing:"border-box",backgroundColor:x}},Z.map((function(e){var i=e.value,o=e.label;return r.a.createElement("div",{key:i,style:{width:t?"auto":"160px",flexGrow:t?1:0,height:"100%",color:w,backgroundColor:a===i?O:"transparent",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",borderBottom:"solid 4px ".concat(a===i?w:"transparent"),borderRight:"solid 1px #E0D8C1",cursor:"pointer"},onClick:n.bind(void 0,i)},r.a.createElement("span",{className:"avenir-bold",style:{fontSize:"12px"}},o))})),r.a.createElement("div",{style:{width:"60px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},onClick:i},r.a.createElement("svg",{viewBox:"0 0 24 24",height:"24",width:"24",fill:k},r.a.createElement("path",{d:"M12.5 7.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1zM13 18V9h-2v1h1v8h-1v1h3v-1zm9.8-5.5A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"}),r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})))))},$=function(e){var t=e.itemId,a=e.outFields,r=e.mapView,i=e.visibleScale,o=e.onStart,c=e.onSelect,u=e.pointerOnMove,m=e.featureOnHover,f=Object(n.useRef)(),h=Object(n.useRef)(),b=Object(n.useRef)(),v=function(){return r.scale<f.current.minScale&&r.scale>f.current.maxScale},g=function(){var e=d()(l.a.mark((function e(){var n,o,c,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.loadModules)(["esri/layers/FeatureLayer"]);case 3:n=e.sent,o=p()(n,1),c=o[0],u=new c({portalItem:{id:t},minScale:i&&i.min,maxScale:i&&i.max,visible:!0,popupEnabled:!1,outFields:a,opacity:0}),r.map.add(u),r.whenLayerView(u).then((function(e){f.current=u,h.current=e,E()})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=d()(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v()){e.next=7;break}return o(),e.next=5,h.current.queryFeatures({where:"1=1",geometry:r.toMap(t),returnGeometry:!0,outFields:a||["*"]});case 5:n=e.sent,c(n.features&&n.features.length?n.features[0]:void 0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){r.on("click",(function(e){y(e)})),r.on("pointer-leave",(function(){u(void 0)})),r.on("pointer-move",(function(e){if(clearTimeout(b.current),v()){var t=e.x,n=e.y;u({x:t,y:n}),b.current=window.setTimeout(d()(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.current.queryFeatures({where:"1=1",geometry:r.toMap(e),returnGeometry:!1,outFields:a||["*"]});case 2:n=t.sent,m(n.features[0]);case 4:case"end":return t.stop()}}),t)}))),50)}}))};return Object(n.useEffect)((function(){r&&g()}),[r]),null},ee=a(148),te=a(147),ae=a(149);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){M()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ie=function(e){var t=e.locationName,a=e.data,n=e.isMobile,i=void 0!==n&&n,o=e.closeBtnOnClick;return r.a.createElement("div",{style:{position:"relative",width:"100%",padding:".4rem 1.35rem",display:i?"block":"flex",alignItems:"center",boxSizing:"border-box",backgroundColor:x}},r.a.createElement("div",{style:{color:w,textTransform:"uppercase",maxWidth:i?"320px":"auto"}},r.a.createElement("span",{className:"avenir-bold font-size-2"},t)),r.a.createElement("div",{style:{flexGrow:1}},function(){if(!a||!a.length)return null;var e=a.length-1,t=a[e].attributes,n=t.dt,o=t.Confirmed,s=t.Deaths,c=t.Population,l=n.split("-"),u=p()(l,3),d=u[0],m=u[1],f=u[2],h=new Date(+d,+m-1,+f).getDay(),b=0===h?a[e-6]:a[e-h],v=C.numberFns.numberWithCommas(o),g=C.numberFns.numberWithCommas(s),y=C.numberFns.numberWithCommas(o-b.attributes.Confirmed),E=C.numberFns.numberWithCommas(s-b.attributes.Deaths),w=C.numberFns.numberWithCommas(c),x={padding:i?"0":"0 .65rem",borderRight:i?"none":"solid 1px rgba(178, 165, 132, .5)",display:i?"block":"flex",alignItems:"center"};return r.a.createElement("div",{className:"font-size--2 avenir-bold text-theme-color-khaki",style:{display:i?"block":"flex",alignItems:"strech",padding:"0 ".concat(i?"0":"1rem")}},r.a.createElement("div",{style:re(re({},x),{},{display:"block"})},r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},"Biggest Weekly Jump")," ",i?null:r.a.createElement("br",null)," ",function(){for(var e=a[0],t=Number.NEGATIVE_INFINITY,n=Object(ee.a)(a[0].attributes.dt,"yyyy-MM-dd",new Date),r=Object(te.a)(n),i=0,o=a.length;i<o;i++){var s=i%7+r;if(1===(s=s>7?s-7:s)){var c=a[i].attributes.Confirmed-(i-6>=0?a[i-6]:a[0]).attributes.Confirmed;c>t&&(t=c,e=a[i])}}var l=Object(ee.a)(e.attributes.dt,"yyyy-MM-dd",new Date);return Object(ae.a)(l,"MMMM dd, yyyy")}())),r.a.createElement("div",{style:x},r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},"Population")," ",w)),r.a.createElement("div",{style:x},r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},y)," new cases and ",r.a.createElement("span",{className:"text-theme-color-red"},E)," deaths this week")),r.a.createElement("div",{style:re(re({},x),{},{borderRight:"none"})},r.a.createElement("span",null,r.a.createElement("span",{className:"text-theme-color-red"},v)," cumulative cases and ",r.a.createElement("span",{className:"text-theme-color-red"},g)," deaths")))}()),r.a.createElement("div",{style:re({cursor:"pointer"},i?{position:"absolute",top:".5rem",right:".5rem"}:null),onClick:o},r.a.createElement("svg",{viewBox:"0 0 32 32",height:"32",width:"32",fill:k},r.a.createElement("path",{d:"M23.985 8.722L16.707 16l7.278 7.278-.707.707L16 16.707l-7.278 7.278-.707-.707L15.293 16 8.015 8.722l.707-.707L16 15.293l7.278-7.278z"}),r.a.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}))))},oe=function(e){var t=e.activeTrend,a=e.features,r=e.visibleScale,i=e.size,o=void 0===i?20:i,c=e.hasTrendCategoriesAttribute,u=void 0!==c&&c,m=e.showTrendCategories,f=void 0!==m&&m,h=e.mapView,b=e.isLayerInVisibleScaleOnChange,v=Object(n.useState)(),g=p()(v,2),y=g[0],E=g[1],w=Object(n.useState)(!1),x=p()(w,2),O=x[0],S=x[1],k=function(){var e=d()(l.a.mark((function e(){var t,a,n,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.loadModules)(["esri/layers/GraphicsLayer","esri/core/watchUtils"]);case 3:t=e.sent,a=p()(t,2),n=a[0],i=a[1],o=new n({minScale:r&&r.min,maxScale:r&&r.max}),h.map.add(o),E(o),i.whenTrue(h,"stationary",(function(){var e=h.scale<r.min&&h.scale>r.max;S(e)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=d()(l.a.mark((function e(a){var n,r,i,c,d,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.loadModules)(["esri/symbols/CIMSymbol","esri/Graphic","esri/geometry/Point"]);case 3:n=e.sent,r=p()(n,3),i=r[0],c=r[1],d=r[2],m=a.map((function(e){var a=e.attributes,n=e.geometry,r={confirmed:e.confirmed,death:e.deaths,"new-cases":e.newCases}[t],s=r.frame,l=r.path,m=[161,13,34,255];f&&u&&(m=a&&a.trendType?j[a.trendType]:[200,200,200,255]);var p=new i({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,scaleSymbolsProportionally:!0,respectFrame:!0,size:o,frame:s,markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[l]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:1,color:m}]}}]}]}}});return new c({geometry:new d({latitude:n.y,longitude:n.x}),symbol:p})})),y.addMany(m),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h&&k()}),[h]),Object(n.useEffect)((function(){y&&a&&(y.removeAll(),O&&C(a))}),[y,a,t,f]),Object(n.useEffect)((function(){a&&O&&!y.graphics.length&&C(a),b&&b(O)}),[O]),null},se=function(e){var t=e.queryResult,a=e.mapView,r=Object(n.useState)(),i=p()(r,2),o=i[0],c=i[1],u=function(){var e=d()(l.a.mark((function e(){var t,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.loadModules)(["esri/layers/GraphicsLayer"]);case 3:t=e.sent,n=p()(t,1),r=n[0],i=new r,a.map.add(i),c(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=d()(l.a.mark((function e(){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.loadModules)(["esri/symbols/SimpleFillSymbol"]);case 2:a=e.sent,n=p()(a,1),r=n[0],t.symbol=new r({color:[0,0,0,0],outline:{color:"rgba(178,165,132,.7)",width:1}}),o.add(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a&&u()}),[a]),Object(n.useEffect)((function(){o&&(o.removeAll(),t&&m())}),[t]),null},ce=[{value:"Emergent",tooltip:"Early stages of outbreak",color:"#D49EC6"},{value:"Spreading",tooltip:"Early stages, and, depending on an administrative area’s capacity, a manageable rate of spread",color:"#A5336E"},{value:"Epidemic",tooltip:"Uncontrolled spread",color:"#800B4C"},{value:"Controlled",tooltip:"Very low levels of new cases",color:"#93C3C3"},{value:"End Stage",tooltip:"No New cases",color:"#5BA0A8"},{value:"Zero Cases",tooltip:"",color:"#c8c8c8",label:"No Cases"}],le=function(e){var t,a=e.showTrendCategories,n=e.showNoDataAtStateLevelMessage,i=e.onToggle;return r.a.createElement("div",{style:{position:"absolute",top:"110px",right:"10px",height:"22px",display:"flex",fontSize:"12px",lineHeight:"22px"}},(t=a?r.a.createElement("svg",{viewBox:"0 0 24 24",height:"24",width:"24",style:{fill:k}},r.a.createElement("path",{d:"M3 4.281v16.437A1.282 1.282 0 0 0 4.281 22h16.437A1.282 1.282 0 0 0 22 20.718V4.281A1.281 1.281 0 0 0 20.719 3H4.28A1.281 1.281 0 0 0 3 4.281zM20.719 4a.281.281 0 0 1 .281.281V20.72a.281.281 0 0 1-.281.281H4.28a.281.281 0 0 1-.28-.282V4.28A.281.281 0 0 1 4.281 4zM10.5 17L7 13.689l.637-.636 2.863 2.674 7.022-6.87.637.637z"}),r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})):r.a.createElement("svg",{viewBox:"0 0 24 24",height:"24",width:"24",style:{fill:k}},r.a.createElement("path",{d:"M3 4.281v16.437A1.282 1.282 0 0 0 4.281 22h16.437A1.282 1.282 0 0 0 22 20.718V4.281A1.281 1.281 0 0 0 20.719 3H4.28A1.281 1.281 0 0 0 3 4.281zM20.719 4a.281.281 0 0 1 .281.281V20.72a.281.281 0 0 1-.281.281H4.28a.281.281 0 0 1-.28-.282V4.28A.281.281 0 0 1 4.281 4z"}),r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),r.a.createElement("div",{style:{display:"flex",alignItems:"center",backgroundColor:O,cursor:"pointer"},onClick:i},t)),a?function(){if(a&&n)return r.a.createElement("div",{style:{backgroundColor:O,color:k,width:"540px",boxSizing:"border-box",border:"1px solid ".concat(x),padding:"0 .25rem"}},r.a.createElement("span",{className:"avenir-demi"},"Trend categories are available at the county level. Please zoom in."));var e=ce.map((function(e){return r.a.createElement("div",{key:e.value,style:{display:"felx",alignItems:"center",backgroundColor:e.color,width:"90px",color:"#fff",textAlign:"center",textTransform:"uppercase"},title:e.tooltip},r.a.createElement("span",{className:"avenir-demi"},e.label||e.value))}));return r.a.createElement("div",{style:{display:"flex"}},e)}():r.a.createElement("div",{style:{color:"#fff",backgroundColor:w,padding:"0 .35rem",display:"felx",alignItems:"center",height:"100%"}},r.a.createElement("span",{className:"avenir-demi"},"SHOW TREND CATEGORIES")))},ue={},de=function(){var e=d()(l.a.mark((function e(t){var a,n,r,i,o,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.countyFIPS,n=t.stateName,!ue[r=a||n]){e.next=4;break}return e.abrupt("return",ue[r]);case 4:return i="".concat("https://services9.arcgis.com/6Hv9AANartyT7fJW/ArcGIS/rest/services/USCounties_cases_V1/FeatureServer/1","/query"),o=a?{f:"json",where:"FIPS='".concat(a,"'"),outFields:"dt,Confirmed,Deaths,NewCases,Population",orderByFields:"dt"}:{f:"json",where:"ST_Name='".concat(n,"'"),outFields:"*",orderByFields:"dt",groupByFieldsForStatistics:"ST_Name,dt",outStatistics:JSON.stringify([{statisticType:"sum",onStatisticField:"Confirmed",outStatisticFieldName:"Confirmed"},{statisticType:"sum",onStatisticField:"Deaths",outStatisticFieldName:"Deaths"},{statisticType:"sum",onStatisticField:"NewCases",outStatisticFieldName:"NewCases"},{statisticType:"sum",onStatisticField:"Population",outStatisticFieldName:"Population"}])},e.prev=6,e.next=9,h.a.get(i,{params:new URLSearchParams(o)});case 9:if(s=e.sent,!(c=s.data)||!c.features){e.next=14;break}return ue[r]=c.features,e.abrupt("return",c.features);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6);case 19:return e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(n.useState)(function(){var e=C.urlFns.parseQuery();if(!e["@"])return null;var t=e["@"].split(",").map((function(e){return+e})),a=p()(t,3);return{lon:a[0],lat:a[1],zoom:a[2]}}()),t=p()(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){if(a){var e=a.lon,t=a.lat,n=a.zoom;C.urlFns.updateQueryParam({key:"@",value:"".concat(e,",").concat(t,",").concat(n)})}}),[a]),{locationFromURL:a,saveLocationInURL:r}},pe=C.miscFns.isMobileDevice(),fe=C.urlFns.parseQuery().trend,he=function(){var e=me(),t=e.locationFromURL,a=e.saveLocationInURL,i=Object(n.useState)(fe||"new-cases"),o=p()(i,2),s=o[0],c=o[1],u=Object(n.useState)(),m=p()(u,2),f=m[0],b=m[1],y=Object(n.useState)(),w=p()(y,2),x=w[0],O=w[1],S=Object(n.useState)(),k=p()(S,2),j=k[0],C=k[1],A=Object(n.useState)(),M=p()(A,2),T=M[0],F=M[1],I=Object(n.useState)(!1),z=p()(I,2),P=z[0],D=z[1],L=Object(n.useState)(!1),R=p()(L,2),_=R[0],B=R[1],W=Object(n.useState)(!1),H=p()(W,2),U=H[0],V=H[1],G=Object(n.useState)(!0),q=p()(G,2),J=q[0],Y=q[1],Z=Object(n.useState)(),ee=p()(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(),re=p()(ne,2),ce=re[0],ue=re[1],he=Object(n.useState)(),be=p()(he,2),ve=be[0],ge=be[1],ye=function(){var e=d()(l.a.mark((function e(){var t,a,n,r,i,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=(t=E["static-files-host"])+E["covid19-data-us-counties-json"],n=t+E["covid19-data-us-states-json"],r=t+E["covid19-latest-numbers-json"],e.next=7,h.a.get(n);case 7:return i=e.sent,O(i.data),e.next=11,h.a.get(a);case 11:return o=e.sent,b(o.data),e.next=15,h.a.get(r);case 15:s=e.sent,ge(s.data),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=d()(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return Oe(),e.abrupt("return",!1);case 3:return F({graphic:t,locationName:"".concat(t.attributes.NAME," CO, ").concat(t.attributes.STATE_NAME)}),e.next=6,de({countyFIPS:t.attributes.FIPS});case 6:a=e.sent,C(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=d()(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return Oe(),e.abrupt("return",!1);case 3:return a=t.attributes.STATE_NAME,F({graphic:t,locationName:t.attributes.STATE_NAME}),e.next=7,de({stateName:a});case 7:n=e.sent,C(n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){C(void 0),D(!0)},Oe=function(){D(!1),C(void 0),F(void 0)},Se=function(e,t){var a;if(e&&t){var n=ve[t];a={locationName:e,confirmed:n.Confirmed,deaths:n.Deaths,weeklyNewCases:n.NewCases}}ue(a)};return Object(n.useEffect)((function(){ye()}),[]),Object(n.useEffect)((function(){j&&D(!1)}),[j]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{webmapId:E["webmap-id"],initialMapCenterLocation:t,onStationary:a},r.a.createElement(se,{queryResult:T?T.graphic:void 0}),r.a.createElement(oe,{key:"US-Counties",features:f,activeTrend:s,size:20,hasTrendCategoriesAttribute:!0,showTrendCategories:U,visibleScale:E["us-counties-layer-visible-scale"]}),r.a.createElement(oe,{key:"US-States",features:x,activeTrend:s,size:24,visibleScale:E["us-states-layer-visible-scale"],isLayerInVisibleScaleOnChange:function(e){Y(e),ue(void 0)}}),r.a.createElement($,{key:"query-4-US-Counties",itemId:E["us-counties-feature-layer-item-id"],outFields:["FIPS","NAME","STATE_NAME"],visibleScale:E["us-counties-layer-visible-scale"],onStart:xe,onSelect:Ee,pointerOnMove:ae,featureOnHover:function(e){var t=e?"".concat(e.attributes.NAME,", ").concat(e.attributes.STATE_NAME):void 0,a=e?e.attributes.FIPS:void 0;Se(t,a)}}),r.a.createElement($,{key:"query-4-US-States",itemId:E["us-states-feature-layer-item-id"],outFields:["STATE_NAME","STATE_FIPS"],visibleScale:E["us-states-layer-visible-scale"],onStart:xe,onSelect:we,pointerOnMove:ae,featureOnHover:function(e){var t=e?"".concat(e.attributes.STATE_NAME):void 0,a=e?e.attributes.STATE_FIPS:void 0;Se(t,a)}})),r.a.createElement(X,{isMobile:pe,activeTrend:s,activeTrendOnChange:c,infoBtnOnClick:B.bind(void 0,!0)}),r.a.createElement(le,{showTrendCategories:U,showNoDataAtStateLevelMessage:J,onToggle:function(){V(!U)}}),j||P?r.a.createElement(Q,{showLoadingIndicator:P},r.a.createElement(ie,{locationName:T?T.locationName:void 0,data:j,isMobile:pe,closeBtnOnClick:Oe}),r.a.createElement(K,{activeTrend:s,data:j})):null,r.a.createElement(N,{position:te,data:ce}),r.a.createElement(v,{isOpen:_,closeBtnOnClicked:B.bind(void 0,!1)}))};Object(s.setDefaultOptions)({url:"https://js.arcgis.com/next/"}),o.a.render(r.a.createElement(he,null),document.getElementById("root"))}});
//# sourceMappingURL=main.0463947c696372100acc.js.map