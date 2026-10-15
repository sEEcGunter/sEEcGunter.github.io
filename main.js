(()=>{const R=matchMedia('(prefers-reduced-motion: reduce)').matches;
const t=document.getElementById('type'),s=t.dataset.text;
if(!R){t.textContent='';let i=0;const k=()=>{t.textContent=s.slice(0,++i);if(i<s.length)setTimeout(k,110)};setTimeout(k,300)}
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>R?el.classList.add('in'):io.observe(el));
const L=document.querySelectorAll('.nav nav a');
const so=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)L.forEach(a=>a.classList.toggle('active',a.getAttribute('href')=='#'+x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(x=>so.observe(x));
const B=document.querySelectorAll('.filters button'),C=document.querySelectorAll('.card');
B.forEach(b=>b.onclick=()=>{B.forEach(x=>x.classList.toggle('on',x==b));C.forEach(c=>c.classList.toggle('hide',b.dataset.f!='all'&&c.dataset.cat!=b.dataset.f))});
if(!R&&matchMedia('(hover:hover)').matches)C.forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`};c.onmouseleave=()=>c.style.transform=''});
if(R)return;const cv=document.getElementById('rain'),g=cv.getContext('2d'),ch='01<>/{}$#AI';let w,h,d;
const rs=()=>{w=cv.width=innerWidth;h=cv.height=innerHeight;d=Array(Math.ceil(w/16)).fill(0).map(()=>Math.random()*h/16)};rs();addEventListener('resize',rs);
setInterval(()=>{g.fillStyle='rgba(10,14,20,.12)';g.fillRect(0,0,w,h);g.fillStyle='#39ff88';g.font='14px monospace';d.forEach((y,i)=>{g.fillText(ch[Math.random()*ch.length|0],i*16,y*16);d[i]=y*16>h&&Math.random()>.975?0:y+1})},60)})();
