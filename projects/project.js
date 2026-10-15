(()=>{const R=matchMedia('(prefers-reduced-motion: reduce)').matches;
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>R?el.classList.add('in'):io.observe(el));
const bars=(el,rows)=>{el.innerHTML=rows.map(r=>`<div class="bar-row"><span>${r[0]}</span><div class="track"><div class="fill${r[2]?' red':''}"></div></div><span>${r[1]}%</span></div>`).join('');requestAnimationFrame(()=>el.querySelectorAll('.fill').forEach((f,i)=>f.style.width=rows[i][1]+'%'))};
const S=document.getElementById('steps');
if(S){const st=JSON.parse(S.textContent),c=document.getElementById('chain'),p=document.getElementById('panel');
const show=i=>{[...c.children].forEach((b,j)=>{b.setAttribute("aria-selected",i==j);b.classList.toggle("past",j<i);b.tabIndex=i==j?0:-1});const s=st[i];p.innerHTML=`<h3>${s.id} · ${s.t}</h3><div class="meta">${s.m}</div><p>${s.d}</p>`};
st.forEach((s,i)=>{const b=document.createElement('button');b.role='tab';b.textContent=s.id;b.title=s.t;b.onclick=()=>show(i);b.onkeydown=e=>{const n=e.key=='ArrowRight'?i+1:e.key=='ArrowLeft'?i-1:null;if(n!=null){const k=(n+st.length)%st.length;show(k);c.children[k].focus()}};c.appendChild(b)});show(0)}
const E=document.getElementById('eps');
if(E){const L=['2/255','4/255','8/255','16/255'],D={fgsm:[27.9,11,2.4,1.1],pgd:[18.2,1.6,0,0],rob:[52.6,46.2,33,11.8]},o=document.getElementById('epsv'),b=document.getElementById('advbars');
const u=()=>{const i=+E.value;o.textContent=L[i];bars(b,[['FGSM · baseline',D.fgsm[i],1],['PGD-10 · baseline',D.pgd[i],1],['PGD-10 · robust',D.rob[i],0]])};E.oninput=u;u()}
const T=document.getElementById('thr');
if(T){const b=document.getElementById('idsbars');let on=false;
const u=()=>{T.textContent=on?'threshold: tuned on PR curve':'threshold: default 0.5';T.setAttribute('aria-pressed',on);bars(b,on?[['accuracy',92,0],['F1',93,0],['ROC-AUC',97,0]]:[['accuracy',81,1],['F1',80,1],['ROC-AUC',97,0]])};T.onclick=()=>{on=!on;u()};u()}
})();
