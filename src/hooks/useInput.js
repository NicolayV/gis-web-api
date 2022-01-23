import { useEffect, useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  const valid = useValidation(value, validations);

  const [errorMessages, setErrorMessage] = useState("");

  const onChange = (event) => setValue(event.target.value);
  const onBlur = () => setIsDirty(true);

  const { isEmpty, minLengthError, maxLengthError, emailError } = valid;

  useEffect(() => {
    if (!isDirty) {
      return;
    }
    if (isEmpty) {
      setErrorMessage("Поле не может быть пустым");
      return;
    }
    if (emailError) {
      setErrorMessage("Не корректный e-mail");
      return;
    }
    if (minLengthError) {
      setErrorMessage("Не корректная длина min");
      return;
    }
    if (maxLengthError) {
      setErrorMessage("Не корректная длина max");
      return;
    }
    setErrorMessage("");
  }, [emailError, isDirty, isEmpty, maxLengthError, minLengthError]);

  return { errorMessages, value, isDirty, onChange, onBlur, ...valid };
};

export default useInput;
