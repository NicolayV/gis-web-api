import { useEffect, useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const [messageError, setMessageError] = useState("");

  const valid = useValidation(value, validations);

  const onChange = (event) => setValue(event.target.value);
  const onBlur = (event) => setIsDirty(true);

  useEffect(() => {
    // console.log(valid);
    for (let key in valid) {
      if (isDirty && valid[key]) {
        console.log(key);
        setMessageError(key);
        // console.log(`${key} : ${valid[key]}`);
      }
    }
  }, [valid]);

  return { value, isDirty, onChange, onBlur, ...valid };
};

export default useInput;
