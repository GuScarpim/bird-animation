import { gsap, SlowMo } from "gsap/all";

export default function BirdEffect() {
  const tl = gsap.timeline({ repeat: -1 });
  const tlNote = gsap.timeline({ repeat: -1 });

  tl.from(
    "#sun",
    {
      y: 200,
      x: 200,
      ease: SlowMo.ease.config(0.1, 0.3, false),
      duration: 10,
    },
    "0"
  )
    .to(
      "#sun",
      {
        x: "-500%",
        ease: SlowMo.ease.config(10, 20, false),
        duration: 10,
        stagger: true,
        delay: 1.5,
      },
      "0"
    )
    .to(
      "#sun",
      {
        y: 0,
        ease: SlowMo.ease.config(0.1, 0.1, true),
        duration: 10,
      },
      "0"
    );

  gsap.from("#leaf", {
    repeat: -1,
    yoyo: true,
    ease: SlowMo.ease.config(0.6, 0.6, true),
    scale: 0.8,
    duration: 2,
    rotate: 10,
  });

  gsap.fromTo(
    "#branch, #flower",
    {
      scale: 0.8,
      y: 10,
      filter: "brightness(1.2)",
      ease: SlowMo.ease.config(0.6, 0.6, true),
    },
    {
      filter: "brightness(1)",
      y: 0,
      scale: 1,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: SlowMo.ease.config(0.6, 0.6, true),
    }
  );

  gsap.from("#hair", {
    yoyo: true,
    duration: 2,
    repeat: -1,
    rotate: 20,
  });

  gsap.from("#headPhone1", {
    x: -110,
    yoyo: true,
    duration: 2,
    repeat: -1,
  });

  gsap.from("#headPhone2", {
    x: -15,
    yoyo: true,
    duration: 2,
    repeat: -1,
  });

  gsap.from("#headPhone3", {
    yoyo: true,
    scale: 0.95,
    duration: 2,
    repeat: -1,
  });

  gsap.from("#body", {
    x: -10,
    y: 10,
    yoyo: true,
    duration: 2,
    repeat: -1,
  });

  gsap.fromTo(
    "#eye",
    {
      scaleY: 1,
      paused: false,
      x: -180,
    },
    {
      x: -170,
      scaleY: 0.95,
      transformOrigin: "50% 50%",
      duration: 2,
      yoyo: true,
      repeat: -1,
    }
  );

  gsap.from("#eyeLeft, #eyeRight", {
    x: -20,
    y: 10,
    duration: 2,
    yoyo: true,
    repeat: -1,
  });

  gsap.from("#cheekLeft, #cheekRight", {
    yoyo: true,
    x: -10,
    scale: 0.9,
    fill: "#6C63FF",
    duration: 2,
    repeat: -1,
  });

  gsap.from("#nose", {
    yoyo: true,
    x: -10,
    rotate: 10,
    scale: 0.9,
    fill: "#6C63FF",
    duration: 2,
    repeat: -1,
  });

  gsap.from("#pawLeft", {
    yoyo: true,
    x: -10,
    rotate: -5,
    duration: 2,
    repeat: -1,
  });

  gsap.from("#pawRight", {
    yoyo: true,
    y: -3,
    x: -8,
    rotate: -5,
    duration: 2,
    repeat: -1,
  });

  tlNote
    .fromTo(
      "#fuse",
      {
        opacity: 0,
      },
      {
        stagger: 1,
        opacity: 1,
        yoyo: true,
      }
    )
    .fromTo(
      "#songGroupQuaterNote",
      {
        opacity: 0,
      },
      {
        stagger: 1,
        opacity: 1,
        duration: 1,
      }
    )
    .fromTo(
      "#quaterNote",
      {
        opacity: 0,
      },
      {
        stagger: 1,
        opacity: 1,
        duration: 1,
      }
    );
}

