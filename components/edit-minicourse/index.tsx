import React, { useState, useEffect, useRef } from 'react';
import { ButtonGroup, CancelButton, CategoriesContainer, Container, ErrorMessage, ImgContainer, SaveButton, SetCategories, Title } from './edit-minicourse.styled-components';
import { FileUploader } from "react-drag-drop-files";

const EditMinicourse = ({
  categories,
  submitInfo,
  cancelButtonBehavior,
  minicourse = null,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [minicourseToEdit, setMinicourseToEdit] = useState({
    name: "",
    description: "",
    thumbnail: null,
    categories: ""
  });

  useEffect(() => {
    if (minicourse) { setMinicourseToEdit(minicourse) }
  }, [minicourse]);

  const handleChange = (key, event) => {
    const value = event.target.value;
    const auxObj = {
      ...minicourseToEdit,
      [key]: value
    };
    setMinicourseToEdit(auxObj);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    const auxObj = {
      ...minicourseToEdit,
      categories: category
    };

    setMinicourseToEdit(auxObj);
  };

  const isFieldEmpy = () => Object.values(minicourseToEdit).some(element => element.length === 0);

  const handleSubmit = () => {
    if (!isFieldEmpy()) {
      setErrorMessage("");
      submitInfo(minicourseToEdit);
    } else {
      setErrorMessage("All fields must be filled.");
    };
  };

  const handleImageUpload = (e) => {
    const file = e

    const auxObj = {
      ...minicourseToEdit,
      thumbnail: file
    };
    setMinicourseToEdit(auxObj);
  }

  const handleImgSrc = (src) => {
    return typeof src === "object" ? URL.createObjectURL(src) : src;
  }

  const handleFileUpload = (file) => {
    console.log(`%c <-- file: -->`, 'background-color: black; color: white; font-weight: bold', file);
  };

  return (
    <Container>
      <Title>Minicourse Info</Title>
      <form>
        <label htmlFor="minicourseName">Name</label>

        <div className={"search-bar"}>
          <div>
            <input
              type="text"
              value={minicourseToEdit.name}
              onChange={(event) => handleChange("name", event)}
              name={"minicourseName"}
            />
          </div>
        </div>

        <label htmlFor="minicourseDesc">Description</label>
        <textarea
          className={"textarea"}
          value={minicourseToEdit.description}
          onChange={(event) => handleChange("description", event)}
          name={"minicourseDesc"}
        />

        <label>Minicourse thumbnail</label>
        {
          minicourseToEdit.thumbnail && (
            <img alt={`thumbnail-${minicourseToEdit.name}`} src={handleImgSrc(minicourseToEdit.thumbnail)}></img>
          )
        }

        <FileUploader
          handleChange={handleImageUpload}
          name="file"
          types={["jpg", "png"]}
          multiple={false}
        />

        <CategoriesContainer>
          <select value={selectedCategory} onChange={(e) => handleCategoryChange(e)}>
            {
              categories.map(category =>
                <option key={category.name}>{category.name}</option>
              )
            }
          </select>
        </CategoriesContainer>
        {
          errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>
        }
        <ButtonGroup>
          <CancelButton onClick={() => cancelButtonBehavior()}>Cancel</CancelButton>
          <SaveButton onClick={() => handleSubmit()}>Save</SaveButton>
        </ButtonGroup>
      </form>

    </Container>

  )
}

export default EditMinicourse;
