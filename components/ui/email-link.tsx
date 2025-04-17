'use client';

import { getFavoriteProducts } from '@/lib/favorites';
import { Locale } from '@/lib/types';
import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  lang: Locale;
  emailMessage: string;
  emailSubject: string;
}

export function EmailLink({ children, lang, emailMessage, emailSubject }: Props) {
  const [params, setParams] = useState('');

  useEffect(() => {
    const favorites = getFavoriteProducts(lang);
    const lines = favorites.map(p => `- ${p.name} (ID: ${p.id}) - $${p.price}`).join('\n');
    const subject = emailSubject;
    const body = `${emailMessage}\n${lines}`;

    setParams(
      `mailto:ariel@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  }, []);

  return (
    <a href={params}>
      {children}
    </a>
  );
}
