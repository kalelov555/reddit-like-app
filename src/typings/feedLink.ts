import { User } from "./user";

export type FeedLink = {
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
