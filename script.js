function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();
function canvas() {
  const canvas = document.querySelector("#page>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    .//images/0000.png
  .//images/0001.png
  .//images/0002.png
  .//images/0003.png
  .//images/0004.png
  .//images/0005.png
  .//images/0006.png
  .//images/0007.png
   .//images/0008.png
  .//images/0009.png
  .//images/0010.png
   .//images/0011.png
  .//images/0012.png
   .//images/0013.png
   .//images/0014.png
   .//images/0015.png
  .//images/0016.png
   .//images/0017.png
  .//images/0018.png
  .//images/0019.png
  .//images/0020.png
  .//images/0021.png
   .//images/0022.png
  .//images/0023.png
  .//images/0024.png
  .//images/0025.png
   .//images/0026.png
   .//images/0027.png
   .//images/0028.png
   .//images/0029.png
   .//images/0030.png
   .//images/0031.png
   .//images/0032.png
   .//images/0033.png
   .//images/0034.png
   .//images/0035.png
   .//images/0036.png
   .//images/0037.png
   .//images/0038.png
   .//images/0039.png
   .//images/0040.png
   .//images/0041.png
   .//images/0042.png
   .//images/0043.png
   .//images/0044.png
   .//images/0045.png
   .//images/0046.png
   .//images/0047.png
   .//images/0048.png
   .//images/0049.png
   .//images/0050.png
   .//images/0051.png
   .//images/0052.png
   .//images/0053.png
   .//images/0054.png
   .//images/0055.png
   .//images/0056.png
   .//images/0057.png
   .//images/0058.png
   .//images/0059.png
   .//images/0060.png
   .//images/0061.png
   .//images/0062.png
   .//images/0063.png
  .//images/0064.png
 `;
    return data.split("\n")[index];
  }

  const frameCount = 64;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      //   set start end according to preference
      start: `40% top`,
      end: `200% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `2% top`,
    end: `50% top`,
  });
}
canvas();

gsap.to("#page", {
  scrollTrigger: {
    trigger: "#page",
    start: "top top",
    end: "bottom end",
    scroller: "#main",
    pin: true,
  },
});


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-bottom",
    start: "top center+=100",
    end: "bottom center-=100",
    scrub: true,
    scroller: "#main",
    toggleActions: "play reverse play reverse",
  },
});
// Animation: Vanish
tl.to(".page-bottom", { opacity: 0, duration: 1 });

// GSAP timeline for the sequence of animations
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-heading",
    start: "top center+=100",
    end: "bottom center-=100",
    scrub: true,
    scroller: "#main",
    toggleActions: "play reverse play reverse",
  },
});



// Animation: Fade in, zoom in
tl.to(".page-heading", { opacity: 1, scale: 1, duration: 4000 });

// Animation: Zoom out
tl.to(".page-heading", { scale: 1.5, duration: 4000 });

// Animation: Vanish
tl.to(".page-heading", { opacity: 0, duration: 4000 });


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1>p",
    start: "top center+=100",
    end: "bottom center-=100",
    scrub: true,
    scroller: "#main",
    toggleActions: "play reverse play reverse",
  },
});

// Animation: Fade in, zoom in
tl.to("#page1>p", { opacity: 1, scale: 1, duration: 1 });

// Animation: Zoom out
tl.to("#page1>p", { scale: 1.2, duration: 1 });

// Animation: Vanish
tl.to("#page1>p", { opacity: 0, duration: 1 });

 gsap.from("#paragraph", {
   opacity: 0,
   y: 50,
   stagger: 0.2,
   duration: 1,
   ease: "power4.out",
   scrollTrigger: {
     trigger: "#paragraph",
     scroller: "#main",
     start: "top center+=50",
     toggleActions: "play none none reverse",
   },
 });

 const lines = document.querySelectorAll("#paragraph span");
 gsap
   .timeline({
     scrollTrigger: {
       trigger: "#paragraph",
       scroller: "#main",
       start: "top center+=50",
       toggleActions: "play none none reverse",
     },
   })
   .to(lines, {
     opacity: 0,
     duration: 1,
     stagger: {
       amount: 1,
       from: "end",
     },
     ease: "power4.out",
   })
   .to(lines, {
     opacity: 1,
     duration: 1,
     stagger: {
       amount: 1,
       from: "start",
     },
     ease: "power4.out",
   });
   

/*function canvas1() {
  const canvas = document.querySelector("#page5>#canvas1");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    .//canvas img/0002.jpg
    // .//canvas img/0001.png
    // .//canvas img/0002.jpg
    // .//canvas img/0003.png
    
 `;
    return data.split("\n")[index];
  }

  const frameCount = 4;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#canvas1`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#canvas1",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
}
canvas1();
*/

gsap.to("#page5", {
  scrollTrigger: {
    trigger: "#page5",
    start: "top top",
    end: "bottom end",
    scroller: "#main",
    pin: true,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "bottom end",
    scroller: "#main",
    pin: true,
  },
});



  // GSAP animation for the paragraphs
  gsap.to(".highlighted", {
    opacity: 1,
    y: 0,
    stagger: 0.5,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".highlighted",
      scroller: "#main",
      start: "top center+=50",
      end: "bottom center-=50",
      scrub: true,
    },
  });

  // GSAP animation for alternating highlighting
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".highlighted",
        scroller: "#main",
        start: "top center+=50",
        end: "bottom center-=50",
        scrub: true,
      },
    })
    .to("#text1", { className: "+=highlighted" })
    .to("#text1", { className: "-=highlighted" })
    .to("#text2", { className: "+=highlighted" })
    .to("#text2", { className: "-=highlighted" })
    .to("#text3", { className: "+=highlighted" })
    .to("#text3", { className: "-=highlighted" })
    .to("#text4", { className: "+=highlighted" })
    .to("#text4", { className: "-=highlighted" })
    .to("#text5", { className: "+=highlighted" })
    .to("#text5", { className: "-=highlighted" });


     // GSAP animation for revealing images
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".images",
        scroller: "#main",
        start: "top center+=50",
        end: "bottom center-=50",
        scrub: true,
      },
    })
    .to(".img1", { opacity: 1 })
    .to("img2", { opacity: 1 })
    .to("img3", { opacity: 1 })
    .to("img4", { opacity: 1 })
    .to("img5", { opacity: 1 });

    gsap.to("#page8", {
      scrollTrigger: {
        trigger: "#page8",
        start: "top top",
        end: "bottom end",
        scroller: "#main",
        pin: true,
      },
    });
