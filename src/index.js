import React, { PureComponent } from "react";
import ReactDom from "react-dom";
import cx from "classnames";
import "./index.css";

const imgList = [
  "https://ae01.alicdn.com/kf/Hc1973040028f4b6fb09b6d9c6e1661f3s.jpg",
  "https://ae01.alicdn.com/kf/H5642a9cbc52247108178fadf53fa39afi.jpg",
  "https://ae01.alicdn.com/kf/H30a77696003c47a2836733302b6d4f7cH.jpg",
  "https://ae01.alicdn.com/kf/H78058528e52848ca835a2876d3048490F.jpg",
  "https://ae01.alicdn.com/kf/H197a4f3e78ba400e9ab0fa895a8cc49aN.jpg",
  "https://ae01.alicdn.com/kf/Hc309b7f728aa4247bca39bc69c6592d3J.jpg",
];

class Index extends PureComponent {
  componentDidMount() {
    setInterval(() => {
      this.renderImg();
    }, 300);
  }
  renderImg = () => {
    const b = Math.floor(Math.random() * 6) + 1;
    const bl = Math.floor(Math.random() * 11) + 1;

    return (
      <div
        style={{ backgroundImage: `url(${imgList[b - 1]})` }}
        className={cx("bubble", `bl${bl}`)}
        data-set={String(Date.now())}
      />
    );
  };

  render() {
    return (
      <div className="container">
        <div className="praise" id="praise">
          {this.renderImg()}
        </div>
      </div>
    );
  }
}

ReactDom.render(<Index />, document.getElementById("root"));
