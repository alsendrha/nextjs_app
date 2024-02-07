'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react'
import styles from '../page.module.css'
const CreatePost = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    await fetch(
      'http://127.0.0.1:8090/api/collections/posts/records',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      }
    );
    setTitle('');
    router.refresh();
  }

  return (
    <form onSubmit={title ? handleSubmit : undefined}>
      <input className={styles.input}
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className={styles.button} type='submit'>
        Create Post
      </button>
    </form>
  )
}

export default CreatePost