import { useState } from "preact/hooks";
import InputFields from "../components/InputFields.tsx";
import { escapeHtml } from "https://deno.land/x/escape/mod.ts";
import { validate, required, isNumber } from "https://deno.land/x/validasaur/mod.ts";


// function sanitizeInput(input: any) {
//   return input
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/&/g, "&amp;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#x27;")
//     .replace(/\//g, "&#x2F;");
// }
// const userInput = '<script>alert("XSS attack")</script>';
// const sanitizedInput = isEscape(userInput);

// console.log("User Input: ", userInput);
// console.log("Sanitized Input: ", sanitizedInput);

export default function FormInput() {

  const regexPatterns: any = {
    name: /^[a-zA-Z ]{8,30}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    number: /^\d+$/,
  };

  const initialErrors = {
    name: "",
    email: "",
    number: "",
  };

  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState(initialErrors);

  const validateField = (name: string, value: string) => {
    const newErrors: any = { ...errors };
    let error = "";

    if (value.trim() === "") {
      newErrors[name] = "";
    } else {
      if (name === "name") {
        const nameRegex = /^[a-zA-Z ]{8,15}$/;
        if (!nameRegex.test(value)) {
          error =
            "Name should contain only letters and spaces and be 8 to 15 characters long.";
        }
      } else if (name === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          error = "Invalid email address.";
        }
      } else if (name === "number") {
        const numberRegex = /^\d+$/;
        if (!numberRegex.test(value)) {
          error = "Number should be a positive integer.";
        }
      }

      newErrors[name] = error;
    }

    setErrors(newErrors);

    return error;
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = () => {
    const newErrors: any = {};

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key];

        if (!regexPatterns[key].test(value)) {
          newErrors[key] = `${key} is not valid.`;
        }
      }
    }

    if (Object.keys(newErrors).length === 0) {
      // Validation passed, you can now proceed with the form submission.
      console.log("Form submitted successfully.");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div class="mb-4">
        <InputFields
          type={"text"}
          label={"Name"}
          placeholder={"name"}
          value={escapeHtml(formData.name)}
          onBlur={() => validateField("name", formData.name)}
          onInput={(e: any) => handleInputChange("name", e.target.value)}
        />
        {errors.name && <div class="text-red-600">{errors.name}</div>}
      </div>

      <div class="mb-4">
        <InputFields
          type={"email"}
          label={"Email"}
          placeholder={"email"}
          value={escapeHtml(formData.email)}
          onBlur={() => validateField("email", formData.email)}
          onInput={(e: any) => handleInputChange("email", e.target.value)}
        />
        {errors.email && <div class="text-red-600">{errors.email}</div>}
      </div>

      <div class="mb-4">
        <InputFields
          type={"number"}
          label={"Number"}
          placeholder={"number"}
          value={escapeHtml(formData.number)}
          onBlur={() => validateField("number", formData.number)}
          onInput={(e: any) => handleInputChange("number", e.target.value)}
        />
        {errors.number && <div class="text-red-600">{errors.number}</div>}
      </div>

      <button className="btn btn-accent my-4" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
