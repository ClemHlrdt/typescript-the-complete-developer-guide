interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps) { }


  public get(propName: string): number | string {
    return this.data[propName];
  }

}
