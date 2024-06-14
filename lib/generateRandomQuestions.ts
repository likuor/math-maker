import { mathFormSchema } from '@/schema/form/mathFormSchema';
import { z } from 'zod';

type Props = z.infer<typeof mathFormSchema>;

type Question = {
  equation: string;
  answer: number;
  id: number;
};

export const generateRandomQuestions = ({ amount, digits, types }: Props) => {
  // minからmaxまでのランダムな整数を生成するヘルパー関数
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // 桁数に基づいて最小値と最大値を計算
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  const problems: Question[] = [];

  // 指定された数の問題を生成
  for (let i = 0; i < amount; i++) {
    const num1 = getRandomInt(min, max);
    const num2 = getRandomInt(min, max);
    let problem = {} as Question;

    if (types === '0') {
      // 足し算
      problem = {
        equation: `${num1} + ${num2} =`,
        answer: num1 + num2,
        id: i,
      };
    } else if (types === '1') {
      // 引き算
      problem = {
        equation: `${num1} - ${num2} =`,
        answer: num1 - num2,
        id: i,
      };
    } else if (types === '2') {
      // 掛け算
      problem = {
        equation: `${num1} × ${num2} =`,
        answer: num1 * num2,
        id: i,
      };
    } else if (types === '3') {
      // 割り算
      problem = {
        equation: `${num1} ÷ ${num2} =`,
        answer: num1 / num2,
        id: i,
      };
    }

    problems.push(problem);
  }

  // 20問ごとに分割
  const chunkedProblems = [];
  for (let i = 0; i < problems.length; i += 20) {
    chunkedProblems.push(problems.slice(i, i + 20));
  }

  return chunkedProblems;
};
