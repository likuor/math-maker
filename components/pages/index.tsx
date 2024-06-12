'use client';

import React, { useState } from 'react';
import { MathForm } from '../feature/form/MathForm';
import { Button } from '../ui/button';

type Question = {
  equation: string;
  answer: number;
  id: number;
};

const HomePage = () => {
  const [questions, setQuestions] = useState<Question[][]>([]);
  const [isShownAnswers, setIsShownAnswers] = useState<boolean>(false);

  return (
    <div className='space-y-6'>
      <h1 className='font-bold text-xl'>ようこそMath Makerへ</h1>
      <MathForm setQuestions={setQuestions} />
      <div className='space-y-6'>
        {questions.length > 0 && (
          <div className='flex flex-row gap-8 items-center'>
            <h1 className='font-bold text-xl'>問題</h1>
            <Button
              type='button'
              variant='destructive'
              onClick={() => setIsShownAnswers((prev) => !prev)}
            >
              答えを表示
            </Button>
          </div>
        )}
        <div className='grid grid-cols-5 gap-6'>
          {questions.map((questionsCol, index) => (
            <div key={index} className='space-y-6'>
              {questionsCol.map((question: Question) => (
                <div key={question.id}>
                  <span>
                    問題{question.id + 1}: {question.equation}
                  </span>
                  {isShownAnswers && (
                    <span className='text-destructive'> {question.answer}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
