import { all, fork, takeEvery } from 'redux-saga/effects';
import { emailAction } from '../actions';
// import { api } from '../services'

// resuable fetch Subroutine
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...
// id     : login | fullName
// url    : next page url. If not provided will use pass id to apiFn
// function* fetchEntity(entity, apiFn, id, url) {
//   yield put( entity.request(id) )
//   const {response, error} = yield call(apiFn, url || id)
//   if(response)
//     yield put( entity.success(id, response) )
//   else
//     yield put( entity.failure(id, error) )
// }
//
// export const validateEmail = fetchEntity.bind(null, email, api.validateEmail)

export function* validateEmail() {
  // const products = yield call(api.getProducts)
  // yield put(email.success(products))
  debugger // tslint:disable-line
  yield
}

export function* watchEmailInputChange() {
  yield takeEvery(emailAction.request, validateEmail)
}


export default function* root() {
  yield all([
    fork(watchEmailInputChange)
  ])
}
