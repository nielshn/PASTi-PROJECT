import Head from "next/head";
import Circle from "-!svg-react-loader!public/images/circle-accent-1.svg";
import Header from "src/parts/Header";
import Hero from "src/parts/Hero";
import Clients from "src/parts/Clients";
import ListCourses from "src/parts/ListCourses";
import ListCategories from "src/parts/ListCategories";
import Footer from "src/parts/Footer";
import courses from "src/constants/api/courses";

function Home({ data = [] }) {
  return (
    <>
      <Head>
        <title>BWAMICRO</title>
      </Head>
      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <div className="sunshine max-w-full"></div>
          <Circle className="absolute left-0 bottom-0" />
          <div className="container mx-auto px-4">
            <Header />
            <Hero />
          </div>
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          <Clients />
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          <ListCourses data={data} />
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          <ListCategories />
        </section>
        <section className="mt-24 bg-indigo-1000 py-12">
          <Footer />
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await courses.all();
    return { data: data.data };
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};

export default Home;
