const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const usersAPI = {
  async getUsers(pageSize = 10, currentPage = 1) {
    const response = await fetch(
      `${BASE_URL}/users?count=${pageSize}&page=${currentPage}`,
      {
        credentials: 'include'
      }
    );
    return await response.json();
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

export const authAPI = {
  async getMe() {
    const response = await fetch(`${BASE_URL}/auth/me`, {
      credentials: 'include'
    });
    return response.json();
  }
};

export const profileAPI = {
  async getProfile(id = authAPI.getMe().then((value) => value.data.id)) {
    const response = await fetch(`${BASE_URL}/profile/${id}`);
    return await response.json();
  },

  async getStatus(id = authAPI.getMe().then((value) => value.data.id)) {
    const response = await fetch(`${BASE_URL}/profile/status/${id}`);
    return await response.json();
  },

  async updateStatus(status) {
    const response = await fetch(`${BASE_URL}/profile/status`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'API-KEY': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    });
    return await response.json();
  }
};
