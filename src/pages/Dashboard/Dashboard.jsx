import EnrollForm from "../../components/EnrollForm/EnrollForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/269150.jpg')",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <EnrollForm />
      </div>
    </div>
  );
};

export default Dashboard;
