import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ContextProvider from '../comps/ContextProvider'
import AddTodo from '../comps/AddTodo'
import AllTodos from '../comps/AllTodos'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextProvider>
        <AddTodo />
        <AllTodos />
      </ContextProvider>
    </div>
  )
}
