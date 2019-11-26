const createCookie = (name, value, days, domain) => {
  let expires;

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toGMTString()}`;
  } else {
    expires = '';
  }

  document.cookie = `${name}=${value}${expires}; path=/; domain=${domain}`;
};

const readCookie = (name) => {
  const nameQuery = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i += 1) {
    let cookie = cookies[i];

    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }

    if (cookie.indexOf(nameQuery) === 0) {
      return cookie.substring(nameQuery.length, cookie.length);
    }
  }

  return null;
};

export { createCookie, readCookie };
