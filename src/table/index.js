import React, { useState } from 'react'
import { fromJS } from 'immutable'
import { cx, css } from 'emotion'
import debounce from 'lodash/debounce'
import SearchInput from '../search-input'
import fieldRenderer from './fieldRenderer'
import defaultEmptyRenderer from './defaultEmptyRenderer';
import GridView from './GridView'
import textFormatters from '../text-formatters'
import Papa from 'papaparse'
import moment from 'moment/moment'
import { Search } from 'js-search'
import ViewFieldSettings from '../view-field-settings/ViewFieldSettings'
import ViewFilterSettings from '../view-filter-settings/ViewFilterSettings'
import filterOperators from '../filter-operators'
import fieldTypes from '../field-types'
import getRecordsForView from './getRecordsForView'
import ViewSorterSettings from '../view-sort-settings'
import FieldTooltip from '../field-tooltip'
import HeaderCell from './HeaderCell'
import ViewSwitcher from '../view-switcher'

const expand = props => (
    <svg {...props} viewBox="0 0 12 12">
        <path fillRule="evenodd" fill="currentColor" d="M4.77546101,10.4553613 L1.81474478,10.8783208 C1.25439084,10.9583713 0.87938524,10.5736845 0.958225649,10.0218016 L1.38118511,7.06108542 C1.45982823,6.51058357 1.83916177,6.38790899 2.22968611,6.77843328 L2.93679297,7.48554006 L4.10581974,6.3165134 C4.49903533,5.92329779 5.12937282,5.9261252 5.51989706,6.31664944 C5.91314397,6.70989635 5.91048225,7.3402777 5.52003317,7.73072683 L4.35100654,8.89975362 L5.05811323,9.6068604 C5.45136014,10.0001074 5.32208977,10.3772715 4.77546101,10.4553613 Z M7.10137856,1.3810729 L10.0620948,0.958113443 C10.6224487,0.87806288 10.9974543,1.26274971 10.9186139,1.81463257 L10.4956545,4.7753488 C10.4170113,5.32585066 10.0376778,5.44852523 9.64715346,5.05800094 L8.94004659,4.35089416 L7.45430822,5.83663252 C7.06109263,6.22984813 6.43075515,6.22702073 6.0402309,5.83649648 C5.64698399,5.44324957 5.64964572,4.81286823 6.04009479,4.42241909 L7.52583303,2.9366806 L6.81872633,2.22957382 C6.42547942,1.83632686 6.5547498,1.45916273 7.10137856,1.3810729 Z" />
    </svg>
)

const createDownload = ({ name, encodedURI }) => {

    const link = document.createElement("a")
    link.setAttribute("href", encodedURI)
    link.setAttribute("download", name)
    link.style.display = 'none';
    document.body.appendChild(link) // Required for FF

    link.click() // This will download the data file named "my_data.csv".
}

class Table extends React.Component {

    cursor = {
        columnIndex: null,
        rowIndex: null
    }

    state = {
        columnIndex: null,
        rowIndex: null
    }

    constructor(props) {
        super(props)

        this.widths = props.view.get('fields').map(field => field.get('width')).toArray()
    }


    componentWillReceiveProps(nextProps) {

        if (this.props.rows.length !== nextProps.rows.length) {
            this.refs.gridView.recomputeGridSize()
        }
    }

    componentDidUpdate(prevProps) {

        if (prevProps.view !== this.props.view) {
            this.refs.gridView.recomputeGridSize()
        }

        const prevTotalWidth = prevProps.view.get('fields').reduce((result, field) =>
            result + field.get('width')
            , 0)

        const totalWidth = this.props.view.get('fields').reduce((result, field) =>
            result + field.get('width')
            , 0)

        if (prevTotalWidth !== totalWidth) {

            this.widths = this.props.view.get('fields').map(field => field.get('width')).toArray()
            this.refs.gridView.recomputeGridSize()
            this.refs.gridView.updateLeftGridWidth()
        }
    }


    render() {

        const { fields, rows } = this.props

        return (
            <React.Fragment>
                <GridView
                    ref={'gridView'}
                    headerCellRenderer={this.headerCellRenderer}
                    bodyCellRenderer={this.bodyCellRenderer}
                    rowCount={rows.length}
                    columnCount={fields.length + 1}
                    columnWidth={this.columnWidthGetter}
                />
            </React.Fragment>
        )
    }

