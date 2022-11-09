import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import { appReducer, initialState } from '../bll/app-reducer'
import { JobList } from './JobList'
import { JobPage } from './JobPage'

export const App = () => {

  const [state, _disapatch] = useReducer(appReducer, initialState)
  
  const list = [...state.jobList]
  return (
    <div className='flex flex-col items-center mt-16'>
      <Routes>
        <Route path='/' element={<JobList list={list}/>} />
        <Route path={'/job:id'} element={<JobPage />} />
      </Routes>
    </div>
  )
}
