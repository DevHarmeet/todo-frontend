import React from "react";
import TaskCard from "./TaskCard";
import { Task } from "@/types/task";

interface TaskListProps {
  tasks: Task[];
  onUpdate: (taskId: number, updates: Partial<Task>) => void;
  onDelete: (taskId: number) => void;
}

export default function TaskList({ tasks, onUpdate, onDelete }: TaskListProps) {
  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
