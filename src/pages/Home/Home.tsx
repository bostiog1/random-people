import { Input } from "../../components/Input/Input";
import {
  PageWrapper,
  WarningMessage,
  LoadingMessage,
  Container,
} from "./styles";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import { useUsers } from "../../hooks/useUser";

export const Home = () => {
  const {
    userCount,
    handleInputChange,
    warningMessage,
    users,
    loading,
    error,
  } = useUsers();

  return (
    <PageWrapper>
      <Container>
        <Input value={userCount} onChange={handleInputChange} />
        {warningMessage && <WarningMessage>{warningMessage}</WarningMessage>}
        {loading && <LoadingMessage>Loading...</LoadingMessage>}
        {error && <WarningMessage>{error}</WarningMessage>}
        {!loading && users.length > 0 && <Slideshow users={users} />}
      </Container>
    </PageWrapper>
  );
};
