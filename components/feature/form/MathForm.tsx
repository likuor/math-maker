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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { mathFormSchema } from '@/schema/form';

export function MathForm() {
  const form = useForm<z.infer<typeof mathFormSchema>>({
    resolver: zodResolver(mathFormSchema),
    defaultValues: {
      amount: 10,
      digits: 3,
      types: '0',
    },
  });
  function onSubmit(values: z.infer<typeof mathFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <h1>ようこそmath makerへ</h1>
        <div className='flex flex-row gap-2'>
          <FormField
            control={form.control}
            name='amount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>問題数</FormLabel>
                <FormControl>
                  <Input
                    placeholder='shadcn'
                    {...field}
                    type='number'
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='digits'
            render={({ field }) => (
              <FormItem>
                <FormLabel>数字の桁数</FormLabel>
                <FormControl>
                  <Input
                    placeholder='shadcn'
                    {...field}
                    type='number'
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='types'
            render={({ field }) => (
              <FormItem>
                <FormLabel>問題の種類</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a verified email to display' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='0'>+</SelectItem>
                    <SelectItem value='1'>-</SelectItem>
                    <SelectItem value='2'>×</SelectItem>
                    <SelectItem value='3'>÷</SelectItem>
                    <SelectItem value='4'>+と-</SelectItem>
                    <SelectItem value='5'>×と÷</SelectItem>
                    <SelectItem value='6'>すべて</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
