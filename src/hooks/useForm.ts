import { useState, ChangeEvent } from "react";

export const useForm = (callback: any, initialState = {}) => {
  const [formValues, setValues] = useState(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = event;
    setValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(event);
  };

  return { handleInputChange, handleSubmit, formValues };
};
