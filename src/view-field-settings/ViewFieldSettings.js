import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../button'
import AdaptiveDialog from '../adaptive-dialog/AdaptiveDialog'
import FieldSettings from './FieldSettings'
import translate from '../translate'
import listMove from '../utils/listMove'

const getHiddenFieldCount = view => view.get('fields').filter(field => field.get('visible') === false).count()

class ViewFieldSettings extends React.Component {

    state = {
        open: false
    }

    componentDidMount() {
        this.button = ReactDOM.findDOMNode(this.refs.button)
    }

    render() {

        const hiddenFieldCount = getHiddenFieldCount(this.props.view)

        return (
            <React.Fragment>
                <Button
                    ref={'button'}
                    size={'sm'}
                    minimal
                    highlighted={Boolean(hiddenFieldCount)}
                    onClick={() => this.setState({ open: true })}
                >
                    {hiddenFieldCount ? translate('${count} hidden fields', { bindings: { count: hiddenFieldCount } }) : translate('Hide fields') /* eslint-disable-line no-template-curly-in-string */}
                </Button>
                {this.state.open ? (
                    <AdaptiveDialog
                        title={'Veld weergave'}
                        referenceElement={this.button}
                        popoverWidth={300}
                        onClose={this.handleClose}
                    >
                        {() => (
                            <FieldSettings
                                fields={this.props.view.get('fields')}
                                filterOperators={this.props.filterOperators}
                                onSort={async ({ oldIndex, newIndex }) => {

                                    const nextView = this.props.view.update('fields', fields =>
                                        listMove(fields, oldIndex, newIndex)
                                    )

                                    this.props.onChange({
                                        view: nextView
                                    })
                                }}
                                onShowOrHide={async ({ id, visible }) => {

                                    const nextView = this.props.view.update('fields', fields =>
                                        fields.map(field => {
                                            if (field.get('id') !== id) {
                                                return field
                                            }
                                            return field.set('visible', visible)
                                        })
                                    )

                                    this.props.onChange({
                                        view: nextView
                                    })
                                }}
                                onShowOrHideAll={async ({ visible }) => {

                                    const nextView = this.props.view.update('fields', fields =>
                                        fields.map(field =>
                                            field.set('visible', visible)
                                        )
                                    )

                                    this.props.onChange({
                                        view: nextView
                                    })
                                }}
                            />
                        )}
                    </AdaptiveDialog>
                ) : null}
            </React.Fragment>
        )
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
}

export default ViewFieldSettings