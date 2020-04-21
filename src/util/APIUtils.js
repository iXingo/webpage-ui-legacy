import {ACCESS_TOKEN, API_BASE_URL, POLL_LIST_SIZE} from '../constants';

const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
  }

  const defaults = {headers: headers};
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
};

export function getAllPolls(page, size) {
  page = page || 0;
  size = size || POLL_LIST_SIZE;

  return request({
    url: API_BASE_URL + "/polls?page=" + page + "&size=" + size,
    method: 'GET'
  });
}

export function createPoll(pollData) {
  return request({
    url: API_BASE_URL + "/polls",
    method: 'POST',
    body: JSON.stringify(pollData)
  });
}

export function castVote(voteData) {
  return request({
    url: API_BASE_URL + "/polls/" + voteData.pollId + "/votes",
    method: 'POST',
    body: JSON.stringify(voteData)
  });
}

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/auth/signin",
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + "/auth/signup",
    method: 'POST',
    body: JSON.stringify(signupRequest)
  });
}

export function checkUsernameAvailability(username) {
  return request({
    url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
    method: 'GET'
  });
}

export function checkEmailAvailability(email) {
  return request({
    url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
    method: 'GET'
  });
}


export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("登录凭证失效或者未设置！");
  }

  return request({
    url: API_BASE_URL + "/user/me",
    method: 'GET'
  });
}

export function userActivate(email, activateCode) {
  return request({
    url: API_BASE_URL + "/user/activate?email=" + email + "&activeCode=" + activateCode,
    method: 'GET'
  });
}

export function getUserProfile(username) {
  return request({
    url: API_BASE_URL + "/user/" + username,
    method: 'GET'
  });
}

export function getUserCreatedPolls(username, page, size) {
  page = page || 0;
  size = size || POLL_LIST_SIZE;

  return request({
    url: API_BASE_URL + "/user/" + username + "/polls?page=" + page + "&size=" + size,
    method: 'GET'
  });
}

export function getUserVotedPolls(username, page, size) {
  page = page || 0;
  size = size || POLL_LIST_SIZE;

  return request({
    url: API_BASE_URL + "/user/" + username + "/votes?page=" + page + "&size=" + size,
    method: 'GET'
  });
}


// Posts Related Data
export function getUserCreatedPosts(username, page, size) {
  page = page || 0;
  size = size || 10;

  return request({
    url: API_BASE_URL + "/user/" + username + "/post?page=" + page + "&size=" + size,
    method: 'GET'
  });
}


export function getAllPosts(page, size) {
  return request({
    url: API_BASE_URL + "/post/all?typeId=1&page=" + page + "&size=" + size,
    method: 'GET'
  });
}


export function getPost(id) {
  return request({
    url: API_BASE_URL + "/post/" + id,
    method: 'GET'
  });
}


// Friend related data
export function getAllFriends() {
  return request({
    url: API_BASE_URL + "/friend/all",
    method: 'GET'
  });
}

export function getFriend(id) {
  return request({
    url: API_BASE_URL + "/friend/" + id,
    method: 'GET'
  });
}


export function getNews(id) {
  return request({
    url: API_BASE_URL + "/post/news/" + id,
    method: 'GET'
  });
}

export function getProject(id) {
  return request({
    url: API_BASE_URL + "/post/project/" + id,
    method: 'GET'
  });
}

export function addComment(CommentRequest) {
  return request({
    url: API_BASE_URL + "/comment/post",
    method: 'POST',
    body: JSON.stringify(CommentRequest)
  });
}