(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RXBc:function(e,t,a){"use strict";a.r(t);a("XfO3"),a("HEwt"),a("a1Th"),a("Btvt"),a("rE2o"),a("ioFf"),a("rGqo");var n=a("q1tI"),r=a.n(n);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=[["https://github.com/hkatzdev","Github"],["https://www.linkedin.com/in/hkatzdev/","LinkedIn"],["https://repl.it/@hkatzdev","Repl.it"],["https://www.agourahackclub.com/","Agoura HC"],["https://hackclub.com/community","Slack"]],i=[["Founder of Agoura Hack Club & Honors Society","Founder and Leader of Agoura Hack Club since Freshman year."],["Organizer of Two Local Hack Days","Organized 2 Local Hack Days in Agoura - Latest one was hosted at Hub101."],["Retro Game Design Winner","Won Best Retro Game Design @ Angel Hacks @ Snapchat."],["LVUSD Tech Squad Member","Fixed computers with both software and hardware issues for Las Virgenes Unified School District from 2014-2017."],["Leading inititive for APCSP classes to publish projects","A large portion of the nation uses code.org Applab to teach APCSP; what if there was a simple program to publish them to the App Store?"],["Officer of Math Honors Society","Officer of Agoura High School's Honors Math Society from 2018-19."],["Co-Founder of The Umpire Project","What if every school had a program that allow students to have hands on experience fixing computers? Currently at the MVP stage."],["Track and Cross Country","Mid to Long Distance Running is my thing, along with the occational Long Jump event. 17 minute 3 Mile XC PR, 55.82 second 400M T&F PR."]],c=r.a.createElement(r.a.Fragment,null,"Hello! I am the real ",r.a.createElement("del",null,"robot")," ",r.a.createElement("ins",null,"Homo Sapien")," Harrison Katz. As you may know, I love both programming and running. I have worked on many assorted projects and been apart of various tech groups. I am extreamly active in the Hack Club Community Slack, and you can also reach me at ",r.a.createElement("a",{href:"mailto:harrison@hkatz.dev",className:"hover:underline"},"harrison@hkatz.dev"),"."),s=["http://creativecommons.org/licenses/by-sa/4.0/","Copyleft 2020 under CC 4.0 BY-SA"],m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e,t=document.getElementById("matrix"),a=t.getContext("2d"),n=parseFloat(getComputedStyle(document.querySelector("html"))["font-size"]),r=window.innerWidth,l=window.innerHeight-n;t.width=r,t.height=l;var i=Array.apply(null,Array(Math.floor(r/n))).map((function(){return Math.floor(Math.random()*n*50)-50*n})),c=r%n;a.font="1rem monospace",a.textBaseline="top",requestAnimationFrame((function e(){a.fillStyle="rgba(0,0,0,0.04)",a.fillRect(0,0,r,l),a.fillStyle="#33FF33";for(var t=0;t<i.length;++t){var o=String.fromCharCode(Math.floor(94*Math.random())+33);a.fillText(o,c/2+16*t,i[t]),i[t]+=n/2,i[t]>l&&(i[t]=Math.floor(Math.random()*n*40)-40*n)}requestAnimationFrame(e)})),window.addEventListener("resize",(function(){clearTimeout(e),e=setTimeout((function(){var e=new Image;e.onload=function(){r=window.innerWidth,l=window.innerHeight-n,t.width=r,t.height=l,a.drawImage(e,0,0);var c=Math.floor(r/n)-i.length;if(c<=0)i.splice(c,Math.abs(c));else{var s=Array.apply(null,Array(c)).map((function(){return Math.floor(Math.random()*n*50)-50*n}));i.splice.apply(i,[-1,0].concat(o(s)))}},e.src=t.toDataURL()}),100)}))},l.render=function(){return r.a.createElement("canvas",{id:"matrix",className:"absolute z-10"})},n}(r.a.Component);function u(){return r.a.createElement("header",{className:"block font-mono text-center fullMinusNav mt-4"},r.a.createElement("div",{className:"centered"},r.a.createElement("h1",{className:"font-black text-6xl"},"HARRISON KATZ"),r.a.createElement("h2",{className:"font-semibold text-4xl"},"Programmer, Hardware Builder, Track Runner"),r.a.createElement("h3",{className:"font-semibold text-3xl"},'"Oooh, look at me, I looked up a quote!" -Randall Munroe')))}function d(){return r.a.createElement("footer",{className:"text-center bg-black terminal-green px-1"},r.a.createElement(h,{justify:"around"}),r.a.createElement("a",{rel:"license",className:"hover:underline",href:s[0]},s[1]),".")}function h(e){var t=l.map((function(e){return r.a.createElement("li",{key:e[1],className:"mx-1 flex-1 border-2 border-green-300 rounded"},r.a.createElement("a",{href:e[0],className:"hover:underline"},e[1]))}));return r.a.createElement("ul",{className:"flex text-center justify-"+e.justify+(e.ulClass?" "+e.ulClass:"")},t)}function f(){return r.a.createElement("nav",{className:"bg-black terminal-green fixed inset-x-0 top-0 z-30 justify-between px-1 leading-none "},r.a.createElement("div",{className:"flex"},r.a.createElement("h1",{className:"flex-auto hidden sm:block"},"@hkatzdev"),r.a.createElement(h,{ulClass:"flex-auto",justify:"end"})))}function p(){var e=i.map((function(e){return r.a.createElement(g,{key:e[0],title:e[0],text:e[1]})}));return r.a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"},e)}function g(e){return r.a.createElement("section",{className:"border-solid border-t-2 border-green-300 rounded terminal box-border px-1 py-4 mt-8"},r.a.createElement("h1",{className:"text-2xl font-medium font-mono"},"> "+e.title),r.a.createElement("p",null,e.text))}t.default=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{className:"z-20 relative"},r.a.createElement(f,null),r.a.createElement("div",{className:"bg-black terminal-green z-0 relative"},r.a.createElement(m,null),r.a.createElement("div",{className:"z-20 relative px-4"},r.a.createElement(u,null),r.a.createElement(p,null),r.a.createElement(g,{title:"About Me",text:c}))),r.a.createElement(d,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b29d224f5b98b1e1ebc9.js.map