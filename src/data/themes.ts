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
  };
}

const themes: Theme[] = [
  {
    name: "Neon",
    id: "t-1",
    tags: ["neon", "black", "magenta"],

    colors: {
      background: "#040011",
      container: "#080020",
      text: "#FFFFFF",
      accent: "#FF33DE",
      accentDarker: "#AB0090",
    },
  },

  {
    name: "Jungle",
    id: "t-2",
    tags: ["green", "emerald", "turquoise"],

    colors: {
      background: "#081C15",
      container: "#1B4332",
      text: "#82FF9D",
      accent: "#D8F3DC",
      accentDarker: "#B7E4C7",
    },
  },

  {
    name: "Coffee",
    id: "t-3",
    tags: ["brown", "almond", "coffee"],

    colors: {
      background: "#774936",
      container: "#8A5A44",
      text: "#FFF",
      accent: "#EDC4B3",
      accentDarker: "#E6B8A2",
    },
  },

  {
    name: "Azure sky",
    id: "t-4",
    tags: ["azure", "yellow", "blue", "keppel"],

    colors: {
      background: "#184E77",
      container: "#1E6091",
      text: "#FFF",
      accent: "#D9ED92",
      accentDarker: "#B5E48C",
    },
  },

  {
    name: "Meadow",
    id: "t-5",
    tags: ["green", "yellow", "spring"],

    colors: {
      background: "#007F5F",
      container: "#2B9348",
      text: "#FFF",
      accent: "#FFFF3F",
      accentDarker: "#EEEF20",
    },
  },

  {
    name: "Ocean",
    id: "t-6",
    tags: ["blue", "indigo", "dark"],

    colors: {
      background: "#001233",
      container: "#001845",
      text: "#FFF",
      accent: "#0466C8",
      accentDarker: "#0353A4",
    },
  },

  {
    name: "Amethyst",
    id: "t-7",
    tags: ["violet", "dark", "purple"],

    colors: {
      background: "#240046",
      container: "#3C096C",
      text: "#FFF",
      accent: "#9D4EDD",
      accentDarker: "#7B2CBF",
    },
  },

  {
    name: "Rose",
    id: "t-8",
    tags: ["red", "brown", "cardinal"],

    colors: {
      background: "#641220",
      container: "#6E1423",
      text: "#FFF",
      accent: "#E01E37",
      accentDarker: "#DA1E37",
    },
  },

  {
    name: "Camel",
    id: "t-9",
    tags: ["brown", "crayola", "white"],

    colors: {
      background: "#583101",
      container: "#603808",
      text: "#FFCF95",
      accent: "#FFEDD8",
      accentDarker: "#F3D5B5",
    },
  },

  {
    name: "Slate",
    id: "t-10",
    tags: ["gray", "white", "slate"],

    colors: {
      background: "#212529",
      container: "#343A40",
      text: "#FFCF95",
      accent: "#F8F9FA",
      accentDarker: "#E9ECEF",
    },
  },

  {
    name: "Sienna",
    id: "t-11",
    tags: ["brown", "earth", "bean"],

    colors: {
      background: "#260701",
      container: "#2F0E07",
      text: "#FFF",
      accent: "#774936",
      accentDarker: "#6E4230",
    },
  },

  {
    name: "Ruby",
    id: "t-12",
    tags: ["red", "white", "claret"],

    colors: {
      background: "#590D22",
      container: "#800F2F",
      text: "#FFE99A",
      accent: "#FFF0F3",
      accentDarker: "#FFCCD5",
    },
  },

  {
    name: "Rose wood",
    id: "t-13",
    tags: ["red", "gold", "orange"],

    colors: {
      background: "#370617",
      container: "#6A040F",
      text: "#FFF",
      accent: "#FFBA08",
      accentDarker: "#FAA307",
    },
  },

  {
    name: "Starry night",
    id: "t-14",
    tags: ["violet", "white", "purple"],

    colors: {
      background: "#10002B",
      container: "#240046",
      text: "#FFF",
      accent: "#E0AAFF",
      accentDarker: "#C77DFF",
    },
  },

  {
    name: "Ambush",
    id: "t-15",
    tags: ["gold", "dark"],

    colors: {
      background: "#000000",
      container: "#14213D",
      text: "#FFF",
      accent: "#FCA311",
      accentDarker: "#FFBD50",
    },
  },

  {
    name: "Slate Light",
    id: "t-16",
    tags: ["light", "gray", "white", "slate"],

    colors: {
      background: "#CAD2C5",
      container: "#84A98C",
      text: "#354F52",
      accent: "#354F52",
      accentDarker: "#2F3E46",
    },
  },

  {
    name: "Ocean Light",
    id: "t-17",
    tags: ["light", "blue", "indigo"],

    colors: {
      background: "#4CC9F0",
      container: "#4895EF",
      text: "#FFF",
      accent: "#3F37C9",
      accentDarker: "#560BAD",
    },
  },

  {
    name: "Ruby Light",
    id: "t-18",
    tags: ["light", "red", "white", "claret"],

    colors: {
      background: "#FFF0F3",
      container: "#FFCCD5",
      text: "#590D22",
      accent: "#A4133C",
      accentDarker: "#FF4D6D",
    },
  },
];

export default themes;
