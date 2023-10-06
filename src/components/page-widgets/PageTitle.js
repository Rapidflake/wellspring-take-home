import { Helmet, HelmetProvider } from "react-helmet-async";

const PageTitle = ({ title }) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
    </Helmet>
  </HelmetProvider>
);

export default PageTitle;
