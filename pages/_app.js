import Layout from "../components/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="vhWrap">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}

export default MyApp;
