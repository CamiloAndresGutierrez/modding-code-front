import React, { useState } from 'react';

const CreateProblem = () => {
  const [ problemName, setProblemName ] = useState("");
  const [ difficulty, setDifficulty ] = useState("1");
  const [ description, setDescription ] = useState("");

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case "name":
        setProblemName(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleDifficultyChange = (e) => {
    const value = e.target.value;
    setDifficulty(value);
  };

  const handleSubmit = () => {
    const isFilled = [ problemName, description].some(element => element.length === 0);
    if (!isFilled) {
      console.log(problemName);
      console.log(difficulty);
      console.log(description);
      setProblemName("");
      setDescription("");
      setDifficulty("1");
    }
  }

  return(
    <form>
      <input value={problemName} placeholder={"Name"} onChange={(e) => handleInputChange(e, "name")}></input>
      <select value={difficulty} onChange={(e) => handleDifficultyChange(e)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <textarea value={description} onChange={(e) => handleInputChange(e, "description")}></textarea>
      <button type={"button"} onClick={() => handleSubmit()}>Create</button>
    </form>
  )
};

export default CreateProblem;
