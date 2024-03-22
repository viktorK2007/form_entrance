import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";
function FormSignup() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      number: "",
      termsOfService: false,
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Email указан некорректно",
        name: (value) =>
        /^[a-zA-Zа-яА-Я]+$/u.test(value) ? null : "Имя указано некорректно",
      number: (value) =>
        /^[0-9\b]+$/.test(value) ? null : "Телефон указан некорректно",
    },
  });

  return (
    <Box
      maw={510}
      mt={100}
      mx="auto"
      p={50}
      style={{ border: "2px solid gray", borderRadius: "20px" }}
    >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Имя"
          placeholder=""
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder=""
          {...form.getInputProps("email")}
        />
        <TextInput
          variant="unstyled"
          withAsterisk
          label="Номер телефона"
          placeholder=""
          {...form.getInputProps("number")}
        />

        <Group mt="md">
          <Checkbox
            label="Соглашаюсь с условиями"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <a style={{ color: "#0000EE" }}>договора-оферты</a>
        </Group>

        <Group mt="md">
          <Button fullWidth type="submit">
            Зарегистрироваться
          </Button>
        </Group>
        <Link style={{ textDecoration: "none" }} to="/">
          <Group mt="md">
            <Button fullWidth variant="default">
              Назад ко входу
            </Button>
          </Group>
        </Link>
      </form>
      <Group mt={100} justify="space-between">
        <a>Оферта</a>
        <a>Политика конфиденциальности</a>
        <a>О сервисе</a>
      </Group>
    </Box>
  );
}

export default FormSignup;