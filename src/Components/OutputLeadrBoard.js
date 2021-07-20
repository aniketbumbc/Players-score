import React from 'react';
import { Row, Col, Table } from 'reactstrap';
import RenderTableData from './RenderTableData';

const OutputLeaderBoard = ({ leaderboard }) => {
  return (
    <div className='mt-4'>
      <Row>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
                <th>Team</th>
                <th>Food Selection</th>
              </tr>
            </thead>
            <tbody>
              <RenderTableData leaderboard={leaderboard} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default OutputLeaderBoard;
