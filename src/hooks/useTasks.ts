import { useState, useEffect } from "react";
import { getTasks, updateTask, deleteTask } from "@/utils/api";
import { Task, UpdateTaskDto } from "@/types/task";

export const useTasks = (initialTasks: Task[] = []) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [loading, setLoading] = useState(initialTasks.length === 0);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  const updateTaskInState = async (taskId: number, updates: UpdateTaskDto) => {
    try {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === taskId ? { ...task, ...updates } : task
        )
      );

      const updatedTask = await updateTask(taskId, updates);

      setTasks((currentTasks) =>
        currentTasks.map((task) => (task.id === taskId ? updatedTask : task))
      );
    } catch (error) {
      fetchTasks();
    }
  };

  const removeTaskFromState = async (taskId: number) => {
    try {
      setTasks((currentTasks) =>
        currentTasks.filter((task) => task.id !== taskId)
      );

      await deleteTask(taskId);
    } catch (error) {
      fetchTasks();
    }
  };

  useEffect(() => {
    if (initialTasks.length === 0) {
      fetchTasks();
    }
  }, [initialTasks.length]);

  return {
    tasks,
    loading,
    updateTaskInState,
    removeTaskFromState,
  };
};
