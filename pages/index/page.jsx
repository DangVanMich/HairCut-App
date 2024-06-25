import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Blaxcut - Barbershop Website Template</title>
                <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Blaxcut - Barbershop Website Template" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
            </Head>
            <Header />
            {/* Your content goes here */}
            <Footer />
        </>
    );
}
