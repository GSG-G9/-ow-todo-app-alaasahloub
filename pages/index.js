import React, { useContext } from "react";
import ContextProvider from "../comps/ContextProvider";
import Head from "next/head";
import Image from "next/image";
import TodoCard from "../comps/TodoCard";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextProvider>
        <TodoCard />
      </ContextProvider>
    </div>
  );
};
export default Home;
