import PageTitle from '../components/Typography/PageTitle'
import { Input, HelperText, Label, Button } from '@windmill/react-ui'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAppDispatch } from 'app/hook'
import { createAdmin } from 'features/admin/createAdmins'

const schema = yup
  .object({
    email: yup.string().email().required('Email is required'),
    name: yup.string().min(2).max(50).required('Fullname is required'),
    phone: yup.string().max(24).required('Phone number is required'),
    password: yup.string().min(8).max(16).required('Password is required'),
    confirmPassword: yup
      .string()
      .min(8)
      .max(16)
      .required('Conform password is required')
      .oneOf([yup.ref('password')], 'Password must match'),
  })
  .required()

function CreateAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const dispatch = useAppDispatch()

  function onSubmit(data: any) {
    dispatch(createAdmin({ ...data, confirmPassword: undefined }))
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle>Create Admin</PageTitle>
        <div>
          <Link to="/admins">
            <Button>Back</Button>
          </Link>
        </div>
      </div>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <span>Email</span>
            <Input
              {...register('email')}
              css=""
              className="mt-1"
              placeholder="Email"
              type="email"
              valid={errors.email === undefined}
            />
            <HelperText valid={false}>{errors.email?.message}</HelperText>
          </Label>

          <Label className="mt-4">
            <span>Full name</span>
            <Input
              {...register('name')}
              className="mt-1"
              placeholder="Fullname"
              css=""
              valid={errors.name === undefined}
            />
            <HelperText valid={false}>{errors.name?.message}</HelperText>
          </Label>

          <Label className="mt-4">
            <span>Phone Number</span>
            <Input
              {...register('phone')}
              className="mt-1"
              css=""
              placeholder="Phone Number"
              type="number"
              valid={errors.phone === undefined}
            />
            <HelperText valid={false}>{errors.phone?.message}</HelperText>
          </Label>

          <Label className="mt-4">
            <span>Password</span>
            <Input
              {...register('password')}
              css=""
              className="mt-1"
              placeholder="Password"
              type="password"
              valid={errors.password === undefined}
            />
            <HelperText valid={false}>{errors.password?.message}</HelperText>
          </Label>

          <Label className="mt-4">
            <span>Confirm password</span>
            <Input
              {...register('confirmPassword')}
              css=""
              className="mt-1"
              placeholder="Confirm password"
              type="password"
              valid={errors.password2 === undefined}
            />
            <HelperText valid={false}>
              {errors.confirmPassword?.message}
            </HelperText>
          </Label>

          <div className="flex justify-center">
            <Button className="mt-6" type="submit">
              Create Admin
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateAdmin
