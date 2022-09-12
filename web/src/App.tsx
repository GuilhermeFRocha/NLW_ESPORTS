interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return <button>{title}</button>;
}

function App() {
  return (
    <>
      <Button title="Send 1" />
    </>
  );
}

export default App;