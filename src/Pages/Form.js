import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is Required!"),
    email: yup.string().email().required("Email is Required!"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required("Age must be minimum 18!"),
    password: yup.string().min(4).max(20).required("Password is Required!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
