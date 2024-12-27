export interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskDto {
  title: string;
  color: string;
}

export interface UpdateTaskDto {
  title?: string;
  color?: string;
  completed?: boolean;
}
