const handleHttpStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  }
  throw res;
};

const createErrorHandler = defaultValue => res => {
  console.error('request failed', res);
  return defaultValue;
};

export const register = (data) => {
  return fetch('/register', {
    credentials: 'same-origin',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleHttpStatus).catch(createErrorHandler({}));
}

export const login = (data) => {
  return fetch('/login', {
    credentials: 'same-origin',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleHttpStatus).catch(createErrorHandler({}));
}

export const getFoldersByCourse = (course) => {
  return fetch(`/dirs/${course}`, {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }).then(handleHttpStatus).catch(createErrorHandler([]));
}

export const getPosts = () => {
  return fetch('/posts', {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }).then(handleHttpStatus).catch(createErrorHandler([]));
}

export const getPostById = (postId) => {
  return fetch(`/post/${postId}`, {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }).then(handleHttpStatus).catch(createErrorHandler([]));
}

export const sendReply = (data) => {
  return fetch('/reply', {
    credentials: 'same-origin',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(handleHttpStatus).catch(createErrorHandler({}));
}

export const getReplies = (postId) => {
  return fetch(`/replies/${postId}`, {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }).then(handleHttpStatus).catch(createErrorHandler([]));
}
