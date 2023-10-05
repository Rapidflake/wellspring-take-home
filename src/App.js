import logo from "./logo.svg";
import "./App.css";
import useFetch from "./components/fetchData";

const url = "http://localhost:3001/api/patients";

const App = () => {
  const { data, error, isLoading } = useFetch(url);
  console.log(data, error, isLoading);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.length > 0 && (
            <ul>
              {data.map((user) => (
                <li key={user.id}>{user.patientName}</li>
              ))}
            </ul>
          )}
        </p>
      </header>
    </div>
  );
};

export default App;
