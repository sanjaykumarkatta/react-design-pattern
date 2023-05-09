import { Panel } from "primereact/panel";
import { Accordion, AccordionTab } from 'primereact/accordion';
import SubscriptionList from "./SubscriptionList";
import PersonalInformation from "./PersonalInformation";
import { userDetailsinfo } from "../../types/userTypes";

export default function UserDetails({ user }: userDetailsinfo) {
  const { phoneNumbers, addresses, magazineSubscriptions, channelSubscriptions } = user;
  return (
    <Panel header="Information for Selected User" className="mypanel">
      <Accordion activeIndex={0}>
        <AccordionTab header="Personal Information">
          <PersonalInformation address={addresses} phoneNumbers={phoneNumbers} />
        </AccordionTab>
        <AccordionTab header="Magazine Subscriptions">
          <SubscriptionList data={magazineSubscriptions ?? []} />
        </AccordionTab>
        <AccordionTab header="Channel Subscriptions">
          <SubscriptionList data={channelSubscriptions ?? []} />
        </AccordionTab>
      </Accordion>
    </Panel>
  );
}