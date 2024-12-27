import { Task, CreateTaskDto } from "./task";

export interface HeaderProps {
  onCreateClick?: () => void;
}

export interface TaskFormProps {
  onSubmit: (data: CreateTaskDto) => Promise<void>;
  onCancel: () => void;
  buttonLabel: string;
  initialData?: Partial<CreateTaskDto>;
}

export interface TaskCardProps {
  task: Task;
  onUpdate: (taskId: number, updates: Partial<Task>) => void;
  onDelete: (taskId: number) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onUpdate: TaskCardProps["onUpdate"];
  onDelete: TaskCardProps["onDelete"];
}

export interface TaskCounterProps {
  total: number;
  completed: number;
}

export interface EmptyStateProps {
  message?: string;
  subMessage?: string;
}
