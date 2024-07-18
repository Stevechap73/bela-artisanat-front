// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// const CustomTable = ({ data, columns, onDelete }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             {columns.map((column) => (
//               <TableCell key={column.field}>{column.headerName}</TableCell>
//             ))}
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow key={row.id}>
//               {columns.map((column) => (
//                 <TableCell key={column.field}>{row[column.field]}</TableCell>
//               ))}
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   style={{ marginRight: 8 }}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => onDelete(row.id)}
//                 >
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CustomTable;

// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// const CustomTable = ({ data, columns, onDelete }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             {columns.map((column) => (
//               <TableCell key={column.field}>{column.headerName}</TableCell>
//             ))}
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow key={row.id}>
//               {columns.map((column) => (
//                 <TableCell key={column.field}>{row[column.field]}</TableCell>
//               ))}
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   style={{ marginRight: 8 }}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => onDelete(row.id)}
//                 >
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CustomTable;

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const CustomTable = ({ data, columns, onDelete, onEdit }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 8 }}
                  onClick={() => onEdit(row)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(row.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
