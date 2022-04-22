import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);

//Variable stores a new function which iterates through the data objects 
//using the array.map the code looks clearner than using a loop 
//this method iterates through the arrays in the data objects 
//and everytime shows a new question with new choices and answers
//this new function is created from the class that has the constructor method
