import React, { useEffect } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Link } from 'react-router-dom'
import { Input, HelperText, Label, Button } from '@windmill/react-ui'
import DefaultAvatar from '../assets/img/unnamed.png'
import { selectMentors } from 'features/mentor/mentorSlice'
import { useAppDispatch, useAppSelector } from 'app/hook'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'
import { Mentor } from 'models'
import { fetchMentorById } from 'features/mentor/fetchMentorById'
import ThemedSuspense from 'components/ThemedSuspense'

function MentorDetail(props: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  let { id } = useParams()

  const dispatch = useAppDispatch()
  const { mentors } = useAppSelector(selectMentors)

  let matchedMentor = mentors.find((mentor: Mentor) => {
    return mentor.id.toString() === id?.toString()
  })

  useEffect(() => {
    dispatch(fetchMentorById(id as string))
  }, [])

  function onSubmit(data: any) {
    props.editAdmin(props.auth.user._id, data)
  }

  if (matchedMentor === undefined) {
    return <ThemedSuspense />
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle>Thông tin mentor</PageTitle>
        <div>
          <Link to="/mentors">
            <Button>Quay lại</Button>
          </Link>
        </div>
      </div>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex mb-6">
          <div className="flex-shrink-0 flex justify-center w-64">
            <img
              className="mt-8 w-28 h-28 rounded-full"
              src={matchedMentor.avatar || DefaultAvatar}
              alt="avatar"
            />
          </div>
          <div className="mt-8 mr-4 flex-1 w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Label>
                <span>Họ và tên</span>
                <Input
                  className="mt-1"
                  placeholder="Fullname"
                  defaultValue={matchedMentor?.name}
                  disabled
                  css=""
                  valid
                />
              </Label>

              <Label className="mt-4">
                <span>Email</span>
                <Input
                  disabled
                  value={matchedMentor?.email}
                  className="mt-1"
                  placeholder="Email"
                  type="email"
                  css=""
                  valid
                />
              </Label>

              <Label className="mt-4">
                <span>Ngày sinh</span>
                <Input
                  disabled
                  className="mt-1"
                  valid
                  css=""
                  value={new Date(
                    matchedMentor?.birthday as Date
                  ).toLocaleDateString()}
                />
              </Label>

              <Label className="mt-4">
                <span>Số điện thoại</span>
                <Input
                  disabled
                  className="mt-1"
                  css=""
                  placeholder="Phone Number"
                  type="number"
                  value={matchedMentor?.phone}
                  valid
                />
              </Label>

              <Label className="mt-4">
                <span>
                  Ngày tạo:{' '}
                  {new Date(
                    matchedMentor?.createAt as Date
                  ).toLocaleDateString()}
                </span>
              </Label>

              {/* {isMyProfile && (
                <div className="flex justify-center">
                  <Button className="my-6" type="submit">
                    Update
                  </Button>
                </div>
              )} */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default MentorDetail
