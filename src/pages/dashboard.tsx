import { useSelector } from 'react-redux';
import ConfigurableTable from '../components/configurable-table';
import { TableData, tableHeaders } from '../config/table-data';
import { RootState } from '../redux/store';
import Filter from '../components/Filter';

function Dashboard() {
   const { data, filters } = useSelector((state: RootState) => state.filter);

   function filterData(item: TableData) {
      const { name, letter } = filters;

      const firstCharacter = item.name.toString().charAt(0).toLowerCase();

      const filterByName =
         name === '' ||
         item.name.toString().toLowerCase().includes(name.toLowerCase());

      const filterByChar =
         letter === '' ||
         (firstCharacter >= letter[0] && firstCharacter <= letter[2]);

      return filterByName && filterByChar;
   }

   return (
      <div className='dashboard'>
         <h1>Configurable Table Implementation</h1>
         <Filter />
         <ConfigurableTable
            headers={tableHeaders}
            data={data.filter(filterData)}
         />
      </div>
   );
}

export default Dashboard;
