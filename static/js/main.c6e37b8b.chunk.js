(this["webpackJsonptorr-scraper-web"]=this["webpackJsonptorr-scraper-web"]||[]).push([[0],{21:function(e,t,a){e.exports=a(46)},26:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),o=(a(26),a(2)),l=a(3),i=a(5),m=a(4),u=a(7),d=a(6),p=a.n(d),h=a(8),b=a(9),v=a.n(b),E="https://torr-scraper.herokuapp.com/api/",f=[{endpoint:"1337x",magnet_endpoint:"1337x_mg",website:"1337x"},{endpoint:"eztv",website:"eztv"},{endpoint:"horriblesubs",website:"Horriblesubs"},{endpoint:"nyaa",website:"Nyaa"},{endpoint:"kickass",website:"kickass",magnet_endpoint:"kickass_mg"},{endpoint:"limetorrents",website:"limetorrents",magnet_endpoint:"limetorrents"},{endpoint:"thepiratebay",website:"thepiratebay"},{endpoint:"skytorrents",website:"skytorrents"},{endpoint:"torrentdownloads",website:"torrentdownloads"},{endpoint:"tgx",website:"TorrentGalaxy"},{endpoint:"yts",website:"YTS"}];function g(e,t){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(E).concat(t,"_mg?url=").concat(a),e.abrupt("return",new Promise((function(e,t){v.a.get(n).then((function(t){return e(t)})).catch((function(e){return t(e)}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(h.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(E).concat(t,"?search=").concat(a),e.abrupt("return",new Promise((function(e,t){v.a.get(n).then((function(t){e(t)})).catch((function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onMangetBtnClick=function(t){g(e.props.torrent.website.toLowerCase(),e.props.torrent.torrent_url).then((function(t){200===t.status&&e.setState({magnetUrl:t.data.magnet,loading:!1})})).catch((function(e){console.log(e)}))},e.state={magnetUrl:e.props.torrent.magnet,loading:!1},e.bottomLayout=function(t){return!0===e.state.loading||""===e.state.magnetUrl?r.a.createElement("div",{className:"spinner-border ml-auto",role:"status","aria-hidden":"true"}):r.a.createElement("a",{href:e.state.magnetUrl},r.a.createElement("div",{className:"limit-word p-2"},e.state.magnetUrl))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"border-black Br-10px elevated-card grey-bg "},r.a.createElement("div",{className:"text-center p-3 card-title-custom"},r.a.createElement("strong",null,this.props.torrent.name)),r.a.createElement("div",{className:"col justify-content-center pr-3 pl-3 pt-4 pb-4"},r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col"},r.a.createElement("span",null,r.a.createElement("span",{className:"font-weight-bold"},"Leechers: "),this.props.torrent.seeders)),r.a.createElement("div",{className:"col"},r.a.createElement("span",null,r.a.createElement("span",{className:"font-weight-bold"},"Uploaded On: "),this.props.torrent.upload_date)),r.a.createElement("div",{className:"col"},r.a.createElement("span",null,r.a.createElement("span",{className:"font-weight-bold"},"Seeders: "),this.props.torrent.seeders))),r.a.createElement("div",{className:"row justify-content-around p2"},r.a.createElement("span",null,r.a.createElement("span",{className:"font-weight-bold"},"Uploader: "),this.props.torrent.uploader),r.a.createElement("span",null,r.a.createElement("span",{className:"font-weight-bold"},"Website: "),this.props.torrent.website),r.a.createElement("span",null,r.a.createElement("span",{className:"font-weight-bold"},"Size: "),this.props.torrent.size))),r.a.createElement("div",{className:" d-flex justify-content-center pb-3"},r.a.createElement("button",{className:"btn btn-outline-danger",type:"button","data-toggle":"collapse","data-target":"#c"+this.props.Key,"aria-expanded":"false","aria-controls":"#c"+this.props.Key,onClick:this.onMangetBtnClick},"Magnet Link")),r.a.createElement("div",{className:"collapse",id:"c"+this.props.Key},r.a.createElement("div",{className:"row justify-content-around pb-3"},r.a.createElement("div",{className:"col text-center"},r.a.createElement(this.bottomLayout,null)))))}}]),a}(n.Component),k=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flix justify-content-center"},r.a.createElement("span",{className:"h1"},"No Content Found")))},j=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flix justify-content-center"},r.a.createElement("span",{className:"h1"},"Unexpected error occured")))},_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).PROXY_URL="https://cors-anywhere.herokuapp.com/",e.state={torrents:void 0,no_content_found:!1,server_error:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(e,t){return w.apply(this,arguments)})(this.props.endpoint,this.props.query).then((function(t){200===t.status?e.setState({torrents:t.data.data}):204===t.status?e.setState({no_content_found:!0}):e.setState({server_error:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.no_content_found?r.a.createElement(k,null):void 0===this.state.torrents?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border text-dark",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading..."))):this.state.server_error?r.a.createElement(j,null):r.a.createElement("div",{className:"row"},this.state.torrents.map((function(t,a){return r.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12"},r.a.createElement(N,{torrent:t,Key:"".concat(e.props.website).concat(a.toString())}),r.a.createElement("br",null))})))}}]),a}(n.Component);var x=function(e){var t=function(e){return f.map((function(e,t){var a="1337x"===e.website?"active":"";return r.a.createElement("li",{className:"nav-item",Key:"nav".concat(e.website).concat(t.toString)},r.a.createElement("a",{className:"nav-link ".concat(a," nav-custom-link"),id:"nav-".concat(e.website,"-tab"),"data-toggle":"tab",href:"#k".concat(e.website),role:"tab","aria-controls":"k".concat(e.website),"aria-selected":"true"},e.website))}))},a=function(e){return f.map((function(t,a){var n,c="1337x"===t.website?"active":"";return r.a.createElement("div",{id:"k".concat(t.website),className:"container-fluid tab-pane ".concat(c),role:"tabpanel","aria-labelledby":"nav-home-tab"},r.a.createElement(_,(n={Key:a.toString,website:t.website,endpoint:t.endpoint,"magnet-endpoint":t.magnet_endpoint},Object(u.a)(n,"Key","tab".concat(t.website).concat(a.toString)),Object(u.a)(n,"query",e.query),n)))}))};return r.a.createElement("div",{className:"container-fluid mt-5"},r.a.createElement("h2",null,"Search Result for ",e.query),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("ul",{className:"nav nav-tabs",role:"tablist"},r.a.createElement(t,null))),r.a.createElement("br",null),r.a.createElement("div",{className:"tab-content"},r.a.createElement(a,{query:e.query})))},S=(a(45),a(10)),O=a.n(S),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={show_result:!1,search_query:""},e.handleSubmit=function(t){t.preventDefault();var a=document.getElementById("search-input").value;a.trim().length>0&&e.setState({show_result:!0,search_query:a})},e.toggleDarkMode=function(e){O()("body").toggleClass("body-dark"),O()("body").toggleClass("body-light")},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"mt-5"},r.a.createElement("div",{className:"align-content-center my-auto mt-auto h-100",style:{verticalAlign:"middle"}},r.a.createElement("div",{className:"col"},r.a.createElement("img",{className:" app-logo img-fluid",src:"app_icon.png",alt:"Torrent Search"}),r.a.createElement("div",null,r.a.createElement("span",{className:"h1 app-name"},"Torrent Search")),r.a.createElement("div",{className:"container center"},r.a.createElement("div",{className:"input-group input-group-lg mt-4"},r.a.createElement("input",{id:"search-input",type:"text",className:"form-control input-red",placeholder:"Search Here"})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"pl-2 pr-2"},r.a.createElement("button",{id:"btn-submit",type:"submit",className:"btn search-button text-white",onClick:this.handleSubmit},"Search")),r.a.createElement("div",{className:"pl-2 pr-2"},r.a.createElement("button",{id:"btn-dark-mode",className:"btn btn-light dark-mode-button",onClick:this.toggleDarkMode},"Dark Mode")))))),this.state.show_result?r.a.createElement(x,{query:this.state.search_query}):null),r.a.createElement("footer",{className:"page-footer m-5"},r.a.createElement("div",null,r.a.createElement("h3",{style:{color:"red"}},"Made with \u2764\ufe0f in India"),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"m-2"},r.a.createElement("a",{href:"https://github.com/Torrent-Search/torrent-search-web",className:"social-custom-link"},r.a.createElement("i",{class:"devicon-github-original social-icons"}))),r.a.createElement("div",{className:"m-2"},r.a.createElement("a",{href:"mailto:tejasvp25@gmail.com",className:"social-custom-link"},r.a.createElement("i",{class:"devicon-google-plain social-icons"})))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("i",{class:"devicon-react-original-wordmark colored",style:{fontSize:"35px"}}),r.a.createElement("h5",{className:"ml-2"},"Made with React"))),r.a.createElement("br",null),r.a.createElement("div",{className:"row justify-content-center text-secondary"},r.a.createElement("span",null," Tejasvp25 \xa9 2020"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.c6e37b8b.chunk.js.map