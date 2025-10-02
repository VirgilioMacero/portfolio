import TextInput from "../Components/TextInput";
import { useState } from "react";

export default function ContactForm() {
  const [values, setValues] = useState({
    email: "",
    fullName: "",
    subject: "",
    message: "",
  });

  return (
    <div>
      {" "}
      <h1 className="Segment-Title justify-end text-5xl">Contact Me</h1>
      <form
        className="mt-10 w-[20vw]"
        onSubmit={async (e) => {
          console.log("Sending email with the following data:", values);
          await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/sendMail`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
        }}
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="fullName">Full Name:</label>
          <TextInput
            name="fullName"
            required={true}
            value={values.fullName}
            type="text"
            setValue={(fullName) => setValues({ ...values, fullName })}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email">Email:</label>
          <TextInput
            name="email"
            required={true}
            value={values.email}
            type="email"
            setValue={(email) => setValues({ ...values, email })}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="subject">Subject:</label>
          <TextInput
            name="subject"
            required={true}
            value={values.subject}
            type="text"
            setValue={(subject) => setValues({ ...values, subject })}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="Message">Message:</label>
          <textarea
            id="Message"
            required={true}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            className="border-2 border-gray-300 rounded-lg p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-lg p-2">
          Submit
        </button>
      </form>
    </div>
  );
}
