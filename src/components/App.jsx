import React, { useState } from "react";
import { UserList } from "./UserItemList/UserItemList";
import { Container, Section, AppHeader } from "./App.styled";
import Logo from '../image/Logo.svg';
import Select from "react-select";


const options = [
    { value: 'all', label: 'All' },
    { value: 'follows', label: 'Follows' },
    { value: 'followings', label: 'Followings' },
];

export const App = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <Container>
      <AppHeader>
        <img src={Logo} alt="logo header" style={{width: 76, height: 220}}/>
        <Select
            options={options}
            onChange={setSelectedOption}
            defaultValue={selectedOption}
            name="filter"
            styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
                    borderColor: '#5CD3A8',
                    width: 200,
                    zIndex: 151,
            }),
          }}
        />  
      </AppHeader>
      <Section>
        <UserList filter={ selectedOption }/>
      </Section>
    </Container>
  );
};
