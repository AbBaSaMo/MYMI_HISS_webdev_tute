import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ChakraProvider, Spacer, VStack} from '@chakra-ui/react';
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Suites from "./pages/Suites";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HeaderAnnouncement from "./components/HeaderAnnouncement";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <VStack>
                    <HeaderAnnouncement/>
                    <Header/>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<AboutUs/>}/>
                            <Route path='/suites' element={<Suites/>}/>
                            <Route path='/faq' element={<FAQ/>}/>
                            <Route path='/contact-us' element={<ContactUs/>}/>
                            <Route path='/*' element={<NotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                    <Spacer/>
                    <Footer/>
                </VStack>
            </ChakraProvider>
        </div>
    );
}

export default App;
