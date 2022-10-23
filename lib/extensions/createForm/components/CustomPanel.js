var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { TextField, PrimaryButton, DialogFooter } from "office-ui-fabric-react";
import { sp } from "@pnp/sp";
import { Dialog } from '@microsoft/sp-dialog';
import { SPHttpClient } from '@microsoft/sp-http';
var CustomPanel = /** @class */ (function (_super) {
    __extends(CustomPanel, _super);
    function CustomPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editedTitle = null;
        return _this;
    }
    CustomPanel.prototype._onSave = function () {
        var _active = document.querySelector('#CB_Active');
        console.log(_active.checked); // false
        sp.web.lists.getByTitle('AssignmentLists').items.add({
            Title: document.getElementById("TB_Title").value,
            Description: document.getElementById("TB_Description").value,
            Typee: document.getElementById("DDL_Type").value,
            Active: _active.checked
        }).then(function () {
            Dialog.alert("Saved Successfully");
        });
    };
    CustomPanel.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Panel, { isOpen: true, type: PanelType.smallFixedFar, headerText: 'Welcome To Our Assignment', closeButtonAriaLabel: 'Close' },
                React.createElement("p", null, "You can add new item from here..."),
                React.createElement(TextField, { value: "", id: "TB_Title", label: "Title", placeholder: "Enter a title" }),
                React.createElement(TextField, { value: "", id: "TB_Description", label: "Description", placeholder: "Enter a description" }),
                React.createElement("br", null),
                "Type: ",
                React.createElement("br", null),
                React.createElement("select", { "aria-label": "Type", id: "DDL_Type" },
                    React.createElement("option", { value: "HR" }, "HR"),
                    React.createElement("option", { value: "Civil" }, "Civil"),
                    React.createElement("option", { value: "Architecture" }, "Architecture")),
                React.createElement("br", null),
                "Active:",
                React.createElement("br", null),
                " ",
                React.createElement("input", { "aria-label": "Active", type: "checkbox", id: "CB_Active", value: "No" }),
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { text: "Save", onClick: this._onSave })))));
    };
    //This function not used...
    //I start to implement add library but I do not complete it.
    CustomPanel.prototype._onSave_Lib = function () {
        var requestHeaders = new Headers();
        requestHeaders.append('Content-type', 'application/json;odata=verbose');
        requestHeaders.append('Accept', 'application/json;odata=verbose');
        var body = {
            body: JSON.stringify({
                'contentTypeId': "0x0101"
            }),
            headers: requestHeaders
        };
        this.context.spHttpClient.post("".concat(this.context.pageContext.web.absoluteUrl, "/_api/web/lists/getByTitle('AssignmentDocs')/contenttypes/AddAvailableContentType"), SPHttpClient.configurations.v1, body)
            .then(function (response) {
            response.json().then(function (responseJSON) {
                Dialog.alert("Saved Successfully");
                console.log(responseJSON);
            });
        });
    };
    return CustomPanel;
}(React.Component));
export default CustomPanel;
//# sourceMappingURL=CustomPanel.js.map