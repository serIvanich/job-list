export enum ActionKind {
  SET_JOB_LIST = 'SET-JOB-LIST-APP',
  SET_STATUS_APP = 'SET-STATUS-APP',
  SET_ERROR_APP = 'SET-ERROR-APP',
}

export type JobType = {
  id: string
  name: string
  email: string
  phone: string
  title: string
  salary: string
  adress: string
  benefits: string[]
  location: LocationType
  pictures: string[]
  createAt: string
  updateAt: string
  description: string
  employment_type: string[]
}
type LocationType = {
  lat: number
  long: number
}
export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type AppStateType = {
  jobList: Array<JobType>
  appStatus: AppStatusType
  error: string | null
}

export const initialState: AppStateType = {
  jobList: [],
  appStatus: 'idle',
  error: null,
}

type GetJobListActionType = {
  type: typeof ActionKind.SET_JOB_LIST
  payload: {
    list: Array<JobType>
  }
}
type SetAppStatusActionType = {
  type: typeof ActionKind.SET_STATUS_APP
  payload: {
    status: AppStatusType
  }
}
type SetAppErrorActionType = {
  type: typeof ActionKind.SET_ERROR_APP
  payload: {
    error: string
  }
}

export type ActionTypes = GetJobListActionType | SetAppStatusActionType | SetAppErrorActionType
export const appReducer = (state: AppStateType, action: ActionTypes): AppStateType => {
  switch (action.type) {
    case ActionKind.SET_JOB_LIST:
      return {
        ...state,
        jobList: [...action.payload.list],
      }
    case ActionKind.SET_STATUS_APP:
      return {
        ...state,
        appStatus: action.payload.status,
      }
    case ActionKind.SET_ERROR_APP:
      return {
        ...state,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export const setAppStatus = (status: AppStatusType): SetAppStatusActionType => ({
  type: ActionKind.SET_STATUS_APP,
  payload: { status },
})
export const setAppError = (error: string): SetAppErrorActionType => ({
  type: ActionKind.SET_ERROR_APP,
  payload: { error },
})

export const getJobList = (list: Array<JobType>): GetJobListActionType => ({
  type: ActionKind.SET_JOB_LIST,
  payload: { list },
})
