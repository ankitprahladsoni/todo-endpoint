export type TODO = {
  id: string;
  description: string;
  isComplete: boolean;
  dueDate?: Date;
  isOverdue: boolean;
};

export type TODOResponse = {
  id: string;
  description: string;
  isComplete: boolean;
  dueDate?: string;
};