    columnWidthGetter = ({ columnIndex }) => {
        const width = this.widths[columnIndex]

        // DIRTY HACK; width for columnIndex is at one point not set/
        // This works without any effects for the user.
        return width ? width : 220
    }

    handleCollapseRecord = () => {
        this.setState({
            expandRecordId: null
        })
    }

    handleRecordClick = ({ recordId }) => {

        if (this.props.onRecordClick) {
            this.props.onRecordClick({ recordId })
        }
    }

    handleMouseEnter = ({ columnIndex, rowIndex }) => {

        this.cursor = {
            columnIndex,
            rowIndex
        }


        this.update()
    }

    update = () => {
        this.refs.gridView.update()
    }

    bodyCellRenderer = ({ columnIndex, rowIndex, key, style }) => {

        const record = this.props.rows[rowIndex]

        const hover = rowIndex === this.cursor.rowIndex

        if (columnIndex === 0) {
            return (
                <div className={cx("cell", { hover })} key={key} style={style} onMouseEnter={() => this.handleMouseEnter({ rowIndex, columnIndex })} onClick={() => this.handleRecordClick({ recordId: record.id })}>
                    <div
                        onClick={e => {
                            e.stopPropagation()
                            this.handleExpandRecord({ recordId: record.id })
                        }}
                        className={css`
                        border-radius: 50%;
                            width: 20px;   
                            height: 20px;   
                            color: rgb(var(--primaryColor));
                            position: absolute;
                            background-color: transparent;
                            top: 15px;
                            left: 4px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            opacity: ${hover ? '1' : '0'};
                            transition: 200ms ease opacity, 200ms ease background;
                            &:hover {
                                background-color: rgba(var(--primaryColor), 0.08);
                            }
                        `}
                    >
                        {expand({ width: 12 })}
                    </div>
                </div>
            )
        }

        return this._bodyCellRenderer({ columnIndex: columnIndex - 1, rowIndex, key, style })
    }

    handleExpandRecord = ({ recordId }) => {

        this.setState({
            expandRecordId: recordId
        })
    }

    _bodyCellRenderer = ({ columnIndex, key, rowIndex, style }) => {

        const record = this.props.rows[rowIndex]

        if (!record) {
            return null
        }

        const field = this.props.fields[columnIndex]

        if (!field) {
            return null
        }

        const value = record[field.id]

        const content = value === null ? defaultEmptyRenderer() : fieldRenderer({
            value,
            record,
            field,
            modelId: this.props.modelId,
            fieldId: field.id,
            hooks: this.props.hooks,
            schema: this.props.schema,
            data: this.props.data,
            context: 'cell'
        })

        const hover = rowIndex === this.cursor.rowIndex

        return (
            <div className={cx("cell", { hover })} key={key} style={style} onMouseEnter={() => this.handleMouseEnter({ rowIndex, columnIndex })} onClick={() => this.handleRecordClick({ recordId: record.id })}>
                {content}
            </div>
        )
    }

    headerCellRenderer = ({ columnIndex, key, style }) => {

        if (columnIndex === 0) {
            return (
                <div className={'headerCell'} key={key} style={style}>

                </div>
            )
        }

        return this._headerCellRenderer({ columnIndex: columnIndex - 1, key, style })
    }

    _headerCellRenderer = ({ columnIndex, key, style }) => {

        const field = this.props.fields[columnIndex]

        if (!field) {
            return null
        }

        return (
            <HeaderCell
                key={key}
                style={style}
                columnIndex={columnIndex}
                onResize={this.handleResize}
                width={this.widths[columnIndex]}
            >
                <FieldTooltip field={field} placement={'bottom'}>
                    {field.name ? field.name : field.id}
                </FieldTooltip>
            </HeaderCell>
        )
    }

    handleResize = ({ columnIndex, deltaX }) => {

        const newWidth = this.widths[columnIndex] + deltaX

        this.widths = [
            ...this.widths
        ]

        this.widths[columnIndex] = newWidth

        this.refs.gridView.recomputeGridSize()

        if (columnIndex === 0) {
            this.refs.gridView.updateLeftGridWidth()
        }

        this.handleResizeSave({ columnIndex })
    }

    handleResizeSave = debounce(({ columnIndex }) => {

        const width = this.widths[columnIndex]
        // const field = this.props.fields[columnIndex]

        const nextView = this.props.view.setIn(['fields', columnIndex, 'width'], width)

        this.props.onViewChange({
            view: nextView
        })
    }, 500)
}

