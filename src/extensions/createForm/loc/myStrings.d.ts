declare interface ICreateFormCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'CreateFormCommandSetStrings' {
  const strings: ICreateFormCommandSetStrings;
  export = strings;
}
