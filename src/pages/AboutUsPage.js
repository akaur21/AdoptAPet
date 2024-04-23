import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import NewNavigation from "../components/newNavigation";

function AboutUsPage() {
  let title = "About Us";

  return (
    <>
      <PageContent title={title}>
        <p>Welcome to our pet adopting web application, your one-stop destination for finding the perfect furry companion!
            Our platform connects compassionate individuals with lovable pets in need of forever home.
            With a user-friendly interface, you can easily browse throuth a diverse range of pets by location and type, making
            it convenient to find your ideal match. Wheather you're searching for playful puppy, a cuddly kitten, or a loyal companion
            of any age or breed, our app simplifies the adoption process, allowing you to connect with shelters and rescue organizations
            directly from your device. Join us in making a diffrence in the lives of pets across the nation by welcoming a new member into your family today!
        </p>
      </PageContent>
    </>
  );
}

export default AboutUsPage;
