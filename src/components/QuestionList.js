import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {

  function handleDeleteQuestion(deletedQs){
    const updatedQuestions = questions.filter((question) => {
      return question.id !== deletedQs.id
    })
    setQuestions(updatedQuestions)
  }

  const questionList = questions.map((question) => {
    return(
      <QuestionItem 
        key={question.id}
        question={question}
        onDeleteQuestion={handleDeleteQuestion}
      />
    )
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
