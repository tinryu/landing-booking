import { ReactElement, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
// import SearchRoom from "../../components/searchRoom";
import Filter from "../../components/filter";
import ListView from "../../components/room/listView";
import GridView from "../../components/room/gridView";

export default function Room() {
  const [activeIndex, setActiveIndex] = useState(true);
  return (
    <>
      <Breadcrumb name="Room" />
      {/* <div className="container-fluid wrap-search">
        <SearchRoom />
      </div> */}
      <div className="container rooms">
        <div className="sort-bar row justify-content-between">
          <div className="number col justify-content-start">
            You found <span>5</span> rooms
          </div>
          <div className="gr-sort col justify-content-end">
            <div
              className="grid-view me-3"
              onClick={() => setActiveIndex(false)}
            ></div>
            <div
              className="list-view me-3"
              onClick={() => setActiveIndex(true)}
            ></div>
            <label className="me-3">Sort by</label>
            <select name="sort" defaultValue={"DEFAULT"}>
              <option value="DEFAULT" disabled>
                Price, high to low
              </option>
              <option value="1">high</option>
              <option value="2">low</option>
            </select>
          </div>
        </div>
        <div className="row pb-5">
          <Filter />
          <CSSTransition
            in={activeIndex}
            timeout={300}
            unmountOnExit
            classNames="view-rooms"
          >
            <ListView />
          </CSSTransition>
          <CSSTransition
            in={!activeIndex}
            timeout={300}
            unmountOnExit
            classNames="view-rooms"
          >
            <GridView />
          </CSSTransition>
        </div>
      </div>
    </>
  );
}
Room.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
