import type { AppStateType } from './app-reducer'
import { action, appReducer } from './app-reducer'

let startState: AppStateType

beforeEach(() => {
  startState = {
    jobList: [],
    appStatus: 'idle',
    error: null,
  }
})

test('correct status should be set', () => {
  const endState = appReducer(startState, action.setAppStatus('loading'))

  expect(endState.appStatus).toBe('loading')
})

test('correct data should be set in state', () => {
  const list = [
    {
      id: 'abc',
      name: 'First',
      email: 'first@abc.com',
      phone: '01234567',
      title: 'hello',
      salary: '100$',
      adress: 'my home',
      benefits: ['no', 'yes'],
      location: { lat: 1234, long: 5678 },
      pictures: ['black square', 'white page'],
      createAt: '09.11.22',
      updatedAt: '09.11.22',
      description: 'it is ok',
      employment_type: ['string', 'number', 'boolean'],
    },
  ]
  const endState = appReducer(startState, action.getJobList(list))

  expect(endState.jobList[0].name).toBe('First')
  expect(endState.jobList[0].id).toBe('abc')
})

test('correct error should be set', () => {
  const endState = appReducer(startState, action.setAppError('error'))

  expect(endState.error).toBe('error')
})
