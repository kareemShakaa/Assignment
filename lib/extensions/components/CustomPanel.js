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
import { TextField, DefaultButton, PrimaryButton, DialogFooter, /*autobind,*/ Panel, Spinner, SpinnerType } from "office-ui-fabric-react";
var CustomPanel = /** @class */ (function (_super) {
    __extends(CustomPanel, _super);
    function CustomPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editedTitle = null;
        return _this;
    }
    //     constructor(props: ICustomPanelProps) {
    //         super(props);
    //         this.state = {
    //             saving: false
    //         };
    //        this._onTitleChanged = this._onTitleChanged.bind(this);
    //        this._onCancel = this._onCancel.bind(this);
    //        this._onSave = this._onSave.bind(this);
    //    }
    //@autobind
    //    private _onTitleChanged(title: string) {
    //        this.editedTitle = title;
    //    }
    //@autobind
    //   private _onCancel() {
    //        this.props.onClose();
    //    }
    // //@autobind
    // private _onSave() {
    //     this.setState({ saving: true });
    //     sp.web.lists.getById(this.props.listId).items.getById(this.props.itemId).update({
    //         'Title': this.editedTitle
    //     }).then(() => {
    //         this.setState({ saving: false });
    //         this.props.onClose();
    //     });
    // }
    CustomPanel.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, currentTitle = _a.currentTitle;
        return (React.createElement(Panel, { isOpen: isOpen },
            React.createElement("h2", null, "This is a custom panel with your own content"),
            React.createElement(TextField, { value: currentTitle, label: "Item title", placeholder: "Choose the new title" }),
            this.state.saving && React.createElement(Spinner, { type: SpinnerType.large, label: "Saving\u2026" }),
            React.createElement(DialogFooter, null,
                React.createElement(DefaultButton, { text: "Cancel" }),
                React.createElement(PrimaryButton, { text: "Save" }))));
    };
    return CustomPanel;
}(React.Component));
export default CustomPanel;
//# sourceMappingURL=CustomPanel.js.map