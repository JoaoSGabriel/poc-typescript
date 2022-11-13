export type task = {
  id?: number;
  description?: string;
  responsible?: number;
  completed?: boolean;
  taskToDo?: number;
};

export type allTasks = {
  name: string;
  description: string;
  completed: boolean;
};

export type myTasks = {
  name: string;
  taskToDo: number;
};
