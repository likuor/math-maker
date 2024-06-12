'use client';

import React, { useState } from 'react';
import { MathForm } from '../feature/form/MathForm';

const HomePage = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  console.log(questions);

  return (
    <>
      <MathForm setQuestions={setQuestions} />
      <div>
        {questions.map((question) => (
          <div key={question.equation}>{question.equation}</div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
