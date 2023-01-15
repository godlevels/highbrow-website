import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from './pages/AboutPage';
import AcademicCv from './pages/AcademicCv';
import BusinessPlan from './pages/BusinessPlan';
import BusinessProfile from './pages/BusinessProfile';
import BusinessProposal from './pages/BusinessProposal';
import CoursesPage from './pages/CoursesPage';
import CoverLetter from './pages/CoverLetter';
import FaqsPage from './pages/FaqsPage';
import HomePage from './pages/HomePage';
import ProfessionalCv from './pages/ProfessionalCv';
import ServicesPage from './pages/ServicesPage';
import LinkedIn from './pages/LinkedIn';
import StudyAbroad from './pages/StudyAbroad';
import PhDProposals from './pages/PhDProposals';
import PersonalState from './pages/PersonalState';
import ProofReading from './pages/ProofReading';
import Assignments from './pages/Assignments';
import SQL from './pages/SQL';
import Python from './pages/Python';
import Bi from './pages/Bi';
import Excel from './pages/Excel';
import PaystackForm from './pages/PaystackForm';
import Privacy from './pages/Privacy';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/courses" element={ <CoursesPage /> }/>
          <Route path="/services" element={ <ServicesPage /> }/>
          <Route path="/contact" element={ <FaqsPage /> }/>
          <Route path="/businessplan" element={ <BusinessPlan /> }/>
          <Route path="/businessproposals" element={ <BusinessProposal /> }/>
          <Route path="/businessprofiles" element={ <BusinessProfile /> }/>
          <Route path="/academicCV" element={ <AcademicCv /> }/>
          <Route path="/professionalCV" element={ <ProfessionalCv /> }/>
          <Route path="/coverletter" element={ <CoverLetter /> }/>
          <Route path="/linkedin" element={ <LinkedIn /> }/>
          <Route path="/studyabroad" element={ <StudyAbroad /> }/>
          <Route path="/phdproposals" element={ <PhDProposals /> }/>
          <Route path="/personalstatement" element={ <PersonalState /> }/>
          <Route path="/proofreading&editing" element={ <ProofReading /> }/>
          <Route path="/assignments&projects" element={ <Assignments /> }/>
          <Route path="/placeorder" element={ <PaystackForm /> }/>
          <Route path="/privacy" element={ <Privacy /> }/>
          
          
          
          <Route path="services">
          <Route path="services" element={ <ServicesPage /> }/>
          <Route path="sql" element={ <SQL /> }/>
          <Route path="python" element={ <Python /> }/>
          <Route path="powerbi" element={ <Bi /> }/>
          <Route path="microsoftexcel" element={ <Excel /> }/>
          </Route>
           

          <Route path="courses">
          <Route path="courses" element={ <CoursesPage /> }/>
          <Route path="sql" element={ <SQL /> }/>
          <Route path="python" element={ <Python /> }/>
          <Route path="powerbi" element={ <Bi /> }/>
          <Route path="microsoftexcel" element={ <Excel /> }/>
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
};

export default App;
