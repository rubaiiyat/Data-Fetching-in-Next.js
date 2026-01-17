export interface Post {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface BlogDb {
  _id: number;
  title: string;
  author: string;
  body: string;
  blog: string;
}

export type Inputs = {
  title: string;
  author: string;
  blog: string;
};
