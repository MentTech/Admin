import React from 'react'
import { config } from '../config/mainConfig'
import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
// import { GithubIcon, TwitterIcon } from '../icons';
import { Navigate } from 'react-router-dom'
import { Label, Input, Button, HelperText } from '@windmill/react-ui'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
  })
  .required()

export interface LoginPageProps {}

function Login(props: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  // if (props.auth.isSignedIn) {
  //   return <Navigate to="/" replace />
  // }

  async function onSubmit(data: any) {
    props.signIn(data)
  }

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Label>
                  <span>Email</span>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="email"
                        className="mt-1"
                        placeholder="Email"
                        css={true}
                      />
                    )}
                  />
                </Label>
                <HelperText valid={false}>{errors.email?.message}</HelperText>

                <Label className="mt-4">
                  <span>Password</span>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="password"
                        className="mt-1"
                        placeholder="Password"
                        css={true}
                      />
                    )}
                  />
                </Label>
                <HelperText valid={false}>
                  {errors.password?.message}
                </HelperText>
                <Button type="submit" className="mt-4" block>
                  Login
                </Button>
              </form>

              <hr className="my-8" />
            </div>
          </main>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default Login
