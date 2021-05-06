import axios from 'axios';
import {
  UserSubmit,
  User,
  UserResponse,
  newUser,
  newUserResponse,
  ArticleResponse,
  ProfileResponse,
  Profile,
  UserForUpdate,
} from '@/store/models.d';

export const conduitApi = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
});

// export default {
//   loginUser(user: UserSubmit) {
//     const instCred = axios.create({
//       baseURL: CURRENT_SERVER,
//     });
//     return instCred.post('users/login', user);
//   },
// };

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.commit.Authorization = `Token ${jwt}`;
}

export function clearJWT() {
  delete conduitApi.defaults.headers.commit.Authorization;
}

export async function loginUser(user: UserSubmit): Promise<User|undefined> {
  const response = await conduitApi.post('/users/login', {
    user,
  });
  return (response.data as UserResponse).user;
}

export async function fetchProfile(userName: string) : Promise<Profile|undefined> {
  const response = await conduitApi.get(`/profiles/${userName}`);
  return (response.data as ProfileResponse).profile;
}

// testwertey@gmail.com

export async function registerUser(user: newUser): Promise<newUser|undefined> {
  const response = await conduitApi.post('/users/', {
    user,
  });
  return (response.data as newUserResponse).user;
}

export async function getFeed() {
  const response = await conduitApi.get('/articles');
  return response.data as ArticleResponse;
}

export async function updateUser(user: UserForUpdate) {
  const response = await conduitApi.put('/user', user);
  return response.data as User;
}
