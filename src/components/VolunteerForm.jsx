import React from "react";
import { Button } from "react-bootstrap";


const VolunteerForm = () => {
  // Implement your form logic here

  return (
    <section className="volunteer-form mb-3">
      <h2 className="text-success">Apply to Volunteer</h2>
      <form className="volunteer-form">
        {/* Add your form fields and logic here */}
        <label htmlFor="name" className="mx-2">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email" className="mx-2">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Add more form fields as needed */}

        <Button type="submit" className="mx-2" variant="success">Submit</Button>
      </form>
    </section>
  );
};

export default VolunteerForm;
