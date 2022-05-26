import { Fragment, useEffect, useState, useCallback } from 'react';

// useEffect
// useCallback
// useState
// useMemo

// function plus(a, b) {
//   return a + b;
// }

// const plus = (a,b) => a + b;

function MyFirstComponent(props) {

  useEffect(() => {
    // dependency 배열이 빈배열이면
    // 무조건 컴포넌트가 mount 될때 실행
    console.log('mounted');

    window.addEventListener('aaa', () => {});

    return () => {
      console.log('unmounted') ;
      window.removeEventListener('aaa', () => {});
    }
  }, []);

  return (
    <span>{props.title}</span>
  );
}

function App() {

  const [isVisible, setIsVisible] = useState(false);

  // 인라인으로 클릭이벤트에 바인드된 callback 함수는 isVisible의 변경을 감지 할 수 있는대신
  // 매번 컴포넌트가 업데이트 될 때 마다 재선언된다.

  // useCallback은 스냅샷을 찍는다.. 근데 그 스냅샷을 변경하는 시점이..
  const onClickToggle = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <Fragment>
      <button onClick={onClickToggle}>토글</button>
      <div>
        {isVisible === true && <MyFirstComponent title="Hello React"/>}
      </div>
    </Fragment>
  );
}

export default App;
