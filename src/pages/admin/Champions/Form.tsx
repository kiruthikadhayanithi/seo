import AppHeader from '../../../components/AppLayout/admin/AdminHeader';
import React from 'react';
import { Box, Button, Typography } from '@mineral/core';
import {
  Divider,
  FormControlLabel,
  // FormHelperText,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from '@mui/material';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from 'ckeditor4-react';
import DeleteIcon from '@mui/icons-material/Delete';
import Env from '../../../utils/Services/Env';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AddPhotoAlternate, VideoFile } from '@mui/icons-material';
import CKEditor from 'ckeditor4-react-advanced';
import CommonTemplate from '../../ChampionsTemplate';
import { Bars } from 'react-loader-spinner';
import { siteUrl } from '../../../utils/Services/Env';
// import axios from 'axios';
import editorConfig from '../../../components/CkEditor/config';
// import SunEditor from 'suneditor-react';
// import 'suneditor/dist/css/suneditor.min.css';
import { connect } from 'react-redux';
import { isLoggedIn, userToken } from 'reducer/action';
import { withOktaAuth } from '@okta/okta-react';

export default connect(mapDispatchToProps)(
  withOktaAuth(
    class ChampionsForm extends React.Component<any, any> {
      isEdit: boolean;
      id: any;
      constructor(props: any) {
        super(props);
        this.state = {
          fields: {
            name: '',
            icon_image: '',
            short_description: '',
            is_link: '1',
            link_page: null,
            order: '',
            script_dynamic: '',
            slug: '',
            is_active: true,
            page_type: '1',
            group: '',
            blocks: [
              {
                block_name: 'Banner',
                block_order: '1',
                block_icon: null,
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
              {
                block_name: 'Overview',
                block_order: '2',
                block_icon: null,
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
              {
                block_name: 'Features',
                block_order: '3',
                block_icon: null,
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: [
                  {
                    block_detial_json_id: 1,
                    block_detial_json_name: '',
                    block_detial_json_type: '1',
                    block_detial_json_url: '',
                    block_detial_json_file: null,
                    block_detial_json_is_active: true,
                    block_detial_json_icon: null,
                    block_detial_json_order: '1',
                    block_detial_json_show_header: true,
                    block_detial_json_description: '',
                    block_detial_json_banner_text: '',
                    block_detial_json_card: '1',
                    block_detial_json_layout_size: '1',
                  },
                ],
                card: '1',
              },
              {
                block_name: 'Videos',
                block_order: '4',
                block_icon: 'video.svg',
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: [
                  {
                    block_detial_json_id: 1,
                    block_detial_json_name: '',
                    block_detial_json_type: '1',
                    block_detial_json_url: '',
                    block_detial_json_file: null,
                    block_detial_json_is_active: true,
                    block_detial_json_icon: null,
                    block_detial_json_order: '1',
                    block_detial_json_show_header: true,
                    block_detial_json_description: '',
                    block_detial_json_banner_text: '',
                  },
                ],
                card: '1',
              },
              {
                block_name: 'Meet The Team',
                block_order: '5',
                block_icon: 'meet.svg',
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
              {
                block_name: 'Useful Links',
                block_order: '6',
                block_icon: 'links.svg',
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
              {
                block_name: 'Getting Support',
                block_order: '7',
                block_icon: 'support.svg',
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
            ],
          },
          preview: false,
          icon_champion_image_name: '',
          icon_banner_image_name: '',
          show_loader: true,
          img_valid: 'false',
          submit_btn: true,
          groupOptions: props.userGroup,
        };
        this.isEdit = window.location.href.includes('edit');
        this.id =
          window.location.href.includes('edit') &&
          window.location.href.split('/')[6];
      }

      componentDidMount() {
        console.log('props ---------- ', this.props);
        if (this.isEdit === true) {
          this.getChampionsData();
        } else {
          setTimeout(() => {
            this.setState({ show_loader: false });
          }, 2000);
        }
      }

      // getOktaUserInfo() {
      //   this.props.oktaAuth.getUser().then((info: any) => {
      //     this.setState({ groupOptions: info.groups });
      //   });
      // }

      getChampionsData = () => {
        const getData = Env.get(`champion/${this.id}`, this.props.userToken);
        getData.then(
          (response: any): void => {
            const data = response.data.data;
            const blocks_data: any = [];
            if (data.blocks.length === 0) {
              data.blocks = this.state.fields.blocks;
            }
            data.blocks.forEach((element: any) => {
              const block_detial_json: any = [];
              blocks_data.push({
                id: element.id,
                block_name: element.block_name,
                // block_code: element.block_code,
                block_order: element.block_order,
                block_icon: element.block_icon,
                status: element.status,
                show_header: element.show_header,
                layout_size: element.layout_size,
                block_detial: element.block_detial,
                block_detial_json: block_detial_json,
                championid: element.championid,
                card: element.card.toString(),
              });
              if (
                element.block_detial_json !== '' &&
                Array.isArray(element.block_detial_json) === true
              ) {
                element.block_detial_json.forEach((item: any) => {
                  block_detial_json.push({
                    block_detial_json_id: item.block_detial_json_id,
                    block_detial_json_name: item.block_detial_json_name,
                    block_detial_json_type: item.block_detial_json_type,
                    block_detial_json_url: item.block_detial_json_url,
                    block_detial_json_file: item.block_detial_json_file,
                    block_detial_json_is_active:
                      item.block_detial_json_is_active,
                    block_detial_json_icon: item.block_detial_json_icon,
                    block_detial_json_order: item.block_detial_json_order,
                    block_detial_json_show_header:
                      item.block_detial_json_show_header,
                    block_detial_json_description:
                      item.block_detial_json_description,
                    block_detial_json_banner_text:
                      item.block_detial_json_banner_text,
                    block_detial_json_card: item.block_detial_json_card,
                    block_detial_json_layout_size:
                      item.block_detial_json_layout_size,
                  });
                });
                block_detial_json.sort((previous: any, next: any) => {
                  return (
                    previous.block_detial_json_order -
                    next.block_detial_json_order
                  );
                });
              }
            });
            blocks_data.sort((previous: any, next: any) => {
              return previous.block_order - next.block_order;
            });
            const items = { ...this.state.fields };
            items['id'] = data.id;
            items['name'] = data.name;
            items['icon_image'] = data.icon_image;
            items['short_description'] = data.short_description;
            items['is_link'] = data.is_link;
            items['link_page'] = data.link_page;
            items['order'] = data.order;
            items['script_dynamic'] = data.script_dynamic;
            items['slug'] = data.slug;
            items['is_active'] = data.is_active;
            items['page_type'] = data.page_type.toString();
            items['blocks'] = blocks_data;
            items['group'] = data.group;
            setTimeout(() => {
              this.setState({ fields: items, show_loader: false });
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

      onRadioSetChange = (event: any, index: any) => {
        const items = [...this.state.fields.blocks];
        const item = { ...items[index] };
        item[event.target.name] =
          item[event.target.name].toString() === '1' ? '0' : '1';
        items[index] = item;
        this.setState({
          fields: { ...this.state.fields, blocks: items },
        });
      };

      onRadioGroupChange = (event: any, index: any, key: any) => {
        const items = [...this.state.fields.blocks];
        const item = { ...items[index] };
        item.block_detial_json[key][event.target.name] =
          item.block_detial_json[key][event.target.name] &&
          item.block_detial_json[key][event.target.name].toString() === '1'
            ? '0'
            : '1';
        items[index] = item;
        this.setState({
          fields: { ...this.state.fields, blocks: items },
        });
      };

      // onRadioGroupChange = (event: any, index: any, key: any) => {
      //   debugger;
      //   const items = [...this.state.fields.blocks];
      //   const item = { ...items[index] };
      //   item.block_detial_json[key][event.target.name] =
      //     item.block_detial_json[key][event.target.name].toString() === '1'
      //       ? '0'
      //       : '1';
      //   items[index] = item;
      //   this.setState({
      //     fields: { ...this.state.fields, blocks: items },
      //   });
      // };

      onSwitchChange = (event: any) => {
        const items = { ...this.state.fields };
        items[event.target.name] = event.target.checked;
        this.setState({
          fields: items,
        });
      };

      onSwitchSetChange = (event: any, index: any) => {
        const items = [...this.state.fields.blocks];
        const item = { ...items[index] };
        item[event.target.name] = event.target.checked;
        items[index] = item;
        this.setState({
          fields: { ...this.state.fields, blocks: items },
        });
      };

      onSwitchGroupChange = (event: any, index: any, key: any) => {
        const items = [...this.state.fields.blocks];
        const item = { ...items[index] };
        item.block_detial_json[key][event.target.name] = event.target.checked;
        items[index] = item;
        this.setState({
          fields: { ...this.state.fields, blocks: items },
        });
      };

      onFieldSetChange = (event: any, index: any) => {
        const items = [...this.state.fields.blocks];
        const item = { ...items[index] };
        item[event.target.name] =
          event.target.name === 'block_order'
            ? event.target.value.replace(/[^0-9]/g, '')
            : event.target.value;
        items[index] = item;
        this.setState({
          fields: { ...this.state.fields, blocks: items },
        });
      };

      onFieldGroupChange = (event: any, index: any, key: any) => {
        const items = [...this.state.fields.blocks];
        const item = { ...items[index] };
        item.block_detial_json[key][event.target.name] =
          event.target.name === 'block_detial_json_order'
            ? event.target.value.replace(/[^0-9]/g, '')
            : event.target.value;
        items[index] = item;
        this.setState({
          fields: { ...this.state.fields, blocks: items },
        });
      };

      onKeyDownEvent = (event: any) => {
        const charCode = event.which ? event.which : event.keyCode;
        // code 48 - 57
        if (charCode > 47 && charCode < 58) {
          event.preventDefault();
        }
      };

      onFieldChange = (e: any) => {
        const items = { ...this.state.fields };
        items[e.target.name] =
          e.target.name === 'order'
            ? e.target.value.replace(/[^0-9]/g, '')
            : e.target.value;
        items[e.target.name] =
          e.target.name === 'slug'
            ? e.target.value.replace(/[^A-Za-z0-9\-\\]/gi, '')
            : e.target.value;
        if (items['is_link'].toString() === '2') {
          items['slug'] = '';
        } else {
          items['link_page'] = null;
        }
        this.setState({
          fields: items,
        });
      };

      removeBlock = (index: any, key: any) => {
        const items = [...this.state.fields.blocks];
        const item = { ...items[index] };
        item.block_detial_json.splice(key, 1);
        this.setState({
          fields: { ...this.state.fields, blocks: this.state.fields.blocks },
        });
      };

      addBlocks = (index: any) => {
        const items = [...this.state.fields.blocks];
        const item = { ...items[index] };
        const data = [
          ...item.block_detial_json,
          {
            block_detial_json_id: (items[index].block_detial_json.length += 1),
            block_detial_json_name: null,
            block_detial_json_type: 1,
            block_detial_json_url: '',
            block_detial_json_file: null,
            block_detial_json_is_active: true,
            block_detial_json_icon: null,
            block_detial_json_order: `${items[index].block_detial_json.length}`,
            block_detial_json_show_header: true,
            block_detial_json_description: '',
            block_detial_json_banner_text: '',
            block_detial_json_card: '1',
            block_detial_json_layout_size: '1',
          },
        ];
        items[index].block_detial_json = data;
        this.setState({
          fields: { ...this.state.fields, blocks: items },
        });
      };

      // onFileUpload = (e: any, index: any, key: any, type: any) => {
      //   if (type == 'champion') {
      //     const file = e.target.files[0];
      //     console.log(type);
      //     const formData = new FormData();
      //     formData.append('file', file as Blob);
      //     const image = Env.post(`upload`, formData);
      //     image.then(
      //       (response: any): void => {
      //         const image_url_path = response.data.data;
      //         // console.log('RESPONSE IMAGE', response);
      //         // console.log('RESPONSE DATA', response.data.data);
      //         const image_path = image_url_path.split('/');
      //         const image_path_name = image_path[image_path.length - 1];
      //         console.log(type);
      //         console.log('FILE IMAGE', image_url_path);
      //         console.log('FILE PATH', image_path);
      //         console.log('IMAGE NAME', image_path_name);
      //         const items = { ...this.state.fields };
      //         items[e.target.name] = image_url_path;
      //         this.setState({
      //           fields: items,
      //           icon_champion_image_name: image_path_name,
      //         });
      //         toast('Upload was successful');
      //       },
      //       (error: any) => {
      //         console.error(error);
      //         toast.error(JSON.stringify(error.response.statusText));
      //       }
      //     );
      //   } else if (type == 'banner') {
      //     const file = e.target.files[0];
      //     console.log(type);
      //     const formData = new FormData();
      //     formData.append('file', file as Blob);
      //     const image = Env.post(`upload`, formData);
      //     image.then(
      //       (response: any): void => {
      //         const image_url_path = response.data.data;
      //         // console.log('RESPONSE IMAGE', response);
      //         // console.log('RESPONSE DATA', response.data.data);
      //         const image_path = image_url_path.split('/');
      //         const image_path_name = image_path[image_path.length - 1];
      //         console.log(type);
      //         console.log('FILE IMAGE', image_url_path);
      //         console.log('FILE PATH', image_path);
      //         console.log('IMAGE NAME', image_path_name);
      //         const items = [...this.state.fields.blocks];
      //         const item = { ...items[index] };
      //         item[e.target.name] =
      //           e.target.name === 'block_order'
      //             ? Number(e.target.value)
      //             : image_url_path;
      //         items[index] = item;
      //         this.setState({
      //           fields: { ...this.state.fields, blocks: items },
      //           icon_banner_image_name: image_path_name,
      //         });
      //         toast('Upload was successful');
      //       },
      //       (error: any) => {
      //         console.error(error);
      //         toast.error(JSON.stringify(error.response.statusText));
      //       }
      //     );
      //   } else if (type == 'features') {
      //     const file = e.target.files[0];
      //     console.log(type);
      //     console.log(file.name);
      //     const formData = new FormData();
      //     formData.append('file', file as Blob);
      //     const image = Env.post(`upload`, formData);
      //     image.then(
      //       (response: any): void => {
      //         const image_url_path = response.data.data;
      //         // console.log('RESPONSE IMAGE', response);
      //         // console.log('RESPONSE DATA', response.data.data);
      //         const image_path = image_url_path.split('/');
      //         const image_path_name = image_path[image_path.length - 1];
      //         console.log(type);
      //         console.log('FILE IMAGE', image_url_path);
      //         console.log('FILE PATH', image_path);
      //         console.log('IMAGE NAME', image_path_name);
      //         const items = [...this.state.fields.blocks];
      //         const item = { ...items[index] };
      //         item.block_detial_json[key][e.target.name] =
      //           e.target.name === 'block_detial_json_order'
      //             ? Number(e.target.value)
      //             : image_url_path;
      //         items[index] = item;
      //         this.setState({
      //           fields: { ...this.state.fields, blocks: items },
      //         });
      //         toast('Upload was successful');
      //       },
      //       (error: any) => {
      //         console.error(error);
      //         toast.error(JSON.stringify(error.response.statusText));
      //       }
      //     );
      //   } else if (type == 'videos') {
      //     const file = e.target.files[0];
      //     console.log(type);
      //     const formData = new FormData();
      //     formData.append('file', file as Blob);
      //     const image = Env.post(`upload`, formData);
      //     image.then(
      //       (response: any): void => {
      //         const image_url_path = response.data.data;
      //         // console.log('RESPONSE IMAGE', response);
      //         // console.log('RESPONSE DATA', response.data.data);
      //         const image_path = image_url_path.split('/');
      //         const image_path_name = image_path[image_path.length - 1];
      //         console.log(type);
      //         console.log('FILE IMAGE', image_url_path);
      //         console.log('FILE PATH', image_path);
      //         console.log('IMAGE NAME', image_path_name);
      //         const items = [...this.state.fields.blocks];
      //         const item = { ...items[index] };
      //         item.block_detial_json[key][e.target.name] =
      //           e.target.name === 'block_detial_json_order'
      //             ? Number(e.target.value)
      //             : image_url_path;
      //         items[index] = item;
      //         this.setState({
      //           fields: { ...this.state.fields, blocks: items },
      //         });
      //         toast('Upload was successful');
      //       },
      //       (error: any) => {
      //         console.error(error);
      //         toast.error(JSON.stringify(error.response.statusText));
      //       }
      //     );
      //   }
      // };
      onFileUpload = (e: any, index: any, key: any, type: any) => {
        this.setState({
          submit_btn: false,
        });
        if (type == 'champion') {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('file', file as Blob);
          if (e.target.files.length > 0) {
            const image = Env.post(`upload`, formData, this.props.userToken);
            image.then(
              (response: any): void => {
                const imgPath = response.data.link;
                const items = { ...this.state.fields };
                items[e.target.name] = imgPath;
                this.setState({
                  fields: items,
                  icon_champion_image_name: imgPath,
                });
                toast.success('Uploaded successful');

                this.setState({ submit_btn: true, img_valid: 'false' });
              },
              (error: any) => {
                console.error(error);
                if (error.response.status == 401) {
                  this.props.oktaAuth.signOut();
                  this.props.dispatch(isLoggedIn(false));
                  this.props.dispatch(userToken(undefined));
                } else {
                  toast.error(JSON.stringify(error.response.statusText));
                  this.setState({ submit_btn: true, img_valid: 'false' });
                }
              }
            );
          } else {
            this.setState({ submit_btn: true });
          }
        } else if (type == 'banner') {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('file', file as Blob);
          if (e.target.files.length > 0) {
            const image = Env.post(`upload`, formData, this.props.userToken);
            image.then(
              (response: any): void => {
                const imgPath = response.data.link;
                const items = [...this.state.fields.blocks];
                const item = { ...items[index] };
                item[e.target.name] =
                  e.target.name === 'block_order'
                    ? Number(e.target.value)
                    : imgPath;
                items[index] = item;
                this.setState({
                  fields: { ...this.state.fields, blocks: items },
                  icon_banner_image_name: imgPath,
                });
                toast.success('Uploaded successful');
                this.setState({ submit_btn: true });
              },
              (error: any) => {
                console.error(error);
                if (error.response.status == 401) {
                  this.props.oktaAuth.signOut();
                  this.props.dispatch(isLoggedIn(false));
                  this.props.dispatch(userToken(undefined));
                } else {
                  toast.error(JSON.stringify(error.response.statusText));
                  this.setState({ submit_btn: true });
                }
              }
            );
          } else {
            this.setState({ submit_btn: true });
          }
        } else if (type == 'overview') {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('file', file as Blob);
          if (e.target.files.length > 0) {
            const image = Env.post(`upload`, formData, this.props.userToken);
            image.then(
              (response: any): void => {
                const imgPath = response.data.link;
                const items = [...this.state.fields.blocks];
                const item = { ...items[index] };
                item[e.target.name] =
                  e.target.name === 'block_order'
                    ? Number(e.target.value)
                    : imgPath;
                items[index] = item;
                this.setState({
                  fields: { ...this.state.fields, blocks: items },
                  icon_banner_image_name: imgPath,
                });
                toast.success('Uploaded successful');
                this.setState({ submit_btn: true });
              },
              (error: any) => {
                console.error(error);

                if (error.response.status == 401) {
                  this.props.oktaAuth.signOut();
                  this.props.dispatch(isLoggedIn(false));
                  this.props.dispatch(userToken(undefined));
                } else {
                  toast.error(JSON.stringify(error.response.statusText));
                  this.setState({ submit_btn: true });
                }
              }
            );
          } else {
            this.setState({ submit_btn: true });
          }
        } else if (type == 'features') {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('file', file as Blob);
          if (e.target.files.length > 0) {
            const image = Env.post(`upload`, formData, this.props.userToken);
            image.then(
              (response: any): void => {
                const imgPath = response.data.link;
                const items = [...this.state.fields.blocks];
                const item = { ...items[index] };
                item.block_detial_json[key][e.target.name] =
                  e.target.name === 'block_detial_json_order'
                    ? Number(e.target.value)
                    : imgPath;
                items[index] = item;
                this.setState({
                  fields: { ...this.state.fields, blocks: items },
                });
                toast.success('Uploaded successful');
                this.setState({ submit_btn: true });
              },
              (error: any) => {
                console.error(error);
                if (error.response.status == 401) {
                  this.props.oktaAuth.signOut();
                  this.props.dispatch(isLoggedIn(false));
                  this.props.dispatch(userToken(undefined));
                } else {
                  toast.error(JSON.stringify(error.response.statusText));
                  this.setState({ submit_btn: true });
                }
              }
            );
          } else {
            this.setState({ submit_btn: true });
          }
        } else if (type == 'videos') {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('file', file as Blob);
          const image = Env.post(`upload`, formData, this.props.userToken);
          image.then(
            (response: any): void => {
              const uploadedVideo = response.data.link;
              const items = [...this.state.fields.blocks];
              const item = { ...items[index] };
              item.block_detial_json[key][e.target.name] =
                e.target.name === 'block_detial_json_order'
                  ? Number(e.target.value)
                  : uploadedVideo;
              items[index] = item;
              this.setState({
                fields: { ...this.state.fields, blocks: items },
              });
              toast.success('Uploaded successful');
              this.setState({ submit_btn: true });
            },
            (error: any) => {
              console.error(error);
              console.log('error', error.response);

              if (error.response.status == 401) {
                this.props.oktaAuth.signOut();
                this.props.dispatch(isLoggedIn(false));
                this.props.dispatch(userToken(undefined));
              } else {
                toast.error(
                  JSON.stringify(error.response.data.message).replace(/"/g, '')
                );
                this.setState({ submit_btn: true });
              }
            }
          );
        } else {
          this.setState({ submit_btn: true });
        }
      };

      uploadAllImage = (e: any, key: any, type: any) => {
        if (type == 'champion') {
          document.getElementById(`icon_champion_icon`)?.click();
        } else if (type == 'banner') {
          document.getElementById(`block_banner_icon`)?.click();
        } else if (type == 'features') {
          document.getElementById(`icon_fetaures_icon${key}`)?.click();
        } else if (type == 'videos') {
          document.getElementById(`icon_video_upload${key}`)?.click();
        } else if (type == 'overview') {
          document.getElementById(`block_overview_bg`)?.click();
        }
      };

      validateEditorFields() {
        const fields = this.state.fields;
        let formIsValid = true;

        if (fields['short_description'] === '') {
          toast.warn('Short description required');
          formIsValid = false;
        } else if (fields['blocks'].length > 0) {
          const enabled = fields['blocks'].filter(
            (item: any) => item.status === true
          );
          enabled.forEach((element: any) => {
            if (element['block_detial'] === '') {
              toast.warn(`${element.block_name} description required`);
              formIsValid = false;
            } else {
              return formIsValid;
            }
          });
        } else {
          return formIsValid;
        }
      }

      onFormSubmit = () => {
        // if (this.validateEditorFields()) {

        if (
          this.state.fields.page_type.toString() === '1' &&
          this.state.fields.icon_image == ''
        ) {
          toast.error('Select Champion icon Image');
        } else {
          this.setState({ show_loader: true });
          if (this.isEdit) {
            const updateData = Env.put(
              `champion/${this.id}`,
              this.state.fields,
              this.props.userToken
            );
            updateData.then(
              (response: any): void => {
                if (response.status == 200) {
                  toast.success('Champions updated successfully!');
                  setTimeout(() => {
                    this.setState({ show_loader: false });
                    if (this.state.show_loader === true) {
                      window.location.href = '/admin/champions';
                    }
                  }, 3000);
                }
              },
              (error: any) => {
                console.error(error);
                if (error.response.status == 401) {
                  this.props.oktaAuth.signOut();
                  this.props.dispatch(isLoggedIn(false));
                  this.props.dispatch(userToken(undefined));
                } else {
                  toast.error(JSON.stringify(error.response.data.message));
                  this.setState({ show_loader: false });
                }
              }
            );
            return <NavLink to="/admin/champions" />;
          } else {
            const items = { ...this.state.fields };
            if (this.state.fields.is_link.toString() === '2') {
              delete items['blocks'];
            }
            if (this.state.fields.page_type.toString() === '2') {
              items['order'] = 0;
            }
            const postData = Env.post(`champion`, items, this.props.userToken);
            postData.then(
              (response: any): void => {
                this.isEdit = true;
                if (response.status == 200) {
                  toast.success('Champions created successfully!');
                  setTimeout(() => {
                    this.setState({ show_loader: false });
                    if (this.state.show_loader === true) {
                      window.location.href = '/admin/champions';
                    }
                  }, 3000);
                }
              },
              (error: any) => {
                console.error(error);
                if (error.response.status == 401) {
                  this.props.oktaAuth.signOut();
                  this.props.dispatch(isLoggedIn(false));
                  this.props.dispatch(userToken(undefined));
                } else {
                  toast.error(JSON.stringify(error.response.data.message));
                  setTimeout(() => {
                    this.setState({ show_loader: false });
                  }, 2000);
                }
              }
            );
            return <NavLink to="/admin/champions" />;
          }
          // }
        }
      };

      onFormReset = () => {
        this.setState({
          fields: {
            name: '',
            icon_image: '',
            short_description: '',
            is_link: '1',
            link_page: null,
            order: '',
            script_dynamic: '',
            slug: '',
            is_active: true,
            page_type: '1',
            blocks: [
              {
                block_name: 'Banner',
                block_order: '1',
                block_icon: null,
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
              {
                block_name: 'Overview',
                block_order: '2',
                block_icon: null,
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
              {
                block_name: 'Features',
                block_order: '3',
                block_icon: null,
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: [
                  {
                    block_detial_json_id: 1,
                    block_detial_json_name: '',
                    block_detial_json_type: '1',
                    block_detial_json_url: '',
                    block_detial_json_file: null,
                    block_detial_json_is_active: true,
                    block_detial_json_icon: null,
                    block_detial_json_order: '1',
                    block_detial_json_show_header: true,
                    block_detial_json_description: '',
                    block_detial_json_banner_text: '',
                    block_detial_json_card: '1',
                    block_detial_json_layout_size: '1',
                  },
                ],
                card: '1',
              },
              {
                block_name: 'Videos',
                block_order: '4',
                block_icon: 'video.svg',
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: [
                  {
                    block_detial_json_id: 1,
                    block_detial_json_name: '',
                    block_detial_json_type: '1',
                    block_detial_json_url: '',
                    block_detial_json_file: null,
                    block_detial_json_is_active: true,
                    block_detial_json_icon: null,
                    block_detial_json_order: '1',
                    block_detial_json_show_header: true,
                    block_detial_json_description: '',
                    block_detial_json_banner_text: '',
                  },
                ],
                card: '1',
              },
              {
                block_name: 'Meet The Team',
                block_order: '5',
                block_icon: 'meet.svg',
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
              {
                block_name: 'Useful Links',
                block_order: '6',
                block_icon: 'links.svg',
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
              {
                block_name: 'Getting Support',
                block_order: '7',
                block_icon: 'support.svg',
                status: true,
                show_header: true,
                layout_size: '1',
                block_detial: '',
                block_detial_json: '',
                card: '1',
              },
            ],
          },
          ckeditor_fields_invalid: true,
        });
      };

      render() {
        // const config = {
        //   extraPlugins: [
        //     'justify',
        //     'colorbutton',
        //     'link',
        //     'elementspath',
        //     'save',
        //     'font',
        //     'emoji',
        //     'autocomplete',
        //     'autolink',
        //   ],
        //   allowedContent: true,
        //   height: 200,
        //   image_previewText: ' ',
        //   entities_additional: '',
        //   fillEmptyBlocks: false,
        //   basicEntities: false,
        //   entities_latin: false,
        //   entities_greek: false,
        // };

        // const state = this.state.fields;

        return (
          <div style={{ height: '100%' }}>
            {' '}
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
                    // this.validateEditorFields();
                  }}>
                  <div className="champions-form">
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
                          {this.state.preview === false ? (
                            <NavLink
                              to="/admin/champions"
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
                                Back to Champions
                              </span>
                            </NavLink>
                          ) : (
                            <Button
                              style={{
                                textDecoration: 'none',
                                display: 'contents',
                              }}
                              onClick={() => this.setState({ preview: false })}>
                              <ArrowBackIcon
                                style={{ color: 'rgb(204, 9, 47)' }}
                              />
                              <span
                                style={{
                                  color: 'rgb(204, 9, 47)',
                                  fontSize: '14px',
                                  padding: '0px 10px',
                                }}>
                                Back to Edit
                              </span>
                            </Button>
                          )}
                        </div>
                      </Grid>
                      {this.state.preview === false && (
                        <Grid item lg={6}>
                          <div
                            style={{
                              textAlign: 'end',
                              color: 'rgb(204, 9, 47)',
                              fontWeight: 600,
                              fontSize: '18px',
                            }}>
                            Champions {this.isEdit === true ? 'Update' : 'Add'}
                          </div>
                        </Grid>
                      )}
                    </Grid>

                    {this.state.preview === false ? (
                      <div className="champions-form-component">
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                          }}>
                          {this.state.fields.is_link !== null &&
                            this.state.fields.is_link.toString() !== '2' && (
                              <div style={{ padding: '5px 0px' }}>
                                <Button
                                  style={{
                                    background: '#CC092F',
                                    fontSize: '12px',
                                    height: '40px',
                                    width: '100px',
                                    fontWeight: 400,
                                  }}
                                  // disabled={!this.isEdit}
                                  onClick={() =>
                                    this.setState({ preview: true })
                                  }>
                                  Preview Page
                                </Button>
                              </div>
                            )}
                        </div>
                        <div className="champions-block-titles">
                          <Typography variant="h3">Basic Details</Typography>
                        </div>
                        <Divider />
                        <div className="" style={{ padding: '25px 10px' }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item sm={6}>
                              <div className="block-flex">
                                <div style={{ flex: 1, fontWeight: 600 }}>
                                  Champion Name
                                </div>
                                <div style={{ flex: 2, padding: '0px 15px' }}>
                                  <TextField
                                    style={{ width: '100%' }}
                                    value={this.state.fields.name}
                                    name="name"
                                    placeholder="Champion Name"
                                    onChange={(e) => this.onFieldChange(e)}
                                    required
                                  />
                                </div>
                              </div>
                            </Grid>
                            {this.state.fields.is_link.toString() == '1' ? (
                              <Grid item sm={6}>
                                <div className="block-flex">
                                  <div style={{ flex: 1, fontWeight: 600 }}>
                                    Page Type
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    <Select
                                      style={{ width: '100%' }}
                                      value={this.state.fields.page_type}
                                      name="page_type"
                                      label="Page Type"
                                      onChange={(e) => this.onFieldChange(e)}
                                      required>
                                      <MenuItem value="1">Main Page</MenuItem>
                                      <MenuItem value="2">Sub Page</MenuItem>
                                    </Select>
                                  </div>
                                </div>
                              </Grid>
                            ) : (
                              <Grid item sm={6} />
                            )}
                            {this.state.fields.page_type === '1' && (
                              <Grid item sm={6}>
                                <div className="block-flex">
                                  <div style={{ flex: 1, fontWeight: 600 }}>
                                    Champion Icon
                                  </div>
                                  <div
                                    style={{
                                      flex: 2,
                                      padding: '0px 15px',
                                      display: 'flex',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                    }}>
                                    {this.state.fields.icon_image !== '' && (
                                      <img
                                        src={this.state.fields.icon_image}
                                        alt="No_image"
                                        style={{
                                          width: '87px',
                                          height: '70px',
                                          marginRight: '10px',
                                        }}
                                      />
                                    )}
                                    <input
                                      id="icon_champion_icon"
                                      type="file"
                                      accept="image/*"
                                      aria-label="upload"
                                      name="icon_image"
                                      onChange={(e) =>
                                        this.onFileUpload(e, 0, 0, 'champion')
                                      }
                                      style={{ display: 'none' }}
                                      required={
                                        this.state.img_valid == 'true'
                                          ? true
                                          : false
                                      }
                                    />
                                    <TextField
                                      value={
                                        this.state.fields.icon_image
                                          ? this.state.fields.icon_image
                                              .split('/')
                                              .pop()
                                          : ''
                                      }
                                      placeholder="Icon Image"
                                      id="champion_image_name"
                                      name="icon_image"
                                      inputProps={{ readOnly: true }}
                                      required={
                                        this.state.img_valid == 'true'
                                          ? true
                                          : false
                                      }
                                      style={{
                                        display: 'none',
                                      }}
                                    />
                                    <Button
                                      sx={{
                                        backgroundColor: 'rgb(204, 9, 47)',
                                        height: '3em',
                                        '&:hover': {
                                          backgroundColor: 'rgb(204, 9, 47)',
                                        },
                                      }}
                                      name="icon_image"
                                      onClick={(e) =>
                                        this.uploadAllImage(e, 0, 'champion')
                                      }>
                                      <AddPhotoAlternate />
                                    </Button>
                                    {/* {this.state.is_form_valid === true &&
                              state.icon_image === '' && (
                                <FormHelperText>Icon </FormHelperText>
                              )} */}
                                  </div>
                                </div>
                              </Grid>
                            )}
                            {this.state.fields.page_type === '1' && (
                              <Grid item sm={6}>
                                <div className="block-flex">
                                  <div style={{ flex: 1, fontWeight: 600 }}>
                                    Order No
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    <TextField
                                      style={{ width: '100%' }}
                                      value={this.state.fields.order}
                                      inputProps={{
                                        maxLength: 2,
                                      }}
                                      name="order"
                                      // type="number"
                                      placeholder="Order No"
                                      onChange={(e) => this.onFieldChange(e)}
                                      required
                                    />
                                  </div>
                                </div>
                              </Grid>
                            )}
                            {this.state.fields.page_type === '1' && (
                              <Grid item sm={12}>
                                <div
                                  className="block-flex"
                                  style={{ alignItems: 'center' }}>
                                  <div
                                    style={{ width: '180px', fontWeight: 600 }}>
                                    Short description
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    {/* <SunEditor
                                  setContents={
                                    this.state.fields.short_description
                                  }
                                  showToolbar={!false}
                                  onChange={(content: any) => {
                                    const items = { ...this.state.fields };
                                    items['short_description'] = content;
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
                                        'image',
                                        'codeView',
                                      ],
                                    ],
                                  }}
                                /> */}
                                    <CKEditor
                                      config={editorConfig}
                                      data={this.state.fields.short_description}
                                      onChange={(event: any) => {
                                        const items = { ...this.state.fields };
                                        items['short_description'] =
                                          event.editor.getData();
                                        this.setState({
                                          fields: items,
                                        });
                                      }}
                                    />
                                  </div>
                                </div>
                              </Grid>
                            )}
                            {this.state.fields.page_type === '1' && (
                              <Grid item sm={6}>
                                <div className="block-flex">
                                  <div style={{ flex: 1, fontWeight: 600 }}>
                                    Detail Page Type
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    <Select
                                      style={{ width: '100%' }}
                                      value={this.state.fields.is_link}
                                      name="is_link"
                                      label="Page Type"
                                      onChange={(e) => this.onFieldChange(e)}
                                      required>
                                      <MenuItem value="1">Page</MenuItem>
                                      <MenuItem value="2">Link</MenuItem>
                                    </Select>
                                  </div>
                                </div>
                              </Grid>
                            )}

                            {this.state.fields.is_link !== null &&
                            this.state.fields.is_link.toString() === '2' ? (
                              <>
                                {this.state.fields.page_type === '1' && (
                                  <Grid item sm={6}>
                                    <div className="block-flex">
                                      <div style={{ flex: 1, fontWeight: 600 }}>
                                        Page URL
                                      </div>
                                      <div
                                        style={{
                                          flex: 2,
                                          padding: '0px 15px',
                                        }}>
                                        <TextField
                                          style={{ width: '100%' }}
                                          value={this.state.fields.link_page}
                                          name="link_page"
                                          placeholder="Page URL"
                                          onChange={(e) =>
                                            this.onFieldChange(e)
                                          }
                                          required
                                        />
                                        {/* {this.state.is_form_valid === true &&
                                  state.is_link === '' && (
                                    <FormHelperText>
                                      Page url
                                    </FormHelperText>
                                  )} */}
                                      </div>
                                    </div>
                                  </Grid>
                                )}
                                {/* <Grid item sm={6}>
                            <div className="block-flex">
                              <div style={{ flex: 1 }}>Slug</div>
                              <div style={{ flex: 2, padding: '0px 15px' }}>
                                <TextField
                                  style={{ width: '100%' }}
                                  value={state.slug}
                                  name="slug"
                                  placeholder="Slug"
                                  onChange={(e) => this.onFieldChange(e)}
                                  required
                                />
                              </div>
                            </div>
                          </Grid> */}
                              </>
                            ) : (
                              <Grid item sm={6}>
                                <div className="block-flex">
                                  <div style={{ flex: 1, fontWeight: 600 }}>
                                    Slug
                                  </div>
                                  <div style={{ flex: 2, padding: '0px 15px' }}>
                                    <TextField
                                      style={{ width: '100%' }}
                                      value={this.state.fields.slug}
                                      name="slug"
                                      placeholder="Slug"
                                      onChange={(e) => this.onFieldChange(e)}
                                      required
                                    />
                                  </div>
                                </div>
                                {this.state.fields.page_type !== null &&
                                this.state.fields.page_type.toString() ===
                                  '2' ? (
                                  <Grid
                                    item
                                    sm={6}
                                    sx={{
                                      fontSize: '15px',
                                      fontStyle: 'italic',
                                      ml: '13em',
                                      pt: '0.5em',
                                    }}>
                                    <small>
                                      <b>Note:</b>
                                      {`  ${siteUrl}${this.state.fields.slug}`}
                                    </small>
                                  </Grid>
                                ) : (
                                  ' '
                                )}
                              </Grid>
                            )}

                            <Grid item sm={6}>
                              <div className="block-flex">
                                <div style={{ flex: 1, fontWeight: 600 }}>
                                  Access Group
                                </div>
                                <div style={{ flex: 2, padding: '0px 15px' }}>
                                  <Select
                                    style={{ width: '100%' }}
                                    value={this.state.fields.group}
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

                            <Grid item sm={6}>
                              <div className="block-flex">
                                <div style={{ flex: 1, fontWeight: 600 }}>
                                  Champion Status
                                </div>
                                <div style={{ flex: 2, padding: '0px 15px' }}>
                                  <Switch
                                    name="is_active"
                                    checked={this.state.fields.is_active}
                                    color="secondary"
                                    onChange={(e) => this.onSwitchChange(e)}
                                  />
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        {this.state.fields.is_link !== null &&
                        this.state.fields.is_link.toString() === '1' ? (
                          <>
                            <div className="champions-block-titles">
                              <Typography variant="h3">Page Details</Typography>
                            </div>
                            <Divider />
                            <div style={{ padding: '35px 10px' }}>
                              <Grid container spacing={2}>
                                {this.state.fields.blocks.map(
                                  (item: any, index: any) => (
                                    <Grid
                                      item
                                      sm={12}
                                      key={index}
                                      style={{ padding: '15px 0px' }}>
                                      <Grid container>
                                        <Grid item sm={2}>
                                          <Grid
                                            container
                                            style={{
                                              padding: '15px',
                                              textTransform: 'capitalize',
                                              fontWeight: 600,
                                            }}>
                                            {item.block_name}
                                          </Grid>
                                        </Grid>
                                        <Grid item sm={10}>
                                          <Grid
                                            container
                                            style={{
                                              alignItems: 'center',
                                              padding: '10px 0px',
                                            }}
                                            spacing={2}>
                                            <Grid item sm={2}>
                                              Status
                                            </Grid>
                                            <Grid sm={4} item>
                                              <Switch
                                                name="status"
                                                checked={item.status}
                                                color="secondary"
                                                onChange={(e) =>
                                                  this.onSwitchSetChange(
                                                    e,
                                                    index
                                                  )
                                                }
                                              />
                                            </Grid>
                                            {item.block_name !== 'Features' &&
                                              item.status === true && (
                                                <>
                                                  <Grid item sm={2}>
                                                    Show Header
                                                  </Grid>
                                                  <Grid item sm={4}>
                                                    <Switch
                                                      name="show_header"
                                                      checked={item.show_header}
                                                      color="secondary"
                                                      onChange={(e: any) =>
                                                        this.onSwitchSetChange(
                                                          e,
                                                          index
                                                        )
                                                      }
                                                    />
                                                  </Grid>
                                                </>
                                              )}
                                            {item.block_name === 'Features' &&
                                              item.status === true && (
                                                <>
                                                  <Grid item sm={2}>
                                                    Order No
                                                  </Grid>
                                                  <Grid item sm={4}>
                                                    <TextField
                                                      style={{ width: '100%' }}
                                                      value={item.block_order}
                                                      inputProps={{
                                                        maxLength: 2,
                                                      }}
                                                      name="block_order"
                                                      placeholder="Order No"
                                                      // type="number"
                                                      onChange={(e) =>
                                                        this.onFieldSetChange(
                                                          e,
                                                          index
                                                        )
                                                      }
                                                      required
                                                    />
                                                  </Grid>
                                                </>
                                              )}
                                            {/* {item.block_name === 'Features' &&
                                      item.status === true && (
                                        <>
                                          <Grid
                                            item
                                            sm={2}
                                            >
                                            Order No
                                          </Grid>
                                          <Grid sm={4} item>
                                            <TextField
                                              style={{ width: '100%' }}
                                              value={item.block_order}
                                              name="block_order"
                                              placeholder="Order No"
                                              type="number"
                                              onChange={(e) =>
                                                this.onFieldSetChange(e, index)
                                              }
                                            />
                                            {this.state.is_form_valid === true &&
                                          item.block_order === '' && (
                                            <FormHelperText>
                                              Order no.
                                            </FormHelperText>
                                          )}
                                          </Grid>
                                        </>
                                      )} */}
                                          </Grid>
                                          {item.status === true &&
                                          item.block_name !== 'Features' ? (
                                            <Grid
                                              container
                                              style={{ alignItems: 'center' }}
                                              spacing={2}>
                                              <Grid item sm={2}>
                                                Order No
                                              </Grid>
                                              <Grid item sm={4}>
                                                <TextField
                                                  style={{ width: '100%' }}
                                                  value={item.block_order}
                                                  inputProps={{
                                                    maxLength: 2,
                                                  }}
                                                  name="block_order"
                                                  placeholder="Order No"
                                                  // type="number"
                                                  onChange={(e) =>
                                                    this.onFieldSetChange(
                                                      e,
                                                      index
                                                    )
                                                  }
                                                  required
                                                />
                                                {/* {this.state.is_form_valid === true &&
                                          item.block_order === '' && (
                                            <FormHelperText>
                                              Order no.
                                            </FormHelperText>
                                          )} */}
                                              </Grid>
                                              <Grid item sm={2}>
                                                Layout
                                              </Grid>
                                              <Grid item sm={4}>
                                                <Select
                                                  style={{ width: '100%' }}
                                                  value={item.layout_size}
                                                  name="layout_size"
                                                  label="Page Type"
                                                  readOnly={
                                                    item.block_name == 'Banner'
                                                  }
                                                  onChange={(e) =>
                                                    this.onFieldSetChange(
                                                      e,
                                                      index
                                                    )
                                                  }
                                                  required>
                                                  <MenuItem value="1">
                                                    Full Width
                                                  </MenuItem>
                                                  <MenuItem value="2">
                                                    Half Width
                                                  </MenuItem>
                                                </Select>
                                              </Grid>
                                              {item.block_name === 'Banner' && (
                                                <>
                                                  <Grid item sm={2}>
                                                    Banner Text
                                                  </Grid>
                                                  <Grid item sm={4}>
                                                    <TextField
                                                      style={{ width: '100%' }}
                                                      value={item.block_detial}
                                                      name="block_detial"
                                                      placeholder="Banner Text"
                                                      onChange={(e) =>
                                                        this.onFieldSetChange(
                                                          e,
                                                          index
                                                        )
                                                      }
                                                      required
                                                    />
                                                  </Grid>
                                                  <Grid item sm={2}>
                                                    Banner Image
                                                  </Grid>
                                                  <Grid sm={4} item>
                                                    <div
                                                      style={{
                                                        flex: 2,
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                      }}>
                                                      {item.block_icon !==
                                                        null && (
                                                        <img
                                                          src={item.block_icon}
                                                          alt="No_image"
                                                          style={{
                                                            width: '150px',
                                                            height: '70px',
                                                            marginRight: '10px',
                                                          }}
                                                        />
                                                      )}
                                                      <input
                                                        id="block_banner_icon"
                                                        type="file"
                                                        accept="image/*"
                                                        aria-label="upload"
                                                        name="block_icon"
                                                        onChange={(e) =>
                                                          this.onFileUpload(
                                                            e,
                                                            index,
                                                            0,
                                                            'banner'
                                                          )
                                                        }
                                                        style={{
                                                          display: 'none',
                                                        }}
                                                      />
                                                      <TextField
                                                        value={
                                                          item.block_icon
                                                            ? item.block_icon
                                                                .split('/')
                                                                .pop()
                                                            : ''
                                                        }
                                                        placeholder="Icon Image"
                                                        name="block_icon"
                                                        inputProps={{
                                                          readOnly: true,
                                                        }}
                                                        style={{
                                                          display: 'none',
                                                        }}
                                                        required
                                                      />
                                                      <Button
                                                        sx={{
                                                          backgroundColor:
                                                            'rgb(204, 9, 47)',
                                                          height: '3em',
                                                          '&:hover': {
                                                            backgroundColor:
                                                              'rgb(204, 9, 47)',
                                                          },
                                                        }}
                                                        name="block_icon"
                                                        onClick={(e) =>
                                                          this.uploadAllImage(
                                                            e,
                                                            0,
                                                            'banner'
                                                          )
                                                        }>
                                                        <AddPhotoAlternate />
                                                      </Button>
                                                    </div>
                                                  </Grid>
                                                </>
                                              )}
                                              {item.block_name !== 'Banner' && (
                                                <>
                                                  <Grid item sm={2}>
                                                    Card
                                                  </Grid>
                                                  <Grid sm={4} item>
                                                    <RadioGroup
                                                      row
                                                      aria-labelledby="demo-radio-buttons-group-label"
                                                      value={item.card}
                                                      name="card"
                                                      onChange={(e) =>
                                                        this.onRadioSetChange(
                                                          e,
                                                          index
                                                        )
                                                      }
                                                      style={{
                                                        fontSize: '22px',
                                                      }}>
                                                      <FormControlLabel
                                                        value="1"
                                                        control={
                                                          <Radio
                                                            style={{
                                                              color: '#cc092f',
                                                            }}
                                                            sx={{
                                                              '& .MuiSvgIcon-root':
                                                                {
                                                                  fontSize: 22,
                                                                },
                                                            }}
                                                          />
                                                        }
                                                        label="Yes"
                                                        style={{
                                                          padding: '0px 10px',
                                                        }}
                                                      />
                                                      <FormControlLabel
                                                        value="0"
                                                        control={
                                                          <Radio
                                                            style={{
                                                              color: '#cc092f',
                                                            }}
                                                            sx={{
                                                              '& .MuiSvgIcon-root':
                                                                {
                                                                  fontSize: 22,
                                                                },
                                                            }}
                                                          />
                                                        }
                                                        label="No"
                                                        style={{
                                                          padding: '0px 10px',
                                                        }}
                                                      />
                                                    </RadioGroup>
                                                  </Grid>
                                                </>
                                              )}

                                              {item.block_name ===
                                                'Overview' && (
                                                <>
                                                  <Grid item sm={2}>
                                                    Backgroung Image
                                                  </Grid>
                                                  <Grid sm={4} item>
                                                    <div
                                                      style={{
                                                        flex: 2,
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                      }}>
                                                      {item.block_icon !==
                                                        null && (
                                                        <img
                                                          src={item.block_icon}
                                                          alt="No_image"
                                                          style={{
                                                            width: '150px',
                                                            height: '70px',
                                                            marginRight: '10px',
                                                          }}
                                                        />
                                                      )}
                                                      <input
                                                        id="block_overview_bg"
                                                        type="file"
                                                        accept="image/*"
                                                        aria-label="upload"
                                                        name="block_icon"
                                                        onChange={(e) =>
                                                          this.onFileUpload(
                                                            e,
                                                            index,
                                                            0,
                                                            'overview'
                                                          )
                                                        }
                                                        style={{
                                                          display: 'none',
                                                        }}
                                                      />
                                                      <TextField
                                                        value={
                                                          item.block_icon
                                                            ? item.block_icon
                                                                .split('/')
                                                                .pop()
                                                            : ''
                                                        }
                                                        placeholder="Icon Image"
                                                        name="block_icon"
                                                        inputProps={{
                                                          readOnly: true,
                                                        }}
                                                        style={{
                                                          display: 'none',
                                                        }}
                                                      />
                                                      <Button
                                                        sx={{
                                                          backgroundColor:
                                                            'rgb(204, 9, 47)',
                                                          height: '3em',
                                                          '&:hover': {
                                                            backgroundColor:
                                                              'rgb(204, 9, 47)',
                                                          },
                                                        }}
                                                        name="block_icon"
                                                        onClick={(e) =>
                                                          this.uploadAllImage(
                                                            e,
                                                            0,
                                                            'overview'
                                                          )
                                                        }>
                                                        <AddPhotoAlternate />
                                                      </Button>
                                                    </div>
                                                  </Grid>
                                                </>
                                              )}

                                              {item.block_name !== 'Banner' &&
                                              item.block_name !== 'Videos' ? (
                                                <>
                                                  {/* <Grid
                                            sm={2}
                                            item
                                            >
                                            Description
                                          </Grid> */}
                                                  <Grid
                                                    sm={12}
                                                    item
                                                    style={{
                                                      padding:
                                                        '15px 0px 0px 15px',
                                                    }}>
                                                    <CKEditor
                                                      config={editorConfig}
                                                      data={item.block_detial}
                                                      onChange={(
                                                        event: any
                                                      ) => {
                                                        const items = [
                                                          ...this.state.fields
                                                            .blocks,
                                                        ];
                                                        const item = {
                                                          ...items[index],
                                                        };
                                                        item['block_detial'] =
                                                          event.editor.getData();
                                                        items[index] = item;
                                                        this.setState({
                                                          fields: {
                                                            ...this.state
                                                              .fields,
                                                            blocks: items,
                                                          },
                                                        });
                                                      }}
                                                    />
                                                    {/* <SunEditor
                                                  setContents={
                                                    item.block_detial
                                                  }
                                                  showToolbar={!false}
                                                  onChange={(content: any) => {
                                                    const items = [
                                                      ...this.state.fields
                                                        .blocks,
                                                    ];
                                                    const item = {
                                                      ...items[index],
                                                    };
                                                    item['block_detial'] =
                                                      content;
                                                    items[index] = item;
                                                    this.setState({
                                                      fields: {
                                                        ...this.state.fields,
                                                        blocks: items,
                                                      },
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
                                                        'image',
                                                        'codeView',
                                                      ],
                                                    ],
                                                  }}
                                                /> */}
                                                  </Grid>
                                                </>
                                              ) : item.block_name ===
                                                'Videos' ? (
                                                <>
                                                  {item.block_detial_json.map(
                                                    (
                                                      element: any,
                                                      key: any
                                                    ) => (
                                                      <Grid
                                                        container
                                                        key={key}
                                                        style={{
                                                          alignItems: 'center',
                                                          border:
                                                            '1px solid #D8D8D8',
                                                          borderRadius: '0px',
                                                          padding: '10px',
                                                          marginTop: '10px',
                                                          marginLeft: '15px',
                                                        }}
                                                        spacing={2}>
                                                        <Grid
                                                          item
                                                          sm={2}
                                                          style={{}}>
                                                          Type
                                                        </Grid>
                                                        <Grid sm={4} item>
                                                          <Select
                                                            style={{
                                                              width: '100%',
                                                            }}
                                                            value={
                                                              element.block_detial_json_type
                                                            }
                                                            name="block_detial_json_type"
                                                            label="Page Type"
                                                            onChange={(e) =>
                                                              this.onFieldGroupChange(
                                                                e,
                                                                index,
                                                                key
                                                              )
                                                            }
                                                            required>
                                                            <MenuItem value="1">
                                                              Link
                                                            </MenuItem>
                                                            <MenuItem value="2">
                                                              Upload
                                                            </MenuItem>
                                                          </Select>
                                                        </Grid>
                                                        <Grid sm={6}>
                                                          {item.block_detial_json !==
                                                            null &&
                                                            item
                                                              .block_detial_json
                                                              .length > 1 && (
                                                              <div
                                                                style={{
                                                                  float:
                                                                    'right',
                                                                }}>
                                                                <DeleteIcon
                                                                  style={{
                                                                    cursor:
                                                                      'pointer',
                                                                  }}
                                                                  onClick={() =>
                                                                    this.removeBlock(
                                                                      index,
                                                                      key
                                                                    )
                                                                  }
                                                                />
                                                              </div>
                                                            )}
                                                        </Grid>
                                                        {element.block_detial_json_type ===
                                                        '2' ? (
                                                          <>
                                                            <Grid
                                                              item
                                                              sm={2}
                                                              style={{}}>
                                                              Video File
                                                            </Grid>
                                                            <Grid sm={4} item>
                                                              <div
                                                                style={{
                                                                  flex: 2,
                                                                  display:
                                                                    'flex',
                                                                  flexDirection:
                                                                    'row',
                                                                  alignItems:
                                                                    'center',
                                                                }}>
                                                                <input
                                                                  id={`icon_video_upload${key}`}
                                                                  type="file"
                                                                  accept="video/*"
                                                                  aria-label="upload"
                                                                  name="block_detial_json_file"
                                                                  onChange={(
                                                                    e
                                                                  ) =>
                                                                    this.onFileUpload(
                                                                      e,
                                                                      index,
                                                                      key,
                                                                      'videos'
                                                                    )
                                                                  }
                                                                  style={{
                                                                    display:
                                                                      'none',
                                                                  }}
                                                                />
                                                                <TextField
                                                                  value={
                                                                    element.block_detial_json_file
                                                                      ? element.block_detial_json_file
                                                                          .split(
                                                                            '/'
                                                                          )
                                                                          .pop()
                                                                      : ''
                                                                  }
                                                                  placeholder="Video Upload"
                                                                  name={`icon_video_upload${key}`}
                                                                  inputProps={{
                                                                    readOnly:
                                                                      true,
                                                                  }}
                                                                  style={{
                                                                    display:
                                                                      'none',
                                                                  }}
                                                                />
                                                                <Button
                                                                  sx={{
                                                                    backgroundColor:
                                                                      'rgb(204, 9, 47)',
                                                                    height:
                                                                      '3em',
                                                                    '&:hover': {
                                                                      backgroundColor:
                                                                        'rgb(204, 9, 47)',
                                                                    },
                                                                  }}
                                                                  name="icon_image"
                                                                  onClick={(
                                                                    e
                                                                  ) =>
                                                                    this.uploadAllImage(
                                                                      e,
                                                                      key,
                                                                      'videos'
                                                                    )
                                                                  }>
                                                                  <VideoFile />
                                                                </Button>
                                                              </div>
                                                              {/* {this.state
                                                        .is_form_valid ===
                                                        true &&
                                                        element.file === '' && (
                                                          <FormHelperText>
                                                            File
                                                          </FormHelperText>
                                                        )} */}
                                                            </Grid>
                                                          </>
                                                        ) : (
                                                          <>
                                                            <Grid item sm={2}>
                                                              Title
                                                            </Grid>
                                                            <Grid sm={4} item>
                                                              <TextField
                                                                style={{
                                                                  width: '100%',
                                                                }}
                                                                value={
                                                                  element.block_detial_json_name
                                                                }
                                                                name="block_detial_json_name"
                                                                placeholder="Title"
                                                                onChange={(e) =>
                                                                  this.onFieldGroupChange(
                                                                    e,
                                                                    index,
                                                                    key
                                                                  )
                                                                }
                                                                required
                                                              />
                                                              {/* {this.state
                                                        .is_form_valid ===
                                                        true &&
                                                        element.name === '' && (
                                                          <FormHelperText>
                                                            Title
                                                          </FormHelperText>
                                                        )} */}
                                                            </Grid>
                                                            <Grid item sm={2}>
                                                              URL
                                                            </Grid>
                                                            <Grid sm={4} item>
                                                              <TextField
                                                                style={{
                                                                  width: '100%',
                                                                }}
                                                                value={
                                                                  element.block_detial_json_url
                                                                }
                                                                name="block_detial_json_url"
                                                                placeholder="URL"
                                                                onChange={(e) =>
                                                                  this.onFieldGroupChange(
                                                                    e,
                                                                    index,
                                                                    key
                                                                  )
                                                                }
                                                                required
                                                              />
                                                              {/* {this.state
                                                        .is_form_valid ===
                                                        true &&
                                                        element.url === '' && (
                                                          <FormHelperText>
                                                            URL
                                                          </FormHelperText>
                                                        )} */}
                                                            </Grid>
                                                          </>
                                                        )}
                                                      </Grid>
                                                    )
                                                  )}
                                                </>
                                              ) : null}
                                            </Grid>
                                          ) : item.block_name === 'Features' &&
                                            item.status === true ? (
                                            <>
                                              {item.block_detial_json.map(
                                                (ele: any, key: any) => (
                                                  <div
                                                    key={key}
                                                    style={{
                                                      marginTop: '15px',
                                                    }}>
                                                    <Grid
                                                      container
                                                      style={{
                                                        alignItems: 'center',
                                                        border:
                                                          '1px solid #D8D8D8',
                                                        borderRadius: '0px',
                                                        padding: '10px',
                                                        marginTop: '10px',
                                                        // marginLeft: '0px',
                                                      }}
                                                      spacing={2}>
                                                      <Grid sm={12}>
                                                        {item.block_detial_json !==
                                                          null &&
                                                          item.block_detial_json
                                                            .length > 1 && (
                                                            <div
                                                              style={{
                                                                float: 'right',
                                                              }}>
                                                              <DeleteIcon
                                                                style={{
                                                                  cursor:
                                                                    'pointer',
                                                                }}
                                                                onClick={() =>
                                                                  this.removeBlock(
                                                                    index,
                                                                    key
                                                                  )
                                                                }
                                                              />
                                                            </div>
                                                          )}
                                                      </Grid>
                                                      <Grid item sm={2}>
                                                        Title
                                                      </Grid>
                                                      <Grid sm={4} item>
                                                        <TextField
                                                          style={{
                                                            width: '100%',
                                                          }}
                                                          value={
                                                            ele.block_detial_json_name
                                                          }
                                                          name="block_detial_json_name"
                                                          placeholder="Title"
                                                          onChange={(e) =>
                                                            this.onFieldGroupChange(
                                                              e,
                                                              index,
                                                              key
                                                            )
                                                          }
                                                          required={
                                                            ele.block_detial_json_show_header ==
                                                            true
                                                              ? true
                                                              : false
                                                          }
                                                        />
                                                        {/* {this.state.is_form_valid ===
                                                true &&
                                                ele.name === '' && (
                                                  <FormHelperText>
                                                    Title
                                                  </FormHelperText>
                                                )} */}
                                                      </Grid>
                                                      <Grid item sm={2}>
                                                        Icon Image
                                                      </Grid>
                                                      <Grid sm={4} item>
                                                        <div
                                                          style={{
                                                            flex: 2,
                                                            display: 'flex',
                                                            flexDirection:
                                                              'row',
                                                            alignItems:
                                                              'center',
                                                          }}>
                                                          {ele.block_detial_json_icon !==
                                                            null && (
                                                            <img
                                                              src={
                                                                ele.block_detial_json_icon
                                                              }
                                                              alt="No_image"
                                                              style={{
                                                                width: '87px',
                                                                height: '70px',
                                                                marginRight:
                                                                  '10px',
                                                              }}
                                                            />
                                                          )}
                                                          <input
                                                            id={`icon_fetaures_icon${key}`}
                                                            type="file"
                                                            accept="image/*"
                                                            aria-label="upload"
                                                            name="block_detial_json_icon"
                                                            onChange={(e) =>
                                                              this.onFileUpload(
                                                                e,
                                                                index,
                                                                key,
                                                                'features'
                                                              )
                                                            }
                                                            style={{
                                                              display: 'none',
                                                            }}
                                                          />
                                                          <TextField
                                                            id={`feature_image_${key}`}
                                                            value={
                                                              ele.block_detial_json_icon
                                                                ? ele.block_detial_json_icon
                                                                    .split('/')
                                                                    .pop()
                                                                : ''
                                                            }
                                                            placeholder="Icon Image"
                                                            name="block_detial_json_order"
                                                            inputProps={{
                                                              readOnly: true,
                                                            }}
                                                            style={{
                                                              display: 'none',
                                                            }}
                                                          />
                                                          <Button
                                                            sx={{
                                                              backgroundColor:
                                                                'rgb(204, 9, 47)',
                                                              height: '3em',
                                                              '&:hover': {
                                                                backgroundColor:
                                                                  'rgb(204, 9, 47)',
                                                              },
                                                            }}
                                                            name="icon_image"
                                                            onClick={(e) =>
                                                              this.uploadAllImage(
                                                                e,
                                                                key,
                                                                'features'
                                                              )
                                                            }>
                                                            <AddPhotoAlternate />
                                                          </Button>
                                                        </div>
                                                        {/* {this.state.is_form_valid ===
                                                true &&
                                                ele.icon === '' && (
                                                  <FormHelperText>
                                                    Icon image
                                                  </FormHelperText>
                                                )} */}
                                                      </Grid>
                                                      <Grid item sm={2}>
                                                        Order No
                                                      </Grid>
                                                      <Grid sm={4} item>
                                                        <TextField
                                                          style={{
                                                            width: '100%',
                                                          }}
                                                          value={
                                                            ele.block_detial_json_order
                                                          }
                                                          inputProps={{
                                                            maxLength: 2,
                                                          }}
                                                          name="block_detial_json_order"
                                                          // type="number"
                                                          placeholder="Order"
                                                          onChange={(e) =>
                                                            this.onFieldGroupChange(
                                                              e,
                                                              index,
                                                              key
                                                            )
                                                          }
                                                          required
                                                        />
                                                      </Grid>

                                                      <Grid item sm={2}>
                                                        Layout
                                                      </Grid>
                                                      <Grid sm={4} item>
                                                        <Select
                                                          style={{
                                                            width: '100%',
                                                          }}
                                                          value={
                                                            ele.block_detial_json_layout_size
                                                          }
                                                          name="block_detial_json_layout_size"
                                                          label="Page Type"
                                                          onChange={(e) =>
                                                            this.onFieldGroupChange(
                                                              e,
                                                              index,
                                                              key
                                                            )
                                                          }
                                                          required>
                                                          <MenuItem value="1">
                                                            Full Width
                                                          </MenuItem>
                                                          <MenuItem value="2">
                                                            Half Width
                                                          </MenuItem>
                                                        </Select>
                                                      </Grid>

                                                      <Grid item sm={2}>
                                                        Show Header
                                                      </Grid>
                                                      <Grid sm={4} item>
                                                        <Switch
                                                          name="block_detial_json_show_header"
                                                          checked={
                                                            ele.block_detial_json_show_header
                                                          }
                                                          color="secondary"
                                                          onChange={(e) =>
                                                            this.onSwitchGroupChange(
                                                              e,
                                                              index,
                                                              key
                                                            )
                                                          }
                                                        />
                                                      </Grid>

                                                      <Grid item sm={2}>
                                                        Card
                                                      </Grid>
                                                      <Grid sm={4} item>
                                                        <RadioGroup
                                                          row
                                                          aria-labelledby="demo-radio-buttons-group-label"
                                                          value={
                                                            ele.block_detial_json_card
                                                          }
                                                          name="block_detial_json_card"
                                                          onChange={(e) =>
                                                            this.onRadioGroupChange(
                                                              e,
                                                              index,
                                                              key
                                                            )
                                                          }>
                                                          <FormControlLabel
                                                            value="1"
                                                            control={
                                                              <Radio
                                                                style={{
                                                                  color:
                                                                    '#cc092f',
                                                                }}
                                                                sx={{
                                                                  '& .MuiSvgIcon-root':
                                                                    {
                                                                      fontSize: 22,
                                                                    },
                                                                }}
                                                              />
                                                            }
                                                            label="Yes"
                                                            style={{
                                                              padding:
                                                                '0px 10px',
                                                              fontSize: '20px',
                                                            }}
                                                          />
                                                          <FormControlLabel
                                                            value="0"
                                                            control={
                                                              <Radio
                                                                style={{
                                                                  color:
                                                                    '#cc092f',
                                                                }}
                                                                sx={{
                                                                  '& .MuiSvgIcon-root':
                                                                    {
                                                                      fontSize: 22,
                                                                    },
                                                                }}
                                                              />
                                                            }
                                                            label="No"
                                                            style={{
                                                              padding:
                                                                '0px 10px',
                                                            }}
                                                          />
                                                        </RadioGroup>
                                                      </Grid>

                                                      {/* <Grid item sm={2}>
                                                    Card
                                                  </Grid>
                                                  <Grid sm={4} item>
                                                    <RadioGroup
                                                      row
                                                      aria-labelledby="demo-radio-buttons-group-label"
                                                      value={
                                                        ele.block_detial_json_card
                                                      }
                                                      name="block_detial_json_card"
                                                      onChange={(e) =>
                                                        this.onRadioGroupChange(
                                                          e,
                                                          index,
                                                          key
                                                        )
                                                      }>
                                                      <FormControlLabel
                                                        value="1"
                                                        control={<Radio />}
                                                        label="Yes"
                                                        style={{
                                                          padding: '0px 10px',
                                                          fontSize: '20px',
                                                        }}
                                                      />
                                                      <FormControlLabel
                                                        value="0"
                                                        control={<Radio />}
                                                        label="No"
                                                        style={{
                                                          padding: '0px 10px',
                                                          fontSize: '20px',
                                                        }}
                                                      />
                                                    </RadioGroup>
                                                  </Grid> */}

                                                      <Grid
                                                        sm={12}
                                                        item
                                                        style={{
                                                          padding: '15px 0px',
                                                        }}>
                                                        <CKEditor
                                                          config={editorConfig}
                                                          data={
                                                            ele.block_detial_json_description
                                                          }
                                                          onChange={(
                                                            event: any
                                                          ) => {
                                                            const items = [
                                                              ...this.state
                                                                .fields.blocks,
                                                            ];
                                                            const item = {
                                                              ...items[index],
                                                            };
                                                            item.block_detial_json[
                                                              key
                                                            ][
                                                              'block_detial_json_description'
                                                            ] =
                                                              event.editor.getData();
                                                            items[index] = item;
                                                            this.setState({
                                                              fields: {
                                                                ...this.state
                                                                  .fields,
                                                                blocks: items,
                                                              },
                                                            });
                                                          }}
                                                        />
                                                        {/* <SunEditor
                                                      setContents={
                                                        ele.block_detial_json_description
                                                      }
                                                      showToolbar={!false}
                                                      onChange={(
                                                        content: any
                                                      ) => {
                                                        const items = [
                                                          ...this.state.fields
                                                            .blocks,
                                                        ];
                                                        const item = {
                                                          ...items[index],
                                                        };
                                                        item.block_detial_json[
                                                          key
                                                        ][
                                                          'block_detial_json_description'
                                                        ] = content;
                                                        items[index] = item;
                                                        this.setState({
                                                          fields: {
                                                            ...this.state
                                                              .fields,
                                                            blocks: items,
                                                          },
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
                                                            'image',
                                                            'codeView',
                                                          ],
                                                        ],
                                                      }}
                                                    /> */}
                                                      </Grid>
                                                    </Grid>
                                                  </div>
                                                )
                                              )}
                                            </>
                                          ) : null}
                                        </Grid>
                                      </Grid>
                                      {item.status === true && (
                                        <div>
                                          {(item.block_name === 'Videos' ||
                                            item.block_name === 'Features') && (
                                            <div
                                              style={{
                                                textAlign: 'end',
                                                margin: '10px 0px',
                                              }}>
                                              <Button
                                                onClick={() =>
                                                  this.addBlocks(index)
                                                }
                                                style={{
                                                  background: '#CC092F',
                                                  fontSize: '12px',
                                                  height: '40px',
                                                  width: '140px',
                                                  fontWeight: 400,
                                                }}>
                                                Add {item.block_name}{' '}
                                              </Button>
                                            </div>
                                          )}
                                        </div>
                                      )}
                                      {/* <Divider
                                style={{
                                  margin: '10px 0px',
                                  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                                }}
                              /> */}
                                    </Grid>
                                  )
                                )}
                              </Grid>
                              <Grid item sm={12}>
                                <div
                                  className="block-flex"
                                  style={{ alignItems: 'flex-start' }}>
                                  <div
                                    style={{ width: '178px', fontWeight: 600 }}>
                                    Dynamic Script
                                  </div>
                                  <div style={{ flex: 6 }} id="form-textarea">
                                    <TextField
                                      style={{
                                        width: '100%',
                                      }}
                                      value={this.state.fields.script_dynamic}
                                      name="script_dynamic"
                                      placeholder="Dynamic Script"
                                      multiline
                                      rows={10}
                                      onChange={(e) => this.onFieldChange(e)}
                                    />
                                    {/* {this.state.is_form_valid === true &&
                                  state.script_dynamic === '' && (
                                    <FormHelperText>
                                      Script
                                    </FormHelperText>
                                  )} */}
                                  </div>
                                </div>
                              </Grid>
                            </div>
                          </>
                        ) : null}
                      </div>
                    ) : (
                      <div style={{ marginTop: '20px' }}>
                        <CommonTemplate data={this.state.fields} />
                      </div>
                    )}
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
                  <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="light"
                    style={{ whiteSpace: 'nowrap' }}
                  />
                  {this.state.preview === false && (
                    <div className="champions-btn-section">
                      <div>
                        {this.isEdit === true ? (
                          <NavLink
                            to="/admin/champions"
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
                            }}
                            type="submit"
                            disabled={!this.state.submit_btn}>
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
                            }}
                            type="submit"
                            disabled={!this.state.submit_btn}>
                            Submit
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
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
