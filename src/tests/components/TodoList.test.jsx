import React from 'react'
import expect from 'expect'

import TodoList from '../../components/TodoList'

describe('TodoList', ()=>{
    it('should exist', ()=>{
        expect(TodoList).toExist();
    });
});