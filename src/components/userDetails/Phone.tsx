import { Fieldset } from "primereact/fieldset";
import {phoneNumbers} from '../../types/userTypes';

export default function Phone({phoneNumbers}: phoneNumbers) {
    const {work, home, mobile} = phoneNumbers;
    return(
        <Fieldset legend="Phone Numbers">
        <div className="field grid">
            <label htmlFor="firstname3" className="col-fixed" style={{ width: '100px' }}>Work:</label>
            <div className="col">
                {work}
            </div>
        </div>
        <div className="field grid">
            <label htmlFor="firstname3" className="col-fixed" style={{ width: '100px' }}>Home:</label>
            <div className="col">
                {home}
            </div>
        </div>
        <div className="field grid">
            <label htmlFor="firstname3" className="col-fixed" style={{ width: '100px' }}>Mobile:</label>
            <div className="col">
                {mobile}
            </div>
        </div>
    </Fieldset>
    )
}