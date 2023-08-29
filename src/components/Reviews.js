import React from "react";
import {  UsersIcon, FireIcon } from "@heroicons/react/solid";
import { reviews } from "../data";

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Player Reviews
        </h1>
        <div className="flex flex-wrap m-4">
          {reviews.map((review) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <FireIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{review.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="review"
                    src={review.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {review.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {review.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
