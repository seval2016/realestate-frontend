"use client"
import Form from 'react-bootstrap/Form';


function SelectInp({ title, className,selections, ...rest }) {
  return (
    <Form.Select className={className} aria-label="Default select example">
          <option>{title}</option>
          {selections.map((opt) => (
          <option value={opt.name} key={opt.id}>{opt.name}</option>
        ))}
    </Form.Select>
  );
}

export default SelectInp;