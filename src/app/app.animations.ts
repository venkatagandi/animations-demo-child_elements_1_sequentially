import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
  animation,
  useAnimation
} from "@angular/animations";

export let bounceOutLeftAnimation = animation(
  animate(
    "1s ease-out",
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: "translateX(20px)"
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: "translateX(-100%)"
      })
    ])
  )
);

export let fadeInAnimation = animation(
  [style({ opacity: 0 }), animate("{{duration}} {{easing}}")],
  {
    params: {
      duration: "2s",
      easing: "ease-out"
    }
  }
);
export let fadeOutAnimation = animation([animate(2000, style({ opacity: 0 }))]);

export let fade = trigger("fade", [
  // state("void", style({ opacity: 0 })),
  transition(":enter", useAnimation(fadeInAnimation)),
  transition(":leave", useAnimation(fadeOutAnimation))
]);

export let slide = trigger("slide", [
  transition(":enter", [
    animate(1000, style({ transform: "translateX(-10px)" }))
  ]),
  transition(":leave", [useAnimation(bounceOutLeftAnimation)])
]);
