import React from "react";
import MovieCard from "./MovieCard";
import { Accordion, Card, Button } from "react-bootstrap";

export default function MovieList(props) {
    const mList = props.mList;
    const filterData = props.filterData;
  return (
    <div className="row mt-5">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <Accordion>
              <Card>
                <Accordion.Toggle as={Button} eventKey="0">
                  Movies List
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div className="row">
                    <MovieCard data={filterData(mList)} />
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
