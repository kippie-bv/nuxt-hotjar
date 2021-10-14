# hotjar-nuxt
This package is based on https://github.com/hotjar/hotjar-js

### Installing
npm: `npm install @kippie-bv/nuxt-hotjar`

yarn: `yarn add @kippie-bv/nuxt-hotjar`

### Features
- track changes manually by route change path or Fullpath
- Heatmaps
- Session tracking
- Hotjar available in nuxt context by calling $hotjar.


### options
```js
// nuxt.config.js
export default {
  modules: [
    "@kippie-bv/nuxt-hotjar",
  ],
  
  hotjar: {
    id: "YOUR_HOTJAR_ID",
    version: 6, // default: 6
    trackChangesManually: true, //default: false
    trackFullPath: true //default: false (Only when trackChangesManually is enabled)
  }
}


// Example
this.$hotjar.identify(userId, {
  first_name: firstName,
  color: favoriteColor
});
```


### Debug
The option debug is available to allow session tracking locally. When enabled the module will ignore if you are on dev or prod environment.


```js
// nuxt.config.js
export default {
  modules: [
    "@kippie-bv/nuxt-hotjar",
  ],
  
  hotjar: {
    id: "YOUR_HOTJAR_ID",
    version: 6, // default: 6
    debug: true // default: false
  }
}
```

