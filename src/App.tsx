import { Button } from "./components";

function App() {
  return (
    <div>
      <h1>Lumenis shared components playground</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
