export interface BlogData {
  blogById: Blog;
}

export interface Blog {
  _id: string;
  Title: string;
  Date: string;
  urlES?: string;
  urlEN?: string;
}

export interface BlogSumaryData {
  blogLatest: BlogSumary[];
}
export interface BlogSumary {
  _id: string;
  Title: string;
  Date: Date;
  Sumary: string;
  Time: string;
}
