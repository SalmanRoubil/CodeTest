function createData(name, position, office, id, startdate, salary) {
  return { name, position, office, id, startdate, salary };
}

export const columns = [
  "Name",
  "Position",
  "Office",
  "ID",
  "Start Date",
  "Salary",
];

export const rows = [
  createData(
    "Tiger Nixon",
    "System Architect",
    "Edinburgh",
    "5421",
    "2011/04/25",
    "$320,800"
  ),
  createData(
    "Garrett Winters",
    "Accountant",
    "Tokyo",
    "8422",
    "2011/07/25",
    "$170,750"
  ),
  createData(
    "Ashton Cox",
    "Junior Technical Author",
    "San Francisco",
    "1562",
    "2009/01/12",
    "$86,000"
  ),
  createData(
    "Cedric Kelly",
    "Senior Javascript Developer",
    "Edinburgh",
    "6224",
    "2012/03/29",
    "$433,060"
  ),
  createData(
    "Airi Satou",
    "Accountant",
    "Tokyo",
    "5407",
    "2008/11/28",
    "$162,700"
  ),
  createData(
    "Brielle Williamson",
    "Integration Specialist",
    "New York",
    "4804",
    "2012/12/02",
    "$372,000"
  ),
  createData(
    "Herrod Chandler",
    "Sales Assistant",
    "San Francisco",
    "9608",
    "2012/08/06",
    "$137,500"
  ),
  createData(
    "Rhona Davidson",
    "Integration Specialist",
    "Tokyo",
    "6200",
    "2010/10/14",
    "$327,900"
  ),
];
