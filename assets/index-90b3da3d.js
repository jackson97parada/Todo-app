(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const v=`<section class="todoapp">
   <header class="header">
       <h1>Tareas</h1>
       <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
   </header>
   
   <!-- This section should be hidden by default and shown when there are todos -->
   <section class="main">
       <input id="toggle-all" class="toggle-all" type="checkbox">
       <label for="toggle-all">Mark all as complete</label>
       <ul class="todo-list">
           <!-- These are here just to show the structure of the list items -->
           <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
           <!-- <li class="completed" data-id="abc">
               <div class="view">
                   <input class="toggle" type="checkbox" checked>
                   <label>Probar JavaScript</label>
                   <button class="destroy"></button>
               </div>
               <input class="edit" value="Create a TodoMVC template">
           </li> -->
           <!-- <li>
               <div class="view">
                   <input class="toggle" type="checkbox">
                   <label>Comprar un unicornio</label>
                   <button class="destroy"></button>
               </div>
               <input class="edit" value="Rule the web">
           </li> -->
       </ul>
   </section>

   <!-- This footer should hidden by default and shown when there are todos -->
   <footer class="footer">
       <!-- This should be "0 items left" by default -->
       <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
       <!-- Remove this if you don't implement routing -->
       <ul class="filters">
           <li>
               <a class="filtro" class="selected" href="#/">Todos</a>
           </li>
           <li>
               <a class="filtro" href="#/active">Pendientes</a>
           </li>
           <li>
               <a class="filtro" href="#/completed">Completados</a>
           </li>
       </ul>
       <!-- Hidden if no completed items are left ↓ -->
       <button class="clear-completed">Borrar completados</button>
   </footer>
</section>


<footer class="info">
   <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
   <!-- Change this out with your name and url ↓ -->
   <p>Creado por <a href="http://todomvc.com">ti</a></p>
   <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`;let w;const L=new Uint8Array(16);function C(){if(!w&&(w=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(L)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function S(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:E};function P(e,t,i){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const d=e.random||(e.rng||C)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=d[o];return t}return S(d)}class h{constructor(t){this.id=P(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[new h("Piedra del alma"),new h("Piedra del infinito"),new h("Piedra del tiempo"),new h("Piedra del poder"),new h("Piedra del fenix")],filter:c.All},A=()=>{k()},k=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(l))},x=(e=c.All)=>{switch(e){case c.All:return[...l.todos];case c.Completed:return l.todos.filter(t=>t.done);case c.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not supported`)}},I=e=>{if(!e)throw new Error("Description is required");l.todos.push(new h(e)),f()},U=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},O=e=>{l.todos=l.todos.filter(t=>t.id!==e),f()},q=()=>{l.todos=l.todos.filter(e=>!e.done),f()},D=(e=c.All)=>{l.filter=e,f()},F=()=>l.filter,a={addTodo:I,deleteCompleted:q,deleteTodo:O,getCurrentFilter:F,getTodos:x,initStore:A,setFilter:D,toggleTodo:U};let g;const M=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",t.forEach(i=>{g.append(N(i))})},N=e=>{if(!e)throw new Error("a TODO object is required");const{done:t,description:i,id:d}=e,o=`
      <div class="view">
         <input class="toggle" type="checkbox" ${t?"checked":""}>
         <label>${i}</label>
         <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
   `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),t&&n.classList.add("completed"),n};let b;const H=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`Element ${e} not found`);b.innerHTML=a.getTodos(c.Pending).length},m={ClearCompleted:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},V=e=>{const t=()=>{const s=a.getTodos(a.getCurrentFilter());M(m.TodoList,s),i()},i=()=>{H(m.PendingCountLabel)};(()=>{const s=document.createElement("div");s.innerHTML=v,document.querySelector(e).append(s),t()})();const d=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.ClearCompleted),u=document.querySelectorAll(m.TodoFilters);d.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(a.addTodo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const p=s.target.closest("[data-id]");a.toggleTodo(p.getAttribute("data-id")),t()}),o.addEventListener("click",s=>{const p=s.target.className==="destroy",y=s.target.closest("[data-id]");!y||!p||(a.deleteTodo(y.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{a.deleteCompleted(),t()}),u.forEach(s=>{s.addEventListener("click",p=>{switch(u.forEach(y=>y.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":a.setFilter(c.All);break;case"Pendientes":a.setFilter(c.Pending);break;case"Completados":a.setFilter(c.Completed);break}t()})})};a.initStore();V("#app");
