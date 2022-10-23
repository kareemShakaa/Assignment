import * as React from 'react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { TextField, DefaultButton, PrimaryButton, DialogFooter,  Spinner, SpinnerType } from "office-ui-fabric-react";
import { sp } from "@pnp/sp";
import { Dialog } from '@microsoft/sp-dialog';
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions, SPHttpClientConfiguration } from '@microsoft/sp-http';
export interface ICustomPanelState {
    saving: boolean;
}

export interface ICustomPanelProps {
    onClose: () => void;
    isOpen: boolean;
    currentTitle: string;
    itemId: number;
    listId: string;
}

export default class CustomPanel extends React.Component<{}, {}> {

    private editedTitle: string = null;

    private _onSave() {
        
        const _active = document.querySelector('#CB_Active') as HTMLInputElement;
        
        console.log(_active.checked); // false
         
          
        sp.web.lists.getByTitle('AssignmentLists').items.add({
            Title: (document.getElementById("TB_Title") as HTMLInputElement).value,
            Description: (document.getElementById("TB_Description") as HTMLInputElement).value,
            Typee: (document.getElementById("DDL_Type") as HTMLInputElement).value,
            Active: _active.checked
        }).then(() => {
             
        Dialog.alert(`Saved Successfully`)
        });
          
    }

    public render(): React.ReactElement<{}> {
        return (
          <div>
            <Panel
              isOpen={true}
              type={ PanelType.smallFixedFar }
              headerText='Welcome To Our Assignment'
              closeButtonAriaLabel='Close'
            >
            <p>You can add new item from here...</p>
            <TextField value="" id="TB_Title" label="Title" placeholder="Enter a title" />
            <TextField value="" id="TB_Description" label="Description" placeholder="Enter a description" />
            <br />
            Type: <br /><select aria-label="Type" id="DDL_Type"><option value="HR">HR</option><option value="Civil">Civil</option><option value="Architecture">Architecture</option></select>
            <br />
            Active:<br /> <input aria-label="Active" type="checkbox"  id="CB_Active" value="No"  />
            <DialogFooter>
                     <PrimaryButton text="Save"  onClick={this._onSave} />
            </DialogFooter>
            </Panel>
          </div>
        );
      }

      //This function not used...
      //I start to implement add library but I do not complete it.
      private _onSave_Lib() {
        const requestHeaders: Headers = new Headers();
        requestHeaders.append('Content-type', 'application/json;odata=verbose');
        requestHeaders.append('Accept', 'application/json;odata=verbose');
    
    
        const body: ISPHttpClientOptions = {
          body: JSON.stringify({
            'contentTypeId': "0x0101"
    
          }),
          headers: requestHeaders
        };
        this.context.spHttpClient.post(`${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getByTitle('AssignmentDocs')/contenttypes/AddAvailableContentType`,
          SPHttpClient.configurations.v1, body)
          .then((response: SPHttpClientResponse) => {
            response.json().then((responseJSON: any) => {
                Dialog.alert(`Saved Successfully`);
                console.log(responseJSON);
            });
          });
        }
      
}