/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { getInitialData } from '../utils/notesData';

export const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: getInitialData(),
        viewData: [],
    },
    reducers: {
        addNote: (state, action) => {
            const newList = {
                id: +new Date(),
                title: action.payload.title,
                body: action.payload.body,
                createdAt: Date.now(),
                archived: false,
            };
            state.lists.push(newList);
        },
        archiveNote: (state, action) => {
            const list = state.lists.find((item) => item.id === action.payload.id);
            if (list) {
                list.archived = !list.archived;
            }
            state.viewData.archived = !state.viewData.archived;
        },
        deleteNote: (state, action) => {
            state.lists = state.lists.filter((list) => list.id !== action.payload.id);
        },
        setViewData: (state, action) => {
            state.viewData = action.payload.lists;
        },
    },
});

export const { addNote, archiveNote, deleteNote, setViewData } = listsSlice.actions;

export default listsSlice.reducer;