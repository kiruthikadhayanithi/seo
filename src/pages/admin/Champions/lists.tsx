// / eslint-disable no-debugger, no-console /;
import AppHeader from '../../../components/AppLayout/admin/AdminHeader';
import React from 'react';
import {
  Box,
  Stack,
  TextField,
  Button,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from '@mineral/core';
import { Search } from '@mui/icons-material';
import { Grid, TableBody, Pagination, Autocomplete } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
// import devops from '../../../Assets/SBOArea/devops.png';
// import saas from '../../../Assets/SBOArea/saas.png';
// import mainframe from '../../../Assets/SBOArea/mainframe.png';
// import cloud from '../../../Assets/SBOArea/cloud.png';
import { NavLink } from 'react-router-dom';
import Env from '../../../utils/Services/Env';
// import moment from 'moment';
import Popup from './Popup';
import Notification from './Notification';
import '../../../../src/index.css';
import { connect } from 'react-redux';
import { isLoggedIn, userToken } from 'reducer/action';
import { withOktaAuth } from '@okta/okta-react';

const moment = require('moment');

type MyProps = {
  props: any;
  userToken: any;
  oktaAuth: any;
  dispatch: any;
};

type MyState = {
  champions_list: [];
  total_records: number;
  records_per_page: number;
  total_pages: number;
  skipped_records: number;
  search: string;
  page_type: string | null;
  type: string[];
  newPopup: boolean;
  id: string;
  openNotify: boolean;
  notifyMessage: string;
  notifyType: string;
};

export default connect(mapDispatchToProps)(
  withOktaAuth(
    class ChampionsList extends React.Component<MyProps, MyState> {
      constructor(props: MyProps | Readonly<MyProps>) {
        super(props);
        this.state = {
          champions_list: [],
          total_records: 0,
          records_per_page: 10,
          total_pages: 0,
          skipped_records: 1,
          search: '',
          page_type: '',
          type: ['Page', 'Link'],
          newPopup: false,
          id: '',
          openNotify: false,
          notifyMessage: '',
          notifyType: '',
        };
      }

      componentDidMount() {
        this.getChampionsList();
      }

      onSelectChange = (e: any, typevalue: string | null) => {
        // debugger;
        // this.setState({ page_type: e.target.value }, () => this.getChampionsList());
        e.preventDefault();
        this.setState({ page_type: typevalue !== null ? typevalue : '' }, () =>
          this.getChampionsList()
        );
        // console.log('PAGE', typevalue);
      };

      deleteData = (id: any) => {
        // console.log(id);
        const deleteData = Env.delete(`champion/${id}`, this.props.userToken);
        deleteData.then(
          (response: any): void => {
            console.log('data', response.data);
            this.getChampionsList();
          },
          (error: any) => {
            if (error.response.status == 401) {
              this.props.oktaAuth.signOut();
              this.props.dispatch(isLoggedIn(false));
              this.props.dispatch(userToken(undefined));
            }
            console.error(error);
          }
        );
        // }
      };

      handleOpenPopup = (id: any) => {
        this.setState({
          newPopup: true,
          id: id,
        });
      };

      handleClosePopup = (data: any) => {
        this.setState({
          newPopup: data,
        });
      };

      handleNotifyClose = () => {
        this.setState({
          openNotify: false,
          notifyMessage: '',
          notifyType: '',
        });
      };

      handleEditValue = (data: any, id: any) => {
        console.log('STATUS', data);

        if (data === true) {
          this.handleClosePopup(false);
          this.deleteData(id);
          this.setState({
            openNotify: true,
            notifyMessage: 'Deleted Successfully',
            notifyType: 'success',
          });
        } else {
          console.log('CANCEL');
          this.handleClosePopup(false);
        }
      };

      getChampionsList = () => {
        // console.log('Page_type', this.state.page_type);

        // let url = 'champion?page_size=10';
        let url = 'champion/secure?';

        if (this.state.search === '' && this.state.page_type === '') {
          url = `${url}&page_no=${this.state.skipped_records}`;
        } else {
          url = `${url}`;
        }

        if (this.state.search !== '') {
          url = `${url}&page_no=1&search=${this.state.search}`;
        } else {
          url = `${url}`;
        }
        if (this.state.page_type !== '') {
          url = `${url}&type=${this.state.page_type === 'Page' ? '1' : '2'}`;
        } else {
          url = `${url}`;
        }

        const getData = Env.get(url, this.props.userToken);

        // const getData = Env.get(
        //   `champion?page_no=${this.state.skipped_records}&page_size=10&search=${this.state.search}&type=${this.state.page_type}`
        // );

        getData.then(
          (response: any): void => {
            const data = response.data.champions;
            // console.log('DATA', response.data);
            this.setState({
              champions_list: data,
              total_records: response.data.totalChampions,
              // records_per_page: response.data.currentPage,
              total_pages: response.data.totalPageCount,
            });
          },
          (error: any) => {
            console.error(error);
            if (error.response.status == 401) {
              this.props.oktaAuth.signOut();
              this.props.dispatch(isLoggedIn(false));
              this.props.dispatch(userToken(undefined));
            }
          }
        );
      };

      searchValue = (e: any) => {
        this.setState({
          search: e.target.value,
        });

        this.state.search.length > 0
          ? setTimeout(() => {
              this.getChampionsList();
            }, 1000)
          : null;
      };

      render() {
        return (
          <div style={{ height: '100%' }}>
            <AppHeader />

            <Box>
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: 'auto',
                  width: '1200px',
                  marginBottom: '-8px',
                }}>
                <Stack spacing={2} style={{ width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center',
                    }}
                    id="champion_list_header">
                    <div>
                      <TextField
                        placeholder="Search here..."
                        style={{
                          width: '20em',
                          borderRadius: '8px',
                        }}
                        name="search"
                        value={this.state.search}
                        className="SearchValue"
                        onChange={(e: any) => this.searchValue(e)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="end">
                              <Search />
                            </InputAdornment>
                          ),
                        }}
                        onKeyDown={(e) => {
                          if (e.keyCode == 13) {
                            this.getChampionsList();
                          }
                        }}
                      />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div> Type</div>
                        <div
                          style={{
                            flex: 2,
                            padding: '0px 15px',
                            marginTop: '1em',
                          }}>
                          <Autocomplete
                            className="textValue"
                            style={{ width: '90%' }}
                            sx={{
                              marginRight: '19em',
                              textAlign: 'center',
                              paddingBottom: '1em',
                            }}
                            value={this.state.page_type}
                            onChange={(e, typevalue) =>
                              this.onSelectChange(e, typevalue)
                            }
                            options={this.state.type}
                            renderInput={(params) => (
                              <TextField {...params} className="textValue" />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <NavLink to="/admin/champions/add">
                        <Button
                          sx={{
                            backgroundColor: '#cc0924',
                            '&:hover': { backgroundColor: '#ed8798' },
                            my: '2em',
                            width: '12em',
                            height: '3em',
                            borderRadius: '1em',
                            float: 'right',
                          }}>
                          <AddCircleOutlineIcon />
                          Create Champion
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </Stack>
              </Grid>
              {this.state.champions_list.length === 0 ? (
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: 'auto',
                    width: '1200px',
                    marginBottom: '-8px',
                  }}>
                  <TableContainer>
                    <Table style={{ border: '1px solid #ddd' }}>
                      <TableHead sx={{ color: '#cc0924' }}>
                        <TableRow>
                          <TableCell
                            align="center"
                            style={{
                              fontSize: 'large',
                              border: 'none',
                            }}>
                            Icon
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 'large', border: 'none' }}>
                            Name
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 'large', border: 'none' }}>
                            Page
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 'large', border: 'none' }}>
                            Type
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 'large', border: 'none' }}>
                            Order No
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 'large', border: 'none' }}>
                            Updated Date
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 'large', border: 'none' }}>
                            Status
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 'large', border: 'none' }}>
                            Action
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableCell
                          align="center"
                          style={{ textTransform: 'capitalize' }}
                          colSpan={8}>
                          No Records Found
                        </TableCell>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              ) : (
                <>
                  <Grid
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: 'auto',
                      width: '1200px',
                      marginBottom: '-8px',
                    }}>
                    <TableContainer>
                      <Table style={{ border: '1px solid #ddd' }}>
                        <TableHead sx={{ color: '#cc0924' }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{
                                fontSize: 'large',
                                border: 'none',
                              }}>
                              Icon
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ fontSize: 'large', border: 'none' }}>
                              Name
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ fontSize: 'large', border: 'none' }}>
                              Page
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ fontSize: 'large', border: 'none' }}>
                              Type
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ fontSize: 'large', border: 'none' }}>
                              Order No
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ fontSize: 'large', border: 'none' }}>
                              Updated Date
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ fontSize: 'large', border: 'none' }}>
                              Status
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ fontSize: 'large', border: 'none' }}>
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.state.champions_list.map(
                            (data: any | undefined, index: any) => (
                              <TableRow
                                style={{ borderTop: '1px solid #ddd' }}
                                key={index}
                                sx={{
                                  '&:last-child td, &:last-child th': {
                                    border: 0,
                                  },
                                }}>
                                <TableCell scope="row" align="center">
                                  {data.page_type == '1' ? (
                                    <img
                                      src={`${
                                        data.icon_image ? data.icon_image : ''
                                      }`}
                                      alt="icon"
                                      width="38em"
                                      height="40em"
                                    />
                                  ) : (
                                    <img
                                      src="/default/image/subpageicon.png"
                                      alt="icon"
                                      width="38em"
                                      height="40em"
                                    />
                                  )}
                                </TableCell>
                                <TableCell align="center">
                                  {data.name}
                                </TableCell>
                                <TableCell align="center">
                                  {data.page_type == '1' ? 'Main' : 'Sub'}
                                </TableCell>
                                <TableCell align="center">
                                  {data.is_link == '1' ? 'Page' : 'Link'}
                                </TableCell>
                                <TableCell align="center">
                                  {data.order}
                                </TableCell>
                                <TableCell align="center">
                                  {/* {data.updatedAt} */}
                                  {moment(data.updatedAt).format(
                                    'MM-DD-YYYY hh:mm:ss'
                                  )}
                                </TableCell>
                                <TableCell align="center">
                                  <span
                                    style={{
                                      backgroundColor:
                                        data.is_active === true
                                          ? '#0bc461'
                                          : '#f9a150',
                                      height: '35px',
                                      width: '80px',
                                      borderRadius: '90px',
                                      color: '#fff',
                                      fontWeight: 600,
                                      margin: 'auto',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}>
                                    {data.is_active == 1 ? 'Enable' : 'Disable'}
                                  </span>
                                </TableCell>
                                <TableCell align="center">
                                  <NavLink
                                    to={`/admin/champions/edit/${data.id}`}>
                                    <BorderColorIcon
                                      sx={{ color: '#333840' }}
                                    />
                                  </NavLink>
                                  &nbsp;&nbsp;
                                  <DeleteIcon
                                    style={{ cursor: 'pointer' }}
                                    onClick={() =>
                                      this.handleOpenPopup(data.id)
                                    }
                                  />
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      margin: 'auto',
                      width: '1200px',
                      my: '2em',
                    }}>
                    <Pagination
                      count={this.state.total_pages}
                      variant="outlined"
                      color="secondary"
                      shape="rounded"
                      defaultPage={1}
                      // page={this.state.records_per_page / 10}
                      onChange={(event: any, page: any) => {
                        this.setState(
                          {
                            skipped_records: page,
                            records_per_page: page * 10,
                          },
                          () => this.getChampionsList()
                        );
                      }}
                    />
                  </Grid>
                </>
              )}
            </Box>
            <Notification
              value={this.state.openNotify}
              message={this.state.notifyMessage}
              type={this.state.notifyType}
              handleNotify={this.handleNotifyClose}
            />
            <Popup
              value={this.state.newPopup}
              data={this.state.id}
              closePopup={this.handleClosePopup}
              deleteValue={this.handleEditValue}
            />
          </div>
        );
      }
    }
  )
);

function mapDispatchToProps(state: any) {
  return {
    userToken: state.userToken,
    userGroup: state.userGroup,
  };
}
