import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';

function createData(name, position, office, id, startdate, salary) {
  return { name, position, office, id, startdate, salary };
}
const rows = [
  createData(    "Tiger Nixon","System Architect","Edinburgh","5421","2011/04/25", "$320,800" ),
  createData(    "Garrett Winters",    "Accountant",    "Tokyo",   "8422",    "2011/07/25",    "$170,750"  ),
  createData(    "Ashton Cox",    "Junior Technical Author",    "San Francisco",   "1562",  "2009/01/12",    "$86,000"  ),
  createData(    "Cedric Kelly",    "Senior Javascript Developer",    "Edinburgh",    "6224",    "2012/03/29",    "$433,060"  ),
  createData(    "Airi Satou",    "Accountant",    "Tokyo",    "5407",    "2008/11/28",    "$162,700"  ),
  createData(    "Brielle Williamson",   "Integration Specialist",    "New York",    "4804",    "2012/12/02",    "$372,000"  ),
  createData(    "Herrod Chandler",    "Sales Assistant",    "San Francisco",    "9608",    "2012/08/06",    "$137,500"  ),
  createData(    "Rhona Davidson",    "Integration Specialist",    "Tokyo",    "6200",    "2010/10/14",    "$327,900"  ),];


const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'position', headerName: 'Position', width: 150 },
  { field: 'office', headerName: 'Office', width: 150 },
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'startdate', headerName: 'Start Date', width: 150 },
  { field: 'salary', headerName: 'Salary', width: 150 },

];



export default function App() {
  return (
    
    <div>
    <div>
    <Button variant="contained" color="primary" onClick={() => { alert('link DataGrid') }}> Filter </Button>
    <Button variant="contained" color="primary"onClick={() => { alert('link DataGrid') }}> Recover </Button>
    </div>
    <div id='div1' style={{height:600}}>
      <DataGrid 
    rows={rows} columns={columns} />
     <DataGrid filterModel={{
    items: [{ columnField: 'office', operatorValue: 'contains', value: 'tokyo' }],  }}
    rows={rows} columns={columns} />

    </div>
    </div>

  );
}

