import React, { useEffect, useState } from 'react'
import AllTaskList from './AllTaskList'
import NotFound from './NotFound'
import AddTask from './AddTask'

const Task = ({ tasks, setTask, setSearch, handleToggle, handleEdit }) => {
  const sortedTasks = tasks.sort(
    (a, b) =>
      a.completed - b.completed ||
      { high: 1, medium: 2, low: 3 }[a.priority] -
        { high: 1, medium: 2, low: 3 }[b.priority]
  )

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id)
    setTask(updatedTasks)
  }
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
    setTask(updatedTasks)
  }

  return (
    <>
      <div class='container'>
        <div>
          <h2 class='heading'>
            Task Management App
            <div class='search-bar'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 192.904 192.904'
                width='16px'
                class='search-icon'
              >
                <path d='m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z'></path>
              </svg>
              <input
                type='text'
                placeholder='Search for product...'
                class='search-input'
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </h2>
          <div class='container'>
            <div class='sort-container'>
              <h3> Tasks:</h3>
            </div>

            <div class='filter-container'>
              <button className='btn add-task' onClick={() => handleToggle()}>
                Add Task
              </button>
            </div>
          </div>

          <div class='grid-container'>
            {sortedTasks.length === 0 ? (
              <NotFound />
            ) : (
              sortedTasks
                .filter((item) => item.completed === false)
                .map((item) => {
                  return (
                    <AllTaskList
                      key={item.id}
                      {...item}
                      deleteTask={deleteTask}
                      toggleComplete={toggleComplete}
                      handleEdit={handleEdit}
                    />
                  )
                })
            )}
          </div>
          <h3>Completed Tasks</h3>
          <div className='grid-container'>
            {sortedTasks
              .filter((item) => item.completed === true)
              .map((item) => {
                return (
                  <AllTaskList
                    key={item.id}
                    {...item}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                    handleEdit={handleEdit}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Task
