import PageTitle from '../components/Typography/PageTitle'
import { Input, HelperText, Label, Button } from '@windmill/react-ui'
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAppDispatch } from 'app/hook'
import { createSkill } from 'features/skill/createSkill'
import { toast } from 'react-toastify'
import SectionTitle from 'components/Typography/SectionTitle'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const schema = yup
  .object({
    type: yup.string().required('Tên kỹ năng không được bỏ trống'),
    validFrom: yup.date().required('Ngày bắt đầu không được bỏ trống'),
    validTo: yup.date().required('Ngày kết thúc không được bỏ trống'),
    usageLeft: yup.number().required('Số lượng sử dụng không được bỏ trống'),
    coin: yup.number().required('Số coin không được bỏ trống'),
  })
  .required()

const CustomInput = ({
  onChange,
  placeholder,
  value,
  id,
  onClick,
  valid,
}: any) => (
  <Input
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    id={id}
    onClick={onClick}
    valid={valid}
    css=""
  />
)

function CreateGiftCode() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const dispatch = useAppDispatch()

  async function onSubmit(data: any) {}

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle>Tạo giftcode</PageTitle>
        <div>
          <Link to="/giftcodes">
            <Button>Quay lại</Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              <span>Loại giftcode</span>
              <Input
                {...register('type')}
                css=""
                className="mt-1"
                placeholder="Loại giftcode"
                type="text"
                valid={errors.type === undefined}
              />
              <HelperText valid={false}>{errors.type?.message}</HelperText>
            </Label>

            <Label>
              <span>Coin</span>
              <Input
                {...register('type')}
                css=""
                className="mt-1"
                placeholder="Coin"
                type="text"
                valid={errors.type === undefined}
              />
              <HelperText valid={false}>{errors.type?.message}</HelperText>
            </Label>
            <Label>
              <span>Hiệu lực từ</span>
              <Controller
                name="validFrom"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    customInput={
                      <CustomInput
                        placeholder="Hiệu lực từ"
                        valid={errors.validFrom === undefined}
                      />
                    }
                  />
                )}
              />

              <HelperText valid={false}>{errors.validFrom?.message}</HelperText>
            </Label>
            <Label>
              <span>Hiệu lực đến</span>
              <Controller
                name="validTo"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    customInput={
                      <CustomInput
                        placeholder="Hiệu lực đến"
                        valid={errors.validTo === undefined}
                      />
                    }
                  />
                )}
              />
              <HelperText valid={false}>{errors.validTo?.message}</HelperText>
            </Label>

            <div className="flex justify-center">
              <Button className="mt-6" type="submit">
                Tạo
              </Button>
            </div>
          </form>
        </div>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full">
          <SectionTitle>Bảng quy đổi</SectionTitle>
        </div>
      </div>
    </>
  )
}

export default CreateGiftCode
