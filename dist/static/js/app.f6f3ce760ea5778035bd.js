webpackJsonp([1],[,function(e,t,s){"use strict";var a=s(70),n=s.n(a);n.a.init({appId:"yCmQH5vYxGYb4j78452enFvk-gzGzoHsz",appKey:"e6WBkxOwynO03TPvIs6qNlU5"}),t.a=n.a},function(e,t,s){"use strict";var a=s(5),n=s.n(a),i=s(31),r=s.n(i),o=s(13),u=s.n(o),c=s(3),l=s(6),m=s(1),v=s(4),d=s(71),f=s.n(d);s(7);l.a.use(c.b),t.a=new c.b.Store({state:{selected:"Profile",user:{id:"",username:""},resumeConfig:[{field:"Profile",icon:"id",keys:["name","city","intention","sex","age","assessment"]},{field:"Work",icon:"work",type:"array",keys:["company","time","details"]},{field:"Education",icon:"edu",keys:["school","time"]},{field:"Projects",icon:"project",type:"array",keys:["project","time","details"]},{field:"Hobbys",icon:"hobby",type:"array",keys:["hobby"]},{field:"Contacts",icon:"contact",keys:["telephone","email","github","blog"]},{field:"Skills",icon:"skill",type:"array",keys:["skill","content"]}],resume:{id:""}},mutations:{initState:function(e,t){e.resumeConfig.map(function(t){"array"===t.type?l.a.set(e.resume,t.field,[]):(l.a.set(e.resume,t.field,{}),t.keys.map(function(s){l.a.set(e.resume[t.field],s,"")}))}),t&&u()(e,t)},switchTab:function(e,t){e.selected=t},updateResume:function(e,t){var s=t.path,a=t.value;f.a.set(e.resume,s,a),localStorage.setItem("resume",r()(e.resume))},setUser:function(e,t){u()(e.user,t)},removeUser:function(e){e.user.id="",e.user.username="",e.resume.id=""},setResume:function(e,t){e.resumeConfig.map(function(s){var a=s.field;l.a.set(e.resume,a,t[a])}),e.resume.id=t.id},setResumeId:function(e,t){var s=t.id;e.resume.id=s},addResumeSubField:function(e,t){var s={};e.resume[t].push(s),e.resumeConfig.filter(function(e){return e.field===t})[0].keys.map(function(e){l.a.set(s,e,"")})},removeResumeSubField:function(e,t){var s=t.field,a=t.index;e.resume[s].splice(a,1)}},actions:{saveResume:function(e,t){var a=e.state,n=e.commit,i=m.a.Object.extend("Resume"),r=new i;a.resume.id&&(r.id=a.resume.id);var o=s.i(v.a)().id;r.set("Profile",a.resume.Profile),r.set("Work",a.resume.Work),r.set("Education",a.resume.Education),r.set("Projects",a.resume.Projects),r.set("Hobbys",a.resume.Hobbys),r.set("Contacts",a.resume.Contacts),r.set("Skills",a.resume.Skills),r.set("owner_id",o);var u=new m.a.ACL;u.setPublicReadAccess(!0),u.setWriteAccess(m.a.User.current(),!0),r.setACL(u),r.save().then(function(e){a.resume.id||n("setResumeId",{id:e.id})}).catch(function(e){console.log(e)})},fetchResume:function(e,t){var a=e.commit,i=new m.a.Query("Resume");i.equalTo("owner_id",s.i(v.a)().id),i.first().then(function(e){e&&a("setResume",n()({id:e.id},e.attributes))})}}})},,function(e,t,s){"use strict";var a=s(1);t.a=function(e){var t=e||a.a.User.current()||{attributes:{}};return{id:t.id,username:t.attributes.username}}},,,function(e,t,s){"use strict";var a={202:"用户名已被占用",210:"用户名和密码不匹配",211:"找不到该用户",217:"无效的用户名",unknow:"请求失败，请稍后再试"};t.a=function(e){var t=e.code;return a[t]||a.unknow}},,,,,,,,,,,function(e,t,s){function a(e){s(64)}var n=s(0)(s(25),s(83),a,"data-v-394c300a",null);e.exports=n.exports},function(e,t,s){"use strict";var a=s(6),n=s(89),i=s(77),r=s.n(i),o=s(73),u=s.n(o),c=s(74),l=s.n(c);a.a.use(n.a),t.a=new n.a({routes:[{path:"/",name:"Login",component:r.a},{path:"/main",name:"Main",component:u.a},{path:"/preview",name:"Preview",component:l.a}]})},function(e,t,s){function a(e){s(62)}var n=s(0)(s(21),s(81),a,null,null);e.exports=n.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(60);s.n(a);t.default={name:"app"}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(76),n=s.n(a),i=s(18),r=s.n(i),o=s(75),u=s.n(o),c=s(4),l=s(2);t.default={name:"Main",store:l.a,components:{TopBar:n.a,ResumeEditor:u.a,ResumePreview:r.a},created:function(){var e=this;this.$store.commit("initState");var t=s.i(c.a)();this.$store.commit("setUser",t),t.id?this.$store.dispatch("fetchResume").then(function(){e.restoreResumeFromLocalStorage()}):this.restoreResumeFromLocalStorage()},methods:{restoreResumeFromLocalStorage:function(){var e=localStorage.getItem("resume");e&&this.$store.commit("setResume",JSON.parse(e))}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(18),n=s.n(a);t.default={name:"preview",components:{ResumePreview:n.a},methods:{goback:function(){this.$router.replace("/main")}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(5),n=s.n(a),i=s(2),r=s(3);t.default={name:"ResumeEditor",store:i.a,computed:n()({},s.i(r.a)(["resume","resumeConfig"]),{selected:{get:function(){return this.$store.state.selected},set:function(e){return this.$store.commit("switchTab",e)}}}),methods:n()({removeResumeSubField:function(e,t){this.$store.commit("removeResumeSubField",{field:e,index:t})}},s.i(r.c)(["addResumeSubField"]),{changeResumePanels:function(e,t){this.$store.commit("updateResume",{path:e,value:t})}})}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(5),n=s.n(a),i=s(2),r=s(3);t.default={name:"ResumePreview",store:i.a,computed:n()({},s.i(r.a)(["resume"]))}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(5),n=s.n(a),i=s(1),r=s(2),o=s(3);t.default={name:"TopBar",store:r.a,methods:n()({logout:function(){i.a.User.logOut(),this.removeUser(),this.$router.replace("/")},preview:function(){this.$router.replace("/preview")}},s.i(o.c)(["removeUser"]),s.i(o.d)(["saveResume"])),computed:n()({},s.i(o.a)(["user"]))}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(78),n=s.n(a),i=s(79),r=s.n(i);t.default={name:"login",data:function(){return{hasUser:!0}},methods:{signUp:function(){this.hasUser=!1},cancel:function(){this.hasUser=!0}},components:{loginForm:n.a,signUpForm:r.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),n=s(7),i=s(4),r=s(2);s(3);t.default={name:"loginForm",store:r.a,data:function(){return{formData:{username:"",password:""},errorMessage:""}},methods:{login:function(){var e=this,t=this.formData,r=t.username,o=t.password;a.a.User.logIn(r,o).then(function(){var t=s.i(i.a)();e.$store.commit("setUser",t),e.$router.replace("/main")},function(t){e.errorMessage=s.i(n.a)(t)})}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),n=s(7);s(4);t.default={name:"signUpForm",data:function(){return{formData:{username:"",passage:"",email:""},errorMessage:""}},methods:{signUp:function(){var e=this,t=this.formData,i=t.username,r=t.password,o=t.email,u=new a.a.User;u.setUsername(i),u.setPassword(r),u.setEmail(o),u.signUp().then(function(t){e.$emit("success",{username:t.attributes.username,id:t.id}),e.$router.replace("/main")},function(t){e.errorMessage=s.i(n.a)(t)})}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(6),n=s(20),i=s.n(n),r=s(19);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,s){function a(e){s(66)}var n=s(0)(s(22),s(85),a,"data-v-66e421da",null);e.exports=n.exports},function(e,t,s){function a(e){s(69)}var n=s(0)(s(23),s(88),a,"data-v-f0d04892",null);e.exports=n.exports},function(e,t,s){function a(e){s(67)}var n=s(0)(s(24),s(86),a,"data-v-75f33a9b",null);e.exports=n.exports},function(e,t,s){function a(e){s(63)}var n=s(0)(s(26),s(82),a,"data-v-1e6819df",null);e.exports=n.exports},function(e,t,s){function a(e){s(65)}var n=s(0)(s(27),s(84),a,"data-v-4ff15832",null);e.exports=n.exports},function(e,t,s){function a(e){s(61)}var n=s(0)(s(28),s(80),a,"data-v-107f6a16",null);e.exports=n.exports},function(e,t,s){function a(e){s(68)}var n=s(0)(s(29),s(87),a,"data-v-7fe36aba",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:function(t){t.preventDefault(),e.login(t)}}},[s("div",{staticClass:"row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",required:"",placeholder:"用户名"},domProps:{value:e.formData.username},on:{input:function(t){t.target.composing||(e.formData.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",required:"",placeholder:"密码"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||(e.formData.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"actions"},[s("span",[e._v(e._s(e.errorMessage))]),e._v(" "),s("input",{attrs:{type:"submit",value:"登录"}}),e._v(" "),e._t("default")],2)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"top-bar"},[e._m(0),e._v(" "),s("div",{staticClass:"options"},[s("span",{staticClass:"welcome"},[e._v("你好:"+e._s(e.user.username))]),e._v(" "),s("input",{staticClass:"minor",attrs:{type:"button",value:" 登出"},on:{click:e.logout}}),e._v(" "),s("input",{staticClass:"primary",attrs:{type:"button",value:"保存"},on:{click:e.saveResume}}),e._v(" "),s("input",{staticClass:"primary",attrs:{type:"button",value:"预览"},on:{click:e.preview}})])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logo"},[s("span",[e._v("Vue简历编辑器")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"resume-preview"}},[s("section",{staticClass:"section-left"},[s("header",{staticClass:"profile"},[s("div",{staticClass:"left"},[s("h1",[e._v(e._s(e.resume.Profile.name))]),e._v(" "),s("h3",[e._v("求职意向:"+e._s(e.resume.Profile.intention))]),e._v(" "),s("div",{staticClass:"phone"},[s("span",[e._v("电话：")]),e._v(" "),s("span",[e._v("\n        "+e._s(e.resume.Contacts.telephone)+"\n      ")])]),e._v(" "),s("div",{staticClass:"gender"},[s("span",[e._v("性别:")]),e._v(" "),s("span",[e._v(e._s(e.resume.Profile.sex))])])]),e._v(" "),s("div",{staticClass:"right"},[s("p",{staticClass:"github"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-github"}})]),e._v(" "),s("span",[e._v("Github:\n                  "),s("a",{attrs:{href:e.resume.Contacts.github},domProps:{textContent:e._s(e.resume.Contacts.github)}})])]),e._v(" "),s("p",{staticClass:"blog"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-blog"}})]),e._v(" "),s("span",[e._v("Blog:\n                          "),s("a",{attrs:{href:e.resume.Contacts.blog},domProps:{textContent:e._s(e.resume.Contacts.blog)}})])]),e._v(" "),s("p",{staticClass:"email"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-email"}})]),e._v(" "),s("span",[e._v(e._s(e.resume.Contacts.email))])])])]),e._v(" "),s("div",{staticClass:"edu"},[s("h3",[e._v("教育背景")]),e._v(" "),s("span",[e._v(e._s(e.resume.Education.school)+":")]),e._v(" "),s("span",[e._v(e._s(e.resume.Education.time))])]),e._v(" "),s("div",{staticClass:"blog"}),e._v(" "),s("div",{staticClass:"work"},[e._m(0),e._v(" "),e._l(e.resume.Work,function(t){return s("div",{staticClass:"work-item"},[s("ul",[s("li",{staticClass:"item-title"},[s("span",[e._v(e._s(t.company))]),e._v(" "),s("span",[e._v(e._s(t.time))])]),e._v(" "),s("li",{staticClass:"content"},[e._v(e._s(t.details))])])])})],2),e._v(" "),s("div",{staticClass:"project"},[e._m(1),e._v(" "),e._l(e.resume.Projects,function(t){return s("div",{staticClass:"project-item"},[s("ul",[s("li",{staticClass:"item-title"},[s("span",[e._v(e._s(t.project))]),e._v(" "),s("span",[e._v(e._s(t.time))])]),e._v(" "),s("li",{staticClass:"content"},[e._v(e._s(t.details))])])])})],2),e._v(" "),s("div",{staticClass:"skill"},[e._m(2),e._v(" "),e._l(e.resume.Skills,function(t){return s("div",{staticClass:"skill-item"},[s("ul",[s("li",{staticClass:"item-title"},[s("span",[e._v(e._s(t.skill))])]),e._v(" "),s("li",{staticClass:"content"},[e._v(e._s(t.content))])])])})],2),e._v(" "),s("div",{staticClass:"hobbies"},[s("h3",[e._v("兴趣爱好")]),e._v(" "),s("ul",{staticClass:"hobby-item"},e._l(e.resume.Hobbys,function(t,a){return s("li",[e._v(e._s(t.hobby))])}))]),e._v(" "),s("div",{staticClass:"self-assessment"},[s("h3",[e._v("自我评价")]),e._v(" "),s("p",[e._v("\n              "+e._s(e.resume.Profile.assessment)+"\n            ")])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title"},[s("h3",[e._v("工作经验")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title"},[s("h3",[e._v("项目经验")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title"},[s("h3",[e._v("技能")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"login"},[s("h2",[e._v("Vue简历编辑器")]),e._v(" "),e.hasUser?s("div",[s("login-form",[s("input",{attrs:{type:"button",value:"注册"},on:{click:e.signUp}})])],1):s("div",[s("sign-up-form",[s("input",{attrs:{type:"button",value:"取消"},on:{click:e.cancel}})])],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-page"},[s("header",[s("top-bar")],1),e._v(" "),s("main",[s("resume-editor"),e._v(" "),s("resume-preview")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"resume-editor"}},[s("nav",[s("ol",e._l(e.resumeConfig,function(t){return s("li",{class:{active:t.field===e.selected},on:{click:function(s){e.selected=t.field}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-"+t.icon}})]),e._v("\n        "+e._s(t.field)+"\n      ")])}))]),e._v(" "),s("ol",{staticClass:"panels"},e._l(e.resumeConfig,function(t){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.field===e.selected,expression:"item.field===selected"}]},["array"===t.type?s("div",{staticClass:"array-item"},[e._l(e.resume[t.field],function(a,n){return s("div",{staticClass:"subitem"},[s("button",{staticClass:"remove-btn",on:{click:function(s){e.removeResumeSubField(t.field,n)}}},[e._v("X")]),e._v(" "),e._l(a,function(a,i){return s("div",{staticClass:"resumePanels"},[s("label",[e._v(e._s(""+i))]),e._v(" "),s("input",{attrs:{type:"text"},domProps:{value:a},on:{input:function(s){e.changeResumePanels(t.field+"."+n+"."+i,s.target.value)}}})])})],2)}),e._v(" "),s("button",{staticClass:"add-btn",on:{click:function(s){e.addResumeSubField(t.field)}}},[e._v("增加")])],2):e._l(e.resume[t.field],function(a,n){return s("div",{staticClass:"resumePanels"},[s("label",[e._v(e._s(n))]),e._v(" "),s("input",{attrs:{type:"text"},domProps:{value:a},on:{input:function(s){e.changeResumePanels(t.field+"."+n,s.target.value)}}})])})],2)}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:function(t){t.preventDefault(),e.signUp(t)}}},[s("div",{staticClass:"row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",required:"",placeholder:"用户名"},domProps:{value:e.formData.username},on:{input:function(t){t.target.composing||(e.formData.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",required:"",placeholder:"密码"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||(e.formData.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],attrs:{type:"email",required:"",placeholder:"邮箱"},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||(e.formData.email=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"actions"},[s("span",[e._v(e._s(e.errorMessage))]),e._v(" "),e._t("default"),e._v(" "),s("input",{attrs:{type:"submit",value:"注册"}})],2)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"preview"},[s("ResumePreview"),e._v(" "),s("div",{staticClass:"goback",on:{click:e.goback}},[e._v("返回")])],1)},staticRenderFns:[]}}],[30]);
//# sourceMappingURL=app.f6f3ce760ea5778035bd.js.map