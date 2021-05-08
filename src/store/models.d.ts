export interface Profile {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio?: string;
  image?: string;
}

export interface UserSubmit {
  email: string,
  password: string
}

export interface newUser {
  username: string
  email: string
  password: string
}

export interface UserForUpdate {
  username?: string
  email?: string
  bio?: string
  password?: string
  image?: string
}

export interface newUserResponse {
  user: newUser
}

export interface UserResponse {
  user: User
}

export interface ProfileResponse {
  profile: Profile;
}

export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface Article {
  slug?: string;
  title: string;
  description: string;
  body: string;
  tagList?: string[] | null;
  createdAt?: string;
  updatedAt?: string;
  favorited?: boolean;
  favoritesCount?: number;
  author?: Author;
}

export interface ArticleResponse {
  articles?: (Article)[] | null;
  articlesCount: number;
}
