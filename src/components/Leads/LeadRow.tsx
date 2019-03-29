import React from 'react';
import { Lead } from '../../common/model/Lead';


export interface ILeadRowProps {
  lead: Lead;
}

export interface ILeadRowStateProps {}

export interface ILeadRowdispatchProps {}

type Props =
  & ILeadRowProps
  & ILeadRowStateProps
  & ILeadRowdispatchProps;

const LeadRow: React.SFC<Props> = (props) => {
  const { lead } = props;
  return (
    <div key={lead._id} className="Leads">
      <div>{lead._id}</div>
      <div>{lead.email}</div>
      <div>{lead.entryDate}</div>
    </div>
  );
};

export default LeadRow;
