import React from "react";
import Link from "next/link";
import Head from "../components/head";
import KakaoBtn from "../components/KakaoBtn";

const Home = () => (
  <div>
    <Head title="Home" />

    <div className="hero">
      <h1 className="title">여기는 카드 저장소입니다.</h1>
      <p className="description">막 들어오시면 안돼요..</p>

      <div className="row">
        <Link href="/청첩장">
          <a className="card">
            <h3>청첩장 &rarr;</h3>
            <p>청첩장 모음..</p>
          </a>
        </Link>
        <Link href="/추모">
          <a className="card">
            <h3>추모 &rarr;</h3>
            <p>추모 모음..</p>
          </a>
        </Link>
        <Link href="https://github.com/zeit/next.js">
          <a className="card">
            <h3>미정 &rarr;</h3>
            <p>아직 모름..</p>
          </a>
        </Link>
        <Link href="/청첩장/[id]" as="/청첩장/first-post">
          <a>First post</a>
        </Link>
      </div>
      <KakaoBtn />
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default Home;
