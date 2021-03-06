import {addExpense, editExpense,removeExpense} from '../../actions/expenses';




test('should set up remove expense action object', ()=>{
    const action = removeExpense( {id:'123'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123'
    })
})

test('should set up editExpense object', ()=>{
    const action = editExpense('123', {note:'new note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates:{
            note:'new note'
        } 
    })
})

test('should setup add expense object with provided values',()=>{
    const expenseData= {
        description:'Rent',
        amount: 500,
        createdAt:600,
        note:'This was Last Month Rent'
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set upt add expense with default', ()=>{
    const action = addExpense();
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        description :'', 
        note : '', 
        amount : 0, 
        createdAt : 0,
        id: expect.any(String)
      }  
    })
})