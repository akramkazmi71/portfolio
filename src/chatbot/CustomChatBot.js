import React from "react";
import { ThemeProvider } from 'styled-components';
import ChatBot from "react-simple-chatbot";


const hideInput = true;
function CustomChatbot(props) {
    const theme = {
        background: '#f5',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#000000',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#000000',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
  const config = {
    width: "350px",
    height: "400px",
    botDelay: "1700",
    userDelay: "100",
    floating: true,
    opened: true,
  };


  const steps = [
    {
      id: "start",
      message:
        "Hi, I am Akram's virtual assistant. What can I do for you today?",
      trigger: "task",
      hideInput: hideInput,
    },
    {
      id: "task",
      options: [
        {
          value: "resume",
          label: "Akram's Resume",
          trigger: "resume",
          hideInput: hideInput,
        },
        {
          value: "contact",
          label: "Contact Akram",
          trigger: "contact",
          hideInput: hideInput,
        },
        {
          value: "about",
          label: "About Akram",
          trigger: "about",
          hideInput: hideInput,
        },
      ],
      hideInput: hideInput,
    },
    {
      id: "more_task",
      message: "Is there any thing else I can help you with?",
      trigger: "yes_no",
      hideInput: hideInput,
    },
    {
      id: "yes_no",
      options: [
        { value: "yes", label: "Yes", trigger: "task", hideInput: hideInput },
        {
          value: "no",
          label: "No",
          trigger: "end-message",
          hideInput: hideInput,
        },
      ],
      hideInput: hideInput,
    },
    {
      id: "resume",
      component: (
        <div>
          Here you go, you can view or download Akram's Resume from the below
          link.
          <a
            href="https://docs.google.com/document/d/1E5rjIU6EZllDs0fsjHNmgbvHUWdfP41fI1pjSwViaGc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br />
            <b>
              <u>Resume</u>
            </b>
          </a>
        </div>
      ),
      asMessage: true,
      trigger: "more_task",
      hideInput: hideInput,
    },
    {
      id: "contact",
      component: (
        <div>
          You can connect with Akram via
          <br />- Phone: +91-9730563447
          <br />- Email:{" "}
          <a href="mailto: akramkazmi71@gmail.com">akramkazmi71@gmail.com</a>
          <br />- LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/akramkazmi71/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akram's LinkedIn Profile
          </a>
        </div>
      ),
      asMessage: true,
      trigger: "more_task",
      hideInput: hideInput,
    },
    {
      id: "about",
      component: (
        <div>
          Md Akram Kazmi
          <br />- He is currently working in{" "}
          <a
            href="https://www.niki.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Niki.ai
          </a>
          <br />- He completed his Bachelor's from Sapthagiri College of
          Engineering
          <br />- Akram with his 2 friends took the initiative to start a
          Technical Club in their college, and they even conducted event during
          that time.
        </div>
      ),
      asMessage: true,
      trigger: "more_task",
      hideInput: hideInput,
    },
    {
      id: "age",
      user: true,
      trigger: "end-message",
      hideInput: hideInput,
      validator: (value) => {
        if (isNaN(value)) {
          return "value must be a number";
        } else if (value < 0) {
          return "value must be positive";
        } else if (value > 120) {
          return `${value}? Come on!`;
        }

        return true;
      },
    },
    {
      id: "end-message",
      message: "Happy to help you! Have a great day.",
      end: true,
      hideInput: hideInput,
    },
  ];

  return <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} />;
        </ThemeProvider>
}

export default CustomChatbot;
