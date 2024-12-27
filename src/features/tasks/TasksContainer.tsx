"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TaskList from "@/components/TaskList";
import TaskCounter from "@/components/TaskCounter";
import Header from "@/components/Header";
import EmptyState from "@/components/EmptyState";
import { useTasks } from "@/hooks/useTasks";
import LoadingState from "@/components/LoadingState";
import { Task } from "@/types/task";

interface TasksContainerProps {
  initialTasks: Task[];
}

export default function TasksContainer({ initialTasks }: TasksContainerProps) {
  const router = useRouter();
  const { tasks, loading, updateTaskInState, removeTaskFromState } =
    useTasks(initialTasks);

  if (loading) return <LoadingState />;

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Header onCreateClick={() => router.push("/create")} />
      <main className="max-w-[736px] mx-auto px-4 py-16">
        <TaskCounter total={tasks.length} completed={completedTasks} />
        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <TaskList
            tasks={tasks}
            onUpdate={updateTaskInState}
            onDelete={removeTaskFromState}
          />
        )}
      </main>
    </div>
  );
}
