import { takeEvery, put, delay, takeLeading, takeLatest, takeMaybe } from 'redux-saga/effects'

function* ageIncreasingAsync() {//generator function
    yield delay(4000)
    yield put({ type: 'AGE_UP_ASYNC', value: 1 })
}

export function* watchAgeIncreasing() {
    yield takeMaybe('AGE_UP', ageIncreasingAsync) //different with async constants
}