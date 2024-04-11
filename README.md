#설정

## .prettierrc 설정

```json (주석 기호)

{
    "singleQuote": true,
    "semi": true,
    "useTabs": false,
    "tabWidth": 2,
    "trailingComma": "all"
}

```

## 의존성 : 필요 라이브러리
    - react-router-dom : 라우터
    - sass, styled-components, classnames : 스타일링 목적
    - immer : 불변성 관리 (기존값만 변경해도 새로운 객체 생성)
    - react-icons : 리액트에서 제공하는 아이콘 라이브러리
    - @loadable/component : 지연로딩
    - react-helmet-async : head 태그 내의 특정태그의 내용을 변경 시에 설정

- 의존성 라이브러리 설치 구문 
```
yarn add rect-router-dom sass styled-components classnames immer react-icons @loadable/component
yarn add react-helmet-async
```

## react-helmet-async 설정
    -src/index.js

``` jsx
    
import { HelmetProvider } from 'react-helmet-async';

root.render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>
);

```

## 메세지, 다국어 처리

- 의존성 
    - i18next, react-i18next
    설치 구문

    ```
    yarn add i18next react-i18next
    ```

- 언어파일 생성
    - src/langs/ko, src/langs/en 폴더 생성
    - 각 폴더별로 공통 문구 - common.js, 검증 문구 - validations.js, 에러 문구 - errors.js
    - 언어파일 통합: ex) src/lnags/ko/index.js

 ``` js
    import commons from "./commons";
import validations from "./validations";
import errors from "./errors";

const ko = {  ...commons, ...validations, ...errors

} ;

export default ko;
```

- 설정 파일 구성 : src/i18n.js

```js
import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';
import ko from './langs/ko';
import en from './langs/en';

const resources = {
    en: {
        translation: en,
    },
    ko: {
        translation: ko,
    },
};

i18n.use(initReactI18next).init({
    resources, // == resources: resources
    lng: 'ko',
});
```

- 설정 반영 : src/index.js

```js
...

import './i18m'

...
```

- 적용하기: useTranslation 훅 이용 / react-i18next
    - t : 메세지 조회 함수
    - i18n : 편의 기능 객체, changeLanguage(..) : 언어 변경 기능

# 레이아웃 구성

# 라우팅 구성
    -src/layouts/MainLayout.js
## 회원
- /member/join : 회원가입
- /member/login : 로그인

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
