export interface Theme {
  name: string;
  id: string;
  tags: string[];

  colors: {
    background: string;
    container: string;
    text: string;
    accent: string;
    accentDarker: string;
    neutral: string;
  };
}

const themes: Theme[] = [
  {
    name: "Neon",
    id: "t-1",
    tags: ["neon", "dark"],

    colors: {
      background: "#040011",
      container: "#080020",
      text: "#FFFFFF",
      accent: "#FF33DE",
      accentDarker: "#AB0090",
      neutral: "#515151",
    },
  },
  {
    name: "Slide",
    id: "t-2",
    tags: ["neon", "dark"],

    colors: {
      background: "#040011",
      container: "#080020",
      text: "#FFFFFF",
      accent: "#FF33DE",
      accentDarker: "#AB0090",
      neutral: "#515151",
    },
  },
  {
    name: "Slide",
    id: "t-3",
    tags: ["neon", "dark"],

    colors: {
      background: "#040011",
      container: "#080020",
      text: "#FFFFFF",
      accent: "#FF33DE",
      accentDarker: "#AB0090",
      neutral: "#515151",
    },
  },
  {
    name: "Slide",
    id: "t-3",
    tags: ["neon", "dark"],

    colors: {
      background: "#040011",
      container: "#080020",
      text: "#FFFFFF",
      accent: "#FF33DE",
      accentDarker: "#AB0090",
      neutral: "#515151",
    },
  },

  {
    name: "Slide",
    id: "t-3",
    tags: ["neon", "dark"],

    colors: {
      background: "#040011",
      container: "#080020",
      text: "#FFFFFF",
      accent: "#FF33DE",
      accentDarker: "#AB0090",
      neutral: "#515151",
    },
  },
];

export default themes;
