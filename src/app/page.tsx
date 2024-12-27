import { getTasks } from "@/utils/api";
import TasksContainer from "@/features/tasks/TasksContainer";

export default async function HomePage() {
  const tasks = await getTasks();
  return <TasksContainer initialTasks={tasks} />;
}
