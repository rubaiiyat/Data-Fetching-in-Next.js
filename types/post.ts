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
}
