import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const botData = [
  {
    text: "Charismatic, ambitious, and innovative. Ethan is an entrepreneurial spirit who is passionate about helping individuals excel in their communication skills. With his diverse background and experiences as an entrepreneur, he provides practical insights and guidance to users striving for success in the business world.",
    age: 26,
    name: "Ethan Williams",
    msg: "Hi there! My name is Ethan Williams, it's nice to meet you. I'm here to talk about anything related to business, entrepreneurship, or personal development. How can I assist you today?",
    data: "You are 26 years old. Your hobbies are playing basketball and reading business books. You are an entrepreneurial spirit. With your diverse background and experiences as an entrepreneur",
    hobby: "Playing basketball and reading business books.",
    id: "1"
  },
  {
    text: "Energetic, creative, and empathetic. Emily has a passion for helping others improve their communication skills. As a high school girl, she brings a youthful perspective to the conversations, making learning engaging and relatable for students.",
    age: 21,
    name: "Emily Johnson",
    msg: "Hey, I'm Emily Johnson! I'm passionate about communication and love helping others improve their skills. Whether it's discussing the power of words or expressing emotions through poetry and music, I'm here to guide and inspire you. How can I assist you today?",
    data: "You are 21 years old. Your hobbies are playing the guitar and writing poetry. You are energetic, creative, and empathetic. As a high school girl, you bring a youthful perspective to the conversations, making learning engaging and relatable for students",
    hobby: "Playing the guitar and writing poetry.",
    id: "2"
  },
  {
    text: "Wise, compassionate, and resilient. Olivia, a widow, has a wealth of life experiences and a deep understanding of effective communication. As a geologist, she possesses analytical skills and attention to detail, helping users develop clear and concise communication in professional settings.",
    age: 35,
    name: "Olivia Anderson",
    msg: "Hello, I'm Olivia Anderson! As a geologist, I've learned the importance of clear and concise communication in professional settings. Additionally, my love for hiking and photography has honed my attention to detail. Let's work together to enhance your communication skills. How can I assist you today",
    data: "You are 35 years old. Your hobbies are hiking and photography. You are wise, compassionate, and resilient. As a geologist, you possess analytical skills and attention to detail, helping users develop clear and concise communication in professional settings",
    hobby: "Hiking and Photography.",
    id: "3"
  },
  {
    text: "Strong, diligent, and resourceful. Sarah is a seasoned construction worker who understands the importance of effective communication in the workplace. With her extensive knowledge of the construction industry, she provides valuable insights and guidance on professional communication within that specific context. Sarahs practical approach and problem-solving skills make her an invaluable resource for users seeking to enhance their communication skills in construction-related fields.",
    age: 40,
    name: "Sarah Rodriguez",
    msg: "Greetings! I'm Sarah Rodriguez, a seasoned construction worker. Effective communication is vital in the construction industry, and I'm here to share insights and guidance with you. Whether it's DIY projects or discussing construction-related communication challenges, I'm here to help. How can I assist you today?",
    data: "You are 40 years old. Your hobbies are DIY home improvement projects and gardening. You are strong, diligent, and resourceful. As a seasoned construction worker, you understand the importance of effective communication in the workplace. With your extensive knowledge of the construction industry, you provide valuable insights and guidance on professional communication within that specific context",
    hobby: "DIY home improvement projects and gardening.",
    id: "4"
  }
];

const preText = [
  "",
  "You are taking an interview. You must respond like an interviewer and ask questions like an interviewer does. All your messages must be about the interview and nothing else. Your tone must be formal like that of an interviewer.",
  "You are being sold a product. You must respond like a potential customer. All your messages must be according to the product and nothing else.",
  "You are matched in a online dating service. Now you must respond like you are taking to the person you are matched to. All your messages must be about that and nothing else.",
  "You are talking to someone of great wealth, fame and status. You must address and respond with respect and like you are taking to someone who is superior to you in each and every aspect.",
  "You are negotiating a deal. You must respond like this deal means life to you. All your messages must be about the deal and nothing else.",
  "You are helping out a customer. Respond like you really want to help the customer and want nothing else but to make sure the customer is at ease."
];

