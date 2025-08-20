import React from "react";

function Cards() {
  const books = [
    {
      image: "https://covers.openlibrary.org/b/id/10523364-L.jpg",
      name: "The Great Gatsby",
      category: "Novel",
      title: "A classic by F. Scott Fitzgerald",
      price: 0,
    },
    {
      image: "https://covers.openlibrary.org/b/id/11153211-L.jpg",
      name: "Atomic Habits",
      category: "Self Help",
      title: "Build good habits, break bad ones",
      price: 0,
    },
    {
      image: "https://covers.openlibrary.org/b/id/12694140-L.jpg",
      name: "Rich Dad Poor Dad",
      category: "Finance",
      title: "Lessons on money and investing",
      price: 0,
    },
    {
      image: "https://covers.openlibrary.org/b/id/10594786-L.jpg",
      name: "Harry Potter",
      category: "Fantasy",
      title: "The boy who lived...",
      price: 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
      {books.map((book, index) => (
        <div
          key={index}
          className="card w-72 bg-white dark:bg-slate-900 dark:text-white dark:border shadow-xl hover:scale-105 duration-200 mx-auto"
        >
          {/* Image */}
          <figure className="h-60 flex justify-center items-center bg-gray-100 dark:bg-slate-800">
            <img
              src={book.image}
              alt={book.name}
              className="h-full w-full object-contain rounded-t-xl p-2"
            />
          </figure>

          {/* Body */}
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title text-lg font-semibold flex justify-between items-center">
              {book.name}
              <span className="badge badge-secondary">{book.category}</span>
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
              {book.title}
            </p>

            <div className="card-actions flex justify-between items-center mt-4">
              <span className="badge badge-outline text-base font-medium">
                ${book.price}
              </span>
              <button className="px-4 py-1 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
