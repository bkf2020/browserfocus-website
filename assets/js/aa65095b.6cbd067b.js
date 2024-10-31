"use strict";(self.webpackChunkbrowserfocus_website=self.webpackChunkbrowserfocus_website||[]).push([[954],{5994:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=o(4848),i=o(8453);const r={sidebar_position:3},t="Requiring the extension to be on (Linux only)",l={id:"mandatory",title:"Requiring the extension to be on (Linux only)",description:"Chromium based browsers",source:"@site/docs/mandatory.md",sourceDirName:".",slug:"/mandatory",permalink:"/browserfocus-website/docs/mandatory",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/browserfocus-website/docs/usage"}},c={},d=[{value:"Chromium based browsers",id:"chromium-based-browsers",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"requiring-the-extension-to-be-on-linux-only",children:"Requiring the extension to be on (Linux only)"})}),"\n",(0,s.jsx)(n.h2,{id:"chromium-based-browsers",children:"Chromium based browsers"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Turn on developer mode on the ",(0,s.jsx)(n.code,{children:"chrome:///extensions"})," page"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the extensions page, click pack extension. Then select the directory of\nmandatorytask. ",(0,s.jsx)(n.code,{children:"manifest.json"}),' should be contained in that directory as mentioned\nunder "installation". This will create a ',(0,s.jsx)(n.code,{children:"mandatorytask.crx"})," file. Remember the\nlocation of this file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find the location of the packed extension in your file manager or use ",(0,s.jsx)(n.code,{children:"file:///"}),". Then\ndrag and drop the ",(0,s.jsx)(n.code,{children:"mandatorytask.crx"}),' file into the extensions page, clicking "allow"\nto install the extension.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click details and copy the ID of the extension"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open a terminal with root access. Create the file ",(0,s.jsx)(n.code,{children:"test.json"})," (or any name you want,\nmust end in ",(0,s.jsx)(n.code,{children:".json"}),") in ",(0,s.jsx)(n.code,{children:"/etc/chromium-browser/policies/managed/"})," or similar depending\non your browser. It's ",(0,s.jsx)(n.code,{children:"/etc/brave/policies/managed/"})," for Brave and\n",(0,s.jsx)(n.code,{children:"/etc/opt/chrome/policies/managed"}),' for Google Chrome. Search "how to set\n[insert browser name] policy on linux" and you should get the location.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"test.json"})," file, insert ",(0,s.jsx)(n.code,{children:'{"ExtensionInstallForcelist": ["insert-extension-id-from-step-4"]}'}),".\nSee ",(0,s.jsx)(n.a,{href:"https://chromeenterprise.google/policies/#ExtensionInstallForcelist",children:"https://chromeenterprise.google/policies/#ExtensionInstallForcelist"}),". Note the ",(0,s.jsx)(n.strong,{children:"square brackets"}),"!\nYou can also add ",(0,s.jsx)(n.code,{children:'"BrowserAddPersonEnabled": false,'})," ",(0,s.jsx)(n.code,{children:'"BrowserGuestModeEnabled": false'})," and\n",(0,s.jsx)(n.code,{children:'"IncognitoModeAvailability": 1'})," for additional layers of preventing workarounds. Note the options you\nprovide are listed around two curly braces ",(0,s.jsx)(n.code,{children:"{}"})," and are in format ",(0,s.jsx)(n.code,{children:'"key": value'})," for each option with\ncommas between two options."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So if you combine all 4 options listed here, the test.json file will look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{"ExtensionInstallForcelist": ["insert-extension-id-from-step-4"], "BrowserAddPersonEnabled": false, "BrowserGuestModeEnabled": false, "IncognitoModeAvailability": 1}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>l});var s=o(6540);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);