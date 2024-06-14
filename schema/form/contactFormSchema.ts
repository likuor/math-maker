import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'お名前は最低でも1文字以上です',
    })
    .max(20, {
      message: 'お名前は最低でも20文字です',
    }),
  email: z
    .string()
    .email({ message: '適切なメールアドレスを入力してください' })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: '適切なメールアドレスを入力してください',
    }),

  context: z.string().min(1).max(1000, {
    message: 'お問い合わせ内容は最大で1000文字です',
  }),
});
