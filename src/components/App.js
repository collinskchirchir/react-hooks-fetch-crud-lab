import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(
    () => {
      fetch("http://localhost:4000/questions")
      .then(resp => resp.json())
      .then(data => setQuestions(data))
    }, []
  );

  function handleAddQuestion(newQs){
    const updatedQs = [...questions, newQs];
    setQuestions(updatedQs)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions}/>}
    </main>
  );
}

export default App;
