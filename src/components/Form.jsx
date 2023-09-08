import { useState } from "react";
function Form() {
  const [pseudo, setPseudo] = useState("");
  return (
    <>
      <label className="pseudo-label">You are:</label>
      <input
        type="text"
        className="pseudo"
        value={pseudo}
        onChange={setPseudo}
      />
    </>
  );
}
export default Form;
