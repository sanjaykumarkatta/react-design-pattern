import { Fieldset } from "primereact/fieldset";
import { addressType } from "../../types/userTypes";

export default function Address({name, addressDetails}: addressType) {

    const {street1, street2, city, province, postalCode} = addressDetails;

    return (
        <Fieldset legend={name}>
        <div className="field grid">
            <label htmlFor="firstname3" className="col-fixed" style={{ width: '100px' }}>Street1:</label>
            <div className="col">
                {street1}
            </div>
        </div>
        <div className="field grid">
            <label htmlFor="firstname3" className="col-fixed" style={{ width: '100px' }}>Street2:</label>
            <div className="col">
                {street2}
            </div>
        </div>
        <div className="field grid">
            <label htmlFor="firstname3" className="col-fixed" style={{ width: '100px' }}>City:</label>
            <div className="col">
                {city}
            </div>
        </div>
        <div className="field grid">
            <label htmlFor="firstname3" className="col-fixed" style={{ width: '100px' }}>Province:</label>
            <div className="col">
                {province}
            </div>
        </div>
        <div className="field grid">
            <label htmlFor="firstname3" className="col-fixed" style={{ width: '100px' }}>Postal code:</label>
            <div className="col">
                {postalCode}
            </div>
        </div>
    </Fieldset>
    )
}