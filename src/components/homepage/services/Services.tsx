import { AiFillCheckSquare } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import Steps from "./Steps";

interface serviceType {
  name: string;
  subtitle: string;
}

const Services = () => {
  const servicesList: serviceType[] = [
    {
      name: "Well Designed Lectures",
      subtitle:
        "We have well designed lectures to make every students understood from the beginning to the advance level English Language Proficiency.",
    },
    {
      name: "Practice Materials",
      subtitle:
        "We have 75 practice materials for reading, more than 3000+ words for vocabulary, 100+ phrases and many more.",
    },
    {
      name: "T-Shape Learning Process",
      subtitle:
        "We start our lesson from the theory and overview of the lesson first then we deep drive into the lesson so that our students can have better understanding.",
    },
    {
      name: "Quiz Solving",
      subtitle:
        "After finishing every lessons, students can check their understanding by attending the quizzes.",
    },
    {
      name: "Pomodoro Learning Techniques",
      subtitle:
        "For holding the focus into the study, we follow the Pomodoro Techniques of studying. (25 minutes reading and 5 minutes rest)",
    },
    {
      name: "SQ3R Methodology",
      subtitle:
        "For better apprehension, we follow the SQ3R method which helps a student to comprehend any lessons deeply.",
    },
  ];

  return (
    <>
      <section className="mt-5 md:mt-20">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-5">
          <div className="mb-5 border-l-4 border-green-400">
            <h1 className="text-slate-900 ml-2 uppercase text-2xl font-bold">
              Services
            </h1>
            <p className="text-slate-600 ml-2">
              We provide you the best learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {servicesList.map((service, index) => (
              <div key={service.name} className={`flex items-center gap-3`}>
                <div className={`${index % 2 === 0 ? "block" : "hidden"}`}>
                  <GiAchievement className="text-3xl text-green-400" />
                </div>
                <div className={`${index % 2 === 0 ? "" : "ml-auto"}`}>
                  <h1
                    className={`text-lg font-bold text-slate-800 ${
                      index % 2 === 0 ? "" : "text-right"
                    }`}
                  >
                    {service.name}
                  </h1>
                  <p
                    className={`text-slate-500 ${
                      index % 2 === 0 ? "" : "text-right"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                </div>
                <div className={`${index % 2 !== 0 ? "block" : "hidden"}`}>
                  <GiAchievement className="text-3xl text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
