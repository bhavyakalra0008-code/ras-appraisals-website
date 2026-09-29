import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'
gsap.registerPlugin(ScrollTrigger)

export default function HouseAnimation(){
  const scene=useRef(), photo=useRef(), frame=useRef(), label=useRef(), accent=useRef(), panels=useRef([])
  useEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
    const ctx=gsap.context(()=>{
      gsap.set([photo.current, frame.current, label.current, accent.current, ...panels.current],{transformOrigin:'center'})
      gsap.timeline().fromTo(photo.current,{clipPath:'inset(100% 0 0 0)',scale:1.12},{clipPath:'inset(0% 0 0 0)',scale:1,duration:1.1,ease:'power4.inOut'}).from(panels.current,{opacity:0,scale:.9,stagger:.1,duration:.45,ease:'power3.out'},'-.42').from(frame.current,{scale:.86,opacity:0,duration:.55,ease:'power3.out'},'-.35').from(label.current,{x:30,opacity:0,duration:.45,ease:'power3.out'},'-.25').from(accent.current,{scaleX:0,duration:.4,ease:'power2.out'},'-.35')
      const scroll={trigger:scene.current,start:'top 76%',end:'bottom 18%',scrub:1.1}
      gsap.timeline({scrollTrigger:scroll}).to(photo.current,{scale:1.08,y:-24},0).to(panels.current[0],{x:-25,y:18,rotateY:-12,rotateZ:-1},0).to(panels.current[1],{y:-9,z:28,scale:1.025},0).to(panels.current[2],{x:25,y:14,rotateY:12,rotateZ:1},0).to(frame.current,{y:24,rotateZ:1},0).to(label.current,{x:10,y:-17},0)
    },scene)
    return()=>ctx.revert()
  },[])
  const addPanel=(el)=>{if(el&&!panels.current.includes(el))panels.current.push(el)}
  return <div ref={scene} className="property-scene"><div ref={frame} className="photo-frame">{/* Client should replace this licensed Unsplash placeholder with approved RAS property photography. */}<img ref={photo} src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" alt="Contemporary detached residential home exterior"/><div className="photo-panels" aria-hidden="true">{['panel-left','panel-middle','panel-right'].map(c=><i key={c} ref={addPanel} className={c}/>)}</div><div className="photo-shade"/></div><div className="architect-line line-one"/><div className="architect-line line-two"/><div ref={accent} className="blue-corner"/><div ref={label} className="confidence-tag"><span><Check/></span><div><b>LOCAL MARKET INSIGHT</b><small>GTA residential expertise</small></div></div><div className="photo-caption"><span>RAS</span> APPRAISALS</div></div>
}
