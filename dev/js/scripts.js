import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin, MotionPathHelper, MorphSVGPlugin, DrawSVGPlugin);


GSDevTools.create();

const mainTL = gsap.timeline();


MorphSVGPlugin.convertToPath("#circle-drop") 
MorphSVGPlugin.convertToPath("#tail-circle-1")
MorphSVGPlugin.convertToPath("#tail-circle-2")
MorphSVGPlugin.convertToPath("#tail-circle-3")
MorphSVGPlugin.convertToPath("#circledrop-1")
MorphSVGPlugin.convertToPath("#circledrop-2")
MorphSVGPlugin.convertToPath("#circledrop-3")
MorphSVGPlugin.convertToPath("#circledrop-2b")





gsap.set("#nesting",{alpha:0})
gsap.set("#house",{alpha:0})


gsap.set("#waterdrop",{alpha:0})
gsap.set("#tail-waterdrop-1",{alpha:0})
gsap.set("#tail-waterdrop-2",{alpha:0})
gsap.set("#tail-waterdrop-3",{alpha:0})
gsap.set("#waterdrop-3",{alpha:0})
gsap.set("#waterdrop-2",{alpha:0})
gsap.set("#waterdrop-2b",{alpha:0})
gsap.set("#waterdrop-1",{alpha:0})



function waterdrop(){
    const tl = gsap.timeline();
    tl.to("#circle-drop", {motionPath:{path:"#waterdrop-motion-path", align:"self"}, morphSVG:"#waterdrop", transformOrigin: "80% 50%", duration:.3})
    tl.to("#circle-drop", {alpha:0, duration:.1})
    return tl;
}


function tailsplash(){
    const tl = gsap.timeline();
    tl.to("#tail-circle-1", {alpha:1, motionPath:{path:"#tail-motion-path-1", align:"self"}, morphSVG:"#tail-waterdrop-1", transformOrigin: "80% 50%", duration:.1},"same1")
    tl.to("#tail-circle-1", {alpha:0, duration:.2})
    tl.to("#tail-circle-2", {alpha:1, motionPath:{path:"#tail-motion-path-2", align:"self"}, morphSVG:"#tail-waterdrop-2", transformOrigin: "80% 50%", duration:.15},"same1")
    tl.to("#tail-circle-2", {alpha:0, duration:.3} )
    tl.to("#tail-circle-3", {alpha:1, motionPath:{path:"#tail-motion-path-3", align:"self"}, morphSVG:"#tail-waterdrop-3", transformOrigin: "80% 50%", duration:.18},"same1")
    tl.to("#tail-circle-3", {alpha:0, duration:.1})
    return tl;
}

function bodysplash(){
    const tl = gsap.timeline();
    tl.to("#circledrop-3", {alpha:1, motionPath:{path:"#waterdrop-motionpath-3", align:"self"}, morphSVG:"#waterdrop-3", transformOrigin: "80% 50%", duration:.1, delay:.38},"same1")
    tl.to("#circledrop-3", {alpha:0, duration:.2})
    tl.to("#circledrop-2", {alpha:1, motionPath:{path:"#waterdrop-motionpath-2", align:"self"}, morphSVG:"#waterdrop-2", transformOrigin: "80% 50%", duration:.1, delay:.68},"same1")
    tl.to("#circledrop-2", {alpha:0, duration:.2})
    tl.to("#circledrop-2b", {alpha:1, motionPath:{path:"#waterdrop-motionpath-2b", align:"self"}, morphSVG:"#waterdrop-2b", transformOrigin: "80% 50%", duration:.1, delay:.75},"same1")
    tl.to("#circledrop-2b", {alpha:0, duration:.2})
    tl.to("#circledrop-1", {alpha:1, motionPath:{path:"#waterdrop-motionpath-1", align:"self"}, morphSVG:"#waterdrop-1", transformOrigin: "80% 50%", duration:.1, delay:.8},"same1")
    tl.to("#circledrop-1", {alpha:0, duration:.2})
    return tl;
}




function motionpathwings(){
    const tl = gsap.timeline();
    tl.to("#wing-wave-1", {duration: 3, motionPath:{path:"#wing-motion-path-1", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#wing-wave-2", {duration: 3, motionPath:{path:"#wing-motion-path-2", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#wing-wave-3", {duration: 3, motionPath:{path:"#wing-motion-path-3", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#wing-wave-4", {duration: 3, motionPath:{path:"#wing-motion-path-4", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    return tl;
}

function body(){
    const tl = gsap.timeline();
    tl.to("#body-wave-1", {duration: 3, motionPath:{path:"#body-motion-path-1", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#body-wave-3", {duration: 3, motionPath:{path:"#body-motion-path-3", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#body-wave-4", {duration: 3, motionPath:{path:"#body-motion-path-4", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    return tl;
}




function text1(){
    const tl = gsap.timeline();
    tl.from(".circles", {alpha:0, duration:.01})
    tl.to(".circles", {motionPath:{path:"#circlesmotionpath", align:"self"}, alpha:1, duration:2})
    return tl;
}


mainTL.add(waterdrop())
      .add(tailsplash(),"same1")
      .add(bodysplash(),"same1")
      .add(motionpathwings(),"same1")
      .add(body(),"same1")
      .add(text1(),"same1")