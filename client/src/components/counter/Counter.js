import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, incrementAsync, incrementByAmount, selectCount} from './counterSlice';
import Input from "semantic-ui-react/dist/commonjs/elements/Input";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
      <div>
        <Button onClick={() => dispatch(increment())}> + </Button>
        <span>{count}</span>
        <Button onClick={() => dispatch(decrement())} > - </Button>
        <Input
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0)) } > Add Amount </Button>
        <Button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))} > Add Async </Button>
      </div>
  );
}
