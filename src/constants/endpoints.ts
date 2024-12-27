export const API_ENDPOINTS = {
  tasks: "/tasks",
  task: (id: number) => `/tasks/${id}`,
} as const;
