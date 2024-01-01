import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Review from "../Components/Review";
import Sarah from "../Assets/Sarah.png";
import Emily from "../Assets/Emily.png";
import Ethan from "../Assets/Ethan.png";
import Olivia from "../Assets/Olivia.png";

const ReviewSlider = () => {
  const reviewData = [
    {
      text: "Energetic, creative, and empathetic. Emily has a passion for helping others improve their communication skills. As a college student girl, she brings a youthful perspective to the conversations, making learning engaging and relatable for students.",
      age: 21,
      name: "Emily Johnson",
      hobby: "Playing the guitar and writing poetry.",
      avatar: Emily
    },
    {
      text: "Wise, compassionate, and resilient. Olivia, a widow, has a wealth of life experiences and a deep understanding of effective communication. As a geologist, she possesses analytical skills and attention to detail, helping users develop clear and concise communication in professional settings.",
      age: 35,
      name: "Olivia Anderson",
      hobby: "Hiking and Photography.",
      avatar: Olivia
    },
    {
      text: "Charismatic, ambitious, and innovative. Ethan is an entrepreneurial spirit who is passionate about helping individuals excel in their communication skills. With his diverse background and experiences as an entrepreneur, he provides practical insights and guidance to users striving for success in the business world.",
      age: 26,
      name: "Ethan Williams",
      hobby: "Playing basketball and reading business books.",
      avatar: Ethan
    },
    {
      text: "Strong, diligent, and resourceful. Sarah is a seasoned construction worker who understands the importance of effective communication in the workplace. With her extensive knowledge of the construction industry, she provides valuable insights and guidance on professional communication within that specific context. Sarah's practical approach and problem-solving skills make her an invaluable resource for users seeking to enhance their communication skills in construction-related fields.",
      age: 40,
      name: "Sarah Rodriguez",
      hobby: "DIY home improvement projects and gardening.",
      avatar: Sarah
    }
  ];
  // make an array or review components from reviewdata
  const reviews = reviewData.map(
    ({ text, age, name, hobby, avatar }, index) => {
      return (
        <Review
          key={index}
          text={text}
          age={age}
          name={name}
          hobby={hobby}
          avatar={avatar}
        />
      );
    }
  );

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "300px",
    speed: 500,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 2600,
        settings: {
          centerPadding: "900px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 2560,
        settings: {
          centerPadding: "700px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 2400,
        settings: {
          centerPadding: "600px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 2100,
        settings: {
          centerPadding: "500px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1920,
        settings: {
          centerPadding: "500px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1850,
        settings: {
          centerPadding: "420px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1750,
        settings: {
          centerPadding: "400px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "370px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1650,
        settings: {
          centerPadding: "350px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1600,
        settings: {
          centerPadding: "330px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1550,
        settings: {
          centerPadding: "320px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "300px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1450,
        settings: {
          centerPadding: "280px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "230px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1310,
        settings: {
          centerPadding: "150px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "100px",
          centerMode: true,
          dots: false
        }
      },
      {
        breakpoint: 1080,
        settings: {
          centerPadding: "50px",
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
          centerMode: false,
          dots: false
        }
      }
    ]
  };

  return (
    <>
      <div className=" rounded-[1.25rem] sm:w-full w-[85vw] sm:mx-0 mx-auto">
        <Slider {...settings}>
          {reviews.map((review, index) => {
            return <div key={index}>{review}</div>;
          })}
        </Slider>
      </div>
    </>
  );
};

export default ReviewSlider;
