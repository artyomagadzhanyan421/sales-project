import { useState } from "react";

export const useCaseStudies = () => {
    const [caseStudies] = useState([
        {
            id: 1,
            imgSrc: "./case/c1.jpg",
            category: "Content Marketing",
            year: 2024,
            title: "TechLift Strategy",
            description: "How TechLift Strategy soared to success with our digital marketing expertise, achieving remarkable growth and impact in record time.",
        },
        {
            id: 2,
            imgSrc: "./case/c2.jpg",
            category: "Email Marketing",
            year: 2024,
            title: "InnovateNow Media",
            description: "How InnovateNow Media revolutionized its digital presence with our strategic solutions, achieving growth and impact in their industry.",
        },
        {
            id: 3,
            imgSrc: "./case/c3.jpg",
            category: "SEO",
            year: 2023,
            title: "GlobalTech Innovations",
            description: "How GlobalTech Innovations, a leading technology firm, sought to enhance its online presence and attract more qualified leads.",
        },
        {
            id: 4,
            imgSrc: "./case/c4.jpg",
            category: "Content Marketing",
            year: 2023,
            title: "Wellness Now",
            description: "How Wellness Now, a wellness coaching company dedicated to empowering individuals, sought to expand its reach and foster connections.",
        },
        {
            id: 5,
            imgSrc: "./case/c5.jpg",
            category: "Social Media Ads",
            year: 2023,
            title: "Fashion Forward",
            description: "How Fashion Forward Boutique, a local fashion retailer, aimed to boost online sales and improve brand visibility.",
        },
        {
            id: 6,
            imgSrc: "./case/c6.jpg",
            category: "Conversion Optimization",
            year: 2022,
            title: "Travel Bliss Adventures",
            description: "How Travel Bliss Adventures, a travel agency specializing in adventure tours, wanted to attract more travelers and increase bookings for their tours.",
        },
    ]);
    
    return caseStudies;
};