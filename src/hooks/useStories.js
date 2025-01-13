import { useState } from "react";

const useStories = () => {
    const [stories] = useState([
        {
            img: "./hero/img1.jpg",
            name: "John Anderson",
            text: "Collaborating with Forge was transformative. Their strategic insights and solutions propelled our business to new heights. The outcomes say it all – a true partner in success."
        },
        {
            img: "./hero/img2.jpg",
            name: "Alex Noon",
            text: "Their expertise and innovative campaigns not only increased sales but also fostered brand loyalty."
        },
        {
            img: "./hero/img3.jpg",
            name: "Emma Petterson",
            text: "Forge transformed our property marketing. Their strategies not only attracted potential buyers but also showcased our projects in a way that truly set them apart in the market."
        },
        {
            img: "./hero/img4.jpg",
            name: "David Lite",
            text: "In the competitive financial sector, Forge provided us with a distinct edge. Their digital marketing strategies not only attracted new clients but also positioned us as thought leaders in the industry."
        },
        {
            img: "./hero/img5.jpg",
            name: "Emily Siemens",
            text: "Choosing Forge was the best decision for our marketing needs. Their dynamic strategies and creative approach enhanced our brand visibility."
        },
        {
            img: "./hero/img6.jpg",
            name: "Rachel Simpson",
            text: "Forge brought creativity to our event promotions. Their approach and social media campaigns ensured maximum attendance and elevated the overall success of our events."
        },
        {
            img: "./hero/img7.jpg",
            name: "Alex Caron",
            text: "Our fitness studio witnessed a surge in membership thanks to Forge. Their creative fitness campaigns and digital presence strategies were key contributors to our success."
        },
        {
            img: "./hero/img8.jpg",
            name: "Sophie Kyle",
            text: "Forge’s creative campaigns enhanced our brand image, making us a go-to destination for style."
        },
        {
            img: "./hero/img9.jpg",
            name: "Michael Lesly",
            text: "Impressed by Forge's commitment to excellence. Their solutions were tailored to our unique needs, optimizing our processes and contributing significantly to our bottom line."
        },
        {
            img: "./hero/img10.jpg",
            name: "Chris Howard",
            text: "Navigating the tech industry requires marketing. Forge understood our needs perfectly, delivering campaigns that generated buzz and increased user engagement."
        },
        {
            img: "./hero/img11.jpg",
            name: "Nick Robinson",
            text: "Forge brought a perspective to our restaurant marketing. From social media campaigns to local partnerships, they elevated our brand awareness."
        },
        {
            img: "./hero/img12.jpg",
            name: "Tom Green",
            text: "Forge’s targeted B2B campaigns and thought leadership content significantly contributed to our market positioning."
        }
    ]);
    
    return stories;
};

export default useStories;