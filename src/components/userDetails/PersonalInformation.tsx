import { personalInformation } from "../../types/userTypes";
import Address from "./Address";
import Phone from "./Phone";

export default function PersonalInformation({ address, phoneNumbers }: personalInformation) {
    const { home, work } = address;
    return (
        <div className="grid">
            <div className="col">
                <Address name="Home Address" addressDetails={home}></Address>
                <Address name="Work Address" addressDetails={work}></Address>
            </div>
            <div className="col">
                <Phone phoneNumbers={phoneNumbers}></Phone>
            </div>
        </div>
    )
}