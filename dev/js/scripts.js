import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin, MotionPathHelper, MorphSVGPlugin, DrawSVGPlugin);

gsap.set("#wing-fade-in", { alpha:0 });
gsap.set("#body-fade-in", { alpha:0 });
gsap.set("#waterdrop-1", { alpha:0 });


MorphSVGPlugin.convertToPath("#circle-1") 

const mainTL = gsap.timeline();

function waterdrop(){
    const tl = gsap.timeline();
    tl.to("#circle-1", {duration:.3, motionPath:{path:"#waterdrop-motion-path", align:"self"}, morphSVG:"#waterdrop-1", transformOrigin: "80% 50%", alpha:0})
    return tl
}

function tailsplash(){
    const tl = gsap.timeline();
    tl.from(".drawsvgtailsplash",{drawSVG: "100%", duration:.1, stagger:.08})
    tl.to(".drawsvgtailsplash",{drawSVG: "0", duration:.1, stagger:.08})
    return tl
}

function tailsplashfade(){
    const tl = gsap.timeline();
    tl.to(".tailsplash",{alpha:0, duration:.06, stagger:.08})
    return tl
}

function motionpathwings(){
    const tl = gsap.timeline();
    tl.to("#wing-wave-1", {duration: 3.5, motionPath:{path:"#wing-motion-path-1", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#wing-wave-2", {duration: 3.5, motionPath:{path:"#wing-motion-path-2", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#wing-wave-3", {duration: 3.5, motionPath:{path:"#wing-motion-path-3", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#wing-wave-4", {duration: 3.5, motionPath:{path:"#wing-motion-path-4", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    return tl
}

function motionpathbody(){
    const tl = gsap.timeline();
    tl.to("#body-wave-1", {duration: 3.5, motionPath:{path:"#body-motion-path-1", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#body-wave-2", {duration: 3.5, motionPath:{path:"#body-motion-path-2", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#body-wave-3", {duration: 3.5, motionPath:{path:"#body-motion-path-3", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    tl.to("#body-wave-4", {duration: 3.5, motionPath:{path:"#body-motion-path-4", align:"self"},rotation: 35, scale:2.5, transformOrigin: "50% 50%"}, "same")
    return tl;
}

function bodysplashes(){
    const tl = gsap.timeline();
    tl.from("#drawsvg-waterdrop-2",{drawSVG: "100%", duration:.9, delay:.01}, "samesplash")
    tl.to("#drawsvg-waterdrop-2",{drawSVG: "0%"}, "samesplash")
    tl.from("#drawsvg-waterdrop-3",{drawSVG: "100%", duration:.9, delay:.005}, "samesplash")
    tl.to("#drawsvg-waterdrop-3",{drawSVG: "0"}, "samesplash")
}

function bodyfadein(){
    const tl = gsap.timeline();
    tl.from("#body-fade-in", {alpha:0})
    tl.to("#body-fade-in", {alpha:1})
    return tl;
}

function wingfadein(){
    const tl = gsap.timeline();
    tl.from("#wing-fade-in", {alpha:0})
    tl.to("#wing-fade-in", {alpha:1} )
    return tl;
}

mainTL.add(waterdrop());
mainTL.add(tailsplash(), "sametl");
mainTL.add(tailsplashfade());
mainTL.add(motionpathwings(), "sametl");
mainTL.add(motionpathbody(), "sametl");
mainTL.add(bodysplashes(), "sametl");
mainTL.add(bodyfadein(), "sametl2");
mainTL.add(wingfadein(), "sametl2");
GSDevTools.create();