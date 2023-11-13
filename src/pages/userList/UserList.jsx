import "./userList.css";
import {DeleteOutline} from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from "../../dummyData"
import { Link } from "react-router-dom";
import { useState } from "react";
export default function UserList() {
    const [data,setData] = useState(userRows)
    const handleDelete = (id)=>{
       setData(data.filter(item=>item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'user',
          width: 200,
          renderCell:(params)=>{
            return <div className="userListUser">
                     <img className="userListImg" src={params.row.avatar} alt="" />
                     {params.row.userName}
                  </div>
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160
        },
        {
          field:"action",
          headerName:"Action",
          renderCell:(params)=>{
            return(
            <>
             <Link to={"/user/"+ params.row.id}>
              <button className="userListEdit">Edit</button>
             </Link>
              <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
            </>
            )
          }
        }
      ];

  return (
    <div className="userList">
      <DataGrid
      disableSelectionOnClick={true}
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}