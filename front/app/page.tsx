import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/todos');

  // リダイレクトが発生するため、この部分は実行されない
  return null;
}
