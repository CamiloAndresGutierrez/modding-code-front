import React, { useState, useEffect, useRef } from 'react';

const EditMinicourse = ({
  categories,
  submitInfo,
  minicourse=null,
}) => {
  const fileRef = useRef();
  const [ selectedCategories, setSelectedCategories ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ minicourseToEdit, setMinicourseToEdit ] = useState({
    name: "",
    description: "",
    thumbnail: null,
    categories: []
  });

  useEffect(() => {
    if(minicourse) {setMinicourseToEdit(minicourse)}
  }, [minicourse]);

  const handleChange = (key, event) => {
    const value = event.target.value;
    const auxObj = {
      ...minicourseToEdit,
      [key]: value
    };
    setMinicourseToEdit(auxObj);
  };

  const handleCheckBox = (e, category) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedCategories([
        ...selectedCategories,
        category
      ])
    }
    else {
      const chosenCategories = selectedCategories.filter(cat => cat.id !== category.id);
      setSelectedCategories(chosenCategories);
    }
  };

  const handleSetCategories = () => {
    const auxObj = {
      ...minicourseToEdit,
      categories: selectedCategories
    };
    setMinicourseToEdit(auxObj);
  };

  const isFieldEmpy = () => Object.values(minicourseToEdit).some(element => element.length === 0);

  const handleSubmit = () => {
    if (!isFieldEmpy()){
      setErrorMessage("");
      submitInfo(minicourseToEdit);
    } else {
      setErrorMessage("All fields must be filled.");
    };
  };

  const handleImageUpload = () => {
    const file = fileRef.current.files[0];

    const auxObj = {
      ...minicourseToEdit,
      thumbnail: file
    };
    setMinicourseToEdit(auxObj);
  }

  const handleImgSrc = (src) => {
    return typeof src === "object" ? URL.createObjectURL(src) : src;
  }

  return (
    <div>
      <form>
        <label htmlFor="minicourseName">Minicourse name: </label>
        <input
          type="text"
          value={minicourseToEdit.name}
          onChange={(event) => handleChange("name", event)}
          name={"minicourseName"}
        />
        <label htmlFor="minicourseDesc">Minicourse description: </label>
        <textarea
          type="text"
          value={minicourseToEdit.description}
          onChange={(event) => handleChange("description", event)}
          name={"minicourseDesc"}
        />
        <label>Minicourse thumbnail: </label>
        {
          minicourseToEdit.thumbnail && (
            <img alt={`thumbnail-${minicourseToEdit.name}`} src={handleImgSrc(minicourseToEdit.thumbnail)}></img>
          )
        }
        <input
          type="file"
          accept="image/png, image/jpeg"
          ref={fileRef}
          onChange={() => handleImageUpload()}
        />
        {
          categories.map(category => {
            return (
              <div key={category.id}>
                <input onChange={(event) => handleCheckBox(event, category)} name="catName" type={"checkbox"} />
                <label htmlFor="catName">{category.name}</label>
              </div>
            )
          })
        }
        <button type="button" onClick={(e) => handleSetCategories(e)}>Set categories</button>
        <div>
          {minicourseToEdit.categories.length > 0 && <b>This minicourse belongs to the following categories:</b>}
          <ul>
            { Object.keys(minicourseToEdit).length && (
                minicourseToEdit.categories.map(minicourseCategory =>
                  <li key={minicourseCategory.id}>{minicourseCategory.name}</li>
                )
              )
            }
          </ul>
        </div>
        <button type={"button"} onClick={() => handleSubmit()}>Save</button>
      </form>
      {
        errorMessage && <div>{errorMessage}</div>
      }
    </div>

  )
}

export default EditMinicourse;
