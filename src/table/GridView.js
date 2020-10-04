import React from 'react';
import { cx } from 'emotion'
import { AutoSizer, ScrollSync, Grid } from 'react-virtualized'
import scrollbarSize from 'dom-helpers/scrollbarSize';

export default class GridExample extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.ctrls = {}

        this.state = {
            columnWidth: 220,
            columnCount: 50,
            height: 400,
            overscanColumnCount: 0,
            overscanRowCount: 5,
            headerRowHeight: 44,
            rowHeight: 50,
            rowCount: 100,
            leftGridWidth: this.leftGridWidth()
        };

        this._renderBodyCell = this._renderBodyCell.bind(this);
        this._renderHeaderCell = this._renderHeaderCell.bind(this);
    }

    leftGridWidthGetter = () => this.columnWidthGetter({ index: 1 }) + 25

    render() {
        const {
            columnWidth,
            height,
            overscanColumnCount,
            overscanRowCount,
            rowHeight,
            headerRowHeight,
        } = this.state;

        const {
            columnCount,
            rowCount
        } = this.props

        return (
            <ScrollSync>
                {({
                    clientHeight,
                    clientWidth,
                    onScroll,
                    scrollHeight,
                    scrollLeft,
                    scrollTop,
                    scrollWidth,
                }) => {

                    return (
                        <AutoSizer defaultHeight={height}>
                            {({ width, height }) => (
                                <div className={'GridView'} style={{width, height}}>
                                    <div className={'GridRow'}>
                                    <div
                                        className={cx('LeftSideGridContainer', { scroll: scrollLeft > 0 })}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            width: this.leftGridWidthGetter(),
                                        }}>
                                        <Grid
                                            ref={node => this.ctrls.leftHeaderGrid = node}
                                            cellRenderer={this.props.headerCellRenderer}
                                            className={cx('HeaderGrid', { scroll: scrollTop > 0 })}
                                            width={this.leftGridWidthGetter()}
                                            height={headerRowHeight}
                                            rowHeight={headerRowHeight}
                                            columnWidth={this.columnWidthGetter}
                                            rowCount={1}
                                            columnCount={2}
                                        />
                                    </div>
                                    <div
                                        className={cx('LeftSideGridContainer', { scroll: scrollLeft > 0 })}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: headerRowHeight,
                                            width: this.leftGridWidthGetter(),
                                        }}>
                                        <Grid
                                            ref={node => this.ctrls.leftBodyGrid = node}
                                            overscanColumnCount={overscanColumnCount}
                                            overscanRowCount={overscanRowCount}
                                            cellRenderer={this.props.bodyCellRenderer}
                                            width={this.leftGridWidthGetter()}
                                            columnWidth={this.columnWidthGetter}
                                            columnCount={2}
                                            className={'LeftSideGrid'}
                                            height={height - headerRowHeight - scrollbarSize()}
                                            rowHeight={rowHeight}
                                            rowCount={rowCount}
                                            scrollTop={scrollTop}
                                            onScroll={params => {

                                                params.scrollLeft = scrollLeft

                                                onScroll(params)
                                            }}
                                        />
                                    </div>
                                    <div className={'GridColumn'}>
                                        <div>
                                            <div
                                                style={{
                                                    height: headerRowHeight,
                                                    width: width - scrollbarSize(),
                                                }}>
                                                <Grid
                                                    ref={node => this.ctrls.headerGrid = node}
                                                    className={cx('HeaderGrid', { scroll: scrollTop > 0 })}
                                                    columnWidth={this.columnWidthGetter}
                                                    columnCount={columnCount}
                                                    height={headerRowHeight}
                                                    overscanColumnCount={overscanColumnCount}
                                                    cellRenderer={this._renderHeaderCell}
                                                    rowHeight={headerRowHeight}
                                                    rowCount={1}
                                                    scrollLeft={scrollLeft}
                                                    width={width - scrollbarSize()}
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    top: headerRowHeight,
                                                    height: height - headerRowHeight,
                                                    width,
                                                }}>
                                                <Grid
                                                    ref={node => this.ctrls.bodyGrid = node}
                                                    className={'BodyGrid'}
                                                    columnWidth={this.columnWidthGetter}
                                                    columnCount={columnCount}
                                                    height={height - headerRowHeight}
                                                    scrollTop={scrollTop}
                                                    onScroll={onScroll}
                                                    overscanColumnCount={overscanColumnCount}
                                                    overscanRowCount={overscanRowCount}
                                                    cellRenderer={this._renderBodyCell}
                                                    rowHeight={rowHeight}
                                                    rowCount={rowCount}
                                                    width={width}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )}
                        </AutoSizer>
                    );
                }}
            </ScrollSync>
        );
    }

    columnWidthGetter = ({ index }) => {

        if (index === 0) {
            return 25
        }

        return this.props.columnWidth({ columnIndex: index - 1 })
    }

    update = () => {

        this.ctrls.leftBodyGrid.forceUpdate()
        this.ctrls.bodyGrid.forceUpdate()
    }

    recomputeGridSize = () => {

        this.ctrls.leftHeaderGrid.recomputeGridSize()
        this.ctrls.leftBodyGrid.recomputeGridSize()
        this.ctrls.headerGrid.recomputeGridSize()
        this.ctrls.bodyGrid.recomputeGridSize()
    }

    leftGridWidth = () => {
        return 30 + this.columnWidthGetter({ index: 1 })
    }

    updateLeftGridWidth = () => {

        this.setState({
            leftGridWidth: this.leftGridWidth()
        })
    }

    _renderBodyCell({ columnIndex, key, rowIndex, style }) {
        if (columnIndex < 2) {
            return;
        }

        return this.props.bodyCellRenderer({ columnIndex, key, rowIndex, style });
    }

    _renderHeaderCell({ columnIndex, key, rowIndex, style }) {
        if (columnIndex < 2) {
            return;
        }

        return this.props.headerCellRenderer({ columnIndex, key, rowIndex, style });
    }
}