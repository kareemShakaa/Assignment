import CustomPanel, { ICustomPanelProps } from "./components/CustomPanel";
import { sp } from "@pnp/sp";
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetExecuteEventParameters,
  ListViewStateChangedEventArgs
} from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';
import * as React from 'react';
import * as ReactDom from 'react-dom';


export interface ICreateFormCommandSetProperties {
  
  sampleTextOne: string;
  sampleTextTwo: string;
}

const LOG_SOURCE: string = 'CreateFormCommandSet';

export default class CreateFormCommandSet extends BaseListViewCommandSet<ICreateFormCommandSetProperties> {
  private panelPlaceHolder: HTMLDivElement = null;
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized CreateFormCommandSet');
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
    // initial state of the command's visibility
    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    compareOneCommand.visible = false;

    this.context.listView.listViewStateChangedEvent.add(this, this._onListViewStateChanged);

    return Promise.resolve();
  }

  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'CMD_PANEL':
        const div = document.createElement('div');
    const element: React.ReactElement<{} > = React.createElement(
      CustomPanel,
      {
        
      }
    );
    ReactDom.render(element, div);
    break;
    default:
        throw new Error('Unknown command');
    }
  }

  private _onListViewStateChanged = (args: ListViewStateChangedEventArgs): void => {
    Log.info(LOG_SOURCE, 'List view state changed');
  }
}
