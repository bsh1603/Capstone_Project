import { useState } from "react";

const useInput = (initialValue, validateFunction = () => {}) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isValid, setIsvalid] = useState(true);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsvalid(validateFunction(e.target.value));
  };

  return [inputValue, handleChange, setInputValue, isValid];
};

export default useInput;
