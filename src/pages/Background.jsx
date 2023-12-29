import React from 'react'
import Hero from '../components/Hero'
import image1 from '../assets/about-us.jpg'
import image2 from '../assets/about-us2.jpg'
import DonationBanner from '../components/DonationBanner'
import {Link} from 'react-router-dom'

const Background = () => {
  return (
    <>
   <Hero
  title="Who We are"
  description={
    <>
      <p>
        SEDA was initiated early 2019 and legally established as a not-for-profit
        non-governmental and non-political organization with registration number
        63/E.29/1111/VOL.8/ALPAS under the umbrella of Cameroon's Ministry of
        Territorial Administration in 2021.
      </p>
      <p>
        Founded by a team of youths led by the founding president{' '}
        <Link to="https://www.linkedin.com/in/ache-william-275bab205" className="founder">
          Ache William
        </Link>
        , who, in his early years at the university, developed a deep passion for
        addressing the growing challenges of human well-being and related
        settlement, with a particular focus on women and youth in rural
        communities.
      </p>
      {/* Add more paragraphs or HTML tags as needed */}
    </>
  }
  image1={image1}
  image2={image2}
/>


<DonationBanner title1="Please Join Us To Give Our Community A Better Life " title2='Just Like Muhammed Ali said "Service To Others Is The Rent You Pay Here On Earth"' action="Let's Donate"/>
<div className="container mb-3">
   <p className='mt-4'><strong>Our Core Objectives are:</strong></p>
   <ul className="objectives">
    <li>To fight against climate change by ensuring the protection, preservation, rehabilitation, restoration and efficient management of water tables, wetlands, water catchments etc as well as other fresh water sources and habitats for fauna and flora</li>
    <li>To promote sustainable agricultural practices, motivate youths and women in grassroots Communities to be engaged in Agriculture as a way to fight poverty and unemployment, thereby ensuring food security and reducing hunger, malnutrition and promotion of Entrepreneurial and leadership skills for sustainable livelihoods</li>
    <li>To promote empowerment and social outreach programs intended to train or mentor the underprivileged ir order for them to acquire skills in domains such as Agriculture and other social development initiatives that can help improve their social and economic well-being</li>
    <li>To Encourage Rural Communities to preserve and protect their biodiversity and support them in planting of environmentally friendly trees</li>
    <li>To Curb youth unemployment by promoting social entrepreneurship</li>
    <li>To promote the practice of Eco-friendly Agricultural activities, mitigating the effects of land degradation and ensuring healthy dieting habits</li>
    <li>To enhance Sustainable Development by educating the local population on the need to protect the environment and better manage their natural resources so as to prevent the adverse effects of climate change and nature degradation</li>

   </ul>
   </div>
   
   </>
  )
}

export default Background