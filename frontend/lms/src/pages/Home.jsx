import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero_img.png";
import user from "../assets/user.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* hero section  */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-6 md:px-12"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            <span className="text-orange-400">Unlock</span> Your Creative
            Potential
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-200">
            with Online Design and Development Courses
          </p>
          <p className="text-sm md:text-base text-gray-300 mt-2 mb-8">
            Learn from Industry Experts and Enhance Your Skills
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out shadow-lg">
              Explore Courses
            </button>
            <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Benifit Section  */}
      <section className=" py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold  text-center mb-4 text-orange-500">
            Why Choose Our LMS?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Unlock your learning potential with these powerful benefits
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l9-5-9-5-9 5 9 5z" />
                </svg>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">
                  Flexible Learning
                </h3>
              </div>
              <p className="text-gray-600">
                Access courses anytime, anywhere – on your own schedule and at
                your own pace.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">
                  Certified Courses
                </h3>
              </div>
              <p className="text-gray-600">
                Earn recognized certifications to boost your career and academic
                credentials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6v6l4 2" />
                </svg>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">
                  Interactive Learning
                </h3>
              </div>
              <p className="text-gray-600">
                Enjoy quizzes, discussions, and real-time feedback to enhance
                understanding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20l9-5-9-5-9 5 9 5z" />
                </svg>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">
                  Expert Instructors
                </h3>
              </div>
              <p className="text-gray-600">
                Learn from industry experts and experienced educators in each
                field.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 17v-2a4 4 0 014-4h3" />
                </svg>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">
                  Progress Tracking
                </h3>
              </div>
              <p className="text-gray-600">
                Monitor your learning journey and stay on top of your goals and
                performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="w-10 h-10 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
                <h3 className="text-xl font-semibold ml-4 text-gray-800">
                  User-Friendly Interface
                </h3>
              </div>
              <p className="text-gray-600">
                Navigate courses and content effortlessly with an intuitive
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* our courses  */}

      <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-orange-500">
            Our Courses
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Explore a wide range of practical and in-demand IT courses
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className=" p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-orange-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Web Development
              </h3>
              <p className="text-gray-600 text-center">
                Master HTML, CSS, JavaScript, and frameworks like React to build
                dynamic websites.
              </p>
            </div>

            <div className=" p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-orange-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 17a4 4 0 104 0M12 14v1m0 4v.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Cyber Security
              </h3>
              <p className="text-gray-600 text-center">
                Understand network security, ethical hacking, and data
                protection techniques.
              </p>
            </div>

            <div className=" p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-orange-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16l-7-3-7 3V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Mobile App Development
              </h3>
              <p className="text-gray-600 text-center">
                Build Android and iOS applications using Flutter, React Native,
                or Kotlin.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-orange-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10h11M9 21V3m8 4h4v13h-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Data Science
              </h3>
              <p className="text-gray-600 text-center">
                Learn data analysis, Python, machine learning, and real-world
                datasets.
              </p>
            </div>

            <div className=" p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-orange-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 17v-2a4 4 0 014-4h3m-7 6h8m-8 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Cloud Computing
              </h3>
              <p className="text-gray-600 text-center">
                Gain hands-on experience with AWS, Azure, and cloud
                infrastructure tools.
              </p>
            </div>

            <div className=" p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-orange-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h18M9 3v18M3 9h18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                UI/UX Design
              </h3>
              <p className="text-gray-600 text-center">
                Create engaging user interfaces using tools like Figma and Adobe
                XD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testomonial Section  */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold  mb-12 text-orange-500">
            What Our Learners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="mb-4">
                <img
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                  src={user}
                  alt="User Image"
                />
              </div>
              <p className="text-gray-600 italic">
                "The courses were incredibly practical and helped me land my
                first tech job."
              </p>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Sita Sharma
              </h3>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
            <div className=" p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="mb-4">
                <img
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                  src={user}
                  alt="User Image"
                />
              </div>
              <p className="text-gray-600 italic">
                "ByteBuilders gave me hands-on skills I couldn't find in
                college."
              </p>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Ram Thapa
              </h3>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
            <div className=" p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="mb-4">
                <img
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                  src={user}
                  alt="User Image"
                />
              </div>
              <p className="text-gray-600 italic">
                "The mentorship and support helped me grow both technically and
                personally."
              </p>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Anita Karki
              </h3>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section  */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-orange-500">
            Frequently Asked Questions
          </h2>
          <div className="text-left space-y-4">
            <details className="bg-white border border-gray-300 rounded-md shadow-sm p-4">
              <summary className="cursor-pointer font-medium text-gray-800">
                What is ByteBuilders LMS?
              </summary>
              <p className="mt-2 text-gray-600">
                ByteBuilders LMS is a Learning Management System designed to
                provide interactive, industry-aligned IT courses and
                skill-building resources for students and professionals.
              </p>
            </details>

            <details className="bg-white border border-gray-300 rounded-md shadow-sm p-4">
              <summary className="cursor-pointer font-medium text-gray-800">
                Are the courses free?
              </summary>
              <p className="mt-2 text-gray-600">
                Some courses are free, while others are paid. Details are
                available on the course page.
              </p>
            </details>

            <details className="bg-white border border-gray-300 rounded-md shadow-sm p-4">
              <summary className="cursor-pointer font-medium text-gray-800">
                Do I get a certificate after completing a course?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, upon successful completion of a course and assessment, a
                certificate is awarded.
              </p>
            </details>

            <details className="bg-white border border-gray-300 rounded-md shadow-sm p-4">
              <summary className="cursor-pointer font-medium text-gray-800">
                Can I access the LMS on mobile devices?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, our LMS is fully responsive and accessible on all mobile
                devices and tablets.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
