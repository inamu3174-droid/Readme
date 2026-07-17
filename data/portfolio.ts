export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
};

export const portfolioProjects: PortfolioProject[] = [
  { id: "aurora", title: "Aurora Pavilion", category: "Architecture", year: "2025", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80&auto=format&fit=crop" },
  { id: "meridian", title: "Meridian Studio", category: "Interior", year: "2024", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop" },
  { id: "monolith", title: "Monolith House", category: "Architecture", year: "2025", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop" },
  { id: "verge", title: "Verge Editorial", category: "Branding", year: "2023", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80&auto=format&fit=crop" },
  { id: "glasshouse", title: "Glasshouse Retreat", category: "Architecture", year: "2024", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop" },
  { id: "faade", title: "Faade Collective", category: "Fashion", year: "2025", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop" },
  { id: "obsidian", title: "Obsidian Gallery", category: "Exhibition", year: "2023", image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80&auto=format&fit=crop" }
];
