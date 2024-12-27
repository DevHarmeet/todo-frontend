import React from "react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { Task } from "@/types/task";
import { deleteTask, updateTask } from "@/utils/api";
import { UI_COLORS } from "@/constants/colors";
import { TaskCardProps } from "@/types/props";

export default function TaskCard({ task, onUpdate, onDelete }: TaskCardProps) {
  const router = useRouter();

  const handleCompletionChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.stopPropagation();
    const newStatus = !task.completed;

    onUpdate(task.id, { completed: newStatus });

    try {
      await updateTask(task.id, { completed: newStatus });
    } catch (error) {
      console.error("Failed to update completion status:", error);
      onUpdate(task.id, { completed: !newStatus });
    }
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this task?")) return;

    onDelete(task.id);

    try {
      await deleteTask(task.id);
    } catch (error) {
      console.error("Failed to delete task:", error);
      window.dispatchEvent(new Event("refresh-tasks"));
    }
  };

  return (
    <div className="group flex items-center gap-3 p-4 bg-[#262626] border border-[#333333] rounded-lg hover:border-[#808080] transition-colors">
      <label
        className="relative flex items-center cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCompletionChange}
          className="sr-only peer"
          aria-label={`Mark task "${task.title}" as ${
            task.completed ? "incomplete" : "complete"
          }`}
        />
        <div className="w-[18px] h-[18px] border-2 rounded-full border-[#4EA8DE] peer-checked:border-[#5E60CE] peer-checked:bg-[#5E60CE] flex items-center justify-center">
          {task.completed && (
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
              <path
                d="M8.43059 0.342123L4.09865 4.67406L1.61618 2.19159L0.780273 3.0275L4.09865 6.34587L9.26649 1.17803L8.43059 0.342123Z"
                fill={UI_COLORS.text.white}
              />
            </svg>
          )}
        </div>
      </label>

      <p
        className={`flex-1 text-sm ${
          task.completed ? "text-[#808080] line-through" : "text-[#F2F2F2]"
        }`}
        onClick={() => router.push(`/edit/${task.id}`)}
        style={{ cursor: "pointer" }}
      >
        {task.title}
      </p>

      <button
        onClick={handleDelete}
        className="text-[#808080] hover:text-[#E25858] transition-colors"
        aria-label={`Delete task "${task.title}"`}
      >
        <FaTrash size={14} />
      </button>
    </div>
  );
}
