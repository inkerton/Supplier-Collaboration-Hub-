import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
// import styles from "./Counter.module.css"
import {
  // decrement,
  increment,
  // incrementAsync,
  // incrementByAmount,
  // incrementIfOdd,
  selectCount,
  selectStatus,
} from "./counterSlice"

export function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  // const [incrementAmount, setIncrementAmount] = useState("2")

  // const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div>
        
      </div>
    </div>
  )
}
