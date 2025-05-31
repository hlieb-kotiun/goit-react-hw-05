import { Field, Form, Formik } from "formik";
import { IoIosSearch } from "react-icons/io";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleSetQuery }) => {
  const initValues = {
    query: "",
  };

  const handleSubmit = (values, actions) => {
    handleSetQuery(values.query);
    actions.resetForm();
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initValues}>
        <Form className={s.form}>
          <div className={s.inputWrapper}>
            <Field className={s.input} name="query" placeholder="search" />
            <button className={s.btn} type="submit">
              <IoIosSearch size={25} />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
