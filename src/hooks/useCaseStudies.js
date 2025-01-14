import { useState } from "react";

export const useCaseStudies = () => {
    const [caseStudies] = useState([
        {
            id: 1,
            imgSrc: "/case/c1.jpg",
            category: "Content Marketing",
            year: 2024,
            title: "TechLift Strategy",
            description: "How TechLift Strategy soared to success with our digital marketing expertise, achieving remarkable growth and impact in record time.",
            overview: "TechLift Strategy is a dynamic technology consulting firm specializing in providing innovative solutions to businesses across various industries. With a focus on enhancing efficiency and driving growth, TechLift Strategy serves as a trusted partner for companies seeking to navigate the rapidly evolving digital landscape.",
            challenge: "Before partnering with our agency, TechLift Strategy faced the challenge of limited online visibility and struggled to effectively reach their target audience. Despite offering cutting-edge solutions, they were unable to showcase their expertise and differentiate themselves in a crowded market.",
            strategy: "To address TechLift Strategy's challenges, we developed a comprehensive digital marketing strategy tailored to their unique needs. Our approach included content marketing. This strategy aimed to drive engagement, and nurture leads.",
            results: "The implementation of our digital marketing strategies yielded impressive results for TechLift Strategy. Organic traffic to the website increased by 75% within the first six months of the campaign, lead generation and conversion rates improved by 50%, social media engagement doubled, and brand mentions soared across digital channels. This enhanced online presence and strategic marketing efforts led to a notable uptick in sales inquiries and business opportunities, resulting in a substantial increase in revenue."
        },
        {
            id: 2,
            imgSrc: "/case/c2.jpg",
            category: "Email Marketing",
            year: 2024,
            title: "InnovateNow Media",
            description: "How InnovateNow Media revolutionized its digital presence with our strategic solutions, achieving growth and impact in their industry.",
            overview: "InnovateNow Media is a dynamic media agency specializing in digital content creation and marketing solutions. With a mission to innovate and inspire, InnovateNow Media sought to elevate its brand presence and expand its client base through strategic digital marketing initiatives.",
            challenge: "Before partnering with our agency, InnovateNow Media faced the challenge of standing out in a competitive industry and attracting new clients. Despite its creative talents and expertise, the company struggled to effectively communicate its unique value proposition and reach its target audience.",
            strategy: "To address InnovateNow Media's challenges, we developed a comprehensive digital marketing strategy aimed at increasing brand awareness and driving client acquisition. Our strategy included website optimization, content marketing, social media management, and targeted email campaigns.",
            results: "The implementation of our digital marketing strategies led to significant improvements for InnovateNow Media. Website traffic increased by 60% within the first month of the campaign, and lead generation saw a notable uptick, with a 50% increase in client inquiries and consultations. Additionally, the company's social media presence grew substantially, with engagement rates doubling and follower count increasing by 70%. These results helped InnovateNow Media establish itself as a leader in the media industry and attract high-profile clients."
        },
        {
            id: 3,
            imgSrc: "/case/c3.jpg",
            category: "SEO",
            year: 2023,
            title: "GlobalTech Innovations",
            description: "How GlobalTech Innovations, a leading technology firm, sought to enhance its online presence and attract more qualified leads.",
            overview: "GlobalTech Innovations is a leading technology firm specializing in providing innovative solutions to businesses across various industries. With a focus on enhancing efficiency and driving growth, GlobalTech Innovations sought to elevate its online presence and attract more qualified leads.",
            challenge: "Before partnering with our agency, GlobalTech Innovations faced the challenge of limited online visibility and struggled to effectively reach its target audience. Despite offering cutting-edge solutions, the company was unable to showcase its expertise and differentiate itself in a crowded market.",
            strategy: "To address GlobalTech Innovations' challenges, we developed a comprehensive digital marketing strategy tailored to its unique needs. Our approach included search engine optimization (SEO), content marketing, social media advertising, and targeted email campaigns.",
            results: "The implementation of our digital marketing strategies yielded impressive results for GlobalTech Innovations. Organic traffic to the company's website increased by 75% within the first six months of the campaign, and lead generation and conversion rates improved by 50%. Additionally, the company's brand visibility significantly improved, with social media engagement doubling and brand mentions soaring across digital channels. These enhancements led to a notable uptick in sales inquiries and business opportunities, resulting in a substantial increase in revenue for GlobalTech Innovations."
        },
        {
            id: 4,
            imgSrc: "/case/c4.jpg",
            category: "Content Marketing",
            year: 2023,
            title: "Wellness Now",
            description: "How Wellness Now, a wellness coaching company dedicated to empowering individuals, sought to expand its reach and foster connections.",
            overview: "Wellness Now is a wellness coaching company dedicated to helping individuals achieve holistic health and well-being. With a mission to empower clients to live healthier and happier lives, Wellness Now sought to expand its reach and engage with a wider audience through digital marketing.",
            challenge: "Despite its expertise in wellness coaching, Wellness Now faced challenges in reaching a broader audience and attracting new clients. The company struggled to effectively communicate its services and value proposition to potential clients, limiting its growth potential.",
            strategy: "To address Wellness Now's challenges, we developed a comprehensive digital marketing strategy focused on increasing brand awareness and attracting new clients. Our strategy included content marketing, social media management, email campaigns, and search engine optimization (SEO) techniques.",
            results: "The implementation of our digital marketing strategies led to significant improvements for Wellness Now. Website traffic increased by 50% within the first month of the campaign, and lead generation saw a notable uptick, with a 40% increase in inquiries and consultations. Additionally, the company's social media presence grew substantially, with engagement rates doubling and follower count increasing by 60%. These results helped Wellness Now establish itself as a trusted authority in the wellness industry and attract a larger client base."
        },
        {
            id: 5,
            imgSrc: "/case/c5.jpg",
            category: "Social Media Ads",
            year: 2023,
            title: "Fashion Forward",
            description: "How Fashion Forward Boutique, a local fashion retailer, aimed to boost online sales and improve brand visibility.",
            overview: "Fashion Forward is a local fashion retailer known for its trendy and stylish clothing collections. With a strong presence in the local market, Fashion Forward aimed to expand its reach and increase online sales through effective digital marketing strategies.",
            challenge: "Despite its popularity among local customers, Fashion Forward faced challenges in translating its offline success into online sales. The brand struggled to attract new customers and compete effectively with larger online retailers.",
            strategy: "To address Fashion Forward's challenges, we developed a comprehensive digital marketing strategy aimed at increasing brand visibility and driving online sales. Our strategy included website optimization, targeted social media advertising, influencer partnerships, and email marketing campaigns.",
            results: "The implementation of our digital marketing strategies resulted in significant improvements for Fashion Forward. Website traffic increased by 60% within the first month of the campaign, and online sales saw a dramatic uptick, with revenue doubling within three months. Additionally, the brand's social media presence grew substantially, with engagement rates tripling and follower count increasing by 50%. These results helped Fashion Forward establish a stronger online presence and position itself as a competitive player in the digital fashion market."
        },
        {
            id: 6,
            imgSrc: "/case/c6.jpg",
            category: "Conversion Optimization",
            year: 2022,
            title: "Travel Bliss Adventures",
            description: "How Travel Bliss Adventures, a travel agency specializing in adventure tours, wanted to attract more travelers and increase bookings for their tours.",
            overview: "Travel Bliss Adventures is a leading travel agency specializing in adventurous and immersive travel experiences. With a focus on providing unique and unforgettable journeys to travelers, they sought to enhance their online presence and attract more customers to their tours and packages.",
            challenge: "Before partnering with our agency, Travel Bliss Adventures faced the challenge of limited online visibility and struggled to effectively reach their target audience. Despite offering exciting travel opportunities, they were unable to showcase their offerings to potential customers effectively.",
            strategy: "To address Travel Bliss Adventures' challenges, we developed a comprehensive digital marketing strategy tailored to their unique needs. Our approach included website redesign, content creation, social media marketing, and email marketing campaigns.",
            results: "The implementation of our digital marketing strategies yielded impressive results for Travel Bliss Adventures. Organic traffic to their website increased by 80% within the first three months of the campaign, and they experienced a 50% increase in leads and bookings. Additionally, their brand visibility significantly improved, with social media engagement doubling and brand mentions soaring across digital channels. These enhancements led to a notable uptick in tour bookings and revenue for Travel Bliss Adventures."
        },
    ]);
    
    return caseStudies;
};