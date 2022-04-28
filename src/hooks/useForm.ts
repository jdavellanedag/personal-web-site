import { useState, ChangeEvent } from "react";

export const useForm = <T>(callback: any, initialState: T) => {
  const [formValues, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

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

  return { handleInputChange, handleSubmit, reset, formValues };
};
