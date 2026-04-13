import Layout from "../components/layout/Layout";
import ProgressBar from '../components/dashboard/ProgressBar';
import Leaderboard from '../components/dashboard/Leaderboard';
import ProjectList from "../components/dashboard/ProjectList";


const Dashboard = () => {
  return (
    <Layout>
      
      {/* Progress Section */}
      <div className="mb-6">
        <ProgressBar />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left */}
        <div className="col-span-2">
          <ProjectList/>
        </div>

        {/* Right */}
        <div className="col-span-1">
          <Leaderboard />
        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;