import { z } from 'zod';

// TODO requireにする
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'お名前は1文字以上で入力してください',
    })
    .max(20, {
      message: 'お名前は20文字以内で入力してください',
    }),
  email: z
    .string()
    .email({ message: '適切なメールアドレスを入力してください' })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: '適切なメールアドレスを入力してください',
    }),
  subject: z
    .string()
    .min(1, {
      message: 'タイトルは1文字以上で入力してください',
    })
    .max(50, {
      message: 'タイトルは50文字以内で入力してください',
    }),
  message: z
    .string()
    .min(10, {
      message: 'お問い合わせ内容は10文字以上で入力してください',
    })
    .max(1000, {
      message: 'お問い合わせ内容は1000文字以内で入力してください',
    }),
});
