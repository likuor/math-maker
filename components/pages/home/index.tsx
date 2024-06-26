'use client';

import { useState } from 'react';

import PDFSection from '../../feature/PDF/PDFSection';
import { MathForm } from '../../feature/form/MathForm';
import { Button } from '../../ui/button';

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
      <h1 className='text-2xl font-bold'>ようこそMath Makerへ</h1>
      <MathForm setQuestions={setQuestions} />
      <div className='space-y-6'>
        {questions.length > 0 && (
          <div className='flex flex-row items-center gap-8'>
            <h1 className='text-xl font-bold'>問題</h1>
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
                    問題{question.id + 1}. {question.equation}
                  </span>
                  {isShownAnswers && <span className='text-destructive'> {question.answer}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
        {questions.length > 0 && <PDFSection questions={questions} />}
      </div>
    </div>
  );
};

export default HomePage;
