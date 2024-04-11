/*
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
*/
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

/* 회원 페이지 B */
const Join = loadable(() => import('./member/pages/Join'));
const Login = loadable(() => import('./member/pages/Login'));

/* 회원 페이지 D */


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        
        {/* 회원 페이지 B */}
        <Route path='member/'>
          <Route path='join'element={<Join />} />
          <Route path='login'element={<Login />} />
        </Route>
        {/* 회원 페이지 D */}

        <Route path='*' element={<NotFound />} /> {/* 없는 페이지 */}

      </Route>
    </Routes>
  );

  /* setting branch
  const {t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>사이트 제목 변경 테스트!</title>
      </Helmet>
      <div>{t('아이디')}</div>
      <div>{t('약관에_동의')}</div>
      <div>{t('없는_문구')}</div>
      <button type="button" onClick={() => i18n.changeLanguage('ko')}>
        한국어
        </button>
      <button type="button" onClick={()=> i18n.changeLanguage('en')}>
        Eng
        </button>
    </>
  );
  */
};

export default App;