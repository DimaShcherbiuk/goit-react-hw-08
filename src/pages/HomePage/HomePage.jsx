import css from "./HomePage.module.css";
import { RiContactsBook3Line } from "react-icons/ri";

export default function HomePage() {
  return (
    <div className={css.container}>
      <b>Welcome, your PhoneBook application!!!</b>
      <RiContactsBook3Line size={300} />
    </div>
  );
}
