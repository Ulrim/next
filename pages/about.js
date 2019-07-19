import Head from "../components/head";

class Btn extends React.Component {
  componentDidMount() {
    window.Kakao.init("f0180cb7e7e83af588b59f4aab1a8c3b");
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: "우리 결혼해요",
        description: "드루와",
        imageUrl:
          "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: "https://www.jacarand.com",
          webUrl: "https://www.jacarand.com"
        }
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: "자세히 보기",
          link: {
            mobileWebUrl: "https://www.jacarand.com",
            webUrl: "https://www.jacarand.com"
          }
        }
      ]
    });
  }

  navi = () => {
    window.Kakao.Navi.start({
      name: "현대백화점 판교점",
      x: 127.11205203011632,
      y: 37.39279717586919,
      coordType: "wgs84"
    });
  };

  naviShare = () => {
    Kakao.Navi.share({
      name: "현대백화점 판교점",
      x: 127.11205203011632,
      y: 37.39279717586919,
      coordType: "wgs84"
    });
  };

  render() {
    return (
      <div>
        <div id="kakao-link-btn"> 버튼 </div>
        <div onClick={this.navi}> 눌러 </div>
        <div onClick={this.naviShare}> 네비 쉐어</div>
        <div id="map" style={{ width: 500, height: 400 }} />
      </div>
    );
  }
}

export default function About() {
  return (
    <div>
      <Head title="about" />
      <Btn />
    </div>
  );
}
