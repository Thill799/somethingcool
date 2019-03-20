MorphSVGPlugin.convertToPath("circle, ellipse");

function run_scene(){
  var tl = new TimelineMax({repeat: -1});
 
  //phase 1
  tl.add("start");
  tl.to("#circle", 0.5, {autoAlpha:1}, "start")
  .fromTo("#outer_1 path", 1, {drawSVG:"0% 0%"},{drawSVG:"0% 100%"})
  .fromTo("#outer_1 path", 0.5, {drawSVG:"0% 100%", delay: 1},{drawSVG:"0% 0%"});
  
  // phase 2
  tl.to("#outer_2", .1, {autoAlpha:1, overwrite: true}, "start+=2")
    .to("#circle", 1, {morphSVG:"#circle1"}, "start+=2")
  .fromTo("#outer_2 path", 1, {drawSVG:"0% 0%", delay: 1},{drawSVG:"0% 100%", autoAlpha:1, overwrite: true}, "start+=2")
  .fromTo("#outer_2 path", 0.75, {drawSVG:"0% 100%", delay: 1},{drawSVG:"0% 0%"})
  .to("#circle", 1, {morphSVG:"#circle"}, "start+=3");
  return tl;
}


var master = new TimelineLite();
master.add(run_scene());
