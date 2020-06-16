import React from "react";
import ViewButton from './ViewButton'

class ViewSwitcher extends React.Component {

    render() {

        return (
            <ViewButton
                ref={'viewButton'}
                {...this.props}
            />
        )
    }

    renameView = () => {
        this.refs.viewButton.renameView()
    }
}

export default ViewSwitcher