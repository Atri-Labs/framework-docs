---
title: Table
description: Add data and other properties to tables in Atri
---

## Put Data in table

The Table API exposes `at.Table.custom.cols` to add column headers and `at.Table.custom.rows` to add rows in the table. An example code is shown below:

```python
# describe column headers and the data type
at.Table.custom.cols = [
    { "field": "id", "headerName": "ID" },
    { "field": "firstName", "headerName": "First name" },
    { "field": "lastName", "headerName": "Last name" },
    { "field": "age", "headerName": "Age", "type": "number" }
    ]

# add rows
at.Table.custom.rows = [
    { "id": 1, "lastName": "Snow", "firstName": "Jon", "age": 35 },
    { "id": 2, "lastName": "Lannister", "firstName": "Cersei", "age": 42 },
    { "id": 3, "lastName": "Lannister", "firstName": "Jaime", "age": 45 },
    { "id": 4, "lastName": "Stark", "firstName": "Arya", "age": 16 },
    { "id": 5, "lastName": "Targaryen", "firstName": "Daenerys", "age": None },
]
```

## Row Selection

You can allow users to select rows by enabling this option.

```python
at.Table.custom.checkboxSelection = True
```

Whenever a user selects/deselects a row, an event `onSelectionChange` is fired that can be handled as shown below:

```python
def handle_event(at: Atri, req: Request, res: Response):
    # handle event
    if at.Table.onSelectionChange:
        # get all the rows that were selected
        selected_row_ids = at.Table.custom.selection
```

If you want to set rows as already selected when a page loads, you can write a code that looks like follows:

```python
def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    # assign the row ids to select
    at.Table.custom.selection = [1, 2, 3]
```

## Other options in `at.Table.custom`

-   `at.Table.custom.numRows` - Number of rows visible in one page. Eg. 10.
-   `at.Table.custom.rowHeight` - Height of a row in pixels. Eg. 20.
-   `at.Table.custom.autoHeight` - Set height based on parent's height if set to True.
