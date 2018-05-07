# cookie-consent-box

[![Latest Version on NPM](https://img.shields.io/npm/v/@adriandmitroca/cookie-consent-box.svg?style=flat-square)](https://npmjs.com/package/cookie-consent-box)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/adriandmitroca/cookie-consent-box/master.svg?style=flat-square)](https://travis-ci.org/adriandmitroca/cookie-consent-box)

This is a simple package that lets you add good-looking cookie box to your website
within few seconds without any setup required. If you would like to see
how it works and looks, make sure to check out the [demo](https://adriandmitroca.github.io/cookie-consent-box).

## Usage

### Common JS

You can install the package via package manager of your choice:

```bash
$ yarn add cookie-consent-box
$ npm install cookie-consent-box
```

Import it as normal ES6 module:

```js
import CookieBox from 'cookie-consent-box';

new CookieBox().init();
```

and include in your SCSS file:

```scss
@import "~cookie-consent-box/dist/cookie-consent-box";
```

### CDN

Or include it via jsDelivr CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cookie-consent-box@1.0.0/dist/cookie-consent-box.min.css"></script>
<script defer src="https://cdn.jsdelivr.net/npm/cookie-consent-box@1.0.0/dist/cookie-consent-box.min.js"></script>
```

## Configuration

You can configure the plugin using `CookieBoxConfig` object declared in your dom. 
Make sure though to declare it before you load js file.

Example:
```scss
<script>CookieBoxConfig = { color: '#ec008c', url: '/privacy-policy' }</script>
```

## Available Options

| Option | Type | Default | Description |
|---|---|---|----|
| color | string | #007bff | Brand color used for button |
| language | string | en | ISO 639 code. Supported languages: `en`, `pl` |
| url  | string | # | Custom URL that points to your Privacy Policy page.

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Credits

- [Adrian Dmitroca](https://github.com/adriandmitroca)
- [All Contributors](../../contributors)

