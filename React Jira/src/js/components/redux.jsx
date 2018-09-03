import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { createStore } from 'redux';

const DEFAULT_STATE = {
    viewItem: null,
    columnList: [
      {
        columnId: 1,
        columnTitle: 'pesho',
        noteList: []
      }
    ]
  };
  
  function mainReducer(currentState = DEFAULT_STATE, action) {
    switch(action.type) {
      case 'ADD_COLUMN':
        return Object.assign({}, currentState, {
          columnList: [...currentState.columnList , action.column]
        });
      case 'ADD_NOTE':
      const findColumn = currentState.columnList.find((column) => column.columnId === action.item.columnId);
      findColumn.noteList.push(action.item.noteOb);
        return Object.assign({}, currentState, {
          columnList: currentState.columnList
        });
      case 'VIEW':
        return Object.assign({}, currentState, {
          viewItem: action.item
        });
      case 'DELETE':
        let findCol = currentState.columnList.find((column) => column.columnId === action.item.columnKey);
        findCol.noteList.filter(card => card.id !== action.item.id)
        console.log(findCol.noteList)

        return Object.assign({}, currentState, {
          columnList: currentState.columnList
        });
      default:
        return currentState;
    }
  }
  
  export const { dispatch, getState, subscribe } = createStore(mainReducer);