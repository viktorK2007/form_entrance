import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";

 function FormLogin() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Некорректный email"),
      password: (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(value)
          ? null
          : "Некорректный пароль",
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
          label="Email"
          placeholder=""
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label="Пароль"
          placeholder=""
          {...form.getInputProps("password")}
        />
        <Group mt="md" justify="space-between">
          <Checkbox
            label="Запомнить меня"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <a style={{ color: "#0000EE" }}>Забыли пароль?</a>
        </Group>

        <Group mt="md">
          <Button fullWidth type="submit">
            Войти
          </Button>
        </Group>

        <Link style={{ textDecoration: "none" }} to="/signup">
          <Group mt="md">
            <Button fullWidth variant="default">
              Ещё не зарегистрированы
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

export default FormLogin;