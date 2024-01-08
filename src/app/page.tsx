import Banner from "@/components/homepage/banner/Banner";
import Courses from "@/components/homepage/courses/Courses";
import Qna from "@/components/homepage/qna/Qna";
import Teachers from "@/components/homepage/teachers/Teachers";
import Services from "@/components/homepage/services/Services";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Courses />
      <Services />
      <Qna />
      <Teachers />
    </>
  );
};

export default HomePage;
