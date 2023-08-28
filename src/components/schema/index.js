import * as Yup from "yup";

export const Yupschema = Yup.object({
  Id: Yup.number().required("please enter your Id"),
  FirstName: Yup.string().min(2).max(25).required("Please enter your Name"),
  LastName: Yup.string().min(2).max(25).required("Please enter your Name"),
  PrimaryEmail: Yup.string().email().required("Please enter your Email"),
  // position: Yup.string().required("please enter your Position"),
  // select: Yup.string().required("please select your Level"),

  PrimaryPhoneNumber: Yup.number().required("Please Enter your Phone Number"),
  ExperienceInMonthsWithCompanyName: Yup.string().required(
    "please enter your Experience"
  ),
  DOB: Yup.string().required("please enter your Date of Birth"),
  ExpectedSalary: Yup.string().required("please enter your Salary Expectation"),
  HighestLevelOfEducation: Yup.string().required("please enter your Degree"),
  // image: Yup.mixed().required(),
});
