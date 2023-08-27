import React from "react";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { Yupschema } from "./schema";
import { createUser } from "../features/UserSlice";
const CreateForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    Id: "",
    FirstName: "",
    LastName: "",
    PrimaryEmail: "",
    position: "",
    photo: "",
    select: "",
    PrimaryPhoneNumber: "",
    ExperienceInMonthsWithCompanyName: "",
    city: "",
    ExpectedSalary: "",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: Yupschema,
      onSubmit: (values) => {
        console.log("values", values);
        dispatch(createUser(values));
        navigate("/applicants");
      },
    });
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex py-5 px-1 w-full gap-4"
      >
        <div className="w-[60%] flex flex-col gap-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="FirstName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.FirstName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
              {errors.FirstName && touched.FirstName ? (
                <p className="text-red-700">{errors.FirstName}</p>
              ) : null}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="LastName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.LastName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
              {errors.LastName && touched.LastName ? (
                <p className="text-red-700">{errors.LastName}</p>
              ) : null}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="PrimaryPhoneNumber"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.PrimaryPhoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (98********)
              </label>
              {errors.PrimaryPhoneNumber && touched.PrimaryPhoneNumber ? (
                <p className="text-red-700">{errors.PrimaryPhoneNumber}</p>
              ) : null}
            </div>
            {/* <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="city"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_city"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
              {errors.city && touched.city ? (
                <p className="text-red-700">{errors.city}</p>
              ) : null}
            </div> */}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="ExperienceInMonthsWithCompanyName"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.ExperienceInMonthsWithCompanyName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Experience
              </label>
              {errors.ExperienceInMonthsWithCompanyName &&
              touched.ExperienceInMonthsWithCompanyName ? (
                <p className="text-red-700">
                  {errors.ExperienceInMonthsWithCompanyName}
                </p>
              ) : null}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="Id"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.Id}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Id
              </label>
              {errors.Id && touched.Id ? (
                <p className="text-red-700">{errors.Id}</p>
              ) : null}
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="PrimaryEmail"
              name="PrimaryEmail"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.PrimaryEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {errors.PrimaryEmail && touched.PrimaryEmail ? (
              <p className="text-red-700">{errors.PrimaryEmail}</p>
            ) : null}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="ExpectedSalary"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.ExpectedSalary}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Salary Expectation
            </label>
            {errors.ExpectedSalary && touched.ExpectedSalary ? (
              <p className="text-red-700">{errors.ExpectedSalary}</p>
            ) : null}
          </div>
          {/* <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="position"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.position}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Position
            </label>
            {errors.position && touched.position ? (
              <p className="text-red-700">{errors.position}</p>
            ) : null}
          </div> */}

          {/* <div>
            <select
              name="select"
              className="block w-full px-4 py-3 text-base rounded-lg text-gray-900 bg-transparentborder-0 border-b-2 border-gray-300 dark:border-gray-600"
              value={values.select}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="Job level">Job Level</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
            {errors.select && touched.select ? (
              <p className="text-red-700">{errors.select}</p>
            ) : null}
          </div> */}
          <button
            type="submit"
            className="w-44 h-12 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateForm;
