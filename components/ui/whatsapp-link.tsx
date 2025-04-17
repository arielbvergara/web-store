'use client';

import { getFavoriteProducts } from '@/lib/favorites';
import { Locale } from '@/lib/types';
import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode,
  lang: Locale,
  message: string
}

export function WhatsappLink({ children, lang, message }: Props) {
  const [fullMessage, setFullMessage] = useState('');

  useEffect(() => {
    const favorites = getFavoriteProducts(lang);
    const lines = favorites.map(p => `• ${p.name} (ID: ${p.id}) - $${p.price}`).join('%0A');
    setFullMessage(`${message}%0A${lines}`);
  }, []);

  const href = `https://wa.me/+31658974168?text=${fullMessage}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
