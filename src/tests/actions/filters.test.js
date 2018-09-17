import {setStartDate,setEndDate, sortByDate, sortByAmount,setTextFilter  } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate:moment(0)
    })
})


test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate:moment(0)
    })
})

test('Should generate SortByDate', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('Should generate SortByAmount', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should set up setTextFilter with inputs',()=>{
    const text = 'abc'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'abc'
    })
})

test('Should set up setTextFilter with defaults', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})