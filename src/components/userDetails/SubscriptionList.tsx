import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MagazineOrChannel } from "../../types/userTypes";

export default function SubscriptionList({ data }: { data: MagazineOrChannel[] }) {
    return (
        <DataTable value={data} size="small">
            <Column field="title" header="Title"></Column>
            <Column field="start" header="Start Date"></Column>
            <Column field="end" header="End Date"></Column>
        </DataTable>
    )
}