import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import NewNavigation from "../components/newNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured!";
  let message = error.message || "Something went wrong!";

  return (
    <>
      <NewNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
