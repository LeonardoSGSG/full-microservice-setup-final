import { Person } from './person.model';

export interface ConsolidatedDataResponse {
  person: Person[];
  lastUpdate: string;
}
