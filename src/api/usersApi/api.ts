import axios from 'axios';
import { UserSubmit } from '@/store/module';
import { CURRENT_SERVER } from '@/api/domain';

export default {
  loginUser(user: UserSubmit) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.post('users/login', user);
  },
};
