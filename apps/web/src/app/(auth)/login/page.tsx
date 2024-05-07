'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useLogin from '@/hooks/api/auth/useLogin';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const { login } = useLogin();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: (values) => {
        login(values);
      },
    });
  return (
    <main className="bg-[#212120] h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 mb-6 ">
        <div className="mt-16 flex justify-center">
          <Card className="w-[350px]  bg-[#E7E7E5] text-[#212120]">
            <CardHeader className="space-y-4">
              <CardTitle className="text-center text-2xl mt-4">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Type your email here"
                    value={values.email}
                    error={errors.email}
                    isError={!!touched.email && !!errors.email}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />

                  <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Type your Password here"
                    value={values.password}
                    error={errors.password}
                    isError={!!touched.password && !!errors.password}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                  <p
                    className="cursor-pointer text-end text-xs"
                    onClick={() => router.push('/forgot-password')}
                  >
                    Forgot Password ?
                  </p>
                  <Button
                    type="submit"
                    className=" mt-3 w-fulltext-[#E7E7E5] bg-[#EC6D47]"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              {/* <Button className=" text-white">Register</Button> */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Login;