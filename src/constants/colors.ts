export const TASK_COLORS = [
  "#FF5733", // Red
  "#FFA500", // Orange
  "#FFD700", // Yellow
  "#4CAF50", // Green
  "#2196F3", // Blue
  "#3F51B5", // Indigo
  "#9C27B0", // Purple
  "#E91E63", // Pink
  "#795548", // Brown
] as const;

export const UI_COLORS = {
  primary: {
    blue: "#4EA8DE",
    purple: "#5E60CE",
  },
  background: {
    dark: "#1A1A1A",
    darker: "#0D0D0D",
    card: "#262626",
  },
  border: {
    default: "#333333",
    hover: "#808080",
  },
  text: {
    white: "#F2F2F2",
    gray: "#808080",
    danger: "#E25858",
  },
} as const;
