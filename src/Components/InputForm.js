import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const InputForm = (props) => {
  const { updateLeaderboardArray } = props;
  const initialInputState = {
    player: '',
    score: '',
    team: '',
    food: 'Select Food',
  };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const [dropdownOpen, setOpen] = useState(false);
  const { player, score, team, food } = eachEntry;

  const toggle = () => setOpen(!dropdownOpen);

  const handleInputChange = (e) => {
    setEachEntry({
      ...eachEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (food === 'Select Food') {
      alert('Please Select Food');
    } else {
      updateLeaderboardArray(eachEntry);
      setEachEntry(initialInputState);
    }
  };

  return (
    <div>
      <Row>
        <Col sm='12' md={{ size: 6, offset: 3 }} className='text-center'>
          <h2>Leaderboard</h2>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <Form onSubmit={handleFinalSubmit}>
            <FormGroup>
              <Label for='player'>Player</Label>
              <Input
                name='player'
                placeholder='Ex: Player 1'
                onChange={handleInputChange}
                value={player}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for='score'>Score</Label>
              <Input
                name='score'
                placeholder='Ex: 2345'
                onChange={handleInputChange}
                value={score}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for='team'>Team</Label>
              <Input
                name='team'
                placeholder='UT'
                onChange={handleInputChange}
                value={team}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for='food'>Food Type</Label>
              <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color='info'>
                  {food}
                </DropdownToggle>
                <DropdownMenu name='food'>
                  <DropdownItem
                    onClick={handleInputChange}
                    value='Juice'
                    name='food'
                  >
                    Juice
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleInputChange}
                    value='Veg'
                    name='food'
                  >
                    Veg
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleInputChange}
                    value='Non-Veg'
                    name='food'
                  >
                    Non-veg
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </FormGroup>
            <Button type='submit'>Submit</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default InputForm;
