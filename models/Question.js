
class Question {
    /**
     *
     * @param {string} text The Text of the Question
     * @param {string[]} choices a lis of choices for the question
     * @param {string} answer the answer of the question
     * @param {image} image image for each question 
     */
    constructor(text, choices, answer, image) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
      this.image = image; 
    }
  
    /**
     *
     * @param {string} choice the choice selected
     * @returns {boolean} returns if the choice is correct
     */
    correctAnswer(choice) {
      return choice === this.answer;
    }
  }
  
  export { Question };