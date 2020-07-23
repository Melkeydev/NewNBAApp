import React from "react";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import { Popover, Button } from "antd";

export const HoverShowStats = ({ isOpen, player, teamPlayer }) => {
  const {
    ast,
    blk,
    fg3_pct,
    ft_pct,
    ftm,
    reb,
    pts,
    stl,
    turnover,
  } = teamPlayer;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Points : {pts}</td>
          </tr>
          <tr>
            <td>Rebound : {reb}</td>
          </tr>
          <tr>
            <td>Steal : {stl}</td>
          </tr>
          <tr>
            <td>Assists : {ast}</td>
          </tr>
          <tr>
            <td>Block : {blk}</td>
          </tr>
          <tr>
            <td>Field Goal % : {fg3_pct}</td>
          </tr>
          <tr>
            <td>Free throw % : {ft_pct}</td>
          </tr>
          <tr>
            <td>Turnover : {turnover}</td>
          </tr>
          <tr>
            <td>Free Throws Made : {ftm}</td>
          </tr>
        </tbody>
      </table>
      {/*

        <UncontrolledPopover
        trigger="focus"
        placemen="left"
        target={player}
        isOpen={isOpen}
      >
        <PopoverHeader>{player}</PopoverHeader>
        <PopoverBody style={{ marginRight: "15px" }}>
          <table>
            <tbody>
              <tr>
                <td>Points : {pts}</td>
              </tr>
              <tr>
                <td>Rebound : {reb}</td>
              </tr>
              <tr>
                <td>Steal : {stl}</td>
              </tr>
              <tr>
                <td>Assists : {ast}</td>
              </tr>
              <tr>
                <td>Block : {blk}</td>
              </tr>
              <tr>
                <td>Field Goal % : {fg3_pct}</td>
              </tr>
              <tr>
                <td>Free throw % : {ft_pct}</td>
              </tr>
              <tr>
                <td>Turnover : {turnover}</td>
              </tr>
              <tr>
                <td>Free Throws Made : {ftm}</td>
              </tr>
            </tbody>
          </table>
        </PopoverBody>
      </UncontrolledPopover>

        */}
    </div>
  );
};
