import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Link href="/">
        <a>
          <h1>TERUBLOG</h1>
        </a>
      </Link>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
