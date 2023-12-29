import React from 'react'
import Hero from '../components/Hero'
import image1 from '../assets/about-us.jpg'
import image2 from '../assets/about-us2.jpg'
import DonationBanner from '../components/DonationBanner'

const Background = () => {
  return (
    <>
   <Hero title="Who We are" description="SEDA, initiated in early 2019, obtained legal recognition as a not-for-profit, non-governmental, and non-political organization with registration number 63/E.29/1111/VOL.8/ALPAS in 2021. This establishment occurred under the auspices of Cameroon's Ministry of Territorial Administration. Spearheaded by a team of young leaders led by the visionary founding president, Ache William, SEDA emerged from his early university years where he cultivated a profound commitment to addressing the escalating challenges facing human well-being and settlement, particularly focusing on women and youth in rural communities.

   Since its inception, SEDA has steadfastly directed its efforts towards alleviating illiteracy, poverty, hunger, and the impacts of climate change. Through the strategic empowerment of women and youth in grassroots communities, incorporating transferable life skills, tangible resources, and mentoring/coaching, with a special emphasis on Climate Smart Agriculture, SEDA aims to holistically tackle the interconnected issues plaguing humanity. The organization firmly believes that by addressing these challenges simultaneously, without compromising the resolution of any one issue, sustainable solutions can be achieved." image1={image1} image2={image2}/>

<DonationBanner/>
<div className="container mb-3">
   <p className='mt-4'><strong>Our Core Objectives are:</strong></p>
   <ul className="objectives">
    <li>To empower and engage communities in biodiversity conservation, afforestation and reforestation and degraded land restoration</li>
    <li>We promote innovative strategies for community development and poverty alleviation</li>
    <li>We promote the sustainable management of natural resources</li>
    <li>To advocate for and promote access and right of ownership of land by women, indigenous people and small scale farmers</li>
    <li>To promote quality education to youths and vulnarable persons</li>

   </ul>
   </div>
   
   </>
  )
}

export default Background