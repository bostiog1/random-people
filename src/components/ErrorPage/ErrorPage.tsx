import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PageWrapper, ErrorMessage, HomeLink } from "./styles";

// ErrorPage component to display error messages and navigate back to home page
export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the error message from the state or use a default message
  // Memoize the error message
  const message = useMemo(() => {
    return location.state?.message || "An unexpected error occurred.";
  }, [location.state]);

  return (
    <PageWrapper>
      <ErrorMessage>{message}</ErrorMessage>
      <HomeLink onClick={() => navigate("/")}>Go Home</HomeLink>
    </PageWrapper>
  );
};
