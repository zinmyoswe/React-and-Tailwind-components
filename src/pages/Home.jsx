import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faSave, 
  faDownload, 
  faPen, 
  faTrash  
} from '@fortawesome/free-solid-svg-icons';
import BlackpinkGrid from '../components/BlackpinkGrid';
import TwoColumnLayout from '../components/TwoColumnLayout';
import ThreeColumnLayout from '../components/ThreeColumnLayout';
import FourColumnProductLayout from '../components/FourColumnProductLayout';
import CardWithPlaceholder from '../components/CardWithPlaceholder';
import FourColumnProductLayoutwithloading from '../components/FourColumnProductLayoutwithloading';
import ThreeColumnLayoutwithloading from '../components/ThreeColumnLayoutwithloading';
import AlertExamples from '../components/AlertExamples';
import GradientBorderAlert from '../components/GradientBorderAlert';
import GradientBorderAlerts2 from '../components/GradientBorderAlerts2';
import Badge from '../components/Badge';
import GradientBadge from '../components/GradientBadge';
import UserTable from '../components/UserTable';
import ImageCarousel from '../components/ImageCarousel';

import CenteredCarousel from '../components/CenteredCarouselWithButton';
import ProductCarousel from '../components/ProductCarousel';





const Home = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-4">
      

<hr />
       <h2 className="3xl font-bold mt-4 mb-4">7. Youtube Video</h2>
        

        <div className="dark:bg-gray-900 min-h-screen text-white">
          
          <BlackpinkGrid />
        </div>

<h2 className="3xl font-bold mt-4 mb-4">8. Two Columns Layout</h2>
        <TwoColumnLayout />

<h2 className="3xl font-bold mt-4 mb-4">9. ThreeColumnLayout Columns Layout</h2>
        <ThreeColumnLayout />

<h2 className="3xl font-bold mt-4 mb-4">10. FourColumnLayout Columns Layout</h2>
         <FourColumnProductLayout />

<h2 className="3xl font-bold mt-4 mb-4">11. CardWithPlaceholder</h2>
         <CardWithPlaceholder />

<h2 className="3xl font-bold mt-4 mb-4">12. FourColumnProductLayoutwithloading</h2>
         <FourColumnProductLayoutwithloading />

<h2 className="3xl font-bold mt-4 mb-4">13. ThreeColumnLayoutwithloading</h2>
      
         <ThreeColumnLayoutwithloading />


<h2 className="3xl font-bold mt-4 mb-4">14. AlertExamples</h2>
         <AlertExamples />

         <h2 className="3xl font-bold mt-4 mb-4">15. GradientBorderAlert</h2>
         <GradientBorderAlert />

         <h2 className="3xl font-bold mt-4 mb-4">16. GradientBorderAlert2</h2>
         <GradientBorderAlerts2 />
        

        <h2 className="3xl font-bold mt-4 mb-4">17. Badge</h2>
        <div className="space-x-2 p-4">
      <Badge label="Primary" variant="primary" />
      <Badge label="Secondary" variant="secondary" />
      <Badge label="Success" variant="success" />
      <Badge label="Danger" variant="danger" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Info" variant="info" />
      <Badge label="Light" variant="light" />
      <Badge label="Dark" variant="dark" />
        </div>



    <h2 className="3xl font-bold mt-4 mb-4">18. GradientBadge</h2>
         <div className="flex flex-wrap gap-3 p-6">
      <GradientBadge label="Primary" from="from-blue-500" to="to-indigo-600" />
      <GradientBadge label="Success" from="from-green-400" to="to-emerald-600" />
      <GradientBadge label="Warning" from="from-yellow-400" to="to-orange-500" />
      <GradientBadge label="Danger" from="from-red-500" to="to-pink-600" />
      <GradientBadge label="Info" from="from-cyan-400" to="to-blue-500" />
      <GradientBadge label="Dark" from="from-gray-700" to="to-gray-900" />
    </div>


    <h2 className="3xl font-bold mt-4 mb-4">19. UserTable</h2>
    <UserTable />

    <h2 className="3xl font-bold mt-4 mb-4">20. ImageCarousel</h2>

      <ImageCarousel />

    <h2 className="3xl font-bold mt-4 mb-4">21. CenteredCarouselWithButton</h2>

      <CenteredCarousel />


      <ProductCarousel />




          
      
        
    </div>
  )
}

export default Home