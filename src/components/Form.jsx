import { useState } from "react";
function Form() {
  const [pseudo, setPseudo] = useState("");
  const handlePseudoChange = (event) => {
    const newPseudo = event.target.value;
    setPseudo(newPseudo);
  };
  return (
    <>
      <input
        type="text"
        className="pseudo"
        value={pseudo}
        onChange={handlePseudoChange}
      />
      <label className="pseudo-label">
        <h2>You are {pseudo}</h2>
      </label>
    </>
  );
}
export default Form;