export default (props) => {

    const { modelId } = props

    const model = props.schema.ModelDatas[modelId]
    const fields = model.fields

    const rows = props.data[modelId].map(id =>
        props.data[modelId + 'Datas'][id]
    )

    const [query, setQuery] = useState('')

    const search = new Search('id')

    fields.forEach(field => {
        search.addIndex(field.id)
    })

    const initialView = fromJS({
        type: 'grid',
        name: `Alle ${model.plural}`,
        rowHeight: 'small',
        fields: fields.map(field => ({
            id: field.id,
            visible: true,
            width: 220
        })),
        filters: [],
        sorters: []
    })

    const [view, setView] = useState(initialView)

    const viewRows = getRecordsForView()({ view, fields: fromJS(fields), records: rows })

    const readableRows = viewRows.map(record => {

        let result = {}

        fields.forEach(field => {

            const textFormatter = textFormatters[field.type]

            const value = record[field.id]

            if (!textFormatter) {
                result[field.id] = value
                return
            }

            result[field.id] = textFormatter({ field, value, record, schema: props.schema, data: props.data })
            return result
        })

        return result
    })

    search.addDocuments(readableRows);

    let filteredRows = null

    if (query.length) {

        const result = search.search(query)

        filteredRows = result.map(row =>
            props.data[modelId + 'Datas'][row.id]
        )
    }

    const handleExportToCSV = () => {

        const csv_string = Papa.unparse(readableRows)

        createDownload({
            name: `${model.plural}_${moment().format('YYYY-MM-DD_hh.mm.ss')}.csv`,
            encodedURI: encodeURI(`data:text/csv;charset=utf-8,` + csv_string)
        })
    }

    const handleExportToJSON = () => {

        const json_string = JSON.stringify(readableRows, null, 2)

        createDownload({
            name: `${model.plural}_${moment().format('YYYY-MM-DD_hh.mm.ss')}.json`,
            encodedURI: encodeURI(`data:application/json;charset=utf-8,` + json_string)
        })
    }

    const visibleFields = view.get('fields')
        .filter(field => field.get('visible'))
        .map(field => field.get('id'))

    const viewFields = fields
        .filter(field =>
            visibleFields.includes(field.id)
        )
        .sort((a, b) =>
            visibleFields.indexOf(a.id) - visibleFields.indexOf(b.id)
        )

    const tableRows = filteredRows ? filteredRows : viewRows

    return (
        <div>
            <div
                className={css`
                   position: absolute;
                   top: 0;
                   left: 0;
                   right: 0;
                   height: 50px;
                   display: flex;
                   align-items: center;
                   background-color: #fff;
                   border-bottom: 1px solid #f2f2f2;
                   padding: 0 24px;
               `}
            >
                <div
                    className={css`
                    `}
                >
                    <ViewSwitcher
                        views={fromJS([view])}
                        view={view}
                        onExportToJSON={handleExportToJSON}
                        onExportToCSV={handleExportToCSV}
                    />
                </div>
                <div
                    className={css`
                    margin-left: 8px;
                    `}
                >
                    <span className={css`color: #808080; font-size: 12px;`}> {tableRows.length} records</span>
                </div>
                <div
                    className={css`
                    margin-left: auto;
                    `}
                >
                    <SearchInput
                        placeholder={'Quick search...'}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>
                <div
                    className={css`
                        margin-left: 8px;
                    `}
                >
                    <ViewFieldSettings
                        view={view}
                        onChange={({ view }) => {
                            setView(view)
                        }}
                    />
                </div>
                <div
                    className={css`
                        margin-left: 8px;
                    `}
                >
                    <ViewFilterSettings
                        fieldTypes={fieldTypes}
                        filterOperators={filterOperators}
                        fields={fromJS(fields)}
                        view={view}
                        onChange={({ view }) => {
                            setView(view)
                        }}
                    />
                </div>
                <div
                    className={css`
                        margin-left: 8px;
                    `}
                >
                    <ViewSorterSettings
                        fields={fromJS(fields)}
                        view={view}
                        onChange={({ view }) => {
                            setView(view)
                        }}
                    />
                </div>
            </div>
            <div
                className={css`
                    position: absolute;
                    top: 50px;
                    bottom: 0;
                    left: 0;
                    right: 0;
                `}
            >
                <Table
                    {...props}
                    view={view}
                    onViewChange={({ view }) => setView(view)}
                    fields={viewFields}
                    rows={tableRows}
                />
            </div>
        </div>
    )
}