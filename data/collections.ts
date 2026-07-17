export type Collection = {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
};

export const collections: Collection[] = [
  { id: "north-atrium", title: "North Atrium", tag: "Vol. 01", description: "A study in light and concrete — a residential atrium where the seasons write the interior.", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80&auto=format&fit=crop" },
  { id: "still-form", title: "Still Form", tag: "Vol. 02", description: "Sculptural furniture pieces built from a single continuous gesture in oxidised steel.", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&q=80&auto=format&fit=crop" },
  { id: "quiet-industry", title: "Quiet Industry", tag: "Vol. 03", description: "An identity system for a century-old foundry, rebuilt for its next hundred years.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80&auto=format&fit=crop" },
  { id: "coastal-index", title: "Coastal Index", tag: "Vol. 04", description: "A cliffside gallery mapping tide patterns through kinetic, sun-tracking installations.", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80&auto=format&fit=crop" },
  { id: "linen-archive", title: "Linen Archive", tag: "Vol. 05", description: "A slow-fashion capsule collection photographed across five disused textile mills.", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80&auto=format&fit=crop" }
];
