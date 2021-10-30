<img alt="React Use State with Callback" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-use-state-with-callback)

[![React Use State with Callback](https://img.shields.io/badge/-Make%20the%20useState%20hook%20with%20a%20callback%20for%20React%20and%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-use-state-with-callback)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-use-state-with-callback.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-use-state-with-callback)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-use-state-with-callback.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-use-state-with-callback)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

# Installation

Add the dependency:

```bash
npm i @freakycoder/react-use-state-with-callback
```

## Peer Dependencies

**Zero Dependency**

# Usage

## Import

```ts
import useStateWithCallback from "@freakycoder/react-use-state-with-callback";
```

## Fundamental Usage

```ts
const [isSelected, setIsSelected] = useStateWithCallback<boolean>(false);

// USAGE
setIsSelected(true, (newValue: boolean) => console.log(newValue)); // true
```

## Credits

Big thanks to `MJ Studio` from StackoverFlow. I just converted his awesome wrapper solution to a library.

## [MJ Studio's StackoverFlow Answer](https://stackoverflow.com/a/61725731/2247055)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Use State with Callback is available under the MIT license. See the LICENSE file for more info.
