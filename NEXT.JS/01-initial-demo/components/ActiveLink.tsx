import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

type ActiveLinkProps ={
  href: string;
  text: string;
}

export const ActiveLink: FC<ActiveLinkProps> = ({href, text}) => {
  const router = useRouter();

  return (
    <Link href={href} style={ router.asPath == href ? style : undefined}>{text}</Link>
  )
}