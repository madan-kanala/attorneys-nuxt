(window.webpackJsonp=window.webpackJsonp||[]).push([[36,12,16,32],{266:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("b678f062",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n.r(e);var o={beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){document.getElementById("searchInput").value="",this.$emit("close-modal")},closeEmit:function(){document.getElementById("searchInput").value="",this.$emit("close-modal")}}},l=(n(269),n(40)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-overlay1"},[n("div",{staticClass:"modal-overlay",on:{click:t.closeEmit}}),t._v(" "),n("div",{staticClass:"modal"},[t._m(0),t._v(" "),n("div",{staticClass:"submit"},[n("button",{on:{click:t.closeEmit}},[t._v("SUBMIT")])]),t._v(" "),n("button",{staticClass:"close",on:{click:t.closeEmit}},[t._v("×")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-div"},[e("input",{attrs:{id:"searchInput",type:"text",placeholder:"SEARCH",value:""}})])}],!1,null,"312c017e",null);e.default=component.exports},269:function(t,e,n){"use strict";n(266)},270:function(t,e,n){var o=n(52)(!1);o.push([t.i,".search-div[data-v-312c017e]{width:80%;display:flex;align-items:center;border-bottom:2px solid grey}.submit[data-v-312c017e]{display:flex;flex-direction:row-reverse;margin-right:15%}.modal-overlay1[data-v-312c017e]{top:50%;justify-content:flex-end}.modal-overlay[data-v-312c017e],.modal-overlay1[data-v-312c017e]{position:fixed;bottom:0;right:0;left:0;display:flex;z-index:1000}.modal-overlay[data-v-312c017e]{top:0;justify-content:center}.modal[data-v-312c017e]{display:flex;position:relative;flex-direction:column;text-align:center;background-color:hsla(0,0%,100%,.8);width:60%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:5px 0 0 5px;padding:20px 50px;z-index:2000}.close[data-v-312c017e]{position:absolute;right:50px;top:10px;width:30px;font-size:22px!important}button[data-v-312c017e]:hover{background-color:#892432!important;color:#fff!important}input[data-v-312c017e]{width:100%;margin-left:0;margin-top:20px;background:none;outline:none;font-size:16px;font-weight:600}[data-v-312c017e]::-moz-placeholder{color:#1c1818;opacity:1}[data-v-312c017e]:-ms-input-placeholder{opacity:1}[data-v-312c017e]::placeholder{color:#1c1818;opacity:1}[data-v-312c017e]:-ms-input-placeholder{color:#1c1818}[data-v-312c017e]::-ms-input-placeholder{color:#1c1818}button[data-v-312c017e]{background:none;width:150px;color:#892432;font-size:14px;margin-top:5px;font-weight:400;border-radius:16px;width:20%}",""]),t.exports=o},276:function(t,e,n){"use strict";n.r(e);var o={components:{SavedModal:n(267).default},data:function(){return{isOpen:!1,burgerOpen:!1,showModal:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},mouseOver:function(){this.isOpen=!0,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},mouseOut:function(){this.isOpen=!1},burgerToggle:function(){this.burgerOpen=!this.burgerOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")}}},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-container wf-section"},[n("div",{staticClass:"nav-contain w-row"},[n("div",{staticClass:"column-2 w-col w-col-5 w-col-stack nav-bar-group"},[n("NuxtLink",{staticClass:"nav-bar-logo",attrs:{to:"/att-index"}},[n("img",{attrs:{src:"assets/images/logo.ce898954.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"w-nav-button",on:{click:t.burgerToggle}},[n("div",{staticClass:"w-icon-nav-menu"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.burgerOpen,expression:"burgerOpen"}],staticClass:"w-nav-overlay",staticStyle:{display:"block",height:"4042.22px"},attrs:{id:"w-nav-overlay-0","data-wf-ignore":""}},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation","data-nav-menu-open":""}},[n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-index"}},[t._v("\n            Home\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-about"}},[t._v("\n            About\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-resources"}},[t._v("\n            Resources\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-faq"}},[t._v("\n            FAQ\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/att-contact"}},[t._v("\n            Contact\n          ")])],1)])],1),t._v(" "),n("div",{staticClass:"column w-col w-col-7 w-col-stack w-col-small-small-stack"},[n("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"container w-container nav-menu-responsive"},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation"}},[n("NuxtLink",{attrs:{to:"/att-index"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Home")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-about"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("About")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-resources"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Resources")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-faq"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("FAQ")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/att-contact"}},[n("a",{staticClass:"nav-link w-nav-link",attrs:{"aria-current":"page"}},[t._v(" Contact ")])]),t._v(" "),n("button",{staticClass:"nav-link w-nav-link",staticStyle:{background:"none"},on:{click:function(e){t.showModal=!0}}},[n("img",{attrs:{src:"assets/images/search-legal.png",loading:"lazy",alt:"",width:"20px"}})]),t._v(" "),t._m(0)],1)])]),t._v(" "),n("div",{staticClass:"w-row"},[n("div",{staticClass:"sub-phone attorney left w-col w-col-3 w-col-stack"},[n("div",{staticClass:"w-dropdown",attrs:{"data-hover":"true","data-delay":"0"},on:{mouseover:t.mouseOver,mouseout:t.mouseOut,click:t.toggle}},[t._m(1),t._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"w-dropdown-list attorney",attrs:{id:"myDropdown"}},[n("div",{staticClass:"w-dropdown-list-sub"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("adoption")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("family law")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("divorce")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("wills/succession")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("criminal defense")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("personal injury")])])],1),t._v(" "),n("div",{staticClass:"w-dropdown-list-sub"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("dui.dwi")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("workers' comp")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("auto")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("1b-wheeler accident")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("maritime")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/att-practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("\n                    irrevocable/"),n("br"),t._v("\n                    revocable trust\n                  ")])])],1)])])]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"site-toggle w-col w-col-5 w-col-stack"},[n("Nuxt-link",{attrs:{to:"/"}},[n("a",{staticClass:"toggle-button attorney w-button",attrs:{href:"/"}},[n("p",[t._v("Real Estate")]),t._v(" "),n("hr",{attrs:{size:"2",width:"30%"}})])])],1)])])]),t._v(" "),n("SavedModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{"close-modal":function(e){t.showModal=!1}}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"nav-link w-nav-link",attrs:{href:"https://facebook.com/VERMILIONLAWYERS/","aria-current":"page"}},[e("img",{attrs:{src:"assets/images/Facebook-logo-gray.png",loading:"lazy",alt:"",width:"20px"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[n("div",{staticClass:"icon w-icon-dropdown-toggle"}),t._v(" "),n("div",{staticClass:"text-block-4 attorney"},[t._v("Practice Areas")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n            sub-phone sub-phone-number\n            attorney\n            w-col w-col-4 w-col-stack\n          "},[n("a",{staticClass:"phone-number",attrs:{href:"tel:337-893-3423"}},[t._v("337-893-3423")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SavedModal:n(267).default})},277:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isOpen:!1,isOpenContact:!1,expandText:"Expand"}},methods:{toggle:function(){this.expandText=this.isOpen?"Expand":"Close",this.isOpen=!this.isOpen}}},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer wf-section"},[n("div",{staticClass:"main-content-container w-container"},[n("div",{staticClass:"experienced-attorneys-text attorneys footer-font"},[t._v("\n      Experienced and Local Attorneys Here for You\n    ")]),t._v(" "),n("div",{staticClass:"footer-content w-row"},[t._m(0),t._v(" "),n("div",{staticClass:"w-col w-col-8 footer-parent"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"w-col w-col-6 footer-policy"},[t._m(3),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text"},[t._v("\n            Through discussions with management and review of available\n            information, identify the institution’s information sharing\n            practices (and changes to those practices) with affiliates and\n            nonaffiliated third parties; how it treats nonpublic personal\n            information; and how it administers opt-outs.\n          ")]),t._v(" "),n("div",{staticClass:"w-col w-col-3",on:{click:t.toggle}},[n("div",{staticClass:"expand",staticStyle:{"text-align":"left","margin-bottom":"20px"}},[t._v("\n              "+t._s(t.expandText)+"\n              "+t._s(t.isOpen?"▲":"▼")+"\n            ")])])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpenContact,expression:"isOpenContact"}],staticClass:"w-col footer-contact-form attorney"},[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t._m(4),t._v(" "),n("p",{staticClass:"close-button",on:{click:function(e){t.isOpenContact=!1}}},[t._v("×")])]),t._v(" "),t._m(5)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isOpenContact,expression:"!isOpenContact"}],staticClass:"w-col footer-contact-form-title attorney",on:{click:function(e){t.isOpenContact=!0}}},[t._m(6)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-col w-col-4"},[e("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Full Logo.png",loading:"lazy",alt:"",width:"90%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3 footer-child"},[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"http://maps.google.com/?q=105 Tivoli St, Abbeville, LA 70510"}},[n("p",{staticClass:"footer-text"},[n("span",{staticClass:"footer-sub-title"},[t._v("OFFICE")]),n("br"),t._v("105 Tivoli\n              Street"),n("br"),t._v("Abbeville, LA"),n("br")])]),t._v(" "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"tel:337-893-3423"}},[n("p",{staticClass:"footer-text"},[t._v("337-893-3423")])]),t._v(" "),n("a",{staticStyle:{cursor:"pointer"},attrs:{href:"https://facebook.com/VERMILIONLAWYERS/"}},[n("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Facebook-logo-gray.png",loading:"lazy",alt:"",width:"20%"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3 footer-child second"},[n("p",{staticClass:"footer-text linked"},[n("span",[t._v("Contact")]),n("br"),t._v("Disclaimer"),n("br"),t._v("Sitemap"),n("br"),t._v("Privacy\n            policy"),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"footer-text"},[n("span",{staticClass:"footer-sub-title"},[t._v("PRIVACY POLICY")]),n("br"),t._v("‍Purpose"),n("br"),t._v("‍Federal and state laws and regulations\n            require Gabe A. Duhon, L.L.C. (“the Company”) to disclose how it\n            collects, shares, and protects any personal information obtained\n            during the course of normal business operations. This Privacy\n            Policy and Notice is to be distributed pursuant to Title V of the\n            Gramm-Leach-Bliley Act (GLBA). Any information collected will only\n            be used in accordance with this privacy statement."),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"contact-us-title description"},[t._v("\n          Schedule a Consultation"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-col w-col-6 contact-us-group"},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE",required:""}})]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6"},[n("textarea",{staticClass:"textarea w-input",attrs:{id:"field",placeholder:"MESSAGE",maxlength:"5000",name:"field",rows:"6"}}),t._v(" "),n("input",{staticClass:"button contact w-button submit",attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"contact-us-title description"},[t._v("\n        Schedule a consultation"),n("strong",[n("br")])])}],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);var o={},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AttorneysNavbar"),t._v(" "),n("AttorneysFaqMain"),t._v(" "),n("AttorneysFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AttorneysNavbar:n(276).default,AttorneysFaqMain:n(299).default,AttorneysFooter:n(277).default})}}]);