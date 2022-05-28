
import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mx-auto container m-4'>
            <h2 className='text-center font-semibold text-3xl'>Muhammad Rabiussany</h2>
            <p className='text-center'>muhammadrabiussany@gmail.com</p>

            <h4 className='text-secondary text-xl my-5'>Educational Background</h4>
            <p>
                BSc (Honors) In Computer Science & Engineering
                Daffodil International University
                Duration: 2018-2021
                CGPA: 3.30
            </p>

            <h4 className='text-secondary text-xl my-5'>
                Skills
            </h4>
            <p>
                <span className='font-semibold'>Frontend</span>: JavaScript (ES6), ReactJS, SPA, ReactRouter, React Hooks, Bootstrap5, Tailwind,
                HTML5, CSS3 <br /><br />
                <span className='font-semibold'>Backend</span>: NodeJS, ExpressJS, MongoDB <br /><br />
                <span className='font-semibold'>Tools</span>: VSCode, Chrome-Dev tool, JWT, GitHub, Netlify, Firebase, Strip, Heroku, Figma, NPM,
                Yarn, React Forms
            </p>

            <h4 className='text-secondary text-xl my-5'>
                Projects
            </h4>
            <p className='mt-5'>
                <b>SPLAB Inventory Management</b> <br />

                <a href="https://splab-87a88.web.app/">Live Site</a><br />
                <a href="https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-MuhammadRabius.git">GitHub-Client</a><br />
                <a href="https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-MuhammadRabius.git">GitHub-Server</a><br />
                ● Users can observe the stock of every product, the last imported product’s list, the last sale <br />
                product’s list, and update the stock amount easily. <br />
                ● Users can easily add new product items in add a product section. <br />
                ● User-wise secure data filtration. A user can see the products he/he has added to the list of
                products. <br />
                ● The website has a secure user authentication system and a secured data protection
                system. <br />
                Technologies: ReactJS, React Hooks, Tailwind, Axios, Firebase, JWT, ReactRouter, React hook
                form, SwiperJS, React Toastify, NodeJS, ExpressJS, MongoDB, etc. <br />
            </p>

            <p className='mt-5'>
                <b>Hakim Tayen Uz-Zaman Service</b> <br />

                <a href="https://hakim-tayen-uz-zaman.firebaseapp.com/">Live Site</a> <br />
                <a href="https://github.com/programming-hero-web-course-4/independent-service-provider-MuhammadRabius.git">GitHub-Client</a> <br />

                ● Users can see the services the service provider provides <br />
                ● Secure Authentication System with email-based login and social login like Google, GitHub <br />
                Technologies: ReactJS, React Hooks, Tailwind, Firebase, ReactRiuter, React Toastify, React
                Spinners, React-Responsive-Carousel. <br />
            </p>
        </div>
    );
};

export default MyPortfolio;