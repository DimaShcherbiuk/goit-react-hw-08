import { selectFilteredContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} phone={number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
