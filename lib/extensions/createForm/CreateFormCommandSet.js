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
import CustomPanel from "./components/CustomPanel";
import { sp } from "@pnp/sp";
import { Log } from '@microsoft/sp-core-library';
import { BaseListViewCommandSet } from '@microsoft/sp-listview-extensibility';
import * as React from 'react';
import * as ReactDom from 'react-dom';
var LOG_SOURCE = 'CreateFormCommandSet';
var CreateFormCommandSet = /** @class */ (function (_super) {
    __extends(CreateFormCommandSet, _super);
    function CreateFormCommandSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panelPlaceHolder = null;
        _this._onListViewStateChanged = function (args) {
            Log.info(LOG_SOURCE, 'List view state changed');
        };
        return _this;
    }
    CreateFormCommandSet.prototype.onInit = function () {
        var _this = this;
        Log.info(LOG_SOURCE, 'Initialized CreateFormCommandSet');
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
        });
        // initial state of the command's visibility
        var compareOneCommand = this.tryGetCommand('COMMAND_1');
        compareOneCommand.visible = false;
        this.context.listView.listViewStateChangedEvent.add(this, this._onListViewStateChanged);
        return Promise.resolve();
    };
    CreateFormCommandSet.prototype.onExecute = function (event) {
        switch (event.itemId) {
            case 'CMD_PANEL':
                var div = document.createElement('div');
                var element = React.createElement(CustomPanel, {});
                ReactDom.render(element, div);
                break;
            default:
                throw new Error('Unknown command');
        }
    };
    return CreateFormCommandSet;
}(BaseListViewCommandSet));
export default CreateFormCommandSet;
//# sourceMappingURL=CreateFormCommandSet.js.map