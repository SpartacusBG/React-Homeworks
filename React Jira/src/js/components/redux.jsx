import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { createStore } from 'redux';

const DEFAULT_STATE = {
    viewItem: null,
    currentFilter: '',
    columnList: [
      
    ]
  };

  function deleteElementFromArray(array, element) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element.id == element.id) {
        const index = array.indexOf(element);
        array.splice(index, 1);
      }  
    }

    return array;
  }
  
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

        for (let i = 0; i < findCol.noteList.length; i++) {
          const element = findCol.noteList[i];
          if (element.id == action.item.id) {
            const index = findCol.noteList.indexOf(element);
            findCol.noteList.splice(index, 1);
          }  
        }
        return Object.assign({}, currentState, {
          columnList: currentState.columnList
        });

        case 'MOVE_TO_ANOTHER_COLUMN':
        let currentClumn = currentState.columnList.find((column) => column.columnId === action.item.columnKey);
        const currentCard = currentClumn.noteList.find( (note) => note.id == action.item.id );
        const selectedColumn =  currentState.columnList.find((column) => column.columnId === action.selectedColumnId);
        currentClumn = deleteElementFromArray(currentClumn.noteList, currentCard.id);
        selectedColumn.noteList.push(currentCard);
          return Object.assign({}, currentState, {
            columnList: currentState.columnList
          });

          case 'STORE_FILTER':
          return Object.assign({}, currentState, {
            currentFilter: action.filter
          });

      default:
        return currentState;
    }
  }
  
  export const { dispatch, getState, subscribe } = createStore(mainReducer);