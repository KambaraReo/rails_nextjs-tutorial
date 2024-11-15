'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Todo from '@/components/Todo';
import { TodoType } from '@/types/Todo';
import DeleteTodoButton from '@/components/DeleteTodoButton';

// Todo詳細ページを表示するコンポーネント
const TodoDetailPage = () => {
  // ルーティング情報を取得する
  const { id } = useParams();

  // Todo情報を管理するState
  const [todo, setTodo] = useState<TodoType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // idが変更されたら(=Todo詳細ページを開いたら)、Todoを取得する
  useEffect(() => {
    // Todoを取得する関数
    const fetchTodo = async () => {
      setIsLoading(true);

      try {
        // APIからTodoを取得してStateにセットする
        const res = await axios.get(`http://localhost:3000/todos/${id}`);
        setTodo(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    // idが存在する場合のみ、Todoを取得する
    if (id) {
      fetchTodo();
    }
  }, [id]);

  // Todoを取得中の場合は「Loading...」を表示する
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="flex justify-center items-center">
      <div className="flex flex-col space-y-6 w-3/4 max-w-lg pt-10">
        <label className="block text-xl font-bold text-gray-700">Todo</label>
        {todo ? <Todo todo={todo} /> : <div>Todoが存在しません。</div>}
        <div className="flex justify-end">
          <Link
            href={`/todos/${id}/edit`}
            className="mt-auto font-medium text-blue-600 hover:bg-blue-300 focus:outline-none mr-12"
          >
            Edit
          </Link>
          <Link
            href="/"
            className="mt-auto font-medium text-blue-600 hover:bg-blue-300 focus:outline-none"
          >
            Back
          </Link>
          {todo && <DeleteTodoButton id={todo.id} />}
        </div>
      </div>
    </div>
  );
};

export default TodoDetailPage;
