import React from "react";

export default function Intro() {
  return (
    <section className="flex flex-col space-y-4 py-12 md:py-20 lg:py-24 max-w-3xl mx-auto px-4 md:px-6">
      <h2 className="font-bold text-3xl md:text-4xl">
        Welcome to Warded Wishes!
      </h2>
      <p>
        Create and explore the world of Warded Wishes, a Magical Girl TTRPG!
        Here, you play as a Magical Girl, someone who was offered a Wish by a
        strange and magical creature called a Contractor, and upon accepting it,
        must now fight against the darkness to protect the City.
      </p>
      <p>Live an ordinary life by day, and hunt Monstrosities by night! Juggle your two lives, balancing your time between the two as each demands your attention! Cast strange and powerful Sorceries to fight Monstrosities, and defy Fate itself with your magic!</p>
    </section>
  );
}
