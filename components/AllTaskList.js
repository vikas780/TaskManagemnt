import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import styles from '@/styles/allTaskList.module.css'

const AllTaskList = ({
  id,
  title,
  description,
  priority,
  deleteTask,
  completed,
  toggleComplete,
  handleEdit,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon_container}>
        <FaRegEdit
          className={styles.card__icon_edit}
          onClick={() => handleEdit(id)}
        />
      </div>
      <div>
        <h3
          className={`${styles.card__title} ${
            priority === 'high'
              ? 'red'
              : priority === 'medium'
              ? 'yellow'
              : 'green'
          } `}
        >
          {title}
        </h3>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.card__bottom}>
          <button className='btn delete' onClick={() => deleteTask(id)}>
            Delete
          </button>
          <button
            className={` btn ${completed ? 'completed' : 'uncomplete'}`}
            onClick={() => toggleComplete(id)}
          >
            {completed ? 'Completed' : 'Mark Completed'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AllTaskList
