'use client'
import BlogList from 'Components/BlogList.jsx';
import Footer from 'Components/Footer.jsx';
import Header from 'Components/Header.jsx';
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
