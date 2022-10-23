import * as React from 'react';
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
    private editedTitle;
    private _onSave;
    render(): React.ReactElement<{}>;
    private _onSave_Lib;
}
//# sourceMappingURL=CustomPanel.d.ts.map