/* eslint-disable react/prop-types */
import {useState} from 'react'
import { Form, Segment, Input } from "semantic-ui-react";

const SearchBar = ({ setQuery, loading,reset }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const submit=()=>{
    /* if(e.key==="Enter") */
    setQuery(inputValue)
    reset()
  }
  return (
    <Segment>
      <Form onSubmit={submit}>
        <Form.Field>
          <Input
            value={inputValue}
            loading={loading}
            icon="search"
            iconPosition="left"
            /* onKeyDown={submit} */
            placeholder='Recherche'
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};
export default SearchBar;
