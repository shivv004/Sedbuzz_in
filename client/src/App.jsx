import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MostRecent from './components/MostRecent';
import Trending from './components/Trending';
import Technology from './components/Technology';
import Gaming from './components/Gaming';
import Science from './components/Science';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Search from './components/Search';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import CreatePost from './components/CreatePost';
import PageNotFound from './components/PageNotFound';
import { DashboardRoute, LoginRoute, SignupRoute } from './components/PrivateRoute';
import { IsAdminPrivateRoute } from './components/IsAdminPrivateRoute';
import UpdatePost from './components/UpdatePost';
import PostPage from './components/PostPage';
import Disclaimers from './components/Disclaimers';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="*" element={<PageNotFound />}/>
          <Route path="/category/most-recent" element={<MostRecent />} />
          <Route path="/category/trending" element={<Trending />} />
          <Route path="/category/technology" element={<Technology />} />
          <Route path="/category/gaming" element={<Gaming />} />
          <Route path="/category/science" element={<Science />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/search" element={<Search />} />
          <Route element={<LoginRoute/> }>
            <Route path="/login" element={<Signin />} />
          </Route>
          <Route element={<SignupRoute/> }>
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<DashboardRoute/> }>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
          <Route element={<IsAdminPrivateRoute/> }>
            <Route path="/create-post" element={<CreatePost/>} />
            <Route path="/update-post/:postId" element={<UpdatePost/>} />
          </Route>
          <Route path="/post/:postSlug" element={<PostPage />}/>
          <Route path="/disclaimers" element={<Disclaimers />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
          <Route path="/terms-and-conditions" element={<TermsConditions />}/>
        </Route>
      </Routes>
      <Footer/>
      <ScrollToTop />
    </BrowserRouter>
    </>
  )
}
