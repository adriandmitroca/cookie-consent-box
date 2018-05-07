/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import languages from './languages';
import { createCookie, readCookie } from './cookies';

let COOKIE_BOX_INITIALIZED = false;

export default class CookieBox {
  constructor(params) {
    COOKIE_BOX_INITIALIZED = true;
    const userSettings = window.CookieBoxConfig || params || {};

    this.box = document.createElement('div');
    this.box.className = 'cookie-box';
    this.settings = {
      brandColor: userSettings.brandColor || '#007bff',
      textColor: userSettings.textColor || '#000',
      language: userSettings.language || 'en',
      url: userSettings.url || '#',
      cookieKey: 'cookie-box',
    };
    this.dictionary = languages[this.settings.language];
  }

  init() {
    if (!this.dictionary) {
      console.error(`${this.settings.language} language is not supported`);

      return;
    }

    if (readCookie(this.settings.cookieKey)) {
      return;
    }

    this.show();

    document.querySelector('.cookie-box__button.accept').addEventListener('click', () => this.hide());
  }

  render() {
    const { settings } = this;

    return `
      <div>
        <p class="cookie-box__title">${languages[settings.language].title}</p>
        <div class="cookie-box__content">${languages[settings.language].content}</div>
        <div class="cookie-box__buttons">
          <button class="cookie-box__button accept" style="background-color: ${settings.brandColor}; color: ${settings.textColor}">${languages[settings.language].accept}</button>
          <a href="${settings.url}" class="cookie-box__button link" target="_blank">${languages[settings.language].learnMore}</a>
        </div>
      </div>
    `;
  }

  show() {
    this.box.innerHTML = this.render();
    document.body.appendChild(this.box);
  }

  hide() {
    this.box.classList.add('hidden');
    createCookie(this.settings.cookieKey, true, 365);
  }
}

if (typeof window !== 'undefined') {
  const initBox = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(initBox);
      if (!COOKIE_BOX_INITIALIZED) {
        new CookieBox().init();
      }
    }
  }, 50);
}
