import { useState, useReducer } from "react";
import Styles from "./index.css";

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    
    default:
      return state;
  }
};

function MyForm() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleTextChange = (e) => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
     <label>
     Password:
     <input
     type="password"
     name="passowrd"
     value={formState.password}
     onChange={(e) => handleTextChange(e)}
    />
    </label>
    <input className="Submit" type="submit" />
    </form>
  );

  /* const [name, setName] = useState("");
  
    return (
      <form>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )*/
}

export { MyForm };
