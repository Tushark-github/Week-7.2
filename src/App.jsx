import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { countAtom } from "./store/atoms/count"
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("Re-rendering");
  return (
    <div>

      <CountRender />
      <Button />
      <Assignment />
    </div>
  )
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom)
  return (<div>
    <button onClick={() => {
      setCount(count + 1);
    }}>increment</button>

    <button onClick={() => {
      setCount(count - 1);
    }}>decrement</button>

  </div>)
}

function Assignment() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count % 2 == 0 ? `${count} is even` : `${count} is odd`}
  </div>
}

export default App
