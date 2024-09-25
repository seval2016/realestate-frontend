import Form from 'react-bootstrap/Form';

function SelectInp({title, className, ...rest}) {
  return (
    <Form.Select aria-label="Default select example" className={className}  {...rest}>
          <option >{title}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default SelectInp;