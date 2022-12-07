import * as React from 'react';
import { Divider, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Typography } from '@mineral/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ErrorIcon from '@mui/icons-material/Error';

import { ArrowForwardSharp } from '@mui/icons-material';
import axios from 'axios';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Bars } from 'react-loader-spinner';
import { connect } from 'react-redux';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { websocket_url } from 'utils/Services/Env';

// import { useNavigate } from 'react-router-dom';

const client = new W3CWebSocket(`${websocket_url}`);

const SoftwareTools: React.FC = (props: any) => {
  // const navigate = useNavigate();
  const [loader, setLoader] = React.useState<any>(true);
  const [selectedFolderIndex, setSelectedFolderIndex] =
    React.useState<any>(null);
  const [monitorState, setMonitorState] = React.useState<boolean>(false);
  const [showMaintananceDetails, setShowMaintananceDetails] =
    React.useState<boolean>(false);
  const [folders, setFolder] = React.useState<any>([]);

  const onObject = (o: string, data: any) => {
    // console.log('STREMED DATA ++++++++++++++++ ', o);
    const parse: any = JSON.parse(o);
    // console.log('DATA_STREAM', parse);
    // console.log('DATA_DATA', data);

    const isExist: any = data.findIndex((item: any) => {
      return item.id == parse.folder.id;
    });

    // console.log('Update_1');
    // console.log('Exsit', isExist);
    if (isExist != -1) {
      updateFolderData(data, parse, isExist);
    }
  };

  const receive = (S: any, data: any) => {
    let brace_count: any = 0;
    let inString: any = false;
    let escaped: any = false;
    let buffer = '';

    let i;
    let pos: any = 0;
    for (i = 0; i < S.length; i++) {
      const c: any = S[i];
      if (inString) {
        if (escaped) {
          escaped = false;
        } else {
          if (c == '\\') {
            escaped = true;
          } else if (c == '"') {
            inString = false;
          }
        }
      } else {
        if (c == '{') {
          brace_count++;
        } else if (c == '}') {
          brace_count--;
          if (brace_count === 0) {
            buffer += S.substring(pos, i + 1);
            onObject(buffer, data);
            buffer = '';
            pos = i + 1;
          }
        } else if (c == '"') {
          inString = true;
        }
      }
    }
    buffer += S.substring(pos);
  };

  const updateFolderData = (data: any, parse_data: any, index: any) => {
    // console.log('Update_2');
    const monitors: any = [];
    const locations: any = [];
    let selectedIndex: any = null;
    let selectedLocationIndex: any = null;

    if (data[index].monitor.length != 0) {
      selectedIndex = data[index].monitor.findIndex(
        (item: any) => item.id == parse_data.monitor.id
      );
    }
    // console.log('LOCATIONS DATA', data[index].monitor[selectedIndex].locations);
    if (data[index].monitor[selectedIndex].locations.length != 0) {
      selectedLocationIndex = data[index].monitor[
        selectedIndex
      ].locations.findIndex((item: any) => item.id == parse_data.location.id);
    }

    // console.log('SELECTED INDEX', selectedIndex);
    // console.log('SELECTED LOCATION INDEX', selectedLocationIndex);

    if (selectedIndex == -1) {
      locations.push({
        id: parse_data.location.id,
        name: parse_data.location.name,
        result: {
          ...parse_data.result,
          performance: parse_data.result.type == 'ok' ? 'good' : 'poor',
        },
        status:
          parse_data.result.type == 'unconfirmed_error' ||
          parse_data.result.type == 'confirmed_error'
            ? 'error'
            : parse_data.result.type == 'ok'
            ? 'active'
            : 'N/A',
      });
      monitors.push({
        id: parse_data.monitor.id,
        name: parse_data.monitor.name,
        locations:
          data[index].monitor[selectedIndex].locations.concat(locations),
      });
      data[index].id = parse_data.folder.id;
      data[index].name = parse_data.folder.name;
      data[index].monitor = data[index].monitor.concat(monitors);
    } else {
      // console.log('DATA%3', data[index].monitor[selectedIndex].locations);
      data[index].id = parse_data.folder.id;
      data[index].name = parse_data.folder.name;
      if (data[index].monitor.length != 0) {
        data[index].monitor[selectedIndex].id = parse_data.monitor.id;
        data[index].monitor[selectedIndex].name = parse_data.monitor.name;
      }
      if (data[index].monitor[selectedIndex].locations.length != 0) {
        data[index].monitor[selectedIndex].locations[
          selectedLocationIndex
        ].result.performance = parse_data.result.type == 'ok' ? 'good' : 'poor';
        data[index].monitor[selectedIndex].locations[
          selectedLocationIndex
        ].result.type = getLocationStatus(
          data[index].monitor[selectedIndex].locations[selectedLocationIndex],
          parse_data
        );
        data[index].monitor[selectedIndex].locations[
          selectedLocationIndex
        ].status =
          // parse_data.result.type == 'unconfirmed_error' ||
          parse_data.result.type == 'confirmed_error'
            ? 'error'
            : parse_data.result.type == 'ok'
            ? 'active'
            : 'inactive';
      }
    }
    console.log('::_UPDATED_DATA_::', data);

    setFolder((prevState: any) => [...prevState]);
    // setFolder(data);
  };

  const getLocationStatus = (location: any, stream_data: any) => {
    const errorStatus: any = [];
    const warningStatus: any = [];
    const okStatus: any = [];
    const status =
      stream_data.result.type == 'confirmed_error'
        ? 'error'
        : stream_data.result.type == 'ok'
        ? 'ok'
        : 'inactive';
    if (status == 'error') {
      errorStatus.push(location);
    }
    if (status == 'ok') {
      okStatus.push(location);
    } else {
      warningStatus.push(location);
    }
    // console.log('errorStatus', errorStatus);
    // console.log('warningStatus', warningStatus);
    // console.log('okStatus', okStatus);
    if (errorStatus.length != 0) {
      return 'confirmed';
    }
    if (errorStatus.length == 0 && warningStatus.length != 0) {
      return 'inactive';
    }
    if (errorStatus.length == 0 && warningStatus.length == 0) {
      return 'ok';
    }
  };

  React.useEffect(() => {
    getASMFolders();
  }, []);

  // React.useEffect(() => {
  //   getStreamingData(folders);
  // }, [folders]);

  const getLocationsData = (data: any) => {
    const locations: any = [];
    data.checkpoint.groupIds.forEach((element: any) => {
      locations.push({
        id: element.id,
        name: element.name,
        result: {
          performance: data.status == 'active' ? 'good' : 'poor',
          type:
            data.status == 'active'
              ? 'ok'
              : data.status == 'error'
              ? 'confirmed'
              : 'warning',
        },
        status: data.status,
      });
    });
    return locations;
  };

  const getMonitorsData = (data: any) => {
    const monitors: any = [];
    data.monitor.forEach((element: any) => {
      monitors.push({
        id: element.id,
        name: element.name,
        isOpen: false,
        locations: getLocationsData(element),
      });
    });
    return monitors;
  };

  const getASMFolders = () => {
    const data: any = [];
    const getData: any = axios.get('asm/folders', {
      headers: {
        Authorization: `Bearer ${props.userToken}`,
      },
    });
    getData.then((response: any) => {
      const responseData = response.data;
      responseData.forEach((element: any) => {
        data.push({
          id: element.id,
          name: element.name,
          monitor: getMonitorsData(element),
        });
      });
      setFolder(data);
      console.log('INIT DATA', data);
      setLoader(false);
      client.onmessage = (message: any) => {
        console.log('RECEIVED_DATA', message.data);
        if (message.data) {
          receive(message.data, data);
          // const dataFromServer = JSON.parse(message.data);
          // console.log("got reply! ", dataFromServer);
        }
      };
      // getStreamingData(data);
    });
  };

  // const getStreamingData = (data: any) => {
  //   const fetchApi: any = fetch(`${process.env.REACT_APP_API_URL}asm/event`, {
  //     headers: {
  //       Authorization: `Bearer ${props.userToken}`,
  //     },
  //   });
  //   fetchApi
  //     .then((response: any) => {
  //       return response.body;
  //     })
  //     .then((rs: any) => {
  //       const streamState = true;
  //       const reader = rs.getReader();
  //       return new ReadableStream({
  //         async start(controller) {
  //           while (streamState) {
  //             const { done, value }: any = await reader.read();
  //             const decoder: any = new TextDecoder();
  //             const text: string = decoder.decode(value);
  //             console.log('STREAMING RESPONSE', text);
  //             receive(text, data);
  //             if (done) {
  //               break;
  //             }
  //             controller.enqueue(value);
  //           }
  //           controller.close();
  //           reader.releaseLock();
  //         },
  //       });
  //     })
  //     .catch(console.error);
  // };

  const getFolderStatus = (data: any) => {
    const statusOk: any = [];
    const statusError: any = [];
    const statusWarning: any = [];
    data.forEach((element: any) => {
      if (getMonitorStatus(element) == 'confirmed') {
        statusError.push(element);
      } else {
        if (getMonitorStatus(element) == 'ok') {
          statusOk.push(element);
        } else {
          statusWarning.push(element);
        }
      }
    });
    if (statusError.length != 0) {
      return 'confirmed';
    }
    if (statusWarning.length != 0 && statusError.length == 0) {
      return 'warning';
    } else {
      return 'ok';
    }
    // return 'ok';
  };

  const getMonitorStatus = (data: any) => {
    const checkPoorPerformance: any = [];
    const checkError: any = [];
    const checkWarning: any = [];
    data.locations.forEach((element: any) => {
      if (
        element.result.performance &&
        element.result.performance == 'poor' &&
        element.result.type != 'ok'
      ) {
        checkPoorPerformance.push(element);
      }
      if (element.status == 'error') {
        checkError.push(element);
      }
      if (element.status == 'inactive') {
        checkWarning.push(element);
      }
    });
    if (checkPoorPerformance.length == 0) {
      return 'ok';
    } else {
      if (checkPoorPerformance.length == 1) {
        return checkPoorPerformance[0].result.type == 'confirmed'
          ? 'confirmed'
          : 'warning';
      } else {
        if (checkError.length != 0) {
          return 'confirmed';
        } else {
          if (checkError.length == 0 && checkWarning.length != 0) {
            return 'warning';
          } else {
            if (checkError.length == 0 && checkWarning.length == 0) {
              return 'default';
            }
          }
        }
      }
    }
  };

  return (
    <div className="container" style={{ height: '100%' }}>
      {loader == false ? (
        monitorState ? (
          <>
            <div style={{ background: '#e4e5e7' }}>
              <div className="softTools">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: '300px',
                  }}>
                  <div style={{ flex: 1 }}>
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        setMonitorState(false);
                        setSelectedFolderIndex(null);
                        setShowMaintananceDetails(false);
                        // monitorsData = [];
                      }}
                      aria-hidden="true"
                      style={{ color: 'rgb(17 24 39/.5)' }}>
                      <Typography variant="h4" style={{ cursor: 'pointer' }}>
                        Broadcom BSG Tools /{' '}
                      </Typography>
                    </div>
                    <Typography variant="h2" color="grey">
                      {folders[selectedFolderIndex].name}
                    </Typography>
                  </div>
                  <div style={{ margin: '0px 10px' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        cursor: 'pointer',
                      }}>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          setMonitorState(false);
                          setSelectedFolderIndex(null);
                          setShowMaintananceDetails(false);
                          // monitorsData = [];
                        }}
                        aria-hidden="true">
                        <Typography variant="h4"> Back to BSG Tools</Typography>
                      </div>
                      <div>
                        {' '}
                        <ArrowForwardSharp
                          sx={{
                            color: '#58606e',
                            fontSize: '24px',
                            margin: '0px 15px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>{JSON.stringify(folders[selectedFolderIndex])}</div> */}
              </div>
            </div>

            <div>
              {!showMaintananceDetails ? (
                <div className="softTools">
                  <Grid container spacing={3} style={{ padding: '30px 0px' }}>
                    {folders[selectedFolderIndex].monitor.map(
                      (item: any, index: any) => (
                        <Grid item sm={4} key={index}>
                          <div
                            style={{
                              border:
                                getMonitorStatus(item) == 'ok'
                                  ? '1px solid #00875a'
                                  : getMonitorStatus(item) == 'confirmed'
                                  ? '1px solid #cc092f'
                                  : getMonitorStatus(item) == 'warning'
                                  ? '1px solid #e68c28'
                                  : '1px solid #58606e',
                              borderRadius: '10px',
                            }}>
                            <div
                              className="tools-monitor-card-blocks-top"
                              style={{ padding: '20px' }}>
                              <div style={{ flex: 1 }}>
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                  }}>
                                  {item.locations.length !== 0 ? (
                                    <div style={{ paddingRight: '10px' }}>
                                      {item.isOpen ? (
                                        <RemoveCircleOutlineIcon
                                          style={{
                                            marginTop: '5px',
                                            color: '#333840',
                                            opacity: 0.8,
                                            cursor: 'pointer',
                                          }}
                                          onClick={() => {
                                            item.isOpen = false;
                                            setFolder((prevState: any) => [
                                              ...prevState,
                                            ]);
                                          }}
                                        />
                                      ) : (
                                        <ControlPointIcon
                                          style={{
                                            marginTop: '5px',
                                            color: '#333840',
                                            opacity: 0.8,
                                            cursor: 'pointer',
                                          }}
                                          onClick={() => {
                                            item.isOpen = true;
                                            setFolder((prevState: any) => [
                                              ...prevState,
                                            ]);
                                          }}
                                        />
                                      )}
                                    </div>
                                  ) : (
                                    <div style={{ paddingRight: '10px' }} />
                                  )}
                                  <div style={{ flex: 2 }}>
                                    <Typography variant="h5">
                                      {item.name}
                                    </Typography>
                                  </div>
                                  <div>
                                    {!item.isOpen &&
                                      (getMonitorStatus(item) == 'ok' ? (
                                        <CheckCircleIcon
                                          style={{
                                            color: '#00875a', // green
                                            fontSize: '28px',
                                            margin: '0px 5px',
                                          }}
                                        />
                                      ) : getMonitorStatus(item) ==
                                        'confirmed' ? (
                                        <ErrorIcon
                                          style={{
                                            color: '#cc092f', // red
                                            fontSize: '28px',
                                            margin: '0px 5px',
                                          }}
                                        />
                                      ) : getMonitorStatus(item) ==
                                        'default' ? (
                                        <CheckCircleIcon
                                          style={{
                                            color: '#58606e', // grey
                                            fontSize: '28px',
                                            margin: '0px 5px',
                                          }}
                                        />
                                      ) : (
                                        <RemoveCircleIcon
                                          style={{
                                            color: '#e68c28', // yellow
                                            fontSize: '28px',
                                            margin: '0px 5px',
                                          }}
                                        />
                                      ))}
                                  </div>
                                </div>
                                {/* {openLocations && ( */}
                                <div>
                                  {item.isOpen && (
                                    <List
                                      style={{
                                        padding: '0px',
                                        marginLeft: '40px',
                                      }}>
                                      {item.locations.map(
                                        (element: any, key: any) => (
                                          <ListItem
                                            style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              padding: '0px',
                                            }}
                                            key={key}
                                            secondaryAction={
                                              element.result.type ==
                                              'default' ? (
                                                <CheckCircleIcon
                                                  style={{
                                                    color: '#58606e', // grey
                                                    fontSize: '26px',
                                                    margin: '0px 5px',
                                                  }}
                                                />
                                              ) : element.result.type ==
                                                'ok' ? (
                                                <CheckCircleIcon
                                                  style={{
                                                    color: '#00875a', // green
                                                    fontSize: '26px',
                                                    margin: '0px 5px',
                                                  }}
                                                />
                                              ) : element.result.type ==
                                                'confirmed' ? (
                                                <ErrorIcon
                                                  style={{
                                                    color: '#cc092f', // red
                                                    fontSize: '26px',
                                                    margin: '0px 5px',
                                                  }}
                                                />
                                              ) : (
                                                <RemoveCircleIcon
                                                  style={{
                                                    color: '#e68c28', // yellow
                                                    fontSize: '26px',
                                                    margin: '0px 5px',
                                                  }}
                                                />
                                              )
                                            }>
                                            <ListItemText>
                                              <span style={{ fontWeight: 600 }}>
                                                {element.name}
                                              </span>
                                            </ListItemText>
                                          </ListItem>
                                        )
                                      )}
                                    </List>
                                  )}
                                </div>
                                {/* )} */}
                              </div>
                            </div>
                          </div>
                        </Grid>
                      )
                    )}
                  </Grid>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      cursor: 'pointer',
                      margin: '40px 0px',
                    }}>
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        setMonitorState(false);
                        setSelectedFolderIndex(null);
                        setShowMaintananceDetails(false);
                        // monitorsData = [];
                      }}
                      aria-hidden="true">
                      <Typography variant="h4">Back to BSG Tools</Typography>
                    </div>
                    <div>
                      {' '}
                      <ArrowForwardSharp
                        sx={{
                          color: '#58606e',
                          fontSize: '24px',
                          margin: '0px 15px',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ padding: '30px 0px' }}>
                  <Typography variant="h4">
                    {folders[selectedFolderIndex].name} - History
                  </Typography>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="softTools">
            <div style={{ paddingTop: '40px' }}>
              <Typography variant="h2">BSG Tools</Typography>
            </div>

            <div>
              <Grid container spacing={3} style={{ padding: '30px 0px' }}>
                {folders.map((item: any, index: any) => (
                  <Grid
                    item
                    sm={4}
                    key={index}
                    onClick={() => {
                      setMonitorState(true);
                      setSelectedFolderIndex(index);
                    }}>
                    <div
                      style={{
                        border:
                          getFolderStatus(item.monitor) == 'ok'
                            ? '1px solid #00875a'
                            : getFolderStatus(item.monitor) == 'confirmed'
                            ? '1px solid #cc092f'
                            : '1px solid #e68c28',
                        borderRadius: '10px',
                        cursor: 'pointer',
                      }}>
                      <div className="tools-card-blocks-top" aria-hidden="true">
                        <div style={{ flex: 1 }}>
                          <Typography variant="h4">{item.name}</Typography>
                        </div>
                        <div>
                          {item.monitor &&
                            (getFolderStatus(item.monitor) == 'ok' ? (
                              <CheckCircleIcon
                                style={{
                                  color: '#00875a', // green
                                  fontSize: '30px',
                                  margin: '0px 5px',
                                }}
                              />
                            ) : getFolderStatus(item.monitor) == 'confirmed' ? (
                              <ErrorIcon
                                style={{
                                  color: '#cc092f', // red
                                  fontSize: '30px',
                                  margin: '0px 5px',
                                }}
                              />
                            ) : (
                              <RemoveCircleIcon
                                style={{
                                  color: '#e68c28', // yellow
                                  fontSize: '30px',
                                  margin: '0px 5px',
                                }}
                              />
                            ))}
                        </div>
                      </div>
                      <Divider />
                      {item.monitor.length > 0 && (
                        <div
                          className="tools-card-blocks-bottom"
                          // onClick={() => {
                          //   navigate(
                          //     `/software-tools-status/${item.name}/history`
                          //   );
                          // }}
                          aria-hidden="true">
                          <div
                            style={{
                              flex: 2,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}>
                            <Typography variant="h4">Monitoring</Typography>
                            {/* {item.monitor.length > 0
                              ? item.monitor
                                  .splice(0, 2)
                                  .map((data: any, index: any) => (
                                    <Typography variant="h6" key={index}>
                                      {data.name}
                                    </Typography>
                                  ))
                              : null} */}
                            {/* {item.monitor.length == 2 && (
                              <>
                                <Typography variant="h6">
                                  {item.monitor[0]?.name}
                                </Typography>
                                <Typography variant="h6">
                                  {item.monitor[1]?.name}
                                </Typography>
                              </>
                            )} */}
                            {/* {item.monitor.length > 2 && (
                              <>
                                <Typography variant="h6">
                                  {item.monitor[0]?.name}
                                </Typography>
                                <div style={{ color: 'grey', opacity: 0.8 }}>
                                  {item.monitor.length - 1} more..
                                </div>
                              </>
                            )} */}
                            {item.monitor.length > 3 ? (
                              <>
                                <Typography variant="h6">
                                  {item.monitor[0]?.name}
                                </Typography>
                                <Typography variant="h6">
                                  {item.monitor[1]?.name}
                                </Typography>
                                <div style={{ color: 'grey', opacity: 0.8 }}>
                                  {item.monitor.length - 2} more..
                                </div>
                              </>
                            ) : item.monitor.length < 2 ? (
                              <Typography variant="h6">
                                {item.monitor[0]?.name}
                              </Typography>
                            ) : (
                              <>
                                <Typography variant="h6">
                                  {item.monitor[0]?.name}
                                </Typography>
                                <Typography variant="h6">
                                  {item.monitor[1]?.name}
                                </Typography>
                              </>
                            )}
                          </div>
                          <div>
                            <ArrowForwardIosIcon
                              sx={{ color: '#9ca3af', fontSize: '20px' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        )
      ) : (
        <div id="app-loader">
          <Bars
            height="80"
            width="80"
            color="rgb(204, 9, 47)"
            ariaLabel="bars-loading"
            wrapperClass=""
            visible={loader}
          />
        </div>
      )}
    </div>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userToken: state.userToken,
  };
}

export default connect(mapDispatchToProps)(SoftwareTools);
// const locationsData = [
//   { id: 1, name: 'Los Angels', status: 'active' },
//   { id: 2, name: 'San Dieago', status: 'active' },
//   { id: 3, name: 'Pennisalvaniya', status: 'active' },
//   { id: 4, name: 'Georgia', status: 'active' },
//   { id: 5, name: 'New Jersey', status: 'active' },
// ];
