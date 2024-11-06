let copy = document.querySelector(".scroller").cloneNode(true);
let copy2 = document.querySelector(".scroller").cloneNode(true);

const hamBurico = document.getElementById("hamBur-ico");
const hamBurcard = document.getElementById("hamBur-card");

document.querySelector(".letsWorkTog").appendChild(copy);
document.querySelector(".letsWorkTog").appendChild(copy2);

let tl = gsap.timeline({
  repeat: -1,
});

tl.from(
  ".hello span",
  {
    y: 20,
    duration: 0.75,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.inOut",
  },
  "-=0.75"
)

  .to({}, { duration: 0.5 })

  .to(".hello span", {
    y: -20,
    duration: 0.75,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.inOut",
  })

  .from(
    ".namastey span",
    {
      y: 20,
      duration: 0.75,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.inOut",
    },
    "-=0.75"
  )

  .to({}, { duration: 0.5 })

  .to(".namastey span", {
    y: -20,
    duration: 0.75,
    opacity: 0,
    stagger: 0.15,
    ease: "power1.inOut",
  });

gsap.to(
  "#servicesSec  ul li:nth-child(odd)",
  {
    x: 50,
    duration: 3,

    scrollTrigger: {
      trigger: "#servicesSec  ul li:nth-child(odd)",
      scroller: "body",
      start: "top 90%",
      scrub: 1,
      end: "top -100%",
    },
  },
  "-=0.75"
);

gsap.to("#servicesSec  ul li:nth-child(even)", {
  x: -50,
  duration: 3,

  scrollTrigger: {
    trigger: "#servicesSec  ul li:nth-child(even)",
    scroller: "body",
    start: "top 90%",
    scrub: 2,
    end: "top -100%",
  },
});

gsap.from("#servicesSec ul li", {
  opacity: 0.25,
  duration: 2,
  stagger: 2,
  scrollTrigger: {
    trigger: "#servicesSec ul li",
    scroller: "body",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 2,
  },
});

ScrollTrigger.matchMedia({
  "(min-width: 640px)": function () {
    ScrollTrigger.create({
      scroller: "body",
      trigger: hamBurico,
      start: "top -100%",
      onEnter: () =>
        gsap.to(hamBurico, {
          display: "flex",
          opacity: 1,
          top: 24,
          duration: 0.5,
          ease: "power3.inOut",
        }),
      onLeaveBack: () =>
        gsap.to(hamBurico, {
          display: "none",
          opacity: 0,
          top: 12,
          duration: 0.5,
          ease: "power3.inOut",
        }),
    });
  },
});

hamBurico.addEventListener("click", () => {
  gsap.to(hamBurcard, {
    x: 0,
    ease: "power3.inOut",
  });
  gsap.to(hamBurico, {
    x: -50,
    scale: 0,
  });
});

function closeCard() {
  gsap.to(hamBurcard, {
    x: 300,
    ease: "power3.inOut",
  });
  gsap.to(hamBurico, {
    x: 0,
    scale: 1,
  });
}

gsap.to(".scroller", {
  x: "-125%",
  duration: 20,
  repeat: -1,
  ease: "none",
});

document.querySelector(".bgElem").addEventListener("mousemove", (e) => {
  gsap.to(".bgElem", {
    duration: 0.5,
    x: e.clientX / 100,
    y: e.clientY / 100,
  });
});
