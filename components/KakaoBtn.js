// import React, { Component } from "react";
import { useEffect } from "react";
import Head from "next/head";

const KakaoBtn = () => {
  useEffect(() => {
    window.Kakao.init("f0180cb7e7e83af588b59f4aab1a8c3b");

    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "location",
      address: "경기 성남시 분당구 판교역로 235 에이치스퀘어 N동 8층",
      addressTitle: "카카오 판교오피스 카페톡",
      content: {
        title: "신메뉴 출시♥︎ 체리블라썸라떼",
        description: "이번 주는 체리블라썸라떼 1+1",
        imageUrl:
          "http://mud-kage.kakao.co.kr/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com"
        }
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com"
          }
        }
      ]
    });
  }, []);

  return (
    <div>
      <Head>
        <script src="https://developers.kakao.com/sdk/js/kakao.min.js" />
      </Head>
      <div id="kakao-link-btn">버튼</div>
    </div>
  );
};

// class KakaoBtn extends Component {
//   componentDidMount() {
//     window.Kakao.init("f0180cb7e7e83af588b59f4aab1a8c3b");

//     window.Kakao.Link.createDefaultButton({
//       container: "#kakao-link-btn",
//       objectType: "location",
//       address: "경기 성남시 분당구 판교역로 235 에이치스퀘어 N동 8층",
//       addressTitle: "카카오 판교오피스 카페톡",
//       content: {
//         title: "신메뉴 출시♥︎ 체리블라썸라떼",
//         description: "이번 주는 체리블라썸라떼 1+1",
//         imageUrl:
//           "http://mud-kage.kakao.co.kr/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png",
//         link: {
//           mobileWebUrl: "https://developers.kakao.com",
//           webUrl: "https://developers.kakao.com"
//         }
//       },
//       social: {
//         likeCount: 286,
//         commentCount: 45,
//         sharedCount: 845
//       },
//       buttons: [
//         {
//           title: "웹으로 보기",
//           link: {
//             mobileWebUrl: "https://developers.kakao.com",
//             webUrl: "https://developers.kakao.com"
//           }
//         }
//       ]
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Head>
//           <script src="https://developers.kakao.com/sdk/js/kakao.min.js" />
//         </Head>
//         <div id="kakao-link-btn">버튼</div>
//       </div>
//     );
//   }
// }

export default KakaoBtn;
