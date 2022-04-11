import { useAppSelector, useAppDispatch } from 'src/app/hook'
import { increase, decrease } from './counterSlice'

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.count.value)
  const dispatch = useAppDispatch()

  function handleIncrease() {
    dispatch(increase())
  }

  function handleDecrease() {
    dispatch(decrease())
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}
