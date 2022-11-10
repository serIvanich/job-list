import { appApi } from '../api/appApi'

export enum ActionKind {
  SET_JOB_LIST = 'SET-JOB-LIST-APP',
  SET_STATUS_APP = 'SET-STATUS-APP',
  SET_ERROR_APP = 'SET-ERROR-APP',
}

export const initialState: AppStateType = {
  jobList: [],
  appStatus: 'idle',
  error: null,
}

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

export const action = {
  setAppStatus: (status: AppStatusType) =>
    ({
      type: ActionKind.SET_STATUS_APP,
      payload: { status },
    } as const),
  setAppError: (error: string) =>
    ({
      type: ActionKind.SET_ERROR_APP,
      payload: { error },
    } as const),

  getJobList: (list: Array<JobType>) =>
    ({
      type: ActionKind.SET_JOB_LIST,
      payload: { list },
    } as const),
}

export const fetchJobList = async (dispatch: React.Dispatch<ActionTypes>) => {
  try {
    dispatch(action.setAppStatus('loading'))
    const data = await appApi.fetchJobList()
    if (data) {
      dispatch(action.getJobList(data))
      dispatch(action.setAppStatus('succeeded'))
    } else {
      dispatch(action.setAppStatus('failed'))
      dispatch(action.setAppError('some error with getting data'))
    }
  } catch (e) {
    console.log(e)
    dispatch(action.setAppStatus('failed'))

  }
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

export type SetAppStatusActionType = ReturnType<typeof action.setAppStatus>
export type SetAppErrorActionType = ReturnType<typeof action.setAppError>
export type GetJobListActionType = ReturnType<typeof action.getJobList>
export type ActionTypes = GetJobListActionType | SetAppStatusActionType | SetAppErrorActionType

