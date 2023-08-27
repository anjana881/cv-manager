import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const OfferLetter = () => {
  const [value, setValue] = useState(
    "<h3>Dear [Candidate_name],</h3></br><p>We’re delighted to extend this offer of employment for the position of [Job_title] with [Company_name]. Please review this summary of terms and conditions for your anticipated employment with us.<p/></br><p>If you accept this offer, your start date will be [Start Date] or another mutually agreed upon date, and you would report to [Manager_name].<p/></br><p>Please find attached the terms and conditions of your employment, should you accept this offer letter. We would like to have your response by [date]. In the meantime, please feel free to contact me or [Manager_name] via email or phone at [provide contact details], if you have any questions.<p/></br><p>We are all looking forward to having you on our team.<p/></br><h3>Best regards,</h3></br><h3>[Your name]<br/>[Signature]</h3>"
  );
  const toolbarOptions = [
    [{ font: [] }],
    [{ customFont: ["Arial", "Times New Roman", "Courier New", "Verdana"] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ header: "1" }, { header: "2" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["link", "image", "video"],
    ["clean"],
  ];

  return (
    <div className="w-full mt-0 p-4 ">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "60vh" }}
        modules={{
          toolbar: toolbarOptions,
        }}
      />
    </div>
  );
};

export default OfferLetter;
