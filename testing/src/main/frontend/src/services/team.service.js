import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';

class TeamService {
  
  
  getTeamMembers() {
    return axios.get(API_URL + 'members');
  }

}

export default new TeamService();
