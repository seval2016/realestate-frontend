import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./rent-sale-button.scss"

const RentSaleButton = () => {
  return (
    <ButtonGroup aria-label="Basic example" className='btn-group'>
      <Button variant="tertiary" className='rent-btn border-secondary-subtle'>Rent</Button>
      <Button variant="tertiary" className='sale-btn border-secondary-subtle'>Sale</Button>
    </ButtonGroup>
  );
}

export default RentSaleButton
