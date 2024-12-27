"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import Header from "@/components/Header";
import { createTask } from "@/utils/api";
import { CreateTaskDto } from "@/types/task";

export default function CreateTaskContainer() {
  const router = useRouter();

  const handleSubmit = async (data: CreateTaskDto) => {
    try {
      await createTask(data);
      router.push("/");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Header />
      <main className="max-w-[736px] mx-auto px-4 py-16">
        <TaskForm
          buttonLabel="Create Task"
          onSubmit={handleSubmit}
          onCancel={() => router.push("/")}
        />
      </main>
    </div>
  );
}
