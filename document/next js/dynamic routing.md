### 동적 라우트

Next.js에는 페이지에 중괄호를 사용하여({`[params]`}) 동적 라우트를 구현할 수 있다.

**예제**: `pages/post/[pid].js`의 동적 라우트

```javascript
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default Post;
```

패턴과 일치하는 경로의 파라미터 값은 쿼리 파라미터로 페이지에 전달된다.

**예제**

```javascript
{ "pid" : "abc" } // `/post/abc`
{ "foo": "bar", "pid" : "abc" } // `/post/abc?foo=bar`
{ "pid" : "abc" } // `post/abc?pid=123`
```

파라미터를 여러개 가지는 경우에도 동일하게 적용된다.

`pages/post/[pid]/[comment].js`의 동적 라우트

```javascript
{ "pid" : "abc", "comment" : "a-comment" } // `/post/abc/a-comment`
```

**패턴이 일치하는 모든 경로**

점 세개를 중괄호 안의 파라미터 앞에 붙이면 일치하는 모든 경로에 적용된다.

`pages/post/[...slug].js`의 동적 라우트

```javascript
{ "slug" : ['a'] } // `/post/a`
{ "slug" : ['a', 'b'] } // `/post/a/b`
{ "slug" : ['a', 'b', 'c'] } // `/post/a/b/c`
```

**패턴이 일치하는 선택적 경로**

파라미터를 감싸는 대괄호를 두 개 사용하면 선택적으로 경로를 적용한다.

`pages/post/[[...slug]].js`의 동적 라우트

```javascript

```

두 방식의 차이점은 파라미터가 비어있는 경로의 허용 여부다. (`/post`)

### 주의사항

- 사전에 정의된 경로들은 동적 라우트의 패턴 일치가 적용되지 않는다.
  - `pages/post/create.js` - `/post/create`와 일치한다.
  - `pages/post/[pid].js` - `match /post/1`, `/post/abc` 등과 일치하지만 `/post/create`는 일치하지 않는다.
  - `pages/post/[...slug].js` - `/post/1/2`, `/post/a/b/c` 등과 일치하지만 `/post/create`, `/post/abc`는 일치하지 않는다.
- 정적 최적화가 이루어진 페이지들은 Hydrate(HTML 코드와 React의 JS 코드를 일치시키는 과정)에서 쿼리 객체로 빈 객체를 받는다.
  - Hydration이 끝난 후에 Next.js는 쿼리 객체를 통해 애플리케이션에 경로 파라미터를 추가하는 작업을 발생시킨다.
