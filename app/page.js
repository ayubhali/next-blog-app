'use client'
import BlogList from './components/BlogList.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark"/>
      <Header/>
      <BlogList/>
      <Footer/>
    </>
  )
}
