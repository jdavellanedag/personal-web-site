export interface BlogData {
  blogs: Blog[];
}

export interface Blog {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
}
