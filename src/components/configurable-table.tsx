import { TableData, TableHeader } from '../config/table-data';
import './table.css';

interface Props {
   headers: TableHeader[];
   data: TableData[];
}

function ConfigurableTable({ headers, data }: Props) {
   function renderHeaders(headers: TableHeader[]) {
      return headers.map((header) => <th key={header.id}>{header.title}</th>);
   }

   function renderData(headers: TableHeader[], data: TableData[]) {
      return data.map((item) => {
         return (
            <tr>
               {headers.map((header) => (
                  <td>{item[header.attribute]}</td>
               ))}
            </tr>
         );
      });
   }

   return (
      <table className='custom-table'>
         <thead>{renderHeaders(headers)}</thead>
         <tbody>{renderData(headers, data)}</tbody>
      </table>
   );
}

export default ConfigurableTable;
