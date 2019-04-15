import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;

/*We’re doing quite a lot above:

We import the useState Hook from React to keep track of the form values.
Next we create a new function called useForm, which takes one parameter, callback. Callback is the function that’s passed into the custom Hook from the component. It gets called whenever the form submits.
We’re setting up one state variable and one setter function called values and setValues.
Then we create a function called handleSubmit which takes an event. It prevents the default action of that event (refreshing the page after the event has been called). Afterwards, it just calls callback();
We create a function called handleChange which also takes an event.
Finally, we return handleChange, handleSubmit and values from the custom Hook so our component has access to them.
*/
