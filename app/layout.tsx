'use client';

import '@/styles/reset.css';
import '@/styles/global.css';

import classNames from 'classnames';
import { Open_Sans } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { Provider } from 'react-redux';

import { mapBackgroundStylesByRoute } from '@/helpers';
import { Header } from '@/modules/layout/header/header';
import { MainContainer } from '@/modules/layout/main-container';
import { store } from '@/store';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={classNames(
          openSans.variable,
          mapBackgroundStylesByRoute(pathname)
        )}
      >
        <Provider store={store}>
          <Header />
          <MainContainer>{children}</MainContainer>
        </Provider>
      </body>
    </html>
  );
}
