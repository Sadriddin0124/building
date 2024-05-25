import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Company from '../../components/Company/Company';
import Dream from '../../components/Dream/Dream';
import Projects from '../../components/Projects/Projects';
import News from '../../components/News/News';
import Ideas from '../../components/Ideas/Ideas';
import LearnMore from '../../components/LearnMore/LearnMore';
import Communication from '../../components/Communication/Communication';
import Footer from '../../components/Footer/Footer';

const Main = () => {    
  return (
    <div className='w-[100%] min-h-[100vh] overflow-hidden'>
        <Navbar/>
        <Header/>
        <Services/>
        <Company/>
        <Dream/>
        <Projects/>
        <div id='news'>
        <News/>
        </div>
        <Ideas/>
        <LearnMore/>
        <Communication/>
        <Footer/>
    </div>
  )
}

export default Main
