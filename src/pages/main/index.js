import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Image } from './styles'
import { Creators as UserActions } from '../../store/ducks/users';

import Global from '../../styles/global';

import AddUserModal from '../../components/AddUserModal';
import UserList from '../../components/UserList';


class Main extends Component {
  static propTypes = {
    users: PropTypes.shape({}).isRequired,
    viewport: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
    showModal: PropTypes.bool,
    latitude: PropTypes.oneOf([null, PropTypes.number]),
    longitude: PropTypes.oneOf([null, PropTypes.number]),
  }

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -26.33995,
      longitude: -48.812887,
      zoom: 14,
    },
    showModal: false,
    latitude: null,
    longitude: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    if (e.target !== document.querySelector('.overlays')) { return; }

    const [longitude, latitude] = e.lngLat;

    this.setState({
      showModal: true,
      latitude,
      longitude,
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      latitude: null,
      longitude: null,
    });
  }

  render() {
    return (
      <Fragment>
        <Global />
        <MapGL
          id="map"
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          captureClick={false}
          onClick={this.handleMapClick}
        >
          { this.props.users.data.map(user => (
            <Marker
              key={user.id}
              latitude={user.latitude}
              longitude={user.longitude}
              onClick={this.handleMapClick}
              captureClick
            >
              <Image
                src={user.avatar_url}
                alt="avatar url"
              />
            </Marker>
          ))}
          <UserList />
        </MapGL>
        <AddUserModal
          showModal={this.state.showModal}
          onClickCancel={this.closeModal}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
