
import { userList } from "../../types/userTypes";
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";

export default function UserList({ users, onSelectUser }: { users: any[], onSelectUser: (user: userList) => void }) {
    const [selectedUser, setSelectedUser] = useState<userList | null>(null);
    
    function handleUserClick(event: userList) {
        onSelectUser(event);
        setSelectedUser(event);
    }
    return (
        <Panel header="All Users" className="mypanel">
            <DataTable value={users} size="small" selectionMode="single" selection={selectedUser} onSelectionChange={(e) => handleUserClick(e.value)} dataKey="oid" >
                <Column field="firstName" header="User Name"></Column>
                <Column field="email" header="Email Address"></Column>
                <Column field="lastLogon" header="Last Logon"></Column>
                <Column field="enabled" header="Enabled"></Column>
            </DataTable>
        </Panel>
    );
};
