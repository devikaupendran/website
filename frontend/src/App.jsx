import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Spinner from './Components/Spinner/Spinner';
import ContactUs from './Pages/ContactUs';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loader = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        };
        loader();
    }, []);

    return (
        <div>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contactus' element={<ContactUs />} />
                        </Routes>
                    </>
                )}
        </div>
    );
};

export default App;
