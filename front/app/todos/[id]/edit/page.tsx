'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import EditTodoForm from '@/components/EditTodoForm';

const EditTodoPage = () => {
  const { id } = useParams();

  return !id ? (
    <div>Loading...</div>
  ) : (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-3/4 max-w-lg">
        <EditTodoForm id={parseInt(id as string)} />
        <Link
          href="/"
          className="ml-auto font-medium text-blue-600 hover:bg-blue-300 focus:outline-none"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default EditTodoPage;
