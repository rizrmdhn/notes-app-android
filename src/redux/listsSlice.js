/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { getInitialData } from '../utils/notesData';

export const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: getInitialData(),
        unFilteredLists: getInitialData(),
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
            state.unFilteredLists.push(newList);
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
        searchNotes: (state, action) => {
            if (action.payload.searchText.length !== 0 && action.payload.searchText.trim() !== '') {
                state.lists = state.unFilteredLists.filter((list) => list.title.toLowerCase().includes(action.payload.searchText.toLowerCase()));
            } else {
                state.lists = state.unFilteredLists;
            }
        },
    },
});

export const { addNote, archiveNote, deleteNote, setViewData, searchNotes } = listsSlice.actions;

export default listsSlice.reducer;