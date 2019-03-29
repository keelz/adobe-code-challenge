import React from 'react';
import './Leads.css';
import { Lead, LEAD_UNIQUE_KEY } from '../../common/model/Lead';
import { uniqueLeadReducer } from '../../common/util/data';
import Loader from '../Loader';
import LeadRow from './LeadRow';

// stub for component props
export interface ILeadsProps {}

// stub for redux state props
export interface ILeadsStateProps {}

// stub for redux dispatch props
export interface ILeadsDispatchProps {}

type Props =
  & ILeadsProps
  & ILeadsStateProps
  & ILeadsDispatchProps;

type State = {
  data: Lead[];
}

class Leads extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { data: Array(0) };
  }

  private _reduceToUniqueLeads = (withUniqueKeyName: LEAD_UNIQUE_KEY, data: Lead[], caseInsensitive?: boolean) => {
    const key = withUniqueKeyName;
    const leadReducer = uniqueLeadReducer(key, !!caseInsensitive);
    return data.reduce(leadReducer, []);
  }

  componentDidMount() {
    // mock async fetch data hook
    setTimeout(() => {
      const { leads } = require('../../common/mocks/leads.json');
      const leadsWithUniqueIds = this._reduceToUniqueLeads(LEAD_UNIQUE_KEY.ID, leads);
      const uniqueLeads = this._reduceToUniqueLeads(LEAD_UNIQUE_KEY.EMAIL, leadsWithUniqueIds, true);
      this.setState({ data: uniqueLeads });
    }, 3000);
  }

  render() {
    const { data } = this.state;
    return data.length === 0
      ? <Loader />
      : data.map(lead => <LeadRow lead={lead} />);
  }
}

export default Leads;
