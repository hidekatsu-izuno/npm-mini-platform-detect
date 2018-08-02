# npm-mini-platform-detect

This library detects the current platform (browser, engine, os).

## Install

```bash
$ npm install --save mini-platform-detect
```

## Usage

You can access by javascript or css class.

### By javascript

```javascript
import platform from 'mini-platform-detect';

// browser
console.log(platform.msie); // => true/false
console.log(platform.edge); // => true/false
console.log(platform.opera); // => true/false
console.log(platform.firefox); // => true/false
console.log(platform.chrome); // => true/false
console.log(platform.safari); // => true/false

// engine
console.log(platform.webkit); // => true/false (the webkit returns true on the blink for compatibility)
console.log(platform.blink); // => true/false

// os
console.log(platform.windows); // => true/false
console.log(platform.macos); // => true/false
console.log(platform.ios); // => true/false
console.log(platform.android); // => true/false

// env
console.log(platform.tablet); // => true/false
console.log(platform.mobile); // => true/false
```

### By css class

```css
.msie div {
    /* some styles */
}
```

## License

[MIT License](LICENSE)
