import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const mathFormSchema = z.object({
  amount: z
    .number()
    .min(10, {
      message: '問題数は最低でも10問以上です',
    })
    .max(500, {
      message: '問題数は最大で500問です',
    }),
  digits: z
    .number()
    .min(1, {
      message: '桁数は1桁以上から選べます',
    })
    .max(10, {
      message: '桁数は最大で10です',
    }),
  types: z.string().min(1),
});
