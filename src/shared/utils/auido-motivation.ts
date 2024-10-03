const SOUND_SRC = [
  "https://www.myinstants.com/media/sounds/pl030_v_sp_mov_01_alt.mp3",
  "https://www.myinstants.com/media/sounds/wheres-your-motivation.mp3",
  "https://www.myinstants.com/media/sounds/gdata_0798.mp3",
  "https://www.myinstants.com/media/sounds/you-shall-die.mp3",
  "https://www.myinstants.com/media/sounds/dmc3-schum.mp3",
  "https://www.myinstants.com/media/sounds/vergil-die.mp3",
  "https://www.myinstants.com/media/sounds/motivated.mp3",
  "https://www.myinstants.com/media/sounds/vergil-diamond-alert.mp3",
  "https://www.myinstants.com/media/sounds/too-easy-2.mp3",
  "https://www.myinstants.com/media/sounds/pl030_v_taunt_01.mp3",
  "https://www.myinstants.com/media/sounds/why-isnt-this-working.mp3",
  "https://www.myinstants.com/media/sounds/vergil-danteh.mp3",
  "https://www.myinstants.com/media/sounds/pl030_v_mj_sp_mov_01.mp3",
  "https://www.myinstants.com/media/sounds/vergil-say-devil-may-cry.mp3",
  "https://www.myinstants.com/media/sounds/vergil-youre-not-worthy-as-my-opponent-dt.mp3",
  "https://www.myinstants.com/media/sounds/vergil-check-your-balls.mp3",
  "https://www.myinstants.com/media/sounds/blast-alert.mp3",
  "https://www.myinstants.com/media/sounds/vergil-whats-wrong.mp3",
  "https://www.myinstants.com/media/sounds/vergil-this-is-the-power-of-sparda-dt.mp3",
  "https://www.myinstants.com/media/sounds/vergil-come-on-2.mp3",
  "https://www.myinstants.com/media/sounds/vergil-youre-going-down-2.mp3",
  "https://www.myinstants.com/media/sounds/too-easy.mp3",
  "https://www.myinstants.com/media/sounds/vergil-ridiculous.mp3",
];

export const giveMeSomeMotivation = () => {
  const randomElemIdx = Number((Math.random() * SOUND_SRC.length).toFixed());
  new Audio(SOUND_SRC[randomElemIdx]).play().then(() => {
    "played motivation";
  });
};
