import AppHeader from '../../../components/AppLayout/admin/AdminHeader';
import React from 'react';
import { Box, Button, Typography } from '@mineral/core';
import {
  Divider,
  Grid,
  TextField,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './index.css';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import Env from '../../../utils/Services/Env';
import CKEditor from 'ckeditor4-react-advanced';
// import SunEditor from 'suneditor-react';
// import 'suneditor/dist/css/suneditor.min.css';

import Carousel from '../../../components/Carousel/index';
import { AddPhotoAlternate } from '@mui/icons-material';
// import { imageUrl } from 'utils/Services/Env';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import editorConfig from '../../../components/CkEditor/config';
import { connect } from 'react-redux';
// import { useOktaAuth } from '@okta/okta-react';
import { isLoggedIn, userToken } from 'reducer/action';
import { withOktaAuth } from '@okta/okta-react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

// import moment from 'moment';

const moment = require('moment');

export default connect(mapDispatchToProps)(
  withOktaAuth(
    class BannerForm extends React.Component<any, any> {
      isEdit: boolean;
      id: any;
      constructor(props: any) {
        super(props);
        this.state = {
          fields: {
            name: '',
            banner_type: '1',
            start_date: null,
            end_date: null,
            status: '1',
            background_image: '',
            order_number: '',
            content: '',
            group: '',
            endpoint_url: '',
            endpoint_type: '',
            endpoint_tokentype: '',
            username: '',
            password: '',
            endpoint_token: '',
          },
          show_loader: true,
          img_valid: 'false',
          submit_btn: true,
          get_apidata: true,
          groupOptions: props.userGroup,
          apiKeys: {},
          convertedApiKeys: '',
          apiValues: {},
          hideApiContainer: false,
          staticContent: '',
          dynamicObjData: '',
          today: new Date(),
        };

        this.isEdit = window.location.href.includes('edit');
        this.id =
          window.location.href.includes('edit') &&
          window.location.href.split('/')[6];
      }

      componentDidMount() {
        if (this.isEdit === true) {
          this.getBannersData();
        } else {
          setTimeout(() => {
            this.setState({ show_loader: false });
          }, 2000);
        }
      }

      getBannersData = () => {
        const getData = Env.get(`banner/${this.id}`, this.props.userToken);
        getData.then(
          (response: any): void => {
            const data = response.data.data;
            this.setState(
              {
                fields: {
                  name: data.name,
                  banner_type: data.banner_type,
                  start_date: data.start_date,
                  end_date: data.end_date,
                  status: data.status,
                  background_image: data.background_image,
                  order_number: data.order_number,
                  content: data.content,
                  group: data.group,
                  endpoint_url: data.endpoint_url,
                  endpoint_type: data.endpoint_type,
                  endpoint_token: data.endpoint_token,
                  endpoint_tokentype: data.endpoint_tokentype,
                  username: data.username,
                  password: data.password,
                },
                staticContent: data.content,
              },
              () => {
                return data.banner_type == 2
                  ? this.checkApi(data.endpoint_url)
                  : null;
              }
            );
            setTimeout(() => {
              this.setState({ show_loader: false });
            }, 2000);
          },
          (error: any) => {
            console.error(error);
            if (error.response.status == 401) {
              this.props.oktaAuth.signOut();
              this.props.dispatch(isLoggedIn(false));
              this.props.dispatch(userToken(undefined));
            } else {
              setTimeout(() => {
                this.setState({ show_loader: false });
              }, 2000);
            }
          }
        );
      };

      onFieldChange = (e: any) => {
        const items = { ...this.state.fields };
        if (e.target.name == 'banner_type') {
          items['content'] = '';
        }

        if (e.target.name == 'endpoint_tokentype') {
          if (e.target.value == '2') {
            if (
              items['endpoint_token'] == null ||
              items['endpoint_token'] == ''
            ) {
              items['endpoint_token'] = '';
            }
          } else {
            items['username'] = '';
            items['password'] = '';
          }
        }

        items[e.target.name] =
          e.target.name === 'order_number'
            ? e.target.value.replace(/[^0-9]/g, '')
            : e.target.value;

        this.setState({
          fields: items,
        });
      };

      onFormSubmit = () => {
        if (this.state.fields.background_image == '') {
          toast.error('Select Background Image');
        } else if (
          (this.state.fields.start_date != null &&
            this.state.fields.start_date !== 'Invalid date' &&
            this.state.fields.end_date === null) ||
          (this.state.fields.start_date === null &&
            this.state.fields.end_date != null &&
            this.state.fields.end_date !== 'Invalid date')
        ) {
          toast.error('Pick Valid Start & End Date');
        } else {
          if (
            this.state.fields.start_date == 'Invalid date' &&
            this.state.fields.end_date == 'Invalid date'
          ) {
            // debugger;
            const items = { ...this.state.fields };
            items['start_date'] = null;
            items['end_date'] = null;
            this.setState(
              {
                fields: items,
              },
              () => {
                this.restAPI(items);
              }
            );
          } else if (
            this.state.fields.start_date === 'Invalid date' &&
            this.state.fields.end_date !== 'Invalid date'
          ) {
            const items = { ...this.state.fields };
            items['start_date'] = null;
            this.setState(
              {
                fields: items,
              },
              () => {
                this.restAPI(items);
              }
            );
          } else if (
            this.state.fields.start_date !== 'Invalid date' &&
            this.state.fields.end_date === 'Invalid date'
          ) {
            const items = { ...this.state.fields };
            items['end_date'] = null;
            this.setState(
              {
                fields: items,
              },
              () => {
                this.restAPI(items);
              }
            );
          } else {
            const items = { ...this.state.fields };
            //items['end_date'] = null;
            this.setState(
              {
                fields: items,
              },
              () => {
                this.restAPI(items);
              }
            );
          }
        }
      };

      restAPI = (items: any) => {
        const chosenApi = this.state.fields.endpoint_tokentype;
        const basicApi = { ...this.state.fields };
        if (basicApi.banner_type == '1') {
          delete basicApi.endpoint_token;
          delete basicApi.endpoint_tokentype;
          delete basicApi.endpoint_type;
          delete basicApi.endpoint_url;
        } else {
          if (chosenApi == 1) {
            delete basicApi.endpoint_token;
          } else {
            if (this.isEdit != true) {
              basicApi['endpoint_token'] = `Bearer ${basicApi.endpoint_token}`;
            }
            delete basicApi.username;
            delete basicApi.password;
          }
        }
        if (
          (items['start_date'] === null && items['end_date'] != null) ||
          (items['start_date'] != null && items['end_date'] === null)
        ) {
          // this.onFormSubmit();
        } else {
          this.setState({ show_loader: true });
          if (this.isEdit === true) {
            const updateData = Env.put(
              `banner/${this.id}`,
              basicApi,
              this.props.userToken
            );
            updateData.then(
              (): void => {
                toast.success('Banner updated successfully!');
                setTimeout(() => {
                  this.setState({ show_loader: false });
                  if (this.state.show_loader === true) {
                    window.location.href = '/admin/banners';
                  }
                }, 3000);
              },
              (error: any) => {
                console.error(error);
                // toast.error('Service in progress');
                toast.error(
                  JSON.stringify(error.response.data.message).replace(/"/g, '')
                );
                this.setState({ show_loader: false });
              }
            );
            return <NavLink to="/admin/banners" />;
          } else {
            this.setState(basicApi);
            const postData = Env.post(`banner`, basicApi, this.props.userToken);
            postData.then(
              (): void => {
                // toast.success(JSON.stringify(response.data.message));
                toast.success('Banner created successfully!');
                setTimeout(() => {
                  this.setState({ show_loader: false });
                  if (this.state.show_loader === true) {
                    window.location.href = '/admin/banners';
                    // return false;
                  }
                }, 3000);
              },
              (error: any) => {
                console.error(error);
                toast.error(
                  JSON.stringify(error.response.data.message).replace(/"/g, '')
                );
                if (error.response.status == 401) {
                  this.props.oktaAuth.signOut();
                  this.props.dispatch(isLoggedIn(false));
                  this.props.dispatch(userToken(undefined));
                } else {
                  setTimeout(() => {
                    this.setState({ show_loader: false });
                  }, 2000);
                }
                // toast.error(error.data.message);
              }
            );
            return <NavLink to="/admin/banners" />;
          }
        }
      };

      uploadAllImage = (e: any, type: any) => {
        // this.setState({
        //   submit_btn: false,
        // });
        if (type == 'banner_bg_image') {
          document.getElementById(`background_image`)?.click();
        }
      };

      onFileUpload = (e: any, type: any) => {
        this.setState({
          submit_btn: false,
        });
        if (type == 'banner_bg_image') {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('file', file as Blob);

          if (e.target.files.length > 0) {
            const image = Env.post(`upload`, formData, this.props.userToken);
            image.then(
              (response: any): void => {
                const imgPath = response.data.link;
                // const dataImage = axios.get(`${imageUrl}${imgPath}`);
                // console.log('URL', dataImage);
                const items = { ...this.state.fields };
                items[e.target.name] = imgPath;
                toast.success('Upload was successful');

                this.setState({
                  submit_btn: true,
                  img_valid: 'false',
                  fields: items,
                });
                // this.setState({ submit_btn: true });
              },
              (error: any) => {
                console.error(error);
                toast.error(JSON.stringify(error.response.statusText));
                this.setState({ submit_btn: true, img_valid: 'false' });
                // this.setState({ submit_btn: true });
              }
            );
          } else {
            this.setState({ submit_btn: true });
          }
        } else {
          this.setState({ submit_btn: true });
        }
      };

      onFormReset = () => {
        // document.getElementById('background_image')?.removeAttribute('value');
        this.setState({
          fields: {
            name: '',
            banner_type: '1',
            start_date: null,
            end_date: null,
            status: '1',
            background_image: '',
            order_number: '',
            content: '',
            group: '',
            endpoint_url: '',
            endpoint_type: '',
            endpoint_tokentype: '',
            username: '',
            password: '',
            endpoint_token: '',
          },
          convertedApiKeys: '',
          submit_btn: true,
          get_apidata: true,
          groupOptions: this.props.userGroup,
          apiValues: {},
          hideApiContainer: false,
          staticContent: '',
          dynamicObjData: '',
        });
      };

      handleBannerDate = (newValue: any, type: any) => {
        // const form = moment(newValue).format('MM-DD-YYYY hh:mm:ss a ');
        const form = moment(newValue).toISOString();
        const items = { ...this.state.fields };
        items[type] = form;
        this.setState({
          fields: items,
        });
      };

      checkApi = (url: any) => {
        const headers: any = {};
        const auth: any = {
          username: '',
          password: '',
        };
        let axiosInstance: any = '';
        if (this.state.fields.endpoint_tokentype == '1') {
          auth['username'] = this.state.fields.username;
          auth['password'] = this.state.fields.password;
          axiosInstance = axios({
            url: url,
            method: this.state.fields.endpoint_type,
            auth: auth,
          });
        } else {
          headers[
            'Authorization'
          ] = `Bearer ${this.state.fields.endpoint_token}`;
          axiosInstance = axios({
            url: url,
            method: this.state.fields.endpoint_type,
            headers: headers,
          });
        }
        const endpointUrl = this.state.fields.endpoint_url;
        if (
          endpointUrl.indexOf('http://') == 0 ||
          endpointUrl.indexOf('https://') == 0
        ) {
          axiosInstance
            .then((res: any) => {
              if (!Array.isArray(res.data)) {
                const persons: any[] = res.data;
                const key_data: any = [];

                const value_data: any = Object.values(persons);
                let convertedApiKeys: any = '';

                Object.entries(persons).forEach(([key, value]) => {
                  if (typeof value != 'object') {
                    key_data.push(`{{${key}}}`);
                    convertedApiKeys = convertedApiKeys.concat(`{{${key}}}\n`);
                  }
                });
                if (key_data.length != 0) {
                  toast.success('Access allowed');
                  this.setState({
                    apiKeys: key_data,
                    apiValues: value_data,
                    submit_btn: true,
                    hideApiContainer: true,
                    convertedApiKeys: convertedApiKeys,
                  });
                } else {
                  toast.warn('Please use object typed API URL');
                }
              } else {
                toast.warn('Please use object typed API URL');
              }
            })
            .catch((error: any) => {
              this.setState({
                errorMessage: error.message,
                hideApiContainer: false,
              });
              // console.error('There was an error!', error.message);
              toast.error('Please enter valid API URL');
            });
        } else {
          toast.error('Please enter valid API URL');
        }
      };

      render() {
        const state = this.state.fields;
        return (
          <div style={{ height: '100%' }}>
            <AppHeader />
            <Box>
              <Grid
                style={{
                  margin: 'auto',
                  width: '1200px',
                }}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.onFormSubmit();
                  }}>
                  <div className="banners-form">
                    <Grid container spacing={2}>
                      <Grid item lg={6}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'rgb(204, 9, 47)',
                            fontWeight: 600,
                            fontSize: '18px',
                            cursor: 'pointer',
                          }}>
                          {/* {this.state.preview === false ? ( */}
                          <NavLink
                            to="/admin/banners"
                            style={{
                              textDecoration: 'none',
                              display: 'contents',
                            }}>
                            <ArrowBackIcon
                              style={{ color: 'rgb(204, 9, 47)' }}
                            />
                            <span
                              style={{
                                color: 'rgb(204, 9, 47)',
                                fontSize: '14px',
                                padding: '0px 10px',
                              }}>
                              Back to Banners
                            </span>
                          </NavLink>
                          {/* ) : (
                      <Button
                        style={{
                          textDecoration: 'none',
                          display: 'contents',
                        }}
                        onClick={() => this.setState({ preview: false })}>
                        <ArrowBackIcon style={{ color: 'rgb(204, 9, 47)' }} />
                        <span
                          style={{
                            color: 'rgb(204, 9, 47)',
                            fontSize: '14px',
                            padding: '0px 10px',
                          }}>
                          Back to Edit
                        </span>
                      </Button> */}
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div
                          style={{
                            textAlign: 'end',
                            color: 'rgb(204, 9, 47)',
                            fontWeight: 600,
                            fontSize: '18px',
                          }}>
                          Banners {this.isEdit === true ? 'Update' : 'Add'}
                        </div>
                      </Grid>
                    </Grid>

                    <div style={{ marginTop: '20px' }}>
                      <Carousel
                        data={[this.state.fields]}
                        onEdit={!false}
                        keys={this.state.apiKeys}
                        values={this.state.apiValues}
                      />
                    </div>

                    {this.state.show_loader === true && (
                      <div id="app-loader">
                        <Bars
                          height="80"
                          width="80"
                          color="rgb(204, 9, 47)"
                          ariaLabel="bars-loading"
                          wrapperClass=""
                          visible={this.state.show_loader}
                        />
                      </div>
                    )}

                    <div className="banners-form-component">
                      {/* <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      {this.state.fields.banner_type.toString() === '1' && (
                        <div style={{ padding: '5px 0px' }}>
                          <Button
                            style={{
                              background: '#CC092F',
                              fontSize: '12px',
                              height: '40px',
                              width: '100px',
                              fontWeight: 400,
                            }}
                            onClick={() => this.setState({ preview: true })}>
                            Preview
                          </Button>
                        </div>
                      )}
                    </div> */}
                      <div className="banners-block-titles">
                        <Typography variant="h3">Basic Details</Typography>
                      </div>
                      <Divider />
                      <div className="" style={{ padding: '25px 10px' }}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item sm={6}>
                            <div className="block-flex">
                              <div style={{ flex: 1, fontWeight: 600 }}>
                                Banner Name
                              </div>
                              <div style={{ flex: 2, padding: '0px 15px' }}>
                                <TextField
                                  style={{ width: '100%' }}
                                  value={state.name}
                                  name="name"
                                  placeholder="Banner Name"
                                  onChange={(e) => this.onFieldChange(e)}
                                  required
                                />
                              </div>
                            </div>
                          </Grid>

                          <Grid item sm={6}>
                            <div className="block-flex">
                              <div style={{ flex: 1, fontWeight: 600 }}>
                                Type
                              </div>
                              <div style={{ flex: 2, padding: '0px 15px' }}>
                                <Select
                                  style={{ width: '100%' }}
                                  value={state.banner_type}
                                  name="banner_type"
                                  label="Page Type"
                                  onChange={(e) => this.onFieldChange(e)}
                                  required>
                                  <MenuItem value="1">Custom</MenuItem>
                                  <MenuItem value="2">API</MenuItem>
                                </Select>
                              </div>
                            </div>
                          </Grid>

                          <Grid item sm={6}>
                            <div className="block-flex">
                              <div style={{ flex: 1, fontWeight: 600 }}>
                                Start Date
                              </div>
                              <div style={{ flex: 2, padding: '0px 15px' }}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}>
                                  <Stack spacing={3}>
                                    <DesktopDateTimePicker
                                      value={state.start_date}
                                      inputFormat="MM/dd/yyyy hh:mm a"
                                      minDate={this.state.today}
                                      onChange={(newValue) =>
                                        this.handleBannerDate(
                                          newValue,
                                          'start_date'
                                        )
                                      }
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          name="start_date"
                                        />
                                      )}
                                    />
                                  </Stack>
                                </LocalizationProvider>
                              </div>
                            </div>
                          </Grid>

                          <Grid item sm={6}>
                            <div className="block-flex">
                              <div style={{ flex: 1, fontWeight: 600 }}>
                                End Date
                              </div>
                              <div style={{ flex: 2, padding: '0px 15px' }}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}>
                                  <Stack spacing={3}>
                                    <DesktopDateTimePicker
                                      value={state.end_date}
                                      inputFormat="MM/dd/yyyy hh:mm a"
                                      minDate={
                                        this.state.fields.start_date ||
                                        this.state.today
                                      }
                                      onChange={(newValue) =>
                                        this.handleBannerDate(
                                          newValue,
                                          'end_date'
                                        )
                                      }
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          name="end_date"
                                        />
                                      )}
                                    />
                                  </Stack>
                                </LocalizationProvider>
                              </div>
                            </div>
                          </Grid>

                          <Grid item sm={6}>
                            <div className="block-flex">
                              <div style={{ flex: 1, fontWeight: 600 }}>
                                Status
                              </div>
                              <div style={{ flex: 2, padding: '0px 15px' }}>
                                <Select
                                  style={{ width: '100%' }}
                                  value={state.status}
                                  name="status"
                                  label="Status Type"
                                  onChange={(e) => this.onFieldChange(e)}
                                  required>
                                  <MenuItem value="1">Enable</MenuItem>
                                  <MenuItem value="2">Disable</MenuItem>
                                </Select>
                              </div>
                            </div>
                          </Grid>

                          <Grid item sm={6}>
                            <div className="block-flex">
                              <div style={{ flex: 1, fontWeight: 600 }}>
                                Background Image
                              </div>
                              {/* <div
                              style={{
                                flex: 2,
                                padding: '0px 15px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              {state.background_image !== '' && (
                                <img
                                  src="https://i.picsum.photos/id/705/200/300.jpg?hmac=pGByXwn1zuSUt1HtTv0qSR9KZYBBsB9tiYRJAzj_140"
                                  alt="No_image"
                                  style={{
                                    width: '150px',
                                    height: '70px',
                                    marginRight: '10px',
                                  }}
                                />
                              )}
                              <TextField
                                style={{ width: '100%' }}
                                type="file"
                                // value={state.background_image}
                                name="background_image"
                                onChange={(e) => this.onFieldChange(e)}
                                required
                              />
                            </div> */}
                              <div
                                style={{
                                  flex: 2,
                                  padding: '0px 15px',
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                {state.background_image !== '' && (
                                  <img
                                    src={state.background_image}
                                    alt="No_image"
                                    style={{
                                      width: '87px',
                                      height: '70px',
                                      marginRight: '10px',
                                    }}
                                  />
                                )}
                                <input
                                  id="background_image"
                                  type="file"
                                  accept="image/*"
                                  aria-label="upload"
                                  name="background_image"
                                  onChange={(e) =>
                                    this.onFileUpload(e, 'banner_bg_image')
                                  }
                                  required={
                                    this.state.img_valid == 'true'
                                      ? true
                                      : false
                                  }
                                  style={{ display: 'none' }}
                                />
                                <TextField
                                  value={
                                    state.background_image
                                      ? state.background_image.split('/').pop()
                                      : ''
                                  }
                                  placeholder="Background Image"
                                  id="background_image_name"
                                  name="background_image"
                                  inputProps={{ readOnly: true }}
                                  style={{ display: 'none' }}
                                  required={
                                    this.state.img_valid == 'true'
                                      ? true
                                      : false
                                  }
                                />
                                <Button
                                  sx={{
                                    backgroundColor: 'rgb(204, 9, 47)',
                                    height: '3em',
                                    '&:hover': {
                                      backgroundColor: 'rgb(204, 9, 47)',
                                    },
                                  }}
                                  name="background_image"
                                  onClick={(e) =>
                                    this.uploadAllImage(e, 'banner_bg_image')
                                  }>
                                  <AddPhotoAlternate />
                                </Button>
                                {/* {this.state.is_form_valid === true &&
                              state.background_image === '' && (
                                <FormHelperText>Icon </FormHelperText>
                              )} */}
                              </div>
                            </div>
                          </Grid>
                          <Grid item sm={6}>
                            <div className="block-flex">
                              <div style={{ flex: 1, fontWeight: 600 }}>
                                Order No.
                              </div>
                              <div style={{ flex: 2, padding: '0px 15px' }}>
                                <TextField
                                  inputProps={{
                                    maxLength: 2,
                                  }}
                                  style={{ width: '100%' }}
                                  value={state.order_number}
                                  name="order_number"
                                  placeholder="Order No"
                                  onChange={(e) => this.onFieldChange(e)}
                                  required
                                />
                              </div>
                            </div>
                          </Grid>

                          <Grid item sm={6}>
                            <div className="block-flex">
                              <div style={{ flex: 1, fontWeight: 600 }}>
                                Access Group
                              </div>
                              <div style={{ flex: 2, padding: '0px 15px' }}>
                                <Select
                                  style={{ width: '100%' }}
                                  value={state.group}
                                  name="group"
                                  label="Champion Group"
                                  onChange={(e) => this.onFieldChange(e)}
                                  disabled={this.isEdit}
                                  required>
                                  {this.state.groupOptions.map(
                                    (item: any, index: any) =>
                                      item !== 'Everyone' &&
                                      item.startsWith('OM_SEO_') ? (
                                        <MenuItem value={item} key={index}>
                                          {item.split('_').pop()}
                                        </MenuItem>
                                      ) : null
                                  )}
                                </Select>
                              </div>
                            </div>
                          </Grid>

                          {state.banner_type.toString() === '1' ? (
                            <>
                              <Grid item sm={12}>
                                <div
                                  className="block-flex"
                                  style={{ alignItems: 'flex-start' }}>
                                  <div
                                    style={{ width: '180px', fontWeight: 600 }}>
                                    Content
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    {/* <SunEditor
                                  setContents={this.state.fields.content}
                                  showToolbar={!false}
                                  onChange={(content: any) => {
                                    const items = { ...this.state.fields };
                                    items['content'] = content;
                                    this.setState({
                                      fields: items,
                                    });
                                  }}
                                  setDefaultStyle="height: auto"
                                  setOptions={{
                                    buttonList: [
                                      [
                                        'bold',
                                        'underline',
                                        'italic',
                                        'strike',
                                        'list',
                                        'align',
                                        'fontSize',
                                        'fontColor',
                                        'hiliteColor',
                                        'formatBlock',
                                        'table',
                                        // 'image',
                                        'codeView',
                                      ],
                                    ],
                                  }}
                                /> */}
                                    <CKEditor
                                      config={editorConfig}
                                      data={this.state.fields.content}
                                      onChange={(event: any) => {
                                        const items = { ...this.state.fields };
                                        items['content'] =
                                          event.editor.getData();
                                        this.setState({
                                          fields: items,
                                        });
                                      }}
                                    />
                                  </div>
                                </div>
                              </Grid>
                              {}
                            </>
                          ) : (
                            <>
                              {/* <Grid item sm={6}>
                                <div className="block-flex">
                                  <div style={{ flex: 1, fontWeight: 600 }}>
                                    Identity key
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    <TextField
                                      style={{ width: '100%' }}
                                      value={state.identity_key}
                                      type="number"
                                      name="identity_key"
                                      placeholder="Identity Key"
                                      onChange={(e) => this.onFieldChange(e)}
                                      required
                                    />
                                  </div>
                                </div>
                              </Grid> */}
                              <Grid item sm={6} />
                              <Grid item sm={6}>
                                <div className="block-flex">
                                  <div style={{ flex: 1, fontWeight: 600 }}>
                                    REST API Endpoint
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    <TextField
                                      style={{ width: '100%' }}
                                      value={state.endpoint_url}
                                      name="endpoint_url"
                                      // id="endpoint_url"
                                      placeholder="Rest Api Endpoint"
                                      onChange={(e) => this.onFieldChange(e)}
                                      required
                                      disabled={this.state.hideApiContainer}
                                    />
                                  </div>
                                </div>
                              </Grid>
                              <Grid item sm={6} />
                              <Grid item sm={6}>
                                <div className="block-flex">
                                  <div style={{ flex: 1, fontWeight: 600 }}>
                                    API Method
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    <Select
                                      style={{ width: '100%' }}
                                      value={state.endpoint_type}
                                      name="endpoint_type"
                                      id="endpoint_type"
                                      label="API Method"
                                      onChange={(e) => this.onFieldChange(e)}
                                      disabled={this.state.hideApiContainer}
                                      required>
                                      <MenuItem value="GET">Get</MenuItem>
                                      <MenuItem value="POST">Post</MenuItem>
                                    </Select>
                                  </div>
                                </div>
                              </Grid>
                              <Grid item sm={6} />
                              <Grid item sm={6}>
                                <div className="block-flex">
                                  <div style={{ flex: 1, fontWeight: 600 }}>
                                    API Type
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    <Select
                                      style={{ width: '100%' }}
                                      value={state.endpoint_tokentype}
                                      name="endpoint_tokentype"
                                      id="endpoint_tokentype"
                                      label="API Type"
                                      onChange={(e) => this.onFieldChange(e)}
                                      disabled={this.state.hideApiContainer}
                                      required>
                                      <MenuItem value="1">Basic</MenuItem>
                                      <MenuItem value="2">Bearer</MenuItem>
                                    </Select>
                                  </div>
                                </div>
                              </Grid>

                              {state.endpoint_tokentype &&
                              state.endpoint_tokentype.toString() === '1' ? (
                                <>
                                  <Grid item sm={6} />
                                  <Grid item sm={6}>
                                    <div className="block-flex">
                                      <div style={{ flex: 1, fontWeight: 600 }}>
                                        Username
                                      </div>
                                      <div
                                        style={{
                                          flex: 2,
                                          padding: '0px 15px',
                                        }}>
                                        <TextField
                                          style={{ width: '100%' }}
                                          value={this.state.fields.username}
                                          disabled={this.state.hideApiContainer}
                                          name="username"
                                          placeholder="Username"
                                          onChange={(e) =>
                                            this.onFieldChange(e)
                                          }
                                          required
                                        />
                                      </div>
                                    </div>
                                  </Grid>
                                  <Grid item sm={6} />
                                  <Grid item sm={6}>
                                    <div className="block-flex">
                                      <div style={{ flex: 1, fontWeight: 600 }}>
                                        Password
                                      </div>
                                      <div
                                        style={{
                                          flex: 2,
                                          padding: '0px 15px',
                                        }}>
                                        <TextField
                                          type="password"
                                          style={{ width: '100%' }}
                                          value={this.state.fields.password}
                                          disabled={this.state.hideApiContainer}
                                          name="password"
                                          placeholder="Password"
                                          onChange={(e) =>
                                            this.onFieldChange(e)
                                          }
                                          required
                                        />
                                      </div>
                                    </div>
                                  </Grid>
                                </>
                              ) : (
                                <Grid item sm={6} />
                              )}

                              {state.endpoint_tokentype &&
                              state.endpoint_tokentype.toString() === '2' ? (
                                <>
                                  <Grid item sm={6}>
                                    <div className="block-flex">
                                      <div style={{ flex: 1, fontWeight: 600 }}>
                                        Token
                                      </div>
                                      <div
                                        style={{
                                          flex: 2,
                                          padding: '0px 15px',
                                        }}>
                                        <TextField
                                          style={{ width: '100%' }}
                                          value={
                                            this.state.fields.endpoint_token
                                          }
                                          name="endpoint_token"
                                          placeholder="Bearer Token"
                                          disabled={this.state.hideApiContainer}
                                          onChange={(e) =>
                                            this.onFieldChange(e)
                                          }
                                          required
                                        />
                                      </div>
                                    </div>
                                  </Grid>
                                  <Grid item sm={6} />
                                </>
                              ) : (
                                <Grid item sm={6} />
                              )}
                              <Grid item sm={6} style={{ textAlign: 'end' }}>
                                {state.endpoint_tokentype == 1 &&
                                  state.username != '' &&
                                  state.password != '' &&
                                  state.endpoint_url != '' &&
                                  state.endpoint_url != null && (
                                    <Button
                                      style={{
                                        background: '#CC092F',
                                        fontSize: '14px',
                                        height: '40px',
                                        width: '150px',
                                        fontWeight: 400,
                                        margin: '10px',
                                        color: '#fff',
                                        opacity: this.state.hideApiContainer
                                          ? 0.8
                                          : 1,
                                      }}
                                      type="submit"
                                      disabled={this.state.hideApiContainer}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        this.checkApi(
                                          this.state.fields.endpoint_url
                                        );
                                      }}>
                                      Validate Endpoint
                                    </Button>
                                  )}

                                {state.endpoint_tokentype == 2 &&
                                  state.endpoint_token != '' &&
                                  state.endpoint_url != '' &&
                                  state.endpoint_url != null && (
                                    <Button
                                      style={{
                                        background: '#CC092F',
                                        fontSize: '14px',
                                        height: '40px',
                                        width: '150px',
                                        fontWeight: 400,
                                        margin: '10px',
                                        color: '#fff',
                                        opacity: this.state.hideApiContainer
                                          ? 0.8
                                          : 1,
                                      }}
                                      // type="submit"
                                      disabled={this.state.hideApiContainer}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        this.checkApi(
                                          this.state.fields.endpoint_url
                                        );
                                      }}>
                                      Validate Endpoint
                                    </Button>
                                  )}

                                {this.state.hideApiContainer === true && (
                                  <Button
                                    style={{
                                      background: '#CC092F',
                                      fontSize: '14px',
                                      height: '40px',
                                      width: '150px',
                                      fontWeight: 400,
                                      margin: '10px',
                                      color: '#fff',
                                    }}
                                    onClick={() => {
                                      const fields = { ...this.state.fields };
                                      // fields['endpoint_url'] = '';
                                      // fields['endpoint_type'] = '';
                                      // fields['endpoint_tokentype'] = '';
                                      // fields['username'] = '';
                                      // fields['password'] = '';
                                      // fields['endpoint_token'] = '';
                                      fields['content'] = '';
                                      this.setState({
                                        hideApiContainer: false,
                                        fields: fields,
                                        staticContent: '',
                                        apiKeys: '',
                                      });
                                    }}>
                                    Modify Endpoint
                                  </Button>
                                )}
                              </Grid>

                              {this.state.hideApiContainer === true ? (
                                <>
                                  <Grid item sm={5}>
                                    <div className="block-flex">
                                      <div style={{ flex: 1, fontWeight: 600 }}>
                                        Variables
                                      </div>

                                      <div
                                        style={{
                                          flex: 2,
                                          padding: '0px 15px',
                                        }}>
                                        <TextField
                                          style={{ width: '100%' }}
                                          //value={this.state.variablesNew}
                                          value={this.state.convertedApiKeys}
                                          // name="apiVariables"
                                          placeholder="Keys"
                                          multiline
                                          rows={10}
                                          required
                                          aria-readonly
                                        />
                                      </div>
                                    </div>
                                  </Grid>
                                  <Grid item sm={7}>
                                    <div className="block-flex">
                                      <div
                                        style={{
                                          flex: 2,
                                          padding: '0px 15px',
                                        }}>
                                        <CKEditor
                                          config={editorConfig}
                                          data={this.state.staticContent}
                                          onChange={(event: any) => {
                                            const items = {
                                              ...this.state.fields,
                                            };
                                            items['content'] =
                                              event.editor.getData();
                                            this.setState({
                                              fields: items,
                                            });
                                          }}
                                          // onChange={(event: any) => {
                                          //   let editor: any =
                                          //     event.editor.getData();
                                          //   const items = {
                                          //     ...this.state.fields,
                                          //   };
                                          //   this.state.apiKeys.forEach(
                                          //     (element: any, index: any) => {
                                          //       if (
                                          //         editor.indexOf(element) != -1
                                          //       ) {
                                          //         editor = editor.replaceAll(
                                          //           element,
                                          //           this.state.apiValues[index]
                                          //         );
                                          //       }
                                          //     }
                                          //   );
                                          //   items['content'] = editor;
                                          //   this.setState({
                                          //     fields: items,
                                          //     staticContent:
                                          //       event.editor.getData(),
                                          //   });
                                          // }}
                                        />
                                      </div>
                                    </div>
                                  </Grid>
                                </>
                              ) : (
                                <Grid item sm={6} />
                              )}
                            </>
                          )}
                        </Grid>
                      </div>
                    </div>
                  </div>

                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="light"
                    style={{ whiteSpace: 'nowrap' }}
                  />

                  {/* {this.state.preview === false && ( */}
                  <div className="banners-btn-section">
                    <div>
                      {this.isEdit === true ? (
                        <NavLink
                          to="/admin/banners"
                          style={{ textDecoration: 'none' }}>
                          <Button
                            style={{
                              background: '#333840',
                              fontSize: '14px',
                              height: '40px',
                              width: '100px',
                              fontWeight: 400,
                              margin: '10px',
                            }}>
                            Cancel
                          </Button>
                        </NavLink>
                      ) : (
                        <Button
                          style={{
                            background: '#333840',
                            fontSize: '14px',
                            height: '40px',
                            width: '100px',
                            fontWeight: 400,
                            margin: '10px',
                          }}
                          onClick={() => this.onFormReset()}>
                          Reset
                        </Button>
                      )}
                    </div>
                    <div>
                      {this.isEdit === true ? (
                        <Button
                          style={{
                            background: '#CC092F',
                            fontSize: '14px',
                            height: '40px',
                            width: '100px',
                            fontWeight: 400,
                            margin: '10px',
                            color: '#fff',
                            opacity:
                              !this.state.hideApiContainer &&
                              state.banner_type != '1'
                                ? 0.8
                                : 1,
                          }}
                          type="submit"
                          disabled={
                            !this.state.hideApiContainer &&
                            state.banner_type != '1'
                          }>
                          Update
                        </Button>
                      ) : (
                        <Button
                          style={{
                            background: '#CC092F',
                            fontSize: '14px',
                            height: '40px',
                            width: '100px',
                            fontWeight: 400,
                            margin: '10px',
                            color: '#fff',
                            opacity:
                              !this.state.hideApiContainer &&
                              state.banner_type != '1'
                                ? 0.8
                                : 1,
                          }}
                          type="submit"
                          disabled={
                            !this.state.hideApiContainer &&
                            state.banner_type != '1'
                          }>
                          Submit
                        </Button>
                      )}
                    </div>
                  </div>
                  {/* )} */}
                </form>
              </Grid>
            </Box>
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

// export default connect(mapDispatchToProps)(BannerForm);
