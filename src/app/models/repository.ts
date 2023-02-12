import { Commit } from './commit';
import { Issue } from './issue';
import { Pull } from './pull';

export class Repository {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public stargazers_count?: number,
    public created_at?: Date,
    public updated_at?: Date,
    public pushed_at?: Date,
    public commits?: Commit[],
    public issues?: Issue[],
    public pulls?: Pull[]
  ) {}
}
