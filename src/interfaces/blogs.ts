export interface BlogData {
  blogBySlug: Blog;
}

export interface Blog {
  _id: string;
  Title: string;
  Date: string;
  urlES?: string;
  urlEN?: string;
}

export interface BlogSumaryResponse {
  blogLatest?: BlogSumary[];
  blogs?: BlogSumary[];
}

export interface BlogSumary {
  _id: string;
  Title: string;
  Date: Date;
  Sumary: string;
  Time: string;
  Slug: string;
}
