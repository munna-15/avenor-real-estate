export type JournalBeat = {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
};

export type JournalStory = {
  number: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  read: string;
  image: string;
  intro: string;
  paragraphs: readonly string[];
  quote: string;
  beats: readonly JournalBeat[];
};

export const journalStories: readonly JournalStory[] = [
  {
    number: "01",
    slug: "the-quiet-architecture-of-light",
    category: "Architecture",
    title: "The Quiet Architecture of Light",
    excerpt:
      "A residence is shaped as much by what enters it as by what surrounds it.",
    read: "06 min",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=3200&q=95",
    intro:
      "Light is one of architecture's quietest materials. It changes without asking for attention, revealing proportion, texture and atmosphere throughout the day.",
    paragraphs: [
      "A well-considered residence begins with an understanding of how light moves through it. Orientation, openings and depth are not simply technical decisions; together they shape the experience of everyday life.",
      "Morning light can make a room feel open and optimistic, while the softer character of late afternoon can create a sense of retreat. The architecture provides the framework, but light gives that framework its rhythm.",
      "The most successful spaces rarely depend on dramatic gestures. Instead, they allow natural light to reveal details gradually — a textured wall, a timber surface, the edge of a courtyard or the changing relationship between rooms.",
    ],
    quote:
      "The spaces we remember are often the ones that allowed light to change them.",
    beats: [
      {
        image:
          "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "01 / Natural light",
        title: "Light gives architecture its rhythm.",
        text: "Orientation, openings and depth create a quiet choreography that changes throughout the day.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "02 / Atmosphere",
        title: "A room should change with the day.",
        text: "Morning brightness and evening softness create different experiences without changing the architecture.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "03 / Detail",
        title: "The smallest details become visible.",
        text: "Texture, proportion and material reveal themselves gradually as natural light moves through the home.",
      },
    ],
  },
  {
    number: "02",
    slug: "materials-that-age-well",
    category: "Material",
    title: "Materials That Age Well",
    excerpt:
      "Why honest materials become more beautiful with time, use and changing light.",
    read: "05 min",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=3200&q=95",
    intro:
      "Some materials become more convincing with age. Their surfaces collect memory, soften with use and develop a character that cannot be manufactured.",
    paragraphs: [
      "The appeal of natural materials comes partly from their imperfection. Stone carries variation, timber changes tone and metal develops a surface that reflects the passage of time.",
      "A residence designed around these materials does not need to remain visually frozen. Instead, its surfaces are allowed to participate in the life of the home.",
      "This approach asks for restraint. When materials are chosen for their longevity rather than their novelty, interiors can remain relevant long after trends have moved on.",
    ],
    quote:
      "The best materials do not hide time. They give it somewhere to settle.",
    beats: [
      {
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "01 / Natural material",
        title: "Beauty begins with honesty.",
        text: "Stone, timber and metal bring variation and depth that manufactured surfaces struggle to reproduce.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "02 / Patina",
        title: "Time becomes part of the material.",
        text: "Use, touch and changing light slowly create a surface that belongs uniquely to the home.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "03 / Longevity",
        title: "Good design does not need to stay new.",
        text: "Materials chosen for permanence allow an interior to remain relevant beyond changing trends.",
      },
    ],
  },
  {
    number: "03",
    slug: "designing-for-natural-light",
    category: "Light",
    title: "Designing for Natural Light",
    excerpt:
      "The quiet relationship between orientation, shadow and the rhythm of a home.",
    read: "04 min",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=3200&q=95",
    intro:
      "Natural light is not simply something to maximise. It is something to choreograph — allowing brightness, shadow and reflection to create different moods across the home.",
    paragraphs: [
      "The position of a window can determine far more than the amount of daylight entering a room. It influences views, privacy, temperature and the way a person moves through the space.",
      "Deep openings can frame a garden like a piece of artwork. High windows can introduce a quieter layer of daylight. Smaller openings can create moments of contrast within larger spaces.",
      "Good architecture considers all of these conditions together. The result is not a uniformly bright interior, but one with variation, depth and a natural sense of time.",
    ],
    quote:
      "A room changes throughout the day. Its architecture should allow that change.",
    beats: [
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "01 / Orientation",
        title: "Every window begins with direction.",
        text: "Orientation determines not only daylight, but also views, privacy and the character of each room.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "02 / Shadow",
        title: "Shadow gives light its depth.",
        text: "Contrast allows interiors to feel layered rather than uniformly bright.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "03 / Rhythm",
        title: "A home should move with the sun.",
        text: "The changing quality of daylight gives the architecture a natural rhythm throughout the day.",
      },
    ],
  },
  {
    number: "04",
    slug: "the-art-of-enough",
    category: "Interiors",
    title: "The Art of Enough",
    excerpt:
      "A considered interior is not about adding more. It is about knowing what belongs.",
    read: "06 min",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=3200&q=95",
    intro:
      "Restraint is not the absence of detail. It is the discipline of giving each element enough space to matter.",
    paragraphs: [
      "An interior becomes calmer when every object has a reason to exist. Furniture, lighting, art and material are brought together as parts of one composition rather than independent statements.",
      "This does not mean spaces should feel sparse. Warmth can come from texture, scale and carefully chosen pieces. The difference is that nothing needs to compete for attention.",
      "Over time, this approach creates interiors that feel personal without becoming visually crowded. The home remains adaptable because its character is built on proportion and material rather than decoration alone.",
    ],
    quote:
      "Enough is not less. It is knowing when the composition is complete.",
    beats: [
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "01 / Restraint",
        title: "Not everything needs to speak.",
        text: "A considered interior gives each object enough space to have meaning.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "02 / Proportion",
        title: "Calm comes from composition.",
        text: "Scale, texture and material create warmth without visual competition.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "03 / Belonging",
        title: "Leave room for life.",
        text: "The best interiors make space for the people, objects and moments that give a home its character.",
      },
    ],
  },
  {
    number: "05",
    slug: "a-house-within-its-garden",
    category: "Landscape",
    title: "A House Within Its Garden",
    excerpt:
      "How landscape can become part of the architecture rather than simply surrounding it.",
    read: "05 min",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3200&q=95",
    intro:
      "A garden can be more than a boundary around a house. It can become another room, another view and another layer of the architecture.",
    paragraphs: [
      "The relationship between a residence and its landscape begins with the way the two meet. Courtyards, terraces and shaded thresholds can dissolve the boundary between inside and outside.",
      "Planting also changes the experience of a home over time. A young garden may feel open and architectural, while mature trees can eventually create enclosure, shade and privacy.",
      "When landscape is considered alongside architecture, the result feels less like a building placed in a garden and more like one continuous environment.",
    ],
    quote:
      "A house becomes more complete when its garden is treated as part of the architecture.",
    beats: [
      {
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "01 / Threshold",
        title: "The garden begins at the edge.",
        text: "Courtyards and terraces soften the boundary between architecture and landscape.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "02 / Growth",
        title: "A garden changes with time.",
        text: "Planting introduces seasons, shade and privacy that become part of the home's character.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "03 / Continuity",
        title: "Inside and outside become one.",
        text: "When landscape and architecture are conceived together, the home feels like one continuous environment.",
      },
    ],
  },
  {
    number: "06",
    slug: "the-rooms-between-rooms",
    category: "Living",
    title: "The Rooms Between Rooms",
    excerpt:
      "Exploring thresholds, transitions and the spaces that quietly connect a home together.",
    read: "04 min",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=3200&q=95",
    intro:
      "Some of the most important spaces in a home are not destinations. They are the thresholds, corridors and pauses that connect one experience to another.",
    paragraphs: [
      "A transition between rooms can be almost invisible, yet it can determine how a residence feels. A change in ceiling height, flooring or natural light can signal that one atmosphere is giving way to another.",
      "These spaces provide moments of pause. They allow a home to unfold gradually instead of revealing everything at once.",
      "When circulation is treated as part of the architecture, movement becomes part of the experience. The journey through a residence can feel as considered as the rooms themselves.",
    ],
    quote:
      "A home is experienced not only in its rooms, but in the spaces that lead between them.",
    beats: [
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "01 / Threshold",
        title: "The journey begins between rooms.",
        text: "Small changes in height, material and light can quietly define a transition.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "02 / Pause",
        title: "Not every space needs a destination.",
        text: "Moments of pause allow a residence to unfold gradually and create anticipation.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=3200&q=95",
        eyebrow: "03 / Movement",
        title: "Circulation can become architecture.",
        text: "The way we move through a home can be as meaningful as the rooms themselves.",
      },
    ],
  },
];
