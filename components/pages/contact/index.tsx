'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema } from '@/schema/form/contactFormSchema';

const ContactPage = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      context: '',
    },
  });
  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    // TODO: Implement form submission
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <h1 className='text-2xl font-bold'>お問い合わせ</h1>
        <div className='flex flex-col gap-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>お名前</FormLabel>
                <FormControl>
                  <Input
                    placeholder='例) コンタクト花子'
                    {...field}
                    type='text'
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input
                    placeholder='例) yourname@gmail.com'
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='context'
            render={({ field }) => (
              <FormItem>
                <FormLabel>お問い合わせ内容</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='500文字以内で、お問い合わせ内容を入力してください'
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    rows={10}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit'>送信</Button>
      </form>
    </Form>
  );
};

export default ContactPage;
