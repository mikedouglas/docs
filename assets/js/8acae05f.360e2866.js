"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1650,9514,8012],{3638:function(e,o,n){var t=n(7294),a=n(9960);o.Z=function(e){var o=e.singleListing,n=void 0!==o&&o,i=e.image,r=e.title,l=e.company,s=e.description,c=e.salary,u=e.link;return t.createElement("div",{className:"job-listing-container "+(n&&"single-listing")},i&&t.createElement("div",{className:"job-image"},t.createElement("img",{src:"/img/"+i,alt:"job image"})),t.createElement("div",{className:"job-content"},t.createElement("div",{className:"company"},t.createElement("span",{className:"bold"},"Company: "),t.createElement("span",null,l)),t.createElement("div",{className:"title"},t.createElement("span",{className:"bold"},"Title: "),t.createElement("span",null,r)),t.createElement("div",{className:"salary"},t.createElement("span",{className:"bold"},"Salary: "),t.createElement("span",null,c)),t.createElement("div",{className:"description"},t.createElement("span",{className:"bold"},"Description: "),n?t.createElement(t.Fragment,null,t.createElement("span",null,s)):t.createElement(t.Fragment,null,t.createElement("span",null,s.slice(0,220),"..."),t.createElement(a.default,{to:"jobs/"+l.toLowerCase()+"/"+r.toLowerCase().split(" ").join("-")},"see more"))),n&&u&&t.createElement("div",{className:"job-link"},t.createElement("br",null),t.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},"Go to the job post"))))}},2180:function(e,o,n){n.r(o);var t=n(7294),a=n(1287),i=n(7588),r=n(3638),l=i[4];o.default=function(){return t.createElement(a.Z,null,t.createElement("div",{style:{padding:"20px"}},t.createElement(r.Z,{image:l.logo,title:l.title,description:l.description.map((function(e){return t.createElement(t.Fragment,null,t.createElement("span",null,e),t.createElement("br",null))})),company:l.company,salary:l.salary,link:l.link,singleListing:!0})))}},8307:function(e,o,n){n.d(o,{Z:function(){return r}});var t=n(7294),a=n(2207),i=n(6775);function r(e){var o=e.docsPluginId,n=e.type,r=(0,i.TH)().pathname;return"docsVersionDropdown"===n&&-1===r.search(new RegExp("/"+o+"/","g"))?null:t.createElement(t.Fragment,null,t.createElement(a.Z,e))}},7588:function(e){e.exports=JSON.parse('[{"company":"Confio","title":"Go Developer","salary":"60000 - 80000 EUR","description":["We are looking for a Go Engineer to join our team! You will be working with our team on the core development of our blockchain -Tgrade, that we are building with the Cosmos SDK and the interaction with CosmWasm, our smart contract engine. You will be working in the following areas:","- Building backend of Tgrade blockchain","- Work with Cosmos SDK and contribute to our smart contract platform","- Implementing monitoring services","- Building off-chain services and infrastructure","- Potentially building Go SDK for writing smart contracts","","What you will bring to the team","- You have at least 3 years of professional experience with Go as a Software Engineer","- You love solving engineering problems","- You care about quality, documentation, and delivering","- You are good a communicator and respectful with your team and the open-source community","- A passion for excellent software and thorough testing","- Like spending a lot of time on edge cases that almost never happen","- Patience and careful thinking","- Self-organized and willing to write and sort your own tickets","- Solid spoken and written English","- Bonus: blockchain experience","- Bonus: worked in open source projects and familiarized yourself with the culture","- Bonus: familiar with Cosmos SDK","","What we offer:","","Competitive Salary. Nothing Silicon Valley-style, but we will pay you what you are worth, and reward your skills beyond basic engineering.","","Work-Life Balance. This is not a Silicon Valley startup, we promote European quality of life and 40 hours means 40 hours. No one expects you to respond on the weekend.","","Learning environment. We welcome questions and are happy to teach. We are all constantly learning and please share your knowledge with us as well.","","The flexibility of a 100% remote role (We\'re looking for candidates located +/- 2h around Berlin time zone).","Part-time options are available as well. Let\'s talk."],"link":"https://www.golangprojects.com/golang-go-job-evy-Remote-Europe-Go-Developer-Confio-GmbH-remotework.html","logo":"confio_logo.png"},{"company":"Confio","title":"Product Manager","salary":"45000 - 70000 EUR","description":["We are looking for a result-oriented product manager to join our team. You will be interacting daily with our engineering team, designer, and founders on the ideation, technical development and deliver simple, consistent, and delightful user experiences. You will work closely with our senior product manager and be responsible for delivering a specific part of the business objectives. It is also possible to negotiate the scope of the role. ","","Tasks: ","","You will take over the dedicated product owner role ","Be responsible for maintaining the product backlog and ensuring the feature are ready for development ","Help improve the process ","Help develop the roadmap ","","You: ","","You can break complex problems down into smaller parts ","You have relevant experience in a related role ","You can communicate and are not afraid of getting your hands dirty ","You know how to write a ticket for the backlog ","You can dive into a technical topic and understand them ","You are not afraid to ask questions ","","Bonus:  ","","You know crypto and blockchain ","You love learning  ","You have a feeling for UX ","You are good at playing company politics (joking \u2013 please don\u2019t)  ","","Warning: ","","We are a small company and things change, so you might need to do things outside of the normal \u2018product\u2019 scope. If you want a predictable workday this might not be the best job for you. ","","What we offer ","Competitive Salary. Nothing Silicon Valley-style, but we will pay you what you are worth, and reward your skills beyond basic tasks. ","","Work-Life Balance. We promote European quality of life. We don\u2019t expect \u201cextra\u201d hours or that you respond outside working hours or on weekends. ","","Learning environment. We welcome questions and are happy to teach. We are all constantly learning and please share your knowledge with us as well.  ","The flexibility of a 100% remote role (We\'re looking for candidates located +/- 2h around the Berlin time zone)."],"link":"https://jobs.gohire.io/confio-gmbh-ggtjivjy/product-manager-full-time-part-time-57630/","logo":"confio_logo.png"},{"company":"Confio","title":"Junior React Developer","salary":"24000 - 42000 EUR","description":["We are looking for a Junior React Developer to join our team! For the first few months, you\'ll work more as QA, while you will get familiar with our frontend application by writing unit, integration, and end-to-end tests. After that, you will transition to a full-blown frontend dev, implementing features and bug fixes for the app, as well as writing tests for those new features. ","","What you will bring to the team ","","- Solid spoken and written English ","- experience writing unit tests with typescript ","- experience testing React applications with react-testing-library ","- experience writing browser end-to-end tests. Nice to have experience with Cypress or Puppeteer, using Testing Library  ","- expected to transition to full-blown frontend dev in a couple of months. "," ","What we offer ","Competitive Salary. Nothing Silicon Valley-style, but we will pay you what you are worth, and reward your skills beyond basic engineering. ","Work-Life Balance. We promote European quality of life and 40 hours means 40 hours. No one expects you to respond on the weekend. ","Learning environment. We welcome questions and are happy to teach. We are all constantly learning and please share your knowledge with us as well.  ","The flexibility of a 100% remote role (We\'re looking for candidates located +/- 2h around Berlin time zone)."],"link":"https://jobs.gohire.io/confio-gmbh-ggtjivjy/junior-react-developer-57674/","logo":"confio_logo.png"},{"company":"Confio","title":"Social Media Content Marketer","salary":"30000 - 50000 EUR","description":["The mission for this role is to create high-quality content that will drive community engagement and quality traffic. Content that people will interact with by either liking, sharing, commenting, and clicking on. Setting up tracking so that we can see where to see which posts have generated that traffic. You will be formulating the Tgrade unique selling point and the emotional connections we want to establish in few clear words. ","","What you bring ","","Excellent spoken and written English with other languages a bonus.","Superb communication and copywriting skills with an excellent portfolio","You know content is king and are used to content curation, nurturing, and repurposing","Experience with content marketing, social media, and familiarity with related tools","Flexibility and a huge appetite to learn about Blockchain","","Bonus points ","","Knowledge or experience in Finance and/or Decentralized Finance and/or Cryptocurrency/Blockchain is an advantage","Video creation ","","What we offer","","Competitive Salary. Nothing Silicon Valley-style, but we will pay you what you are worth, and reward your skills beyond basic engineering. ","","Work-Life Balance. This is not a Silicon Valley startup, we promote European quality of life and 40 hours means 40 hours. No one expects you to respond on the weekend. ","","Learning environment. We welcome questions and are happy to teach. Immense learning opportunity in Blockchain and Crypto World. We are all constantly learning and please share your knowledge with us as well. ","","The flexibility of a 100% remote role (We\'re looking for candidates located +/- 2h around the Berlin time zone).  ","If you went through the advertisement please send us the link to your favorite meme/gif.   "," ","How to apply ","","We want to learn more about you!  ","If you are interested, please send your CV with portfolio (in English)"],"link":"https://jobs.gohire.io/confio-gmbh-ggtjivjy/social-media-content-marketer-57546/","logo":"confio_logo.png"},{"company":"Confio","title":"DevRel Engineer","salary":"36000 - 60000 EUR","description":["Role looks like a simple job opening at a company, but it is a lot more. You are not just joining a company, you are joining an ecosystem made of hundreds of devs from every continent. Be prepared to hear many accents. You will spearhead the growth of the ecosystem and help steering its direction, work with our team, both the tech people and marketing people to build prototypes, write articles, help with communication, organize events, teach community, help the team organizing, plan projects, connect people and skill, shill CosmWasm tech on Crypto Twitter, help running social media accounts, and most important: radiate good vibes and energy. In summary: responsibilities revolve around maintaining the growth of the ecosystem. You will be learning intensively, improve your coding and communicational skills. This is a permanent role and we want you develop and grow with us on our journey from start-up to a mature business. You will help growing a small team and community into a massive ecosystem.","","What you bring","","Your profile has a minimum of 2 years of experience in JavaScript, Typescript, React coding, or teaching, preferably in an Open Source environment.","Some Blockchain experience is a Must","You have good spoken and written English, and if you know more languages that is a big plus.","If you have a blog or contribute to forums that would be an advantage.","If you organized coding or blockchain events in the past \u2192 you are $$$","It would be nice to have experience with Tendermint or Cosmos SDK, but this is not a requirement.","You enjoy being in touch with people.","","What we offer:","","Competitive Salary. Nothing Silicon Valley style, but we will pay you what you are worth, and reward your skills beyond basic engineering.","Work-Life Balance. This is not a Silicon Valley startup, we promote European quality of life and 40 hours means 40 hours. No one expects you to respond on the weekend.","Learning environment. We welcome questions and are happy to teach. We are all constantly learning and please share your knowledge with us as well.","","The flexibility of a 100% remote role (We\'re looking for candidates located +/- around 2h Berlin time zone). ","Part-time options are available as well. Let\'s talk."],"link":"https://jobs.gohire.io/confio-gmbh-ggtjivjy/developer-relations-engineer-part-full-time-56957/","logo":"confio_logo.png"},{"company":"Cryptonics","title":"Blockchain Security Auditor","salary":"-","description":["Cryptonics is expanding its security audit team and looking for more auditors!","We focus exclusively on third generation blockchains, including Cosmos SDK and Substrate chains.","","The ideal candidate will be security conscious blockchain engineer with audit experience and strong skills in the following:","- Go","- Rust","- CosmWasm","- protocol-level security","- cryptographic protocols","- blockchain interoperability / bridges"],"link":"https://cryptocurrencyjobs.co/engineering/cryptonics-blockchain-security-auditor/","logo":"cryptonics_logo.png"},{"company":"Pixy","title":"Experienced Rust and React Developers","salary":"-","description":["Pixy is a crowdfunding platform that uses principal protected NFTs to fund a new generation of digital media creators and empower users.","We are seeking experienced RUST & REACT devs to join our growing team.","","This is a full time position.","","Please reach us out with linkedin profile and work samples. Thanks!"],"link":null,"logo":null}]')}}]);