import jsonServerProvider from "ra-data-json-server";
import { Admin, EditGuesser, Resource } from "react-admin";
import { ClassCodeList } from "./class_codes/ClassCodeList";

const dataProvider = jsonServerProvider("http://localhost:3000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="class_codes" list={ClassCodeList} edit={EditGuesser} />
    </Admin>
  );
}

export default App;
