(window.webpackJsonp=window.webpackJsonp||[]).push([[47,23,25,28,30,32,33,39],{268:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("6e2f9a15",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isClicked:!1}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){!0===this.isClicked&&(document.getElementById("searchInput").value="",this.$emit("close-modal"),this.isClicked=!1)},closeEmit:function(){document.getElementById("searchInput").value="",this.$emit("close-modal")},boxClick:function(){this.isClicked=!0}}},l=(n(270),n(40)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-overlay1",on:{click:t.boxClick}},[n("div",{staticClass:"modal-overlay",on:{click:t.closeEmit}}),t._v(" "),n("div",{staticClass:"modal"},[t._m(0),t._v(" "),n("div",{staticClass:"submit"},[n("button",{on:{click:t.closeEmit}},[t._v("SUBMIT")])]),t._v(" "),n("button",{staticClass:"close",on:{click:t.closeEmit}},[t._v("×")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-div"},[e("input",{attrs:{id:"searchInput",type:"text",placeholder:"SEARCH",value:""}})])}],!1,null,"b54dd3d6",null);e.default=component.exports},270:function(t,e,n){"use strict";n(268)},271:function(t,e,n){var o=n(52)(!1);o.push([t.i,".search-div[data-v-b54dd3d6]{width:80%;display:flex;align-items:center;border-bottom:2px solid grey}.submit[data-v-b54dd3d6]{display:flex;flex-direction:row-reverse;margin-right:15%}.modal-overlay1[data-v-b54dd3d6]{top:50%;justify-content:flex-end}.modal-overlay[data-v-b54dd3d6],.modal-overlay1[data-v-b54dd3d6]{position:fixed;bottom:0;right:0;left:0;display:flex;z-index:1000}.modal-overlay[data-v-b54dd3d6]{top:0;justify-content:center}.modal[data-v-b54dd3d6]{display:flex;position:relative;flex-direction:column;text-align:center;background-color:hsla(0,0%,100%,.8);width:60%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:5px 0 0 5px;padding:20px 50px;z-index:2000}.close[data-v-b54dd3d6]{position:absolute;right:50px;top:10px;width:30px;font-size:22px!important}button[data-v-b54dd3d6]:hover{background-color:#892432!important;color:#fff!important}input[data-v-b54dd3d6]{width:100%;margin-left:0;margin-top:20px;background:none;outline:none;font-size:16px;font-weight:600}[data-v-b54dd3d6]::-moz-placeholder{color:#1c1818;opacity:1}[data-v-b54dd3d6]:-ms-input-placeholder{opacity:1}[data-v-b54dd3d6]::placeholder{color:#1c1818;opacity:1}[data-v-b54dd3d6]:-ms-input-placeholder{color:#1c1818}[data-v-b54dd3d6]::-ms-input-placeholder{color:#1c1818}button[data-v-b54dd3d6]{background:none;width:150px;color:#892432;font-size:14px;margin-top:5px;font-weight:400;border-radius:16px;width:20%}",""]),t.exports=o},276:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-row mobile-nav-phone"},[n("div",{staticClass:"sub-phone sub-phone-number",staticStyle:{"font-size":"18px"}},[n("a",{staticClass:"phone-number",attrs:{href:"tel:337-893-3423"}},[t._v("337-893-3423")])])])}],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var o=n(272),l=n.n(o),r=(n(273),n(274),{name:"Carousel",components:{VueSlickCarousel:l.a},methods:{showNext:function(){this.$refs.carousel.next()},showBefore:function(){this.$refs.carousel.prev()}}}),c=n(40),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonials wf-section"},[n("div",{staticClass:"testimonials-section"},[n("div",{staticClass:"w-col w-col-11 slick-carousel"},[n("div",{staticClass:"w-slider-mask"},[n("img",{staticClass:"carousel-quote",attrs:{src:"assets/images/carousel quote.png",loading:"lazy",alt:"",width:"35"}}),t._v(" "),n("VueSlickCarousel",{ref:"carousel",staticClass:"testimonial w-slider",attrs:{"css-ease":t.ease}},[n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM\n            ")])]),t._v(" "),n("div",{staticClass:"w-slide"},[n("div",{staticClass:"testimonial-text"},[t._v("\n              Suspendisse dignissim ultrices dolor, quis condimentum orci.\n              Proin eu pulvinar leo. Quisque tempor aliquet convallis. Ut in\n              urna lacinia, viverra ex quis, suscipit sapien. Donec sed ipsum\n              velit. Praesent at faucibus purus. Curabitur pretium nibh vel\n              nisi efficitur viverra. Nullam finibus in lectus ut fermentum.\n              Phasellus hendrerit nec nulla a posuere. Fusce rhoncus ut sem et\n              lobortis. Aenean tempus ut neque eu eleifend. Curabitur quis\n              urna mi. Suspendisse odio justo, lobortis vel auctor ut, ornare\n              eget tortor."),n("br"),t._v("LOREM IPSUM "),n("br"),n("br")])])])],1),t._v(" "),n("div",{staticClass:"slider-arrow"},[n("div",{staticClass:"left-arrow",on:{click:t.showBefore}},[n("div",{staticClass:"icon-4 w-icon-slider-left",staticStyle:{color:"#4f748b"}},[t._v("\n            ◄\n          ")])]),t._v(" "),n("div",{staticClass:"right-arrow",on:{click:t.showNext}},[n("div",{staticClass:"icon-3 w-icon-slider-right",staticStyle:{color:"#4f748b"}},[t._v("\n            ►\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var o={components:{SavedModal:n(269).default},data:function(){return{isOpen:!1,burgerOpen:!1,showModal:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},mouseOver:function(){this.isOpen=!0,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")},mouseOut:function(){this.isOpen=!1},burgerToggle:function(){this.burgerOpen=!this.burgerOpen,document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown").classList.add("w--open")}}},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-container wf-section"},[n("div",{staticClass:"nav-contain w-row"},[n("div",{staticClass:"column-2 w-col w-col-5 w-col-stack nav-bar-group"},[n("NuxtLink",{staticClass:"nav-bar-logo",attrs:{to:"/"}},[n("img",{attrs:{src:"assets/images/logo.ce898954.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"w-nav-button",on:{click:t.burgerToggle}},[n("div",{staticClass:"w-icon-nav-menu"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.burgerOpen,expression:"burgerOpen"}],staticClass:"w-nav-overlay",staticStyle:{display:"block",height:"4042.22px"},attrs:{id:"w-nav-overlay-0","data-wf-ignore":""}},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation","data-nav-menu-open":""}},[n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/"}},[t._v("\n            Home\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/about"}},[t._v("\n            About\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/resources"}},[t._v("\n            Resources\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/faq"}},[t._v("\n            FAQ\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"nav-link w-nav-link w--nav-link-open",staticStyle:{"max-width":"728px"},attrs:{to:"/contact"}},[t._v("\n            Contact\n          ")])],1)])],1),t._v(" "),n("div",{staticClass:"column w-col w-col-7 w-col-stack w-col-small-small-stack"},[n("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"container w-container nav-menu-responsive"},[n("nav",{staticClass:"w-nav-menu",attrs:{role:"navigation"}},[n("NuxtLink",{attrs:{to:"/"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Home")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/about"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("About")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/resources"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("Resources")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/faq"}},[n("a",{staticClass:"nav-link w-nav-link"},[t._v("FAQ")])]),t._v(" "),n("NuxtLink",{attrs:{to:"/contact"}},[n("a",{staticClass:"nav-link w-nav-link",attrs:{"aria-current":"page"}},[t._v("Contact")])]),t._v(" "),n("button",{staticClass:"nav-link w-nav-link",staticStyle:{background:"none"},on:{click:function(e){t.showModal=!0}}},[n("img",{attrs:{src:"assets/images/search.png",loading:"lazy",alt:"",width:"20px"}})]),t._v(" "),t._m(0)],1)])]),t._v(" "),n("div",{staticClass:"w-row mobile-nav-hidden"},[n("div",{staticClass:"sub-phone left w-col w-col-3 w-col-stack"},[n("div",{staticClass:"w-dropdown",attrs:{"data-hover":"true","data-delay":"0"},on:{mouseover:t.mouseOver,mouseout:t.mouseOut,click:t.toggle}},[t._m(1),t._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"w-dropdown-list",attrs:{id:"myDropdown"}},[n("div",{staticClass:"w-dropdown-list-sub"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Commercial")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Title Settlement")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Loan Closing")])])],1),t._v(" "),n("div",{staticClass:"w-dropdown-list-sub"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Residential")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Estate Planning")])])],1)])])]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"site-toggle w-col w-col-5 w-col-stack"},[n("Nuxt-link",{attrs:{to:"/att-index"}},[n("a",{staticClass:"toggle-button w-button"},[n("p",{staticClass:"sub-switch"},[t._v("Attorneys At Law")]),t._v(" "),n("hr",{attrs:{size:"2",width:"80px"}})])])],1)])])]),t._v(" "),n("SavedModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{"close-modal":function(e){t.showModal=!1}}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"nav-link w-nav-link",attrs:{href:"https://facebook.com/VERMILIONLAWYERS/","aria-current":"page"}},[e("img",{attrs:{src:"assets/images/Facebook-logo-gray.png",loading:"lazy",alt:"",width:"20px"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-toggle w-dropdown-toggle"},[n("div",{staticClass:"icon w-icon-dropdown-toggle"}),t._v(" "),n("div",{staticClass:"text-block-4"},[t._v("Real Estate")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-phone sub-phone-number w-col w-col-4 w-col-stack"},[n("a",{staticClass:"phone-number",attrs:{href:"tel:337-893-3423"}},[t._v("337-893-3423")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SavedModal:n(269).default})},280:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isOpen:!1,isOpenContact:!1,expandText:"Expand"}},methods:{toggle:function(){this.expandText=this.isOpen?"Expand":"Close",this.isOpen=!this.isOpen}}},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer wf-section"},[n("div",{staticClass:"main-content-container w-container"},[n("div",{staticClass:"experienced-attorneys-text footer-font"},[t._v("\n      Experienced and Local Attorneys Here for You\n    ")]),t._v(" "),n("div",{staticClass:"footer-content w-row"},[t._m(0),t._v(" "),n("div",{staticClass:"w-col w-col-8 footer-parent"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"w-col w-col-6 footer-policy"},[t._m(3),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text",staticStyle:{"margin-top":"20px"}},[t._v("\n            Personal Information"),n("br"),t._v("\n            The types of information collected may depend upon the services or\n            products provided. Information collected may include, but is not\n            limited to:\n          ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text",staticStyle:{"margin-left":"20px"}},[t._v("\n            • Driver's License Numbers;"),n("br"),t._v("\n            • Social Security Numbers:"),n("br"),t._v("\n            • Phone Numbers; "),n("br"),t._v("\n            • Property and Mailing Address(es);"),n("br"),t._v("\n            • Account Numbers, including bank accounts and mortgage accounts;\n            "),n("br"),t._v("\n            • Credit Card Numbers;"),n("br"),t._v("\n            • Full Legal Names; "),n("br"),t._v("\n            • Marital Status "),n("br")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text"},[t._v("\n            This nonpublic, personal information may be collected from a\n            variety of sources including, but not limited to:\n          ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text",staticStyle:{"margin-left":"20px"}},[t._v("\n            • Information on loan applications;"),n("br"),t._v("\n            • Information from our files, or other files regarding legal\n            transactions;\n            "),n("br"),t._v("\n            • Information from consumer reporting agencies, real estate\n            agents, or lenders;\n            "),n("br"),t._v("\n            • Information from Investigators and/or investigative services.\n            "),n("br")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text"},[t._v("\n            Disclosure of Personal Information The Company may need to share\n            personal information in the process of handling and completing a\n            transaction and maintaining customer/client accounts. This\n            information may be disclosed to both affiliated and non-affiliated\n            companies that perform services on behalf of the Company, as\n            permitted by law. These companies include:\n          ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text",staticStyle:{"margin-left":"20px"}},[t._v("\n            • Title abstractors; "),n("br"),t._v("\n            • Legal counsel; "),n("br"),t._v("\n            • Contract closers;"),n("br"),t._v("\n            • Survey companies; "),n("br"),t._v("\n            • Real estate lien holders;"),n("br"),t._v("\n            • Private Investigators."),n("br")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text"},[t._v("\n            The Company may also disclose personal information when necessary\n            to comply with the law; protect the safety of consumers,\n            employees, or property; and/or to comply with judicial\n            proceedings, court orders, or the legal process."),n("br"),t._v("\n            In-House Protection The Company restricts the sharing of personal\n            information to employees and staff that need the information to\n            provide services required to process a transaction. Physical,\n            electronic, and process safeguards are in place to protect\n            personal information and to comply with regulations and industry\n            standards. "),n("br"),t._v(" "),n("br")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text"},[t._v("\n            Privacy Policy & Notice Questions\n          ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text"},[t._v("\n            Questions regarding this Policy should be directed to:\n          ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"footer-text",staticStyle:{"margin-left":"20px"}},[t._v("\n            Gabe A. Duhon, Owner"),n("br"),t._v("\n            P.O. Box 478"),n("br"),t._v("\n            Abbeville, Louisiana 70511-0478\n          ")]),t._v(" "),n("div",{staticClass:"w-col w-col-3",on:{click:t.toggle}},[n("div",{staticClass:"footer-expand"},[n("span",{staticStyle:{color:"#4f748b"}},[t._v(t._s(t.expandText))]),t._v("\n              "+t._s(t.isOpen?"▲":"▼")+"\n            ")])])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpenContact,expression:"isOpenContact"}],staticClass:"w-col footer-contact-form"},[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t._m(4),t._v(" "),n("p",{staticClass:"close-button",on:{click:function(e){t.isOpenContact=!1}}},[t._v("×")])]),t._v(" "),t._m(5)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isOpenContact,expression:"!isOpenContact"}],staticClass:"w-col footer-contact-form-title",on:{click:function(e){t.isOpenContact=!0}}},[t._m(6),t._v(" "),t._m(7)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-col w-col-4"},[e("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Full Logo.png",loading:"lazy",alt:"",width:"90%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3 footer-child"},[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"http://maps.google.com/?q=105 Tivoli St, Abbeville, LA 70510"}},[n("p",{staticClass:"footer-text"},[n("span",{staticClass:"footer-sub-title"},[t._v(" OFFICE ")]),t._v(" "),n("br"),t._v("105 Tivoli Street"),n("br"),t._v("Abbeville, LA"),n("br")])]),t._v(" "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"tel:337-893-3423"}},[n("p",{staticClass:"footer-text"},[t._v("337-893-3423")])]),t._v(" "),n("a",{staticStyle:{cursor:"pointer"},attrs:{href:"https://facebook.com/VERMILIONLAWYERS/"}},[n("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Facebook-logo-gray.png",loading:"lazy",alt:"",width:"20%"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3 footer-child second"},[n("p",{staticClass:"footer-text linked"},[n("span",[t._v("Contact")]),n("br"),t._v("Disclaimer"),n("br"),t._v("Sitemap"),n("br"),t._v("Privacy\n            policy"),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"footer-text"},[n("span",{staticClass:"footer-sub-title"},[t._v(" PRIVACY POLICY ")]),t._v(" "),n("br"),t._v("‍Purpose"),n("br"),t._v("Federal and state laws and regulations require\n            Gabe A. Duhon, L.L.C. (“the Company”) to disclose how it collects,\n            shares, and protects any personal information obtained during the\n            course of normal business operations. This Privacy Policy and\n            Notice is to be distributed pursuant to Title V of the\n            Gramm-Leach-Bliley Act (GLBA). Any information collected will only\n            be used in accordance with this privacy statement."),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"contact-us-title description"},[t._v("\n          Contact Us"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-col w-col-6 contact-us-group"},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE",required:""}})]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-6"},[n("textarea",{staticClass:"textarea w-input",attrs:{id:"field",placeholder:"MESSAGE",maxlength:"5000",name:"field",rows:"6"}}),t._v(" "),n("input",{staticClass:"button contact w-button today-button",attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"contact-us-title description desktop-view"},[t._v("\n        Contact Us"),n("strong",[n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"contact-us-title description mobile-view"},[t._v("\n        Contact Us"),n("strong",[n("br")])])}],!1,null,null,null);e.default=component.exports},285:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isOpen:!1}}},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-nav-practice"},[n("div",{staticClass:"sub-phone",staticStyle:{width:"50%"}},[n("div",[n("div",[n("div",{staticClass:"text-block-4",on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("\n          Real Estate    \n          "+t._s(t.isOpen?"▼":"▲")+"\n        ")])]),t._v(" "),t.isOpen?n("nav",{staticClass:"mobile-practice-dropdown",staticStyle:{top:"100%",height:"fit-content","background-color":"rgba(79, 116, 139, 0.9)"}},[n("div",{staticClass:"w-dropdown-list-sub mobile-legal"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Commercial")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Title Settlement")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Loan Closing")])])],1),t._v(" "),n("div",{staticClass:"w-dropdown-list-sub mobile-legal"},[n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Residential")])]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{to:"/practise-area"}},[n("p",{staticClass:"w-dropdown-link"},[t._v("Estate Planning")])])],1)]):t._e()])]),t._v(" "),n("div",{staticClass:"site-toggle",staticStyle:{width:"50%"}},[n("Nuxt-link",{attrs:{to:"/att-index"}},[n("a",{staticClass:"toggle-button w-button",staticStyle:{"padding-left":"20px","align-items":"center"},attrs:{href:"/"}},[n("p",[t._v("Attorneys At Law")]),t._v(" "),n("hr",{attrs:{size:"2",width:"80px"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MobileNavPractiseFaq"),t._v(" "),t._m(0),t._v(" "),n("MobileNavPhone"),t._v(" "),t._m(1),t._v(" "),n("Carousel")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay-section about-us resources r-header w-container"},[n("h1",{staticClass:"hero-text sub-page-hero resources",staticStyle:{position:"relative","margin-left":"0px"}},[n("img",{staticClass:"desktop-view",staticStyle:{position:"absolute",left:"-70%"},attrs:{src:"assets/images/Logo Icon.png",loading:"lazy",alt:""}}),t._v("\n      Contact Us"),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resources-top contact wf-section"},[n("div",{staticClass:"resources-top-container contact-top w-row"},[n("div",{staticClass:"w-col w-col-8 w-col-stack"},[n("h1",{staticClass:"resources-title schedule"},[t._v("\n          Schedule a"),n("br"),t._v("Consultation"),n("br")]),t._v(" "),n("div",{staticClass:"w-form"},[n("p",{staticClass:"required-field"},[t._v("REQUIRED FIELDS*")]),t._v(" "),n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME*"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL*",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE*",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Service-Subject",type:"text",maxlength:"256",name:"Service-Subject","data-name":"Service / Subject",placeholder:"SERVICE/SUBJECT",required:""}}),t._v(" "),n("textarea",{staticClass:"w-input",attrs:{id:"Message",placeholder:"MESSAGE",maxlength:"5000",name:"Message","data-name":"Message",rows:"5"}}),t._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"20px"}},[n("input",{staticClass:"button contact w-button submit",attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])]),t._v(" "),n("div",{staticClass:"desktop-view contact-image"},[n("img",{attrs:{src:"assets/images/Contact-Image.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"\n        resources-top-container\n        other-resources\n        contact-bottom\n        w-row\n        desktop-view\n      "},[n("div",{staticClass:"column-10 w-col w-col-6"},[n("div",{staticClass:"w-embed w-iframe"},[n("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1739156630233!2d-92.13768718488652!3d29.9744314819078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862367f2016092bf%3A0x916bc0c052053c97!2s105%20Tivoli%20St%2C%20Abbeville%2C%20LA%2070510!5e0!3m2!1sen!2sus!4v1634949420130!5m2!1sen!2sus",width:"100%",height:"250",allowfullscreen:"",loading:"lazy"}})])]),t._v(" "),n("div",{staticClass:"w-col w-col-6"},[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"http://maps.google.com/?q=105 Tivoli St, Abbeville, LA 70510"}},[n("h1",{staticClass:"resources-title other address"},[t._v("\n            105 Tivoli Street"),n("br"),t._v("Abbeville, LA\n          ")])]),t._v(" "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"tel:337-893-3423"}},[n("h1",{staticClass:"resources-title other address"},[t._v("337-893-3423")])])])]),t._v(" "),n("div",{staticClass:"map-view mobile-view"},[n("div",{staticClass:"w-embed w-iframe"},[n("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1739156630233!2d-92.13768718488652!3d29.9744314819078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862367f2016092bf%3A0x916bc0c052053c97!2s105%20Tivoli%20St%2C%20Abbeville%2C%20LA%2070510!5e0!3m2!1sen!2sus!4v1634949420130!5m2!1sen!2sus",width:"100%",height:"250",allowfullscreen:"",loading:"lazy"}})]),t._v(" "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"http://maps.google.com/?q=105 Tivoli St, Abbeville, LA 70510"}},[n("h1",{staticClass:"resources-title other address",staticStyle:{"margin-top":"30px"}},[t._v("\n          105 Tivoli Street"),n("br"),t._v("Abbeville, LA\n        ")])]),t._v(" "),n("a",{staticStyle:{"text-decoration":"none","margin-right":"50px","z-index":"800"},attrs:{href:"tel:337-893-3423"}},[n("h1",{staticClass:"resources-title other address"},[t._v("337-893-3423")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavPractiseFaq:n(285).default,MobileNavPhone:n(276).default,Carousel:n(277).default})},328:function(t,e,n){"use strict";n.r(e);var o={},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("ContactMain"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(279).default,ContactMain:n(308).default,Footer:n(280).default})}}]);