import React, { useMemo, useRef, useState } from "react";
import Categories from "../components/Categories";

function Home({ data }) {
  const selectCategory = useRef();
  const [selectedCtg, setselectedCtg] = useState("All");
  const [toggle, setToggle] = useState(false);
  const selectChangeHandler = (e) => {
    const currentVal = selectCategory.current.value;
    if (currentVal === "") {
      return;
    }
    setselectedCtg(currentVal);
  };

  const filteredCategory = useMemo(() => {
    const newData = data.filter((obj) => obj.category === selectedCtg);
    return newData;
  }, [selectedCtg, data]);
  return (
    <div className="container">
      <select
        className="categorySelect"
        ref={selectCategory}
        onChange={selectChangeHandler}
      >
        <option value="All">Select</option>
        {data.map(({ category }, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <br />
      <div style={{ display: "inline" }}>
        <input
          type="checkbox"
          className="toggleCheckbox"
          value={toggle}
          onClick={() => setToggle((prevVal) => !prevVal)}
        />
        <label>Show items in Stock only</label>
      </div>
      <div>
        {selectedCtg !== "All" 
          ? filteredCategory.map((item, index) => (
              <Categories inStockCheck={toggle} key={index} data={item} />
            ))
          : data.map((item, index) => (
              <Categories key={index} inStockCheck={toggle} data={item} />
            ))}
      </div>
    </div>
  );
}

export default Home;
