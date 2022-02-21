import "./styles.css";
import { getData } from "./data";

const data = getData(40);

export default function App() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
