"use client";

import { useState } from "react";

const CreatePost = () => {
  const [section, setSection] = useState();
  return (
    <main className="sp wrapper">
      <div className="">
        <div className="flex flex-col gap-2.5">
          <label htmlFor="tittle">Tittle</label>
          <input
            type="text"
            placeholder="Tittle"
            id="title"
            name="title"
            className="border px-5 py-2.5 rounded-lg"
          />
        </div>

        <div className="">
          <div className="flex flex-col gap-2.5">
            <label htmlFor="tittle">Section Tittle</label>
            <input
              type="text"
              placeholder="Section Tittle"
              id="title"
              name="title"
              className="border px-5 py-2.5 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label htmlFor="tittle">Section Tittle</label>
            <input
              type="message"
              placeholder="Drescription"
              id="title"
              name="title"
              className="border px-5 py-2.5 rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatePost;
