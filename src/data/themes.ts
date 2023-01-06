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
    accentDarkest: string;
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
      accentDarkest: "#760063",
      neutral: "#515151",
    },
  },
];

export default themes;
