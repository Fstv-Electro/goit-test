import { Container, Section } from "./App.styled";
import { UserList } from "./UserItemList/UserItemList";

export const App = () => {
  return (
    <Container>
      <Section>
        <UserList/>
      </Section>
    </Container>
  );
};
