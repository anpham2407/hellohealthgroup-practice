import { useState, useEffect } from "react";
import "./index.css";
import { Pagination } from "./../../components/paging";
const alignIcon = "../../assets/icons/left-align.svg";
const plusIcon = "../../assets/icons/plus.svg";

function Practice() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = Math.round(data.length / 5);
  const [dataPaging, setDataPaging] = useState([]);
  const handlePages = (updatePage: number) => setPage(updatePage);

  useEffect(() => {
    const newData: string[] = [];
    if (data) {
      for (let i = page; i < page + 5; i++) {
        newData.push(data[i - 1]);
      }
      setDataPaging(newData);
    }
  }, [data, page]);

  useEffect(() => {
    fetch("https://60ccc69771b73400171f88e7.mockapi.io/api/v1/employees")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("error", error);
        }
      );
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="practice-2">
          {dataPaging && (
            <table className="table">
              <thead className="table-head">
                <tr className="table-row table-row-head">
                  <th className="table-cell table-cell-head" scope="col">
                    <i className="icon">Aa</i>
                    <span>Name</span>
                  </th>
                  <th className="table-cell table-cell-head" scope="col">
                    <i className="icon">@</i>
                    Email
                  </th>
                  <th className="table-cell table-cell-head" scope="col">
                    <i className="icon svg">
                      <img src={alignIcon} />
                    </i>
                    Position
                  </th>
                </tr>
              </thead>
              {dataPaging.map((item) => (
                <tbody className="table-body">
                  <tr className="table-row">
                    <td className="table-cell">{item?.name || ''}</td>
                    <td className="table-cell">{item?.email || ''}</td>
                    <td className="table-cell">{item?.position || ''}</td>
                  </tr>
                </tbody>
              ))}
              <tfoot className="table-footer">
                <tr className="table-row table-row-footer">
                  <td className="table-cell table-cell-footer" colSpan={3}>
                    <div className="row">
                      <div className="add-new">
                        <i className="icon svg">
                          <img src={plusIcon} />
                        </i>
                        <span>New</span>
                      </div>
                      <div className="table-paging">
                        <Pagination
                          page={page}
                          totalPages={totalPages}
                          handlePagination={handlePages}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Practice;
