import React from "react";

import MediaTile from "./components/media-tile";


export default class AboutPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    const name = entry.getIn(["data", "title"]);
    const position = entry.getIn(["data", "subtitle"]);
    const image = entry.getIn(["data", "image"]);
    
    return <div>
      <div className="bg-off-white pv4">
        <div className="mw7 center ph3 pt4">
          <MediaTile title={name} subtitle={position} image={image} />
        </div>
      </div>
    </div>;
  }
}
