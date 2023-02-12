export class User {
  constructor(
    public id?: number,
    public login?: string,
    public avatar_url?: string,
    public url?: string,
    public type?: string,
    public site_admin?: boolean,
    public name?: string,
    public company?: string,
    public blog?: string,
    public location?: string,
    public email?: string,
    public hireable?: string,
    public bio?: string,
    public twitter_username?: string,
    public public_repos?: number,
    public public_gists?: number,
    public followers?: number,
    public following?: number,
    public created_at?: Date,
    public updated_at?: Date
  ) {}
}
