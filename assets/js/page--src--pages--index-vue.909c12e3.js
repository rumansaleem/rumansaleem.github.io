(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BMX7:function(t,e,n){"use strict";n("ma9I"),n("sMBO");var o=n("d8Z/"),s=n.n(o),a={props:{name:{required:!0},title:{required:!1},strokeWidth:{default:2}},computed:{iconWithTitle:function(){return this.title?"<title>".concat(this.title,"</title>").concat(this.icon):this.icon},icon:function(){return s.a.icons.hasOwnProperty(this.name||"x")?s.a.icons[this.name].contents:s.a.icons.x.contents}}},i=n("KHd+"),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("svg",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{viewBox:"0 0 24 24",role:"presentation","aria-label":this.title,"stroke-width":this.strokeWidth,fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"},domProps:{innerHTML:this._s(this.iconWithTitle)}})}),[],!1,null,null,null);e.a=r.exports},Jw0j:function(t,e,n){},iyQ6:function(t,e,n){"use strict";n.r(e);var o={metaInfo:{title:"Home"},components:{FeatherIcon:n("BMX7").a},computed:{about:function(){return this.$page.allAbout.edges[0].node}}},s=(n("uVvF"),n("KHd+")),a=null,i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[t.about?n("div",{staticClass:"narrow-container mx-auto flex flex-col items-center py-4 mb-8"},[n("g-image",{staticClass:"h-64 mt-1 ml-3 mb-6 shadow-xl rounded-lg",attrs:{src:t.about.image.src,alt:"A portrait of "+t.about.name}}),n("h2",{staticClass:"text-3xl font-sans font-bold mb-1",domProps:{textContent:t._s(t.about.name)}}),n("h3",{staticClass:"text-gray-600 uppercase font-sans font-semibold mb-6",domProps:{textContent:t._s(t.about.title)}}),n("ul",{staticClass:"flex justify-center items-center -mx-2 mb-6 text-lg"},t._l(t.about.links,(function(t){return n("li",{key:t.alt,staticClass:"mx-2"},[n("a",{class:"text-gray-500 hover:text-"+t.color,attrs:{href:t.target,title:t.alt}},[n("feather-icon",{staticClass:"h-current",attrs:{name:t.icon}})],1)])})),0),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"px-4 about-md-content leading-normal",domProps:{innerHTML:t._s(t.about.content)}})],1):t._e()])}),[],!1,null,null,null);"function"==typeof a&&a(i);e.default=i.exports},uVvF:function(t,e,n){"use strict";n("Jw0j")}}]);