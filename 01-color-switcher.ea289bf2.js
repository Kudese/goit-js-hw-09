const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let n;console.log(o),t.addEventListener("click",(function(){n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.ea289bf2.js.map