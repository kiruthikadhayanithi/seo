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
import { NavLink } from 'react-router-dom';
import Env from '../../../utils/Services/Env';
// import moment from 'moment';
import Popup from '../Champions/Popup';
import Notification from '../Champions/Notification';
import './index.css';
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
  banners_list: [];
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
    class BannersList extends React.Component<MyProps, MyState> {
      constructor(props: MyProps | Readonly<MyProps>) {
        super(props);
        this.state = {
          banners_list: [],
          total_records: 0,
          records_per_page: 10,
          total_pages: 0,
          skipped_records: 1,
          search: '',
          page_type: '',
          type: ['Custom', 'API'],
          newPopup: false,
          id: '',
          openNotify: false,
          notifyMessage: '',
          notifyType: '',
        };
      }

      componentDidMount() {
        this.getBannersList();
      }

      //   handleSearchValue = (e: any) => {
      //     this.setState({
      //       search: e.target.value,
      //     });
      //   };

      onSelectChange = (e: any, typevalue: string | null) => {
        // debugger;
        // this.setState({ page_type: e.target.value }, () => this.getBannersList());
        e.preventDefault();
        this.setState({ page_type: typevalue !== null ? typevalue : '' }, () =>
          this.getBannersList()
        );
        // console.log('PAGE', typevalue);
      };

      deleteData = (id: any) => {
        // console.log(id);
        const deleteData = Env.delete(`banner/${id}`, this.props.userToken);
        deleteData.then(
          (response: any): void => {
            console.log('data', response.data);
            this.getBannersList();
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
        // console.log('STATUS', data);

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

      getBannersList = () => {
        // console.log('Page_type', this.state.page_type);

        // let url = 'banner?page_size=10';
        let url = 'banner/secure?';

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
          url = `${url}&type=${this.state.page_type === 'Custom' ? '1' : '2'}`;
        } else {
          url = `${url}`;
        }

        const getData = Env.get(url, this.props.userToken);

        // const getData = Env.get(
        //   `bannerservice?page_no=${this.state.skipped_records}&page_size=10&search=${this.state.search}&type=${this.state.page_type}`
        // );

        getData.then(
          (response: any): void => {
            const data = response.data.banners;
            // console.log('DATA', response.data);
            this.setState({
              banners_list: data,
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
              this.getBannersList();
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
                        name="search "
                        value={this.state.search}
                        className="SearchValue"
                        onChange={(e: any) => this.searchValue(e)}
                        // onChange={(e) => this.handleSearchValue(e)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="end">
                              <Search />
                            </InputAdornment>
                          ),
                        }}
                        onKeyDown={(e) => {
                          if (e.keyCode == 13) {
                            this.getBannersList();
                          }
                        }}
                      />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div> Type</div>
                        <div style={{ flex: 2, padding: '0px 15px' }}>
                          <Autocomplete
                            className="textValue"
                            style={{ width: '90%', flex: 2, marginTop: '1em' }}
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
                      <NavLink to="/admin/banners/add">
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
                          Create Banner
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </Stack>
              </Grid>
              {this.state.banners_list.length === 0 ? (
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
                            style={{ fontSize: 'large', border: 'none' }}>
                            Name
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
                          colSpan={6}>
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
                              style={{ fontSize: 'large', border: 'none' }}>
                              Name
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
                          {this.state.banners_list.map(
                            (data: any | undefined, index: any) => (
                              <TableRow
                                style={{ borderTop: '1px solid #ddd' }}
                                key={index}
                                sx={{
                                  '&:last-child td, &:last-child th': {
                                    border: 0,
                                  },
                                }}>
                                <TableCell
                                  align="center"
                                  style={{ textTransform: 'capitalize' }}>
                                  {data.name}
                                </TableCell>
                                <TableCell align="center">
                                  {data.banner_type == '1' ? 'Custom' : 'API'}
                                </TableCell>
                                <TableCell align="center">
                                  {data.order_number}
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
                                        data.status == '1'
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
                                    {data.status == '1' ? 'Enable' : 'Disable'}
                                  </span>
                                </TableCell>
                                <TableCell align="center">
                                  <NavLink
                                    to={`/admin/banners/edit/${data.id}`}>
                                    <BorderColorIcon
                                      sx={{ color: '#333840' }}
                                    />
                                  </NavLink>
                                  &nbsp;&nbsp;
                                  <DeleteIcon
                                    onClick={() =>
                                      this.handleOpenPopup(data.id)
                                    }
                                    style={{ cursor: 'pointer' }}
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
                          () => this.getBannersList()
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
