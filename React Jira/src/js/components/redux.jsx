import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { createStore } from 'redux';

const DEFAULT_STATE = {
    viewItem: null
  };
  
  function mainReducer(currentState = DEFAULT_STATE, action) {
    switch(action.type) {
      case 'ADD':
        return Object.assign({}, currentState, {
          viewItem: action.item
        });
      case 'REMOVE':
        return Object.assign({}, currentState, {
          viewItem: currentState
        });
      default:
        return currentState;
    }
  }
  
  export const { dispatch, getState, subscribe } = createStore(mainReducer);