import emailjs from '@emailjs/browser';
import { z } from 'zod';

import { contactFormSchema } from '@/schema/form/contactFormSchema';

const useContact = () => {
  const handleSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    // TODO: Implement form submission
    console.log(values);
    try {
      const result = await emailjs.send(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        values,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
      );
      if (result.status !== 200) return { data: 'something wrong' };
      // return router.reload();
    } catch (error) {
      return error;
    }
  };

  return { handleSubmit };
};

export default useContact;
