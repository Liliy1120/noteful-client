(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},204:function(e,t,n){},206:function(e,t,n){},208:function(e,t,n){},210:function(e,t,n){},212:function(e,t,n){},214:function(e,t,n){},216:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(76),c=n.n(r),l=n(18),i=n(19),s=n(222),d=(n(88),n(90),n(38)),u=n(39),m=n(3),f=n(4),h=n(6),p=n(5),N=n(7),v=n(219),E=n(99),b=n(8),j=n(221),y=n(79),O=n(26);n(94);function _(e){e.tag,e.className,e.childrenm;var t=Object(O.a)(e,["tag","className","childrenm"]);return o.a.createElement(e.tag,Object(y.a)({className:["NavCircleButton",e.className].join(" ")},t),e.children)}_.defaultProps={tag:"a"};var g=o.a.createContext({notes:[],folders:[],addFolder:function(){},addNote:function(){},deleteNote:function(){}}),k=(n(96),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.context,t=e.folders,n=void 0===t?[]:t,a=e.notes,r=void 0===a?[]:a;return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("ul",{className:"NoteListNav__list"},n.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(j.a,{className:"NoteListNav__folder-link",to:"/folder/".concat(e.id)},o.a.createElement("span",{className:"NoteListNav__num-notes"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(function(e){return e.folder_id===t}).length}(r,e.id)),e.folder_name))})),o.a.createElement("div",{className:"NoteListNav__button-wrapper"},o.a.createElement(_,{tag:E.a,to:"/add-folder",type:"button",className:"NoteListNav__add-folder-button"},o.a.createElement(b.a,{icon:"plus"}),o.a.createElement("br",null),"Folder")))}}]),t}(o.a.Component));k.contextType=g;n(100);function P(e){return o.a.createElement("div",{className:"NotePageNav"},o.a.createElement(_,{tag:"button",role:"link",onClick:function(){return e.history.goBack()},className:"NotePageNav__back-button"},o.a.createElement(b.a,{icon:"chevron-left"}),o.a.createElement("br",null),"Back"),e.folder&&o.a.createElement("h3",{className:"NotePageNav__folder-name"},e.folder.name))}P.defaultProps={history:{goBack:function(){}}};var A=n(78),D={API_ENDPOINT:"https://immense-peak-65063.herokuapp.com"},x=(n(204),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleClickDelete=function(e){e.preventDefault();var t=n.props.id;fetch("".concat(D.API_ENDPOINT,"/notes/").concat(t),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(){n.context.deleteNote(t)}).catch(function(e){console.error({error:e})})},n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.id,a=e.modified;return o.a.createElement("div",{className:"Note"},o.a.createElement("h2",{className:"Note__title"},o.a.createElement(E.a,{to:"/note/".concat(n)},t)),o.a.createElement("button",{className:"Note__delete",type:"button",onClick:this.handleClickDelete},o.a.createElement(b.a,{icon:"trash-alt"})," ","remove"),o.a.createElement("div",{className:"Note__dates"},o.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(A.format)(a,"Do MMM YYYY")))))}}]),t}(o.a.Component));x.defaultProps={onDeleteNote:function(){}},x.contextType=g;n(206);var I=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.match.params.folder_id,t=this.context.notes,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter(function(e){return e.folder_id===t}):e}(void 0===t?[]:t,e);return o.a.createElement("section",{className:"NoteListMain"},o.a.createElement("ul",null,n.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(x,{id:e.id,name:e.note_name,modified:e.modified}))})),o.a.createElement("div",{className:"NoteListMain__button-container"},o.a.createElement(_,{tag:E.a,to:"/add-note",type:"button",className:"NoteListMain__add-note-button"},o.a.createElement(b.a,{icon:"plus"}),o.a.createElement("br",null),"Note")))}}]),t}(o.a.Component);I.defaultProps={match:{params:{}}},I.contextType=g;n(208);var C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleDeleteNote=function(e){n.props.history.push("/")},n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.context.notes,t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})}(void 0===e?[]:e,this.props.match.params.noteId)||{content:""};return o.a.createElement("section",{className:"NotePageMain"},o.a.createElement(x,{id:t.id,name:t.note_name,modified:t.modified,onDeleteNote:this.handleDeleteNote}),o.a.createElement("div",{className:"NotePageMain__content"},t.content.split(/\n \r|\n/).map(function(e,t){return o.a.createElement("p",{key:t},e)})))}}]),t}(o.a.Component);C.defaultProps={match:{params:{}}},C.contextType=g;n(210);function T(e){var t=e.className,n=Object(O.a)(e,["className"]);return o.a.createElement("form",Object.assign({className:["Noteful-form",t].join(" "),action:"#"},n))}n(212);var w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault();var t={folder_name:e.target["folder-name"].value};fetch("".concat(D.API_ENDPOINT,"/folders"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){n.context.addFolder(e),n.props.history.push("/folder/".concat(e.id))}).catch(function(e){console.error({error:e})})},n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"AddFolder"},o.a.createElement("h2",null,"Create a folder"),o.a.createElement(T,{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"folder-name-input"},"Name"),o.a.createElement("input",{type:"text",id:"folder-name-input",name:"folder-name"})),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"submit"},"Add folder"))))}}]),t}(a.Component);w.defaultProps={history:{push:function(){}}},w.contextType=g;n(214);var F=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault();var t={note_name:e.target["note-name"].value,content:e.target["note-content"].value,folder_id:e.target["note-folder-id"].value,modified:new Date};fetch("".concat(D.API_ENDPOINT,"/notes"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){n.context.addNote(e),n.props.history.push("/folder/".concat(e.folderId))}).catch(function(e){console.error({error:e})})},n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.context.folders,t=void 0===e?[]:e;return o.a.createElement("section",{className:"AddNote"},o.a.createElement("h2",null,"Create a note"),o.a.createElement(T,{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-name-input"},"Name"),o.a.createElement("input",{type:"text",id:"note-name-input",name:"note-name"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-content-input"},"Content"),o.a.createElement("textarea",{id:"note-content-input",name:"note-content"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-folder-select"},"Folder"),o.a.createElement("select",{id:"note-folder-select",name:"note-folder-id"},o.a.createElement("option",{value:null},"..."),t.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.folder_name)}))),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"submit"},"Add note"))))}}]),t}(a.Component);F.defaultProps={history:{push:function(){}}},F.contextType=g;n(216);var S=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],folders:[]},n.handleAddFolder=function(e){n.setState({folders:[].concat(Object(u.a)(n.state.folders),[e])})},n.handleAddNote=function(e){n.setState({notes:[].concat(Object(u.a)(n.state.notes),[e])})},n.handleDeleteNote=function(e){n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},n}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("".concat(D.API_ENDPOINT,"/notes"),{method:"GET",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"}}),fetch("".concat(D.API_ENDPOINT,"/folders"),{method:"GET",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"}})]).then(function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return n.ok?a.ok?Promise.all([n.json(),a.json()]):a.json().then(function(e){return Promise.reject(e)}):n.json().then(function(e){return Promise.reject(e)})}).then(function(t){var n=Object(d.a)(t,2),a=n[0],o=n[1];e.setState({notes:a,folders:o})}).catch(function(e){console.error({error:e})})}},{key:"renderNavRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","/folder/:folderId"].map(function(e){return o.a.createElement(v.a,{exact:!0,key:e,path:e,component:k})}),o.a.createElement(v.a,{path:"/note/:noteId",component:P}),o.a.createElement(v.a,{path:"/add-folder",component:P}),o.a.createElement(v.a,{path:"/add-note",component:P}))}},{key:"renderMainRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","/folder/:folderId"].map(function(e){return o.a.createElement(v.a,{exact:!0,key:e,path:e,component:I})}),o.a.createElement(v.a,{path:"/note/:noteId",component:C}),o.a.createElement(v.a,{path:"/add-folder",component:w}),o.a.createElement(v.a,{path:"/add-note",component:F}))}},{key:"render",value:function(){var e={notes:this.state.notes,folders:this.state.folders,addFolder:this.handleAddFolder,addNote:this.handleAddNote,deleteNote:this.handleDeleteNote};return o.a.createElement(g.Provider,{value:e},o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes()),o.a.createElement("header",{className:"App__header"},o.a.createElement("h1",null,o.a.createElement(E.a,{to:"/"},"Noteful")," ",o.a.createElement(b.a,{icon:"check-double"}))),o.a.createElement("main",{className:"App__main"},this.renderMainRoutes())))}}]),t}(a.Component);l.b.add(i.c,i.b,i.d,i.a),c.a.render(o.a.createElement(s.a,null,o.a.createElement(S,null)),document.getElementById("root"))},80:function(e,t,n){e.exports=n(218)},90:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){}},[[80,2,1]]]);
//# sourceMappingURL=main.151cd052.chunk.js.map