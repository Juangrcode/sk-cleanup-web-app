// React
import Head from "next/head";

// Components
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Layout = ({ children, title, description }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Header user={null} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
