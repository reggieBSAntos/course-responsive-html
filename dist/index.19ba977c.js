var e,t;document.querySelector(".year").textContent=new Date().getFullYear();const o=document.querySelector(".btn-mobile-nav"),n=document.querySelector(".header");o.addEventListener("click",e=>{e.preventDefault(),n.classList.toggle("nav-open")}),Array.from(document.querySelectorAll("a:link")).forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=e.getAttribute("href"),r=t.target.closest("a");if("#"===o){window.scrollTo({top:0,behavior:"smooth"});return}if(r.classList.contains("main-nav-link")&&n.classList.toggle("nav-open"),"#"!==o&&o.startsWith("#")){document.querySelector(o).scrollIntoView({behavior:"smooth"});return}})});const r=document.querySelector(".section-hero");new IntersectionObserver(e=>{let t=e[0];if(!t.isIntersecting){document.body.classList.toggle("sticky",!0);return}if(t.isIntersecting){document.body.classList.toggle("sticky",!1);return}},{root:null,threshold:0,rootMargin:"-59px"}).observe(r),(e=document.createElement("div")).style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),t=1===e.scrollHeight,e.parentNode.removeChild(e),console.log(t),t||document.body.classList.add("no-flexbox-gap");
//# sourceMappingURL=index.19ba977c.js.map
