import React from 'react'
import type { JobType } from '../bll/app-reducer'
type JobListPropsType = {
  list: Array<JobType>
}
export const JobList: React.FC<JobListPropsType> = ({list}) => {
  console.log(list)
  return <div className='text-ct'>job list</div>
}
