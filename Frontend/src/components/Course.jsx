import React, { useEffect, useState } from "react";
import axios from "axios";

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/book")  // 🔥 4001 pe karo
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (courses.length === 0) {
    return <p className="text-center mt-10">No courses available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {courses.map((course, idx) => (
        <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-4">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">{course.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{course.title}</p>
          <p className="mt-2 font-bold text-indigo-600">₹{course.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Course;
