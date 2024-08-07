'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import useContact from '@/components/feature/contact/hooks';
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
  const { handleSubmit } = useContact();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
        <h1 className='text-2xl font-bold'>お問い合わせ</h1>
        <div className='flex flex-col gap-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel required text='お名前' />
                <FormControl>
                  <Input
                    required
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
                <FormLabel required text='メールアドレス' />
                <FormControl>
                  <Input
                    required
                    placeholder='例) yourname@gmail.com'
                    {...field}
                    type='email'
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='subject'
            render={({ field }) => (
              <FormItem>
                <FormLabel required text='件名' />
                <FormControl>
                  <Input
                    required
                    placeholder='例) 〇〇について'
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
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel required text='お問い合わせ内容' />
                <FormControl>
                  <Textarea
                    required
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
