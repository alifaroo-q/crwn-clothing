import FormInput from "./FormInput";
import Button from "./Button";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create new user, Email already in use");
      } else {
        console.error("User creation failed", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col w-[25em] gap-6">
      <h2 className="text-2xl font-semibold">Don't have an account</h2>
      <span className="">Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputProps={{
            name: "displayName",
            type: "text",
            required: true,
            onChange: handleChange,
            value: displayName,
          }}
        />
        <FormInput
          label="Email"
          inputProps={{
            name: "email",
            type: "email",
            required: true,
            onChange: handleChange,
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputProps={{
            name: "password",
            type: "password",
            required: true,
            onChange: handleChange,
            value: password,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputProps={{
            name: "confirmPassword",
            type: "password",
            required: true,
            onChange: handleChange,
            value: confirmPassword,
          }}
        />
        <Button buttonType="default">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
