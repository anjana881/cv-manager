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

    DOB: "",
    PrimaryPhoneNumber: "",

    HighestLevelOfEducation: "",
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
        <div className=" w-[80%] p-8 flex flex-col justify-center gap-4">
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
                Phone number (+977-98********)
              </label>
              {errors.PrimaryPhoneNumber && touched.PrimaryPhoneNumber ? (
                <p className="text-red-700">{errors.PrimaryPhoneNumber}</p>
              ) : null}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
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
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="DOB"
                id="floating_Dob"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.DOB}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                DOB
              </label>
              {errors.DOB && touched.DOB ? (
                <p className="text-red-700">{errors.DOB}</p>
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
              name="HighestLevelOfEducation"
              id="floating_HighestLevelOfEducation"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.HighestLevelOfEducation}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="floating_HighestLevelOfEducation"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              HighestLevelOfEducation
            </label>
            {errors.HighestLevelOfEducation &&
            touched.HighestLevelOfEducation ? (
              <p className="text-red-700">{errors.HighestLevelOfEducation}</p>
            ) : null}
          </div>

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
