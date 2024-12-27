import { getTasks } from "@/utils/api";
import EditTaskContainer from "@/features/edit/EditTaskContainer";
import { notFound } from "next/navigation";

export default async function EditPage({ params }: { params: { id: string } }) {
  const tasks = await getTasks();
  const task = tasks.find((t) => t.id === parseInt(params.id));

  if (!task) {
    notFound();
  }

  return <EditTaskContainer task={task} />;
}
