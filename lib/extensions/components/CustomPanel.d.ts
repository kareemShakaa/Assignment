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
export default class CustomPanel extends React.Component<ICustomPanelProps, ICustomPanelState> {
    private editedTitle;
    render(): React.ReactElement<ICustomPanelProps>;
}
//# sourceMappingURL=CustomPanel.d.ts.map