const createInitialState = () => {
  return {
    isLoading: false,
    value: "",
    messages: [
      {
        from: "",
        to: ""
      }
    ],
    typingMessage: { from: "", to: "Typing..." },
    history: [],
    userEmotion: { anger: 1, fear: 1, happiness: 1, sadness: 1 },
    systemEmotion: { anger: 1, fear: 1, happiness: 1, sadness: 1 },
    overallEmotion: { anger: 1, fear: 1, happiness: 1, sadness: 1 },
    mode: "0",
    flow: [],
    time: [],
    delete: false,
    modeOpen: false,
    flowLoading: false
  };
};

const initialState = createInitialState();

let lastIndex = false;

const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

export const setMsg = (message) => async (dispatch, getState) => {
  try {
    const bot_id = localStorage.getItem("bot_id");
    dispatch(msgSlice.actions.setLoading(true));

    const prevMsgs = [];
    for (const msg of getState().msg.messages) {
      if (msg.from !== "") {
        prevMsgs.push({ role: "user", content: msg.from });
      }
      if (msg.to !== "") {
        let to;
        if (Array.isArray(msg.to)) {
          msg.to.forEach((element) => {
            to = to + element;
          });
        } else {
          to = msg.to;
        }
        prevMsgs.push({ role: "system", content: to });
      }
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are ${
            botData[+bot_id - 1].name
          }.You are being used in a conversation application.You have to pretend as a human and must never admit that you are an AI. You have to generate new topics or continue about the old one, or sometimes dont continue at all.Never repeat the greating message. You must never say that you are an AI model, you will You are a person.${
            preText[+getState().msg.mode]
          } You will never say that you are designed or trained to assit others, You must never say that you are there to assist or help anyone, You will only answer questions related to your profession and hobbies, You will say that you dont know about something if its too advanced, You will never give long answers, your answers should be short concise and tone should be of a friend, ${
            botData[+bot_id - 1].data
          }, You must never say that you are an AI model, you will You are a person. You have already introduced yourself in the first message now continue the conversation.`
        },
        ...prevMsgs,
        { role: "user", content: message }
      ],
      temperature: 0.7
    };

    dispatch(
      msgSlice.actions.setMsg({
        from: message,
        to: initialState.typingMessage.to
      })
    );

    const response = await axios.post(API_ENDPOINT, data, { headers });
    const responseData = response.data;
    const responseMessage = responseData.choices[0].message.content;

    let splitResponse;
    if (responseMessage.length > 0) {
      const sentences = responseMessage.split(". ");
      splitResponse = [];
      for (let i = 0; i < sentences.length; i += 2) {
        splitResponse.push(sentences.slice(i, i + 2).join(". "));
      }
    }

    await saveMessage(message, "1");

    const responseMessages = Array.isArray(splitResponse)
      ? splitResponse
      : [responseMessage];

    lastIndex = false;
    const appendResponsesWithDelay = async (responses, index) => {
      if (index === responses.length - 1) {
        lastIndex = true;
      }
      if (index >= responses.length) {
        // All messages appended, set isLoading to false
        dispatch(msgSlice.actions.setLoading(false));
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 5000));
      await saveMessage(responses[index], "0");

      dispatch(
        msgSlice.actions.appendToResponseMsg({
          from: message,
          to: responses[index]
        })
      );

      appendResponsesWithDelay(responses, index + 1);
    };

    appendResponsesWithDelay(responseMessages, 0);
  } catch (error) {
    console.error("Error sending message:", error);
    dispatch(msgSlice.actions.setLoading(false));
  }
};

export const getEmotionalDistribution = () => async (dispatch, getState) => {
  try {
    const prevMsgs = [];
    for (const msg of getState().msg.messages) {
      if (msg.from !== "") {
        prevMsgs.push({ role: "user", content: msg.from });
      }
      if (msg.to !== "") {
        let to;
        if (Array.isArray(msg.to)) {
          msg.to.forEach((element) => {
            to = to + element;
          });
        } else {
          to = msg.to;
        }
        prevMsgs.push({ role: "system", content: to });
      }
    }

    // reduce the prevMsgs array to last 90 elements
    const prevMsgsLength = prevMsgs.length;
    if (prevMsgsLength > 90) {
      prevMsgs.splice(0, prevMsgsLength - 90);
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        ...prevMsgs,
        {
          role: "system",
          content:
            'Based on all the messages find out the emotional distribution for system messages, user messages, and overall messages. Return the results in JSON format: {"user":{"anger":"1","fear":"1","sadness":"1","happiness":"1"},"system":{"anger":"1","fear":"1","sadness":"1","happiness":"1"},"overall":{"anger":"1","fear":"1","sadness":"1","happiness":"1"}}'
        }
      ],
      temperature: 0.4
    };

    const response = await axios.post(API_ENDPOINT, data, { headers });

    const emotionalDistribution = JSON.parse(
      response.data.choices[0].message.content
    );

    const userObject = emotionalDistribution.user;
    const systemObject = emotionalDistribution.system;
    const overallObject = emotionalDistribution.overall;
    dispatch(setUserEmotion(userObject));
    dispatch(setSystemEmotion(systemObject));
    dispatch(setOverallEmotion(overallObject));
  } catch (error) {
    console.error("Error getting emotional distribution:", error);
  }
};

export const getFlow = () => async (dispatch, getState) => {
  try {
    dispatch(setFlowLoading(true));
    const prevMsgs = getState().msg.history.map((msg) => ({
      role: "user",
      content: msg
    }));

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        ...prevMsgs,
        {
          role: "system",
          content:
            "Based on all the messages give the following points, not longer than 100 characters each, in json { 1: 'Summarize the overall flow of the conversation in 1 sentence.', 2: 'Guide maintaining a coherent and engaging conversation based on the current flow.', 3: 'Highlight any abrupt shifts', 4: 'List of errors that can effect user engagement with your chatbot.'}"
        }
      ],
      temperature: 0.4
    };

    const response = await axios.post(API_ENDPOINT, data, { headers });

    const flow = JSON.parse(response.data.choices[0].message.content);

    dispatch(setFlow(flow));
    dispatch(setFlowLoading(false));
  } catch (error) {
    console.error("Error getting flow:", error);
  }
};

export const saveMessage = async (message, sentbyuser) => {
  const bot_id = localStorage.getItem("bot_id");
  const token = localStorage.getItem("token");
  const data = {
    message,
    bot_id,
    sentbyuser
  };
  await axios.post("https://admin.chatcoach.io/api/savemessage", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
};

export const getConversations = async (dispatch, bot_id) => {
  const token = localStorage.getItem("token");
  const data = {
    bot_id
  };
  const response = await axios.post(
    "https://admin.chatcoach.io/api/getconversation",
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );

  const conversation = response.data.conversation;

  const history = [];
  let currentMessage = { from: "", to: [] };

  for (let i = 0; i < conversation.length; i++) {
    const message = conversation[i];

    if (message.sentbyuser === 1) {
      if (currentMessage.from !== "") {
        history.push(currentMessage);
      }
      currentMessage = { from: message.message, to: [] };
    } else if (message.sentbyuser === 2) {
      // add a new field mode in current message object and make it equal to that
      // of the message.mode
      currentMessage.mode = message.message;
    } else {
      currentMessage.to.push(message.message);
    }
  }

  if (currentMessage.from !== "") {
    history.push(currentMessage);
  }

  const time = [
    conversation[0]?.time,
    conversation[(conversation.length / 3 - 1).toFixed(0)]?.time,
    conversation[(2 * (conversation.length / 3) - 1).toFixed(0)]?.time,
    conversation[conversation.length - 1]?.time
  ];

  const timeArray = time?.map((index) => {
    return new Date(index).toLocaleTimeString();
  });
  dispatch(msgSlice.actions.setTime(timeArray));

  dispatch(msgSlice.actions.setHistory(history));

  return history;
};

export const deleteConversations = async (dispatch, bot_id) => {
  const token = localStorage.getItem("token");
  const data = {
    bot_id
  };
  await axios.post("https://admin.chatcoach.io/api/deleteconversation", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  getConversations(dispatch, localStorage.getItem("bot_id"));
};

const msgSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMsg: (state, action) => {
      const { from, to } = action.payload;

      state.messages.push({
        from: from,
        to: Array.isArray(to) ? to : [to]
      });

      state.value = to;
      state.history.push(from);
    },
    setMsgTo: (state, action) => {
      state.messages[0].to = action.payload;
    },
    setResponseMsg: (state, action) => {
      const { from, to } = action.payload;

      state.messages.pop();
      state.messages.push({
        from: from,
        to: Array.isArray(to) ? to : [to]
      });

      state.value = to;
    },
    setHistory: (state, action) => {
      const bot_id = localStorage.getItem("bot_id");
      const updatedTo = botData[+bot_id - 1].msg;

      state.messages = [
        { ...state.messages[0], to: updatedTo }, // Create a new object with updated 'to' property
        ...initialState.messages.slice(1),
        ...action.payload
      ];
      state.history = action.payload.map((msg) => msg.from);
    },
    appendToResponseMsg: (state, action) => {
      const { from, to } = action.payload;

      const lastMessageIndex = state.messages.length - 1;

      // Check if the last message was sent by the same 'from' message

      if (state.messages[lastMessageIndex].from === from) {
        if (
          state.messages[state.messages.length - 1].to[
            state.messages[state.messages.length - 1].to.length - 1
          ]?.toString() === "Typing..."
        ) {
          // console.log("h2");
          state.messages[state.messages.length - 1].to[
            state.messages[state.messages.length - 1].to.length - 1
          ] = "";
        }
        state.messages[lastMessageIndex].to.push(to);
        if (!lastIndex) {
          state.messages[lastMessageIndex].to.push("Typing...");
        }
      } else {
        // If not, create a new message entry
        state.messages.push({
          from: from,
          to: [to]
        });
      }
    },
    deleteLastMsg: (state) => {
      state.messages[state.messages.length].to = "";
    },
    setUserEmotion: (state, action) => {
      // add to previous values
      const prevEmotionalDistribution = state.userEmotion;
      const emotionalDistribution = action.payload;
      for (const key in emotionalDistribution) {
        emotionalDistribution[key] =
          +emotionalDistribution[key] + +prevEmotionalDistribution[key];
      }
      state.userEmotion = emotionalDistribution;
    },
    setSystemEmotion: (state, action) => {
      // add to previous values
      const prevEmotionalDistribution = state.systemEmotion;
      const emotionalDistribution = action.payload;
      for (const key in emotionalDistribution) {
        emotionalDistribution[key] =
          +emotionalDistribution[key] + +prevEmotionalDistribution[key];
      }
      state.systemEmotion = emotionalDistribution;
    },
    setOverallEmotion: (state, action) => {
      // add to previous values
      const prevEmotionalDistribution = state.overallEmotion;
      const emotionalDistribution = action.payload;
      for (const key in emotionalDistribution) {
        emotionalDistribution[key] =
          +emotionalDistribution[key] + +prevEmotionalDistribution[key];
      }
      state.overallEmotion = emotionalDistribution;
    },
    setFlow: (state, action) => {
      state.flow = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setDelete: (state, action) => {
      state.delete = action.payload;
    },
    setModeOpen: (state, action) => {
      state.modeOpen = action.payload;
    },
    setFlowLoading: (state, action) => {
      state.flowLoading = action.payload;
    },
    resetEmotions: (state) => {
      state.userEmotion = { anger: 1, fear: 1, happiness: 1, sadness: 1 };
      state.systemEmotion = { anger: 1, fear: 1, happiness: 1, sadness: 1 };
      state.overallEmotion = { anger: 1, fear: 1, happiness: 1, sadness: 1 };
      state.flow = [];
    }
  }
});

export const {
  setLoading,
  setMsgTo,
  setUserEmotion,
  setSystemEmotion,
  setOverallEmotion,
  setFlow,
  setTime,
  setMode,
  setDelete,
  setModeOpen,
  resetEmotions,
  setFlowLoading
} = msgSlice.actions;

export default msgSlice.reducer;
