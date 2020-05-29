# react-native-os-helper

A simple library help you detect which OS Platform you are running and iPhone helper methods

## Installing

```
npm i react-native-os-helper
```

## APIs

### isIOS
This variable help to detech is iOS

Return `true` if you running on iOS device

### isIPhoneX()
This method help to detect if you on iPhone X device

Return `true` if you running on iPhone X, XR, XS device

### isAndroid
This variable help to detect is Android

Return `true` if you running on Android device

Example:
```js
import { isIOS } from 'react-native-os-helper'

// ...

if (isIOS) {
  // do something
} else {
  // do something
}
```
