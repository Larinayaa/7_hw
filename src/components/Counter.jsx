import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../store/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Счетчик: {count}</h2>
            <button onClick={() => dispatch(changeCount(1))}>+1</button>
            <button onClick={() => dispatch(changeCount(-1))}>-1</button>
            <button onClick={() => dispatch(changeCount(5))}>+5</button>
        </div>
    );
};
export default Counter;
