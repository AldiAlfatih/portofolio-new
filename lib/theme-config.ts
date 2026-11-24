export type ThemeMode = "sky-blue" | "midnight-blue" | "burgundy" | "arctic-red"
export type ThemeId = ThemeMode

export interface ThemeDefinition {
  id: ThemeMode
  name: string
  character: string
  palette: string[]
  previewBg: string
  previewAccent: string
  tokens: {
    background: string
    surface: string
    foreground: string
    primary: string
    secondary: string
    accent: string
    border: string
  }
}

export const themeConfig: Record<ThemeMode, ThemeDefinition["tokens"]> = {
  "sky-blue": {
    background: "#E3F2FD",
    surface: "#FFFFFF",
    foreground: "#0D47A1",
    primary: "#2196F3",
    secondary: "#90CAF9",
    accent: "#0D47A1",
    border: "rgba(13, 71, 161, 0.18)",
  },
  "midnight-blue": {
    background: "#000000",
    surface: "#111111",
    foreground: "#F0EDCF",
    primary: "#0B60B0",
    secondary: "#40A2D8",
    accent: "#F0EDCF",
    border: "rgba(240, 237, 207, 0.15)",
  },
  burgundy: {
    background: "#2C2C2C",
    surface: "#383838",
    foreground: "#F3F4F4",
    primary: "#853953",
    secondary: "#612D53",
    accent: "#F3F4F4",
    border: "rgba(243, 244, 244, 0.18)",
  },
  "arctic-red": {
    background: "#F5F5F5",
    surface: "#FFFFFF",
    foreground: "#2C2C2C",
    primary: "#FF0000",
    secondary: "#DFF1F1",
    accent: "#2C2C2C",
    border: "rgba(187, 213, 218, 0.6)",
  },
} as const

export const THEMES: ThemeDefinition[] = [
  {
    id: "sky-blue",
    name: "Sky Blue",
    character: "Clean & Fresh",
    palette: ["#E3F2FD", "#90CAF9", "#2196F3", "#0D47A1"],
    previewBg: "#E3F2FD",
    previewAccent: "#2196F3",
    tokens: themeConfig["sky-blue"],
  },
  {
    id: "midnight-blue",
    name: "Midnight Blue",
    character: "Technical & Deep",
    palette: ["#000000", "#0B60B0", "#40A2D8", "#F0EDCF"],
    previewBg: "#000000",
    previewAccent: "#40A2D8",
    tokens: themeConfig["midnight-blue"],
  },
  {
    id: "burgundy",
    name: "Burgundy",
    character: "Sophisticated & Distinct",
    palette: ["#2C2C2C", "#853953", "#612D53", "#F3F4F4"],
    previewBg: "#2C2C2C",
    previewAccent: "#853953",
    tokens: themeConfig["burgundy"],
  },
  {
    id: "arctic-red",
    name: "Arctic Red",
    character: "Minimal & Bold",
    palette: ["#F5F5F5", "#DFF1F1", "#BBD5DA", "#FF0000"],
    previewBg: "#F5F5F5",
    previewAccent: "#FF0000",
    tokens: themeConfig["arctic-red"],
  },
]

export const DEFAULT_THEME: ThemeMode = "midnight-blue"
