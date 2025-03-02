const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const API = {
  async getUsers(pageSize = 10, currentPage = 1) {
    const response = await fetch(
      `${BASE_URL}/users?count=${pageSize}&page=${currentPage}`,
      {
        credentials: 'include'
      }
    );
    return await response.json();
  },

  async getProfile(id = this.getMe().then((value) => value.data.id)) {
    const response = await fetch(`${BASE_URL}/profile/${id}`);
    return await response.json();
  },

  async getMe() {
    const response = await fetch(`${BASE_URL}/auth/me`, {
      credentials: 'include'
    });
    return response.json();
  },

  async follow(id) {
    const response = await fetch(`${BASE_URL}/follow/${id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'API-KEY': API_KEY
      }
    });
    return await response.json();
  },

  async unfollow(id) {
    const response = await fetch(`${BASE_URL}/follow/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'API-KEY': API_KEY
      }
    });
    return await response.json();
  }
};

export default API;
