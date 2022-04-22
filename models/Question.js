
class Question {
  
   //The Text refers to the Question
   //choices are the list of choices for each question
   //answer refers to the answer of each question
    
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
  
 
    //choice refers to the choice selected
    //returns if the choice is correct
    
    correctAnswer(choice) {
      return choice === this.answer;
    }
  }
  
  export { Question };


  //this constructor has been created inside this class
  //which will be called automatically when the new function of this class is created 