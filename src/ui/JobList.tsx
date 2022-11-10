import React from 'react'
import type { JobType } from '../bll/app-reducer'
type JobListPropsType = {
  list: Array<JobType>
}
export const JobList: React.FC<JobListPropsType> = React.memo(({ list }: JobListPropsType) => (
  <div className='text-ct'>{list.length > 0 && `${list[0].id}`}</div>
))

JobList.displayName = 'JobList'
