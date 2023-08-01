import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => {
        // Extract name property and description
        const {name, ...description} = tile;
        // return Tile component
        return <Tile name={name} description={description} key={index} />
      })}
    </div>
  );
};
