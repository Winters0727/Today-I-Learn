# React Query

**React Query**는 React App에서 서버의 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트하는 작업을 도와주는 라이브러리

- 복잡하고 장황한 코드가 필요한 다른 데이터 불러오기 방식과 달리 React Component 내부에서 간단하고 직관적으로 API를 사용할 수 있다.
- React Query에서 제공하는 캐싱, Window Focus ReFetching 등의 다양한 기능을 활용하여 API 요청과 관련된 번잡한 작업 없이 "핵심 로직"에 집중할 수 있다.

**`useQuery`**

```javascript
const { isLoading, error, data } = useQuery(queryKey, fetchFn, options);
```

- `isLoading`: 요청의 상태 및 정보
- `queryKey`: Response Caching을 위해 각 요청을 구분하기 위한 Key (String / Array)
- `fetchFn`: Data Fetching을 수행할 Fetch 함수

**`useMutation`**

```javascript
const { mutate, isLoading, error, data } = useMutation(mutationFn, options);
```

- `mutate`: 수정 요청을 실행하는 함수
- `isLoading`: 요청의 상태 및 정보
- `mutationFn`: Data Mutation을 수행할 Fetch 함수

### Query Client

React Query의 Hook 메서드와 서버 사이의 요청을 관리하는 객체

- 캐시, 이벤트 관리 등
- 브라우저의 로컬 스토리지 활용 및 브라우저 이벤트를 감지하여 데이터를 갱신

### `useQuery` 예제

`useQuery` Hook은 서버의 상태를 캐싱하여 현재의 데이터를 서버의 데이터와 지속적으로 동기화한다.

```javascript
// App.jsx
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
};
```

```javascript
// Users.jsx
import { useQuery } from "react-query";

const Users = () => {
  const { isLoading, error, data } = useQuery("userInfo", () =>
    axios.get(URL).then(({ data }) => data)
  );

  if (isLoading) return <div>Loading...</div>;
};
if (error) {
  return <div>{error.message}</div>;
}

return (
  <div>
    {data.map((item) => (
      <div>{item}</div>
    ))}
  </div>
);
```

- `userInfo`는 각 요청을 구분하기 위한 QueryKey의 역할을 한다.
- `axios.get(URL)`은 실제 API를 요청하는 비동기 함수다.

### `useMutation` 예제

`useMutation` Hook은 서버 상태를 수정하기 위해 사용한다.

```javascript
const NotificationSwitch = () => {
  const { mutate, isLoading } = useMutation((value) =>
    axios.post(URL, { value })
  );

  return (
    <Switch
      checked={value}
      disabled={isLoading}
      onChange={(checked) => mutate(checked)}
    />
  );
};
```

- `useMutation` Hook의 반환값인 `mutate` 함수를 사용하여 원하는 시점에 서버에 API 요청을 보낼 수 있다.
- `mutate` 함수의 파라미터는 `useMutation` Hook에서 mutationFn의 파라미터로 전달된다.
