import React, { useState } from "react";

// CSS
import "../styles/Faq.css";

// Boxicons
import "boxicons";

function Faq() {
  const [visibleAnswers, setVisibleAnswers] = useState([]);

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "How can your strategies be customized for my needs?",
      answer:
        "Our marketing strategies are meticulously tailored to suit the specific needs of your business. Through in-depth consultations and a thorough understanding of your objectives, we craft personalized approaches that align with your goals.",
    },
    {
      question: "How do you guarantee my message resonates on all channels?",
      answer:
        "We take a unified approach to multichannel marketing, ensuring seamless integration across platforms. By maintaining consistency in messaging and brand identity, we create a powerful and harmonized presence that resonates with your audience, regardless of the channel.",
    },
    {
      question: "Can you explain the role of data intelligence in your process?",
      answer:
        "Data is the cornerstone of our decision-making process. We analyze key metrics and trends to inform our strategies, ensuring that every decision is backed by actionable insights. This empowers your business to make informed choices and stay agile in a dynamic market.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply reach out to our team, and we'll guide you through the onboarding process.",
    },
  ];

  return (
    <div className="Block" id="faq">
      <center>
        <p className="heading section">
          Frequently Asked <span>Questions</span>
        </p>
      </center>
      <center>
        <p className="desc block">
          We address common queries, demystify intricacies, and provide insights to guide you through our services.
        </p>
      </center>

      <div className="quests">
        {faqData.map((faq, index) => (
          <div className="quest" key={index}>
            <div onClick={() => toggleAnswerVisibility(index)}>
              <p>{faq.question}</p>
              <i style={{ display: "flex" }}>
                <box-icon name={visibleAnswers.includes(index) ? "x" : "plus"} size="28px"></box-icon>
              </i>
            </div>
            <span style={{ display: visibleAnswers.includes(index) ? "flex" : "none" }}>
              {faq.answer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;