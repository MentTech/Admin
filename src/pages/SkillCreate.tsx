import PageTitle from '../components/Typography/PageTitle'
import { Input, HelperText, Label, Button } from '@windmill/react-ui'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAppDispatch } from 'app/hook'
import { createSkill } from 'features/skill/createSkill'
import { toast } from 'react-toastify'

const schema = yup
  .object({
    description: yup.string().required('Description is required'),
  })
  .required()

function SkillCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const dispatch = useAppDispatch()

  async function onSubmit(data: any) {
    const actionResult = await dispatch(createSkill(data))
    if (createSkill.fulfilled.match(actionResult)) {
      toast.success('Skill created successfully')
    }
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle>Create Skill</PageTitle>
        <div>
          <Link to="/skills">
            <Button>Back</Button>
          </Link>
        </div>
      </div>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <span>Description</span>
            <Input
              {...register('description')}
              css=""
              className="mt-1"
              placeholder="Description"
              type="text"
              valid={errors.description === undefined}
            />
            <HelperText valid={false}>{errors.description?.message}</HelperText>
          </Label>

          <div className="flex justify-center">
            <Button className="mt-6" type="submit">
              Create Skill
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SkillCreate
