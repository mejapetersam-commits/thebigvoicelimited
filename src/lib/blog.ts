import type { ServiceHref } from "@/lib/services-data";

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  intro: string;
  blocks: Block[];
  related: { to: ServiceHref; label: string; text: string };
};

export const posts: Post[] = [
  {
    slug: "how-to-choose-sound-for-a-wedding-or-ruracio-in-kenya",
    title: "How to Choose Sound for a Wedding or Ruracio in Kenya",
    description:
      "A practical guide to choosing sound for a wedding or ruracio in Kenya: what to plan, what to ask, and how to avoid common problems on the day.",
    date: "2026-10-07",
    intro:
      "Guests rarely notice good sound, but they never forget bad sound. At a wedding or ruracio, the speeches, blessings, music and announcements all depend on it. Here is how to get it right.",
    blocks: [
      { type: "h2", text: "Start with your guest count and venue" },
      {
        type: "p",
        text: "These two things decide most of your sound plan: how many speakers you need, how many microphones, and how much power. An outdoor garden or tent usually needs more sound than the same crowd in a hall, because there are no walls to hold the sound in. Tell your sound provider the number of guests, whether the event is indoors or outdoors, and the venue name.",
      },
      { type: "h2", text: "Think about who will speak" },
      {
        type: "p",
        text: "List everyone who will need a microphone: the MC, elders, family speakers, the officiant or pastor, and any band or DJ. Wireless microphones let speakers move freely, which matters when people walk to the front or around the venue. Ask how many microphones are included and whether there is a spare on site.",
      },
      { type: "h2", text: "Plan the programme, not just the equipment" },
      {
        type: "p",
        text: "Share the order of events with your sound team: entrances, speeches, music, cake cutting and any performances. When the technician knows what is coming, the right microphone and the right music are ready at the right moment. If you have a playlist, send it in advance so it can be tested.",
      },
      { type: "h2", text: "Ask about setup, soundcheck and backup" },
      {
        type: "p",
        text: "Good sound is set up and tested before guests arrive. Ask when the team will arrive, when the soundcheck happens, and what the plan is if something fails, such as a microphone dying or a power interruption. A professional team will have a clear answer.",
      },
      { type: "h2", text: "Questions to ask before you book" },
      {
        type: "ul",
        items: [
          "How many guests is this setup suitable for?",
          "Is a sound technician on site for the whole event?",
          "How many microphones are included, and is there a spare?",
          "When will you set up and do the soundcheck?",
          "Can you also provide an MC, DJ or livestream if I need one?",
          "What is included in the quote, and what costs extra?",
        ],
      },
      { type: "h2", text: "Check the venue's noise rules early" },
      {
        type: "p",
        text: "Venues and local authorities can have rules about noise levels and finishing times. Ask your venue early so that your programme and sound plan fit within them.",
      },
      { type: "h2", text: "Match the package to the event" },
      {
        type: "p",
        text: "At Big Voice, our Complete Event Sound package is designed for weddings, ruracio and medium-sized events of 100 to 200 guests, with an enhanced PA system, multiple microphones, a sound technician and music integration. For smaller or larger events there is a package to fit, and anything more complex can be built as a custom solution.",
      },
    ],
    related: {
      to: "/services/event-sound",
      label: "Event & Sound Experience",
      text: "See our event sound packages and call for a quote.",
    },
  },
  {
    slug: "how-much-sound-does-your-event-need",
    title: "How Much Sound Does Your Event Need? A Guest-Count Guide",
    description:
      "Not sure what size sound system your event needs? A simple guide for events of 50 to 400 guests in Nairobi and across Kenya.",
    date: "2026-10-07",
    intro:
      "The right amount of sound depends on your guest count, your venue and what is happening on stage. Too little and people at the back cannot hear. Too much and it becomes uncomfortable. This guide gives you a starting point.",
    blocks: [
      { type: "h2", text: "Events of 50 to 100 guests" },
      {
        type: "p",
        text: "Smaller gatherings such as birthdays, small weddings, meetings and community events need clear speech and background music. A basic PA system with wireless microphones, a sound technician and a proper soundcheck is usually enough.",
      },
      { type: "h2", text: "Events of 100 to 200 guests" },
      {
        type: "p",
        text: "Medium-sized weddings, ruracio and celebrations need a stronger PA and more than one microphone, since several people will speak. Music is usually a bigger part of the programme here, so it helps to have music playback planned into the setup.",
      },
      { type: "h2", text: "Events of 200 to 400 guests" },
      {
        type: "p",
        text: "Larger social and public events need a professional PA, subwoofers for fuller music, and a technical crew rather than one person. At this size, coordination matters just as much as equipment, so that sound, programme and venue all work together.",
      },
      { type: "h2", text: "Corporate events and conferences" },
      {
        type: "p",
        text: "Guest count is only part of the picture. Conferences, product launches and panels need clear speech for presentations and discussions, often with several microphones at once. A technical operator and an MC or moderator keep the programme running smoothly.",
      },
      { type: "h2", text: "Beyond the numbers: what else changes the answer" },
      {
        type: "ul",
        items: [
          "Indoor or outdoor: open spaces need more sound than closed halls.",
          "Speech or music: a talk needs clarity, a party needs power.",
          "Number of speakers: more speakers means more microphones.",
          "Extras: screens, lighting, DJ or livestreaming change the setup.",
        ],
      },
      { type: "h2", text: "When to ask for a custom setup" },
      {
        type: "p",
        text: "If your event is large, has an unusual venue or combines sound, screens, lighting and live streaming, a standard package may not fit. In that case the best approach is to share your venue, audience and programme, and have the solution designed around them.",
      },
    ],
    related: {
      to: "/services/event-sound",
      label: "Event & Sound Experience",
      text: "Compare our packages for 50 to 400 guests, or ask for a custom solution.",
    },
  },
  {
    slug: "how-to-start-a-podcast-in-kenya",
    title: "How to Start a Podcast in Kenya: A Simple Guide",
    description:
      "A step-by-step guide to starting a podcast in Kenya: choosing your idea, recording clean audio, editing and publishing your first episode.",
    date: "2026-10-07",
    intro:
      "Starting a podcast is easier than most people think. You do not need a big studio. You need a clear idea, a quiet space and a plan you can stick to. Here is a simple way to begin.",
    blocks: [
      { type: "h2", text: "1. Choose a clear idea and audience" },
      {
        type: "p",
        text: "Decide what your show is about and who it is for. A focused idea, such as business advice for small traders or conversations with local creatives, is easier to grow than a show about everything. Write one sentence that describes your podcast.",
      },
      { type: "h2", text: "2. Decide the format" },
      {
        type: "p",
        text: "Will it be solo, a co-hosted conversation or interviews with guests? How long will each episode be, and how often will you publish? Pick a schedule you can keep. Consistency matters more than frequency.",
      },
      { type: "h2", text: "3. Get the basics for recording" },
      {
        type: "p",
        text: "Clear audio matters more than anything else. A decent microphone, a pair of headphones and a quiet room will take you most of the way. Soft furnishings such as curtains, sofas and rugs reduce echo. Record a short test and listen back before your first real episode.",
      },
      { type: "h2", text: "4. Record with good habits" },
      {
        type: "ul",
        items: [
          "Choose a quiet time and switch off fans, phones and notifications.",
          "Keep the microphone about a hand's width from your mouth.",
          "Keep a steady distance so your volume stays even.",
          "Prepare an outline, not a full script, so you sound natural.",
        ],
      },
      { type: "h2", text: "5. Edit your episode" },
      {
        type: "p",
        text: "Editing removes mistakes and long pauses, balances volume and adds your intro and outro. Good editing and sound design are what make a podcast feel professional, and they are often the part people find most time-consuming.",
      },
      { type: "h2", text: "6. Publish and share" },
      {
        type: "p",
        text: "Upload your episodes to a podcast hosting service, which then sends them to platforms such as Spotify and Apple Podcasts. Prepare cover art and a short description for the show, and share each episode with your network.",
      },
      { type: "h2", text: "When to get professional help" },
      {
        type: "p",
        text: "If you want clean recording, polished editing or help shaping your format, a production team can handle the technical side so you can focus on what you want to say.",
      },
    ],
    related: {
      to: "/services/podcast-production",
      label: "Podcast Production",
      text: "Recording, editing and guidance from first idea to finished episode.",
    },
  },
  {
    slug: "how-to-brief-a-voice-over-artist",
    title: "How to Brief a Voice Over Artist for Your Advert",
    description:
      "What to include when briefing a voice over artist for an advert, radio spot or corporate video, so you get the right result the first time.",
    date: "2026-10-07",
    intro:
      "A good brief saves time, avoids repeated revisions and gets you a voiceover that sounds right on the first take. Here is what to include when you hire a voice over artist.",
    blocks: [
      { type: "h2", text: "Start with your goal and audience" },
      {
        type: "p",
        text: "Say what the audio needs to achieve and who will hear it. A voice for a youth-focused mobile promotion is very different from a voice for a corporate training video. The clearer your goal, the easier it is to choose the right delivery.",
      },
      { type: "h2", text: "Share the final script early" },
      {
        type: "p",
        text: "Send the script before recording, and make it as final as possible. Changes after recording take more time. Read it aloud yourself first, because lines that look fine on paper can feel awkward when spoken.",
      },
      { type: "h2", text: "Know your length" },
      {
        type: "p",
        text: "As a rough guide, a natural speaking pace is about 150 words a minute, so a 30-second spot is around 75 words and a 60-second spot is around 150. If your script is longer than your slot, cut words rather than asking the voice artist to speed up.",
      },
      { type: "h2", text: "Describe the tone" },
      {
        type: "p",
        text: "Use simple descriptions such as warm, confident, energetic or calm. Even better, share an example of an advert or voice you like. A reference is worth a hundred adjectives.",
      },
      { type: "h2", text: "Flag names and pronunciation" },
      {
        type: "p",
        text: "Point out brand names, product names, place names and any local words, and say how they should be pronounced. This prevents small mistakes from turning into re-records.",
      },
      { type: "h2", text: "Say where it will be used" },
      {
        type: "ul",
        items: [
          "Radio or TV advert",
          "Social media or online video",
          "Corporate presentation or e-learning",
          "Documentary or digital media",
        ],
      },
      {
        type: "p",
        text: "Where the audio will play affects the length, the energy and how it is mixed, so tell your producer upfront.",
      },
      { type: "h2", text: "Agree on timelines and revisions" },
      {
        type: "p",
        text: "Share your deadline, the language or accent you need, and how many rounds of changes are included. Clear expectations on both sides make the whole process smoother.",
      },
    ],
    related: {
      to: "/services/voice-audio",
      label: "Voice & Audio Production",
      text: "Listen to adverts and brand spots we have voiced and produced.",
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const readMinutes = (p: Post) => {
  const words = [p.intro, ...p.blocks.map((b) => (b.type === "ul" || b.type === "ol" ? b.items.join(" ") : b.text))]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
};

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
