import { Input } from '@windmill/react-ui'
import { useAppDispatch, useAppSelector } from 'app/hook'
import Spinner from 'components/Spinner/Spinner'
import { fetchSkills } from 'features/skill/fetchSkills'
import { selectSkills } from 'features/skill/skillSlice'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../components/Typography/PageTitle'

import {
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from '@windmill/react-ui'
import { Icons } from 'icons'
import { Skill } from 'models'

const { EditIcon, SortIcon } = Icons
function SkillPage() {
  const [pageTable, setPageTable] = useState(1)
  const [searchName, setSearchName] = useState('')
  const [isAsc, setIsAsc] = useState(true)
  const dispatch = useAppDispatch()
  const { skills } = useAppSelector(selectSkills)

  useEffect(() => {
    dispatch(fetchSkills())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let dataTable = skills
  // dataTable = dataTable.filter((skill: Skill) => {
  //   return (
  //     skill.name.toLowerCase().includes(searchName.toLowerCase()) &&
  //     skill.email.toLowerCase().includes(searchEmail.toLowerCase())
  //   )
  // })

  dataTable.slice().sort((a, b) => {
    if (isAsc) {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    } else {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  // pagination setup
  const resultsPerPage = 10
  const totalResults = skills.length

  dataTable = dataTable.slice(
    (pageTable - 1) * resultsPerPage,
    pageTable * resultsPerPage
  )

  // pagination change control
  function onPageChangeTable2(p: any) {
    setPageTable(p)
  }

  function onSortChange() {
    setIsAsc(!isAsc)
  }

  return (
    <>
      <div className="flex justify-between">
        <PageTitle>Skills</PageTitle>
        <div className="my-6">
          <Link to="/skills/create">
            <Button>
              Create skill
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex mb-4">
        <Input
          className="mr-4"
          aria-label="Bad"
          placeholder="Description"
          css=""
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      {/* <SectionTitle>Table with actions</SectionTitle> */}
      {skills.length === 0 ? (
        <Spinner />
      ) : (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Id</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span>Date Created</span>
                    <button onClick={onSortChange}>
                      <SortIcon className="ml-1" />
                    </button>
                  </div>
                </TableCell>
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {dataTable?.map((skill: Skill, i: number) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{skill.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{skill.description}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {new Date(skill.createdAt).toLocaleDateString()}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center items-center space-x-4">
                      <Link to={`/skills/${skill.id}`}>
                        <Button layout="link" size="small" aria-label="Edit">
                          <EditIcon className="w-5 h-5" aria-hidden="true" />
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={onPageChangeTable2}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      )}
    </>
  )
}

export default SkillPage
