"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import Header from "@/components/Header";
import { updateTask } from "@/utils/api";
import { Task, UpdateTaskDto } from "@/types/task";

interface EditTaskContainerProps {
  task: Task;
}

export default function EditTaskContainer({ task }: EditTaskContainerProps) {
  const router = useRouter();

  const handleSubmit = async (data: UpdateTaskDto) => {
    try {
      await updateTask(task.id, data);
      router.push("/");
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Header />
      <main className="max-w-[736px] mx-auto px-4 py-16">
        <TaskForm
          buttonLabel="Save Changes"
          onSubmit={handleSubmit}
          onCancel={() => router.push("/")}
          initialData={task}
        />
      </main>
    </div>
  );
}
