import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatureJobs from "../FeatureJobs/FeatureJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>

      <div className="mt-12">
        <FeatureJobs></FeatureJobs>
      </div>
      <h2>Home Page</h2>
    </div>
  );
};

export default Home;
