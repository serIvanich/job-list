import React, { useReducer, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import type { JobType } from '../bll/app-reducer'
import { appReducer, fetchJobList, initialState } from '../bll/app-reducer'
import { JobList } from './JobList'
import { JobPage } from './JobPage'

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  useEffect(() => {
    if (state.jobList.length === 0) {
      fetchJobList(dispatch)
    }
  }, [state.jobList.length])

  const list = React.useMemo<Array<JobType>>(() => [...state.jobList], [state.jobList])

  return (
    <div className='flex flex-col items-center mt-16'>
      {state.appStatus === 'loading' && <div>loading...</div>}
      <Routes>
        <Route path='/' element={<JobList list={list} />} />
        <Route path={'/job:id'} element={<JobPage />} />
      </Routes>
    </div>
  )
}
