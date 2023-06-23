import React from "react";

const Table = ({data}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Writer</th>
                    <th>Genre</th>
                </tr>
                {data.map((item) => {
                    return(
                        <tr key={item.id}>
                            <td>{item.title_book}</td>
                            <td>{item.writer_book}</td>
                            <td>{item.genre}</td>
                        </tr>
                    )
                    })}
            </tbody>
        </table>
    )
}

export default Table;