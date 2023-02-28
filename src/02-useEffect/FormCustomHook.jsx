import { useForm } from "../hooks/useForm";

export function FormCustomHook() {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  //   const { username, email, password } = formState;

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        className="form-control mt-2"
        type="email"
        placeholder="username@hotmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        className="form-control mt-2"
        type="password"
        placeholder="*******"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-danger mt-2" onClick={onResetForm}>
        Reset
      </button>
      <hr />
      <pre>{JSON.stringify(formState, null, 3)}</pre>
    </>
  );
}
