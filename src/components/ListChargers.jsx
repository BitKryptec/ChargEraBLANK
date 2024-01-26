import Link from "next/link";
import React from "react";
import Image from "next/image";

import { FaUsFaListerAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";

import chargers from "../data/chargers.json";

function ListChargers() {
  return (
    <>
    <div className="list_chargers">
      <div className="header_charger">
        <h4>List of chargers</h4>
        <div className="actions">
          <button><FaList /></button>
          <button><BsGrid3X3Gap /></button>
        </div>
      </div>
      {chargers.map((item, index) => {
        return (
          <div key={index} className="one_charger">
            <div className="one_charger_header"></div>
            <div className="one_charger_body">
              <div className="title">{item.title}</div>
              <div className="image">
                <Image
                  src="/charger.jpg"
                  alt="Charger title"
                  width="100"
                  height="100"
                />
              </div>
              <div className="description">{item.description}</div>
            </div>
            <div className="one_charger_footer">
              <button className="call_to_action">Buy charger</button>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default ListChargers;
