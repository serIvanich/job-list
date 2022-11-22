import React from 'react'
import type { JobType } from '../bll/app-reducer'

export const JobList: React.FC<JobListPropsType> = React.memo(({ list }: JobListPropsType) => {
  if (list.length === 0) {
    return <div>no job</div>
  }
  return (
    <div className='max-w-{size} text-ct'>
      <JobSection job={list[0]} />
    </div>
  )
})

const JobSection: React.FC<JobSectionPropsType> = ({ job }) => {
  const { pictures, description, location, title, updatedAt, ...restJob } = job

  return (
    <div className='w-[1400px] h-[164px] flex flex-row items-center space-x-4 px-4 py-6 border'>
      <div className='w-11/12 h-full flex flex-row  space-x-4'>
        <div className='flex border'>
          <div
            className='w-[85px] h-[85px] self-start relative inset-0 border rounded-full bg-cover text-base'
            style={{ backgroundImage: `url(${pictures[0]})` }}
          ></div>
        </div>

        <div className=' w-5/6 flex flex-col justify-between border'>
          <div className='border'>{description.slice(0, 100)}</div>
          <div className='border'>{title}</div>
          <div className='border'>{`${location.lat} ${location.long}`}</div>
        </div>
        <div className=' w-1/6 flex justify-center border'>
          <div className='self-center border'>star</div>
        </div>
      </div>

      <div className='w-1/12 text-center border'>{updatedAt.slice(0, 11)}</div>
    </div>
  )
}

JobList.displayName = 'JobList'

//types
type JobListPropsType = {
  list: Array<JobType>
}
type JobSectionPropsType = {
  job: JobType
}
