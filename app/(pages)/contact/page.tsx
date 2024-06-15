import { Metadata } from 'next';

import ContactPage from '@/components/pages/contact';

export const metadata: Metadata = {
  title: 'Math Maker - Contact',
  description: 'Math Makerへのお問い合わせはこちらから。質問やフィードバックをお寄せください。',
};

const Contact = () => <ContactPage />;

export default Contact;
