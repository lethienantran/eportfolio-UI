import React from 'react'
import Select from 'react-select';

import './StandardDropDown.css'

function StandardDropDown(props) {
    const [selectedCollaborators, setSelectedCollaborators] = React.useState([]);

  const collaboratorsOptions = [
    { value: 'collab1', label: 'Collaborator 1' },
    { value: 'collab2', label: 'Collaborator 2' },
    { value: 'collab3', label: 'Collaborator 3' },
    { value: 'collab4', label: 'Collaborator 4' },
    { value: 'collab5', label: 'Collaborator 5' },
    //... add more collaborators here
  ];

  const handleCollaboratorsChange = selectedOptions => {
    setSelectedCollaborators(selectedOptions);
  };

  const DropDownStyles = {
    dropdownIndicator: (provided) => ({
      ...provided,
      display: 'none'
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none'
    }),
    clearIndicator: (provided) => ({
      ...provided,
      display: 'none'
    }),
    control: (provided, state) => ({
      ...provided,
      height: 'calc(7vmin)',
      width: 'calc(38vmin)',
      overflowY: 'auto',
      borderRadius: 'calc(1vmin)',
      border: state.isFocused ? 'solid var(--Black1) calc(0.31vmin)' : 'solid var(--Gray1) calc(0.31vmin)',
      paddingLeft: 'calc(2.5vmin)',
      paddingRight: 'calc(2.5vmin)',
      fontFamily: '"Inter Regular"',
      fontSize: 'calc(1.65vmin)',
      outline: 'none',
      boxShadow: 'none',
      '&:hover': { borderColor: state.isFocused ? 'var(--Black1)' : 'var(--Gray1)' }
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: '"Inter Regular"',
      fontSize: 'calc(1.65vmin)',
    }),
    input: (provided) => ({
      ...provided,
      fontFamily: '"Inter Regular"',
      fontSize: 'calc(1.65vmin)',
    }),
    multiValue: (provided) => ({
      ...provided,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: 'calc(12.5vmin)',
      overflowY: 'auto'
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      fontSize: 'calc(1.65vmin)',
    }),
  };

  return (
    <Select 
    isMulti={props.isMulti}
    name={props.name}
    value={selectedCollaborators} //sample
    onChange={handleCollaboratorsChange} //sample
    options={collaboratorsOptions} //sample
    placeholder={props.placeholder}
    styles={DropDownStyles}
    className={`${props.className} StandardDropDown`}
    />
  )
}

export default StandardDropDown