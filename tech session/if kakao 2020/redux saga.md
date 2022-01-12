# Redux Saga

`Redux Saga`는 `Redux` 사용 중에 필요한 비동기 작업을 쉽게 처리하도록 도와주는 라이브러리

```javascript
import { select, call, put, take } from "redux-saga/effects";

function* saga() {
  const id = yield select(getID); // redux에서 값 가져오기
  const result = yield call(fetchData, id); // API 호출하기
  yield put(result); // 응답값 redux에 업데이트 하기
}

function* watchSaga() {
  take(GET_DATA_ACTION, saga); //GET_DATA_ACTION 기다리기
}
```

- **`select`**: `redux` 저장소에서 값을 가져올 때 사용
- **`call`**: 비동기 요청 함수를 실행할 때 사용
- **`put`**: `redux` 저장소의 값을 업데이트하는 `action`을 `dispatch`할 때 사용
- **`take`**: `redux`의 `action`이 `dispatch`되면 saga를 실행하도록 `action`을 구독할 때 사용

### 다중 비동기 요청 `fork`/`spawn`

- **`fork`**: 다중 비동기 요청에 사용. 자녀들의 작업이 부모에게 종속
  - 자녀들의 작업이 모두 종료될 때까지 제어권이 부모에게로 넘어가지 않는다.
- **`spawn`**: 다중 비동기 요청에 사용. 자녀들의 작업이 부모로부터 독립
  - 자녀들의 작업의 종료 여부와 상관없이 제어권이 부모에게 넘어간다.(요청을 보냈다는 사실에 의의를 둔다.)
