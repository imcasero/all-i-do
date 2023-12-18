export interface TaskData {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface TaskProps {
  task: TaskData;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}
