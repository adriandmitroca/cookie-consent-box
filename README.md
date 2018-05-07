# cookie-box

[![Latest Version on NPM](https://img.shields.io/npm/v/cookie-box.svg?style=flat-square)](https://npmjs.com/package/cookie-box)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/adriandmitroca/cookie-box/master.svg?style=flat-square)](https://travis-ci.org/adriandmitroca/cookie-box)

This is a simple package that lets you add good-looking cookie box to your website
within few seconds without any setup required. If you would like to see
how it works and looks, make sure to check out the [demo](https://adriandmitroca.github.io/cookie-box).

## Usage

### Common JS

You can install the package via yarn:

```bash
$ yarn add adriandmitroca/cookie-box
```

Import it as normal ES6 module:

```js
import CookieBox from 'cookie-box';

new CookieBox().init();
```

and include in your SCSS file:

```scss
@import "~cookie-box/dist/cookie-box";
```

### CDN

Or include it via jsDelivr CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/adriandmitroca/cookie-box/dist/cookie-box.min.css"></script>
<script defer src="https://cdn.jsdelivr.net/gh/adriandmitroca/cookie-box/dist/cookie-box.min.js"></script>
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

