import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setFilters } from '../redux/filterSlice';
import './filters.css';

const letters = [
   {
      id: 1,
      title: 'All',
      value: '',
   },
   {
      id: 2,
      title: 'A-E',
      value: 'a-e',
   },
   {
      id: 3,
      title: 'F-J',
      value: 'f-j',
   },
   {
      id: 4,
      title: 'K-O',
      value: 'k-o',
   },
   {
      id: 5,
      title: 'P-T',
      value: 'p-t',
   },
   {
      id: 6,
      title: 'U-Z',
      value: 'u-z',
   },
];

function Filter() {
   const { filters } = useSelector((state: RootState) => state.filter);
   const dispatch: AppDispatch = useDispatch();

   function handleName(e: React.ChangeEvent<HTMLInputElement>) {
      dispatch(setFilters({ ...filters, name: e.target.value }));
   }

   function handleAlphabet(value: string) {
      dispatch(setFilters({ ...filters, letter: value }));
   }

   return (
      <div className='filter-contaner'>
         {letters.map((letter) => (
            <div
               className={`filter-box ${
                  filters.letter === letter.value ? 'highlighted' : ''
               }`}
               key={letter.id}
               onClick={() => handleAlphabet(letter.value)}
            >
               {letter.title}
            </div>
         ))}

         <input
            className='input-name'
            placeholder='Name..'
            type='text'
            value={filters.name}
            onChange={handleName}
         />
      </div>
   );
}
export default Filter;
