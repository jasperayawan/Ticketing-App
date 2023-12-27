"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function TicketForm() {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await axios.post('/api/Tickets', JSON.stringify({ formData }), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(res.status === 200){
        router.refresh();
        router.push('/')
        toast.success("Ticket Successfully created!")
      }
    }
    catch(error){
      toast.error(error)
    }
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <ToastContainer />
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Descrition</label>
        <textarea
          name="description"
          id="textarea"
          onChange={handleChange}
          cols="30"
          rows="5"
          required={true}
          value={formData.description}
        ></textarea>
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>Priority</label>
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <React.Fragment key={value}>
              <input
                id={`priority-${value}`}
                name="priority"
                type="radio"
                value={value}
                onChange={handleChange}
                checked={formData.priority === value}
              />
              <label>{value}</label>
            </React.Fragment>
          ))}
        </div>
        <label>Progress</label>
        <input type="range" id="progress" name="progress" value={formData.progress} min="0" max="100" onChange={handleChange}/>
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <button type="submit" className="btn">
          Create
        </button>
      </form>
    </div>
  );
}
