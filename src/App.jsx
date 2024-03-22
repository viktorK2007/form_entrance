import "@mantine/core/styles.css";
import Form from "./form_login.jsx";
import { MantineProvider } from "@mantine/core";

export default function App() {
  return(
    <MantineProvider>
      <Form/>
    </MantineProvider>
  )
}

