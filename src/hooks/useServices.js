import { useState } from "react";

const useServices = () => {
    const [services] = useState([
        {
            id: 1,
            imgSrc: "./services/s1.webp",
            title: "Strategic Insight Consulting",
            description: "Our seasoned experts analyze market trends, assess competition, and delve into your business dynamics to provide actionable insights.",
        },
        {
            id: 2,
            imgSrc: "./services/s2.webp",
            title: "Dynamic Marketing Solutions",
            description: "We elevate your brand with engaging digital campaigns, tailored content, and innovative strategies to boost engagement and maximize reach.",
        },
        {
            id: 3,
            imgSrc: "./services/s3.webp",
            title: "Agile Technology Integration",
            description: "Stay ahead with cutting-edge tech. From cloud solutions to AI-driven automation, empowering your business in the digital landscape.",
        },
        {
            id: 4,
            imgSrc: "./services/s4.webp",
            title: "Analytics Optimization",
            description: "We delve deep into your data, uncovering valuable insights to refine your strategies, enhance targeting, and maximize ROI.",
        },
        {
            id: 5,
            imgSrc: "./services/s5.webp",
            title: "Creative Content Creation",
            description: "Our team meticulously crafts captivating content that resonates deeply with your audience, driving unparalleled engagement.",
        },
        {
            id: 6,
            imgSrc: "./services/s6.webp",
            title: "Social Media Management",
            description: "We strategize, curate, and engage to grow your following, foster brand loyalty, and drive meaningful interactions with your audience.",
        },
    ]);

    return services;
};

export default useServices;