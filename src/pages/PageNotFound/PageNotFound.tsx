import { FC } from "react";
import { Link } from "react-router-dom";
import { PageWrapper } from "./styles";
import { NotFoundMessage } from "./styles";

export const PageNotFound: FC = () => (
  <PageWrapper>
    <NotFoundMessage>Page not found</NotFoundMessage>
    <Link to="/">Go Home</Link>
  </PageWrapper>
);
