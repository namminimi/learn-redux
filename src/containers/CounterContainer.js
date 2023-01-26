import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

const CounterContainer = () => {
    //useSelector()는 리덕스 스토어의 상태를 조회하는 hook입니다.
    const {number, diff} = useSelector(state=>state.counter);
    
    const dispatch = useDispatch();
    //각 액션들을 디스패치하는 함수
    const onIncrease =()=> dispatch(increase());        //{type: INCREMENT}
    const onDecrease = () => dispatch(decrease());      //{type: DECREMENT}
    const onsetDiff = diff => dispatch(setDiff(diff));  //{type: SET_DIFF, diff}
    return (
        <Counter number={number} 
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onsetDiff}
        />
    );
};

export default CounterContainer;