import { GoogleGenerativeAI } from "@google/generative-ai";
import API_KEY from "../config.js";

const genAI = new GoogleGenerativeAI(API_KEY);

export const runAI = async (email) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // Take this email and create a template so I can reuse it for further emails.
  const prompt = `Return an email template from this email allowing me to change portions such as my name, recipient, company, time, etc.: ${email}`;
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  return text;
};

// const email = `
// Dear Jack Sawyer,

// I hope this message finds you well! My name is Ibrahim Hudson, and I'm a Front-End Engineer and
// Marcy Lab School Fellow at The Marcy Lab School. I am impressed by your background and
// experience in Software Engineering, I thought you'd be a good fit for my project and would be honored to
// invite you for an interview to here more about your time at google.

// As I start my career I would love to have the opportunity to interview you, heres a quick overview:

// Interview Details
// -----------------
// Proposed Date: Feb. 25th
// Proposed Time: 3:30pm

// Agenda:
// Tour of the Office

// Discussion about the role, your experience, and your career goals.

// Please let me know if this date and time work for you, or feel free to suggest an alternative that fits your schedule. We’re happy to accommodate your availability.

// Looking forward to hearing from you and hopefully visiting you at Google soon!

// Best regards,
// Ibrahim Hudson (LinkedIn as well)
// Marcy Lab Fellow
// 919-633-6572
// `;

// runAI(email);
