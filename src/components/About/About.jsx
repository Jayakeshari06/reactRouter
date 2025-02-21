import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://th.bing.com/th/id/OIP.62n_UzCWrAjl_2TAanKtqAHaEK?rs=1&pid=ImgDetMain"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React Router is a library used for routing in React applications.
              It allows you to define and manage navigation paths (URLs) within
              your React app without requiring a full page reload. This enables
              you to build single-page applications (SPAs) where only the
              necessary parts of the page are updated when navigating between
              views.
            </p>
            <p className="mt-4 text-gray-600">
              Key Concepts: Single-Page Application (SPA): React Router allows
              your app to behave as a single-page application. Instead of
              refreshing the entire page, only the parts of the UI that need to
              change will be updated. Dynamic Routing: React Router lets you
              create dynamic routes by matching different URL patterns to
              different components, allowing the UI to change depending on the
              URL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
