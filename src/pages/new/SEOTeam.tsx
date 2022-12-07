import { Grid } from '@mui/material';
import React from 'react';
import team1 from '../../Assets/Static/team1.png';
import team2 from '../../Assets/Static/team2.png';
import team3 from '../../Assets/Static/team3.png';
import team4 from '../../Assets/Static/team4.png';
import team5 from '../../Assets/Static/team5.png';
import team6 from '../../Assets/Static/team6.png';
import team7 from '../../Assets/Static/team7.png';
import team8 from '../../Assets/Static/team8.png';
import team9 from '../../Assets/Static/team9.png';
import team10 from '../../Assets/Static/team10.png';
import team11 from '../../Assets/Static/team11.png';
import team12 from '../../Assets/Static/team12.png';
import team13 from '../../Assets/Static/team13.png';
import team14 from '../../Assets/Static/team14.png';

export default class SEOTeam extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Grid container>
            <Grid item sm={12} className="teams">
                <div><img src={team1} alt="no_image"/></div>
                <div><img src={team2} alt="no_image"/></div>
                <div><img src={team3} alt="no_image"/></div>
                <div><img src={team4} alt="no_image"/></div>
                <div><img src={team5} alt="no_image"/></div>
                <div><img src={team6} alt="no_image"/></div>
                <div><img src={team7} alt="no_image"/></div>
                <div><img src={team8} alt="no_image"/></div>
                <div><img src={team9} alt="no_image"/></div>
                <div><img src={team10} alt="no_image"/></div>
                <div><img src={team11} alt="no_image"/></div>
                <div><img src={team12} alt="no_image"/></div>
                <div><img src={team13} alt="no_image"/></div>
                <div><img src={team14} alt="no_image"/></div>
            </Grid>
        </Grid>
      </div>
    );
  }
}
