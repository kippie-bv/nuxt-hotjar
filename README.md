# hotjar-nuxt

### Installing
npm: `npm install @kippie-bv/hotjar-nuxt`
yarn: `yarn add @kippie-bv/hotjar-nuxt`

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
    "@kippie-bv/hotjar-nuxt",
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
