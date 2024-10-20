import React, { useEffect, useState } from 'react'
import styles from '@/styles/addTask.module.css'

const AddTask = ({ tasks, setTask, handleToggle, taskToEdit }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'low',
  })

  useEffect(() => {
    if (taskToEdit) {
      // Set newTask to the taskToEdit values when editing
      setNewTask({
        title: taskToEdit.title,
        description: taskToEdit.description,
        priority: taskToEdit.priority,
      })
    } else {
      // Reset the form when adding a new task
      setNewTask({ title: '', description: '', priority: 'low' })
    }
  }, [taskToEdit])

  const addTask = () => {
    const updatedTasks = [
      ...tasks,
      { ...newTask, id: Date.now(), completed: false },
    ]
    setTask(updatedTasks)

    setNewTask({ title: '', description: '', priority: 'low' })
  }

  const editTask = () => {
    const updatedTasks = tasks.map((item) =>
      item.id === taskToEdit.id ? { ...item, ...newTask } : item
    )
    setTask(updatedTasks)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskToEdit) {
      editTask()
    } else {
      addTask()
    }
    handleToggle()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay}></div>

      <div className={styles.modal__content}>
        <button
          onClick={() => handleToggle()}
          className={styles.modal__close_btn}
        >
          &times;
        </button>

        <div className={styles.modal__header}>
          <h4 className={styles.modal__title}>
            {taskToEdit ? 'Edit Task' : 'Add a New Task'}
          </h4>
        </div>

        <form onSubmit={handleSubmit} className={styles.modal__form}>
          <div className={styles.modal__form_group}>
            <label htmlFor='name' className={styles.modal__label}>
              Title
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className={styles.modal__input}
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              placeholder='Enter task name'
              required
            />
          </div>

          <div className={styles.modal__form_group}>
            <label htmlFor='description' className={styles.modal__label}>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className={styles.modal__input}
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              placeholder='Enter task description'
              rows='4'
              required
            ></textarea>
          </div>

          <div className={styles.modal__form_group_checkbox}>
            <label htmlFor='priority' className={styles.modal__label}>
              Priority
            </label>
            <select
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({ ...newTask, priority: e.target.value })
              }
            >
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>
          </div>

          <div className={styles.modal__form_group}>
            <button type='submit' className={styles.modal__submit_btn}>
              {taskToEdit ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask
