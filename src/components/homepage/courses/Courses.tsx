import { PiGraduationCapThin } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

const Courses = async () => {
  const englishCourses = [
    {
      _id: "1",
      courseName: "English 101",
      instructor: "John Smith",
      schedule: "MWF 10:00 AM - 12:00 PM",
      location: "Room 201",
      fee: "$300",
      description:
        "A foundational course covering basic English language skills and grammar for beginners.",
      duration: "8 weeks",
    },
    {
      _id: "2",
      courseName: "Advanced English Composition",
      instructor: "Jane Doe",
      schedule: "TTh 2:00 PM - 4:00 PM",
      location: "Room 305",
      fee: "$400",
      description:
        "An advanced writing course focusing on composition, rhetoric, and critical thinking.",
      duration: "10 weeks",
    },
    {
      _id: "3",
      courseName: "Business English",
      instructor: "Robert Johnson",
      schedule: "MW 1:00 PM - 3:00 PM",
      location: "Room 401",
      fee: "$350",
      description:
        "A course tailored for professionals, emphasizing business communication skills and vocabulary.",
      duration: "6 weeks",
    },
    {
      _id: "4",
      courseName: "IELTS Preparation",
      instructor: "Emily White",
      schedule: "Tues 5:00 PM - 7:00 PM",
      location: "Room 108",
      fee: "$450",
      description:
        "Focused preparation for the International English Language Testing System (IELTS) exam.",
      duration: "12 weeks",
    },
    {
      _id: "5",
      courseName: "Conversation Skills Workshop",
      instructor: "Michael Brown",
      schedule: "Thurs 3:00 PM - 5:00 PM",
      location: "Room 210",
      fee: "$250",
      description:
        "An interactive workshop to enhance conversational skills and fluency in English.",
      duration: "4 weeks",
    },
    {
      _id: "6",
      courseName: "TOEFL Exam Strategies",
      instructor: "Sarah Johnson",
      schedule: "Fri 9:00 AM - 11:00 AM",
      location: "Room 502",
      fee: "$380",
      description:
        "Strategies and practice sessions to excel in the Test of English as a Foreign Language (TOEFL) exam.",
      duration: "8 weeks",
    },
  ];

  return (
    <section className="mt-[80vh] w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <div className="border-l-4 border-green-400 my-5">
        <h1 className="text-slate-900 ml-2 uppercase text-2xl font-bold">
          Courses
        </h1>
        <p className="text-slate-600 ml-2">
          Choose your course and start learning
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {englishCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-md p-3 flex items-center justify-between gap-3 group hover:shadow-md duration-200 cursor-pointer hover:border-green-400 border-2 border-gray-200"
          >
            <div>
              <PiGraduationCapThin className="text-5xl group-hover:text-green-400 duration-200" />
            </div>
            <div className="flex flex-col gap-1 justify-between">
              <h3 className="font-bold uppercase">{course.courseName}</h3>
              <p className="text-sm uppercase text-slate-600">
                Duration: {course.duration}
              </p>
              <p className="text-sm uppercase text-slate-600">
                Fee: {course.fee}
              </p>
            </div>
            <div className="ml-auto">
              <IoIosArrowForward className="group-hover:text-green-400 duration-200" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
