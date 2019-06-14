export interface TodoListItem {
  description: string;
  completed: boolean;
}

export interface TodoSummary {
  total: number;
  completed: number;
  incomplete: number;

}
