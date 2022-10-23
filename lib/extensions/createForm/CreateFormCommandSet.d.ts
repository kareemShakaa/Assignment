import { BaseListViewCommandSet, IListViewCommandSetExecuteEventParameters } from '@microsoft/sp-listview-extensibility';
export interface ICreateFormCommandSetProperties {
    sampleTextOne: string;
    sampleTextTwo: string;
}
export default class CreateFormCommandSet extends BaseListViewCommandSet<ICreateFormCommandSetProperties> {
    private panelPlaceHolder;
    onInit(): Promise<void>;
    onExecute(event: IListViewCommandSetExecuteEventParameters): void;
    private _onListViewStateChanged;
}
//# sourceMappingURL=CreateFormCommandSet.d.ts.map