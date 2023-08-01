import React from "react";
import { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  // Create a memoized version of the contactNames array.
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter appointment name'
        required>
      </input>
      <br/>
      <label>
        <ContactPicker
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <br />
      <label for='date'>Date</label>
      <input
        type='date'
        id='date'
        name='date'
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
        placeholder='Pick a date'
        required>
      </input>
      <br/>
      <label for='time'>Time</label>
      <input
        type='time'
        id='time'
        name='time'
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder='Pick a time'
        required>
      </input>
      <br/>
      <input type="submit" value="Add Appointment" aria-label="Add Appointment"/>
    </form>
  );
};
