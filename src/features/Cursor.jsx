import { useEffect } from "react";
import { gsap } from "gsap";

function Cursor() {
  useEffect(() => {
    gsap.set("#cursor", { xPercent: -50, yPercent: -50 });

    var ball = document.querySelector("#cursor");
    var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    var mouse = { x: pos.x, y: pos.y };
    var speed = 0.1;

    var fpms = 60 / 1000;

    var xSet = gsap.quickSetter(ball, "x", "px");
    var ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add((time, deltaTime) => {
      var delta = deltaTime * fpms;
      var dt = 1.0 - Math.pow(1.0 - speed, delta);

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }, []);
  return <div id="cursor" className="crs"></div>;
}

export default Cursor;
