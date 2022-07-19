import { User } from "./user";

export type Post = {
  id?: string;
  description: string;
  url: string;
  postedBy: User;
  votes: [Vote];
};

export type Vote = {
  id?: string;
  user: User;
};
