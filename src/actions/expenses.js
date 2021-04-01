import uuid from 'uuid';
import database from '../firebase/firebase';

//Steps//
  //component calls action generator
  //action generator returns object
  //component dispatches object
  //redux stores changes

//Steps with async actions//
  //components calls action generator
  //action generator is not going to return an object but will return a function
  //component dispatches function (?) the component is going take whatever comes back from the action gen and dispatch it
  //function runs (has the ability to dispatch other actions and do whatever it wants) 

//redux by default dosen't allow you to dispatch functions, you need to set up a module to set up support for this behaviour

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

//add: Expense is what is going to have an object be dispatched this will actually change the redux store
//startAddExpense will going to start that process off it is going to dispatch addExpense in the function that we set up and that is whats going to keep changing the store
//this function gets call internally by redux and it gets called with dispatch, this just gives us access to dispatch. 

 export const startAddExpense = (expenseData = {}) => {
    //instead of returning an object like in removeExpense we are going to return a function

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};
