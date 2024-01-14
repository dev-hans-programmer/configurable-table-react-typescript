import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableData, tableData } from '../config/table-data';

interface Filter {
   name: string;
   letter: string;
}

interface State {
   filters: Filter;
   data: TableData[];
}

const initialState: State = {
   filters: { name: '', letter: '' },
   data: tableData,
};

const filterSlice = createSlice({
   name: 'filterSlice',
   initialState,
   reducers: {
      setFilters: (state, action: PayloadAction<Filter>) => {
         state.filters = action.payload;
      },
   },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;
