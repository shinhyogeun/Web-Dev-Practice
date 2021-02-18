import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

export default function TableContainer() {
	const dispatch = useDispatch();
	const { tableData } = useSelector((state) => ({
		tableData: state.tableData,
	}))

	function handleClickCell() {

	}

	return <Table
		tableData={tableData}
		onClickCell={handleClickCell}
	/>
}