import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Akhmad Sakhoji Jamaludin</strong> usually called <strong>Oji</strong>. I am an Informatics Engineering student and focus on Web Development JavaScript, You can contact me on <a href="https://wa.me/6285201591775" target='_blank'>WhatsApp</a></p>
        <p>
        This website was created to fulfill the task of e-learning Bootcamp Web Programming Pamulang University
        </p>
      </section>
    </Layout>
  );
}