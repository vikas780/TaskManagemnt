import localFont from 'next/font/local'
import Task from '@/components/Task'
import { useEffect, useState } from 'react'
import AddTask from '@/components/AddTask'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function Home({ initialTasks }) {
  const [task, setTask] = useState(initialTasks || [])
  const [search, setSearch] = useState('')
  const [toggle, setToggle] = useState(false)
  const [taskToEdit, setTasktoEdit] = useState(null)

  const filterTasks = task.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  )

  const handleToggle = () => {
    setToggle(!toggle)
    setTasktoEdit(null)
  }

  const handleEdit = (id) => {
    const tasks = task.find((t) => t.id === id)
    setTasktoEdit(tasks)
    setToggle(true)
  }

  return (
    <div>
      <Task
        tasks={filterTasks}
        setTask={setTask}
        setSearch={setSearch}
        handleToggle={handleToggle}
        handleEdit={handleEdit}
      />
      {toggle && (
        <AddTask
          tasks={filterTasks}
          setTask={setTask}
          setSearch={setSearch}
          handleToggle={handleToggle}
          taskToEdit={taskToEdit}
        />
      )}
    </div>
  )
}

export const getServerSideProps = async () => {
  const initialTasks = [
    {
      id: 1,
      title: ' Assignment on ReactJS',
      description:
        'Finish the React js assignment covering hooks, contextAPI and Redux Toolkit. Deadline is next Monday.',
      priority: 'high',
      completed: false,
    },
    {
      id: 2,
      title: ' Study for Midterm Exam',
      description:
        ' Review lecture notes and practice problems for the upcoming midterm exam in calculus. Set aside 2 hours daily for preparation.',
      priority: 'medium',
      completed: false,
    },
    {
      id: 3,
      title: 'Join Coding Club Meeting',
      description:
        'Attend the coding clubs meeting on Wednesday to learn about the new project ideas and network with peers',
      priority: 'low',
      completed: true,
    },
    {
      id: 4,
      title: 'Register for Internship Program',
      description:
        'Submit the application for the summer internship program before the end of the month. Update resume and write a cover letter.',
      priority: 'high',
      completed: false,
    },
  ]
  return {
    props: { initialTasks },
  }
}
