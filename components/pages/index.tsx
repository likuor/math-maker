'use client';

import React, { useState } from 'react';
import { MathForm } from '../feature/form/MathForm';

const HomePage = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  console.log(questions);

  return (
    <div className='space-y-6'>
      <h1 className='font-bold text-xl'>ようこそMath Makerへ</h1>
      <MathForm setQuestions={setQuestions} />
      <div className='space-y-6'>
        {questions.length > 0 && <h1 className='font-bold text-xl'>問題</h1>}
        <div className='flex flex-col gap-6'>
          {questions.map((question) => (
            <div key={question.equation}>
              <span>{question.equation}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
