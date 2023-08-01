  import React, { useState, useEffect } from "react";
  import { ContactForm } from "../../components/contactForm/ContactForm";
  import { TileList } from "../../components/tileList/TileList";
  import { useAsyncError } from "react-router-dom";

  export const ContactsPage = ({ contacts, addContacts }) => {
    /*
    Define state variables for contact info and duplicate check
    */
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isDuplicate, setIsDuplicate] = useState(false);

    useEffect(() => {
      const isDuplicate = () => {
        const found = contacts.find((contact) => contact.name === name);
        if (found !== undefined) {
          return true;
        }
        return false;
      }

      if (isDuplicate()) {
        setIsDuplicate(true);
      }
      else {
        setIsDuplicate(false);
      }
    }, [name, contacts, isDuplicate]);

    const handleSubmit = (e) => {
      e.preventDefault();
      /*
      Add contact info and clear data if the contact name is not a duplicate
      */
      if (!isDuplicate) {
        addContacts(name, phone, email);
        // A successful submission should clear the form
        setName('');
        setPhone('');
        setEmail('');
      }
    };

    /*
    Using hooks, check for contact name in the contacts array variable in props
    */

    return (
      <div>
        <section>
          <h2>
            Add Contact
            {isDuplicate ? 'Contact Name Already Exists' : ''}
          </h2> 
          <ContactForm
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}/>
        </section>
        <hr />
        <section>
          <h2>Contacts</h2>
          <TileList tiles={contacts}/>
        </section>
      </div>
    );
  };
