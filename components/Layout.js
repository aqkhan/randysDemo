import Navbar from "./Navbar";
import Head from "next/head";

const Layout = (props) => (
    <div>
        <Head>
            <title>Randys Demo</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <Navbar />
        <div className="container">
            { props.children }
        </div>
    </div>
);

export default Layout;