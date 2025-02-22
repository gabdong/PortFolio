import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { setHeaderVisibility } from '@lib/utils';
import media from '@lib/mediaQueries';

import ScrollActiveEl from '@components/ScrollActiveEl';

export default function Madeinreal() {
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeaderVisibility(false);
  }, []);

  return (
    <WrapperSt className="scroll" ref={wrapperRef}>
      <h2 className="blind">메이드인리얼 작업내용</h2>

      <div className="con1 con">
        <img
          src="/public/images/mir/logo.png"
          id="mirLogo"
          alt="메이드인리얼 로고"
        />
        <img src="/public/images/mir/main.png" alt="메이드인리얼 메인 목업" />
      </div>

      <div className="con2 con">
        <div className="container">
          <ScrollActiveEl className="fadeIn">
            <span className="headline">Automated</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <span className="headline">Medical</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <span className="headline">Web Business</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <span className="headline">Platform.</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <span className="normalText">
              반복되는 업무를 자동화, 단순화하여 운영자의 피로감을 감소시키는
              솔루션
            </span>
          </ScrollActiveEl>
        </div>
      </div>

      <div className="con3 con">
        <div className="bannerWrap">
          <ScrollActiveEl className="cover coverChange" />
          <div className="bannerContainer">
            <img src="/public/images/mir/banner.png" alt="배너 이미지" />
            <img src="/public/images/mir/banner.png" alt="배너 이미지" />
          </div>
        </div>
      </div>

      <div className="con4 con">
        <div className="mockUpImgWrap">
          <ScrollActiveEl className="fadeUp">
            <img
              src="/public/images/mir/builder_mockup.png"
              alt="빌더 메인 목업이미지"
            />
          </ScrollActiveEl>
        </div>
        <div className="container">
          <span className="headline">누구나 전문가처럼 페이지를 제작</span>
          <span className="normalText">
            비전문가도 전문가 수준으로 병/의원 웹페이지를 구축하고
          </span>
          <span className="normalText">
            운영할 수 있도록 지원하는 웹 기반 자동화 플랫폼(오토메디) 개발
          </span>
          <span className="normalText">
            약 400개 병/의원에서 실제 활용하며 베타 테스트를 통해 지속적인 개선
            진행 중
          </span>
          <span className="caption">
            * 현재 프로젝트는 개발 단계로, 세부 내용 공개가 어려우므로 핵심
            내용은 도식화하여 디자인으로 제공하며
            <br />
            상세한 설명은 대면 미팅을 통해 설명해 드릴 예정입니다.
          </span>
        </div>
      </div>

      <div className="con5 con">
        <div className="textWrap">
          <div className="line"></div>
          <span className="subTitle">Features & Development</span>
          <div className="line"></div>
        </div>
        <div className="backgroundWrap">
          <ScrollActiveEl className="fadeUp">
            <img src="/public/images/mir/background_half_circle.png" />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img src="/public/images/mir/background_half_circle.png" />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img src="/public/images/mir/background_half_circle.png" />
          </ScrollActiveEl>
        </div>
      </div>

      <div className="con6 con">
        <div className="backgroundWrap">
          <ScrollActiveEl className="fadeUp">
            <img src="/public/images/mir/background_circle.png" />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img src="/public/images/mir/background_circle.png" />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img src="/public/images/mir/background_circle.png" />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img src="/public/images/mir/background_circle.png" />
          </ScrollActiveEl>
        </div>

        <div className="container">
          <span className="headline">페이지 관리 시스템</span>
          <span className="caption">
            * UI 및 기본 스킨 제공으로 비전문가도 코딩없이 간편하게
            <br /> 웹페이지를 구축 할 수 있도록 지원하는 서비스
          </span>
        </div>

        <div className="container">
          <span className="subTitle">페이지 제작 기능</span>
          <img src="/public/images/mir/builder_main.png" />
          <ul className="infoUl">
            <li>
              <span>
                <em>▶︎</em> 텍스트 및 이미지를 간편하게 교체할 수 있는 기능 제공
              </span>
              <span>* 페이지요소 스타일 수정 UI</span>
              <span>* JSON 형태로 구조저장 및 출력</span>
            </li>
            <li>
              <span>
                <em>▶︎</em> 페이지 전체의 공통된 디자인 요소 일괄 수정 기능 제공
              </span>
              <span>* 스타일을 별도의 테이블에 저장해 참조하여 사용</span>
              <span>
                * 여러개의 스타일을 중첩하여 HTML class와 동일한 방식으로
                사용가능
              </span>
            </li>
            <li>
              <span>
                <em>▶︎</em> 페이지에 사용될 메뉴구성, 업장정보 등의 관리페이지
                및 소비자용 웹페이지 연동기능 제공
              </span>
              <span>
                * 관리자 수정사항의 소비자용 웹페이지 자동반영으로 별도 웹페이지
                수정작업 불필요
              </span>
            </li>
          </ul>
        </div>

        <div className="container">
          <span className="subTitle">팝업 관리 기능</span>
          <img src="/public/images/mir/builder_popup.png" />
          <ul className="infoUl">
            <li>
              <span>
                <em>▶︎</em> 팝업을 리스트화 하여 관리
              </span>
              <span>* 여러개의 팝업 동시 노출 여부 조절</span>
              <span>* 노출기간, 팝업위치 등 설정 UI 제공</span>
            </li>
            <li>
              <span>
                <em>▶︎</em> 기본 템플릿 제공으로 별도의 외주 없이 팝업을 등록
              </span>
              <span>* 팝업 테마 설정(슬라이드, 페이드인 등)</span>
              <span>* 시즌별 팝업 내부컨텐츠 시안 제공</span>
            </li>
          </ul>
        </div>

        <div className="container">
          <span className="subTitle">상담 및 진료 예약시스템 개선</span>
          <img src="/public/images/mir/builder_reserve.png" />
          <ul className="infoUl">
            <li>
              <span>
                <em>▶︎</em> 기존의 단순 시간예약 시스템에서 상품별 소요시간,
                의료진별 진료시간 등을 연동
              </span>
              <span>* 예약완료시 자동 문자/알림톡 발송기능 제공</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="con7 con">
        <div className="container">
          <span className="headline">장비 & 상품 관리</span>
          <span className="caption">
            * 병원 내 보유 장비 및 상품을 관리 할 수 있는 서비스
          </span>
        </div>
        <div className="deviceImgWrap">
          <div className="deviceImgContainer">
            <ScrollActiveEl className="cover coverChange" />
            <img src="/public/images/mir/device_placeholder.png" />
            <img src="/public/images/mir/device_01.png" />
            <img src="/public/images/mir/device_02.png" />
            <img src="/public/images/mir/device_03.png" />
            <img src="/public/images/mir/device_placeholder.png" />
          </div>
        </div>
        <div className="container">
          <ul className="infoUl">
            <li>
              <span>
                <em>▶︎</em> 장비, 상품 관리
              </span>
              <span>
                * 장비/상품의 정보, 이미지 등을 직접 관리 할 수 있는 서비스
              </span>
            </li>
            <li>
              <span>
                <em>▶︎</em> 자동 페이지 연동
              </span>
              <span>
                * 장비 및 상품정보 수정 시, 소비자용 웹페이지에 적용되도록
                자동화
              </span>
            </li>
            <li>
              <span>
                <em>▶︎</em> 상품 결제 기능 연동
              </span>
              <span>* 등록된 상품 목록과 연동된 결제 서비스</span>
              <span>* 이벤트 기간 및 이벤트 가격, 할인 비율 등 설정 기능</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="con8 con">
        <div className="container">
          <span className="headline">CRM 및 협업툴</span>
          <span className="caption">
            * 업무 효율 극대화를 위한 CRM 및 부서간 협업 시스템
          </span>
        </div>
        <div className="imageAnimationWrap right">
          <ScrollActiveEl className="imageAnimation">
            <img src="/public/images/mir/crm_service.png" />
          </ScrollActiveEl>
        </div>
        <div className="container">
          <ul className="infoUl">
            <li>
              <span>
                <em>▶︎</em> 소수의 인원으로 다수의 업무를 소화 할 수 있도록
                자동화
              </span>
              <span>* 도입 후 업무 부하율 52% 감소</span>
              <span>* 상황별 메세지 설정으로 자동 문자/알림톡 발송</span>
              <span>* 회원별 진료 및 결제기록 관리</span>
            </li>
            <li>
              <span>
                <em>▶︎</em> 여러 부서의 실시간 업무 진행상태 공유 및 관리를 위한
                업무 연동 기능
              </span>
              <span>* socket.io를 이용한 실시간 알림 및 댓글</span>
              <span>
                * 상/하위 계층구조의 프로젝트 관리로 업무 진행과정 확인
              </span>
            </li>
          </ul>
        </div>
        <div className="imageAnimationWrap left">
          <ScrollActiveEl className="imageAnimation">
            <img src="/public/images/mir/works_service.png" />
          </ScrollActiveEl>
        </div>
      </div>
    </WrapperSt>
  );
}

const WrapperSt = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background: var(--dark-m);
  line-height: 1.5;
  overflow-x: hidden;

  img {
    max-width: 100%;
  }

  .con {
    width: 100%;
    padding-top: 180px;
    font-size: 0;

    position: relative;
  }

  .container {
    display: flex;
    flex-direction: column;

    width: 1080px;
    max-width: 70%;
    margin: 0 auto;

    position: relative;
    z-index: 1;

    .headline {
      font-size: 42px;
      font-weight: 700;
      color: #fff;
    }

    .caption {
      font-size: 16px;
    }

    .subTitle {
      font-size: 28px;
      color: #fff;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;

      margin-top: 20px;

      li {
        display: flex;
        flex-direction: column;
        gap: 8px;

        span > em {
          font-size: 12px;
        }

        span:nth-child(1) {
          display: flex;
          align-items: center;
          gap: 8px;

          font-size: 20px;
        }

        span:not(:nth-child(1)) {
          font-size: 16px;
          margin-left: 18px;
        }
      }
    }
  }

  .con6,
  .con7,
  .con8 {
    padding-top: 120px;
    padding-bottom: 120px;

    .container {
      gap: 28px;

      padding: 60px 0;
    }
  }

  .backgroundWrap,
  .cover {
    width: 100%;
    height: 100%;
    overflow: hidden;

    position: absolute;
    left: 0;
    top: 0;
  }

  .cover {
    z-index: 1;
  }

  .coverChange {
    background: rgba(23, 23, 23, 0.9);
    transition: background 0.3s ease-in-out 0.3s;

    &.active {
      background: linear-gradient(
        to right,
        var(--dark-m) 0%,
        rgba(23, 23, 23, 0.6) 10%,
        rgba(0, 0, 0, 0) 50%,
        rgba(23, 23, 23, 0.6) 90%,
        var(--dark-m) 100%
      );
    }
  }

  .fadeIn {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    &.active {
      opacity: 1;
    }
  }

  .fadeUp {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;

    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .con1 {
    background: black;

    #mirLogo {
      width: 40%;
      max-width: 300px;
      margin-bottom: 60px;

      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .con2 {
    background: linear-gradient(to bottom, var(--dark-l), var(--dark-m));

    .container {
      gap: 14px;
    }

    .fadeIn {
      &:nth-child(2) {
        transition-delay: 0.2s;
      }
      &:nth-child(3) {
        transition-delay: 0.4s;
      }
      &:nth-child(4) {
        transition-delay: 0.6s;
      }
      &:nth-child(5) {
        transition-delay: 0.8s;
      }
      &.active {
        opacity: 1;
      }
    }

    .headline {
      font-size: 62px;
    }

    .normalText {
      font-size: 24px;
    }
  }

  .con3 {
    .bannerWrap {
      width: 100%;

      position: relative;

      .bannerContainer {
        display: flex;
        gap: 20px;

        width: 300%;
        animation: banner 15s linear infinite;

        img {
          max-width: unset;
          width: 50%;
        }
      }
    }
  }

  .con4 {
    padding: unset;
    margin-top: 180px;
    background-image: url('/public/images/mir/builder_sample.png');
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;
    background-color: rgba(23, 23, 23, 0.7);
    background-blend-mode: multiply;

    .mockUpImgWrap {
      width: 70%;
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 20%;

      .fadeUp {
        transition-delay: 0.3s;
      }
    }

    .container {
      margin-top: 30px;
      text-align: center;

      .headline {
        font-size: 42px;
        font-weight: 700;
        color: #fff;
      }

      .normalText {
        display: block;
        font-size: 18px;
        color: #fff;
      }

      .normalText:nth-child(2) {
        margin-top: 40px;
      }

      .normalText:nth-child(4) {
        margin-top: 20px;
      }

      .caption {
        display: block;
        margin-top: 40px;
      }
    }
  }

  .con5 {
    aspect-ratio: 4.99 / 1;
    position: relative;

    .textWrap {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      width: 50%;
      color: #fff;

      position: absolute;
      left: 50%;
      top: 60%;
      z-index: 1;
      transform: translateX(-50%);

      .line {
        flex: 1;

        height: 1px;
        background: #fff;
      }

      .subTitle {
        font-size: 18px;
      }
    }

    .backgroundWrap {
      .fadeUp {
        width: 40%;
        position: absolute;

        &:nth-child(1) {
          left: 0;
          top: 0;
          transition-delay: 0.6s;
        }

        &:nth-child(2) {
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          transition-delay: 0.5s;
        }

        &:nth-child(3) {
          right: 0;
          top: 0;
          transition-delay: 0.6s;
        }

        img {
          width: 100%;
        }
      }
    }
  }

  .con6 {
    position: relative;

    .backgroundWrap {
      .fadeUp {
        width: 100%;
        max-width: 800px;
        transition-delay: 0.5s;

        position: absolute;

        img {
          width: 100%;
        }
      }

      .fadeUp:nth-child(1) {
        right: -5%;
        top: 5%;
      }

      .fadeUp:nth-child(2) {
        left: -5%;
        top: 40%;
      }

      .fadeUp:nth-child(3) {
        left: -5%;
        top: 80%;
      }

      .fadeUp:nth-child(4) {
        left: 30%;
        top: 85%;
      }
    }
  }

  .con7 {
    background-image: url('/public/images/mir/background_half_circle.png');
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center bottom;

    .deviceImgWrap {
      width: 100%;
      overflow: hidden;

      position: relative;

      .deviceImgContainer {
        display: flex;
        justify-content: center;

        width: 95%;
        margin: 0 auto;
        overflow: hidden;

        position: relative;

        img {
          width: 25%;
        }

        img:nth-child(2) {
          transform: scale(0.7);
          margin-right: -3%;
        }

        img:nth-child(3) {
          transform: scale(0.9);
          margin-right: 1%;
        }

        img:nth-child(4) {
          margin-right: 1%;
        }

        img:nth-child(5) {
          transform: scale(0.9);
          margin-right: -3%;
        }

        img:nth-child(6) {
          transform: scale(0.7);
        }
      }
    }
  }

  .con8 {
    .imageAnimationWrap {
      width: 80%;

      padding-top: 80px;
      background-size: 40%;
      background-repeat: no-repeat;

      position: absolute;

      .imageAnimation {
        opacity: 0;
        transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;

        &.active {
          opacity: 1;
        }
      }
    }

    .imageAnimationWrap.right {
      background-image: url('/public/images/mir/background_gradation_right.png');
      background-position: right center;

      right: 0;
      top: 0;

      .imageAnimation {
        width: 80%;
        max-width: 1000px;
        transform: translateX(40vw);

        img {
          width: 100%;
        }

        &.active {
          transform: translateX(30vw);
        }
      }
    }

    .imageAnimationWrap.left {
      background-image: url('/public/images/mir/background_gradation_left.png');
      background-position: left center;

      left: 0;

      .imageAnimation {
        width: 60%;
        max-width: 800px;
        transform: translateX(10vw);

        img {
          width: 100%;
        }

        &.active {
          transform: translateX(20vw);
        }
      }
    }
  }

  //- Medium
  ${media.medium`
    .con {
      padding-top: 120px;
    }

    .container {
      .headline {
        font-size: 38px;
      }

      .caption {
        font-size: 14px;
      }

      .subTitle {
        font-size: 26px;
      }

      ul {
        gap: 18px;

        margin-top: 14px;

        li {
          gap: 4px;

          span:nth-child(1) {
            font-size: 16px;
          }

          span:not(:nth-child(1)) {
            font-size: 14px;
            margin-left: 16px;
          }
        }
      }
    }

    .con6,
    .con7,
    .con8 {
      padding-top: 80px;
      padding-bottom: 80px;

      .container {
        gap: 22px;

        padding: 40px 0;
      }
    }

    .con1 {
      #mirLogo {
        max-width: 260px;
        margin-bottom: 50px;
      }
    }

    .con2 {
      .container {
        gap: 12px;
      }

      .headline {
        font-size: 52px;
      }

      .normalText {
        font-size: 16px;
      }
    }

    .con3 {
      .bannerWrap {
        .bannerContainer {
          gap: 20px;
        }
      }
    }

    .con4 {
      margin-top: 120px;

      .container {
        margin-top: 20px;

        .headline {
          font-size: 52px;
        }

        .normalText {
          font-size: 16px;
        }
      }
    }

    .con8 {
      .imageAnimationWrap {
        width: 80%;

        padding-top: 80px;
        background-size: 40%;
        background-repeat: no-repeat;

        position: absolute;

        .imageAnimation {
          opacity: 0;
          transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;

          &.active {
            opacity: 1;
          }
        }
      }

      .imageAnimationWrap.right {
        .imageAnimation {
          width: 60%;

          &.active {
            transform: translateX(32vw);
          }
        }
      }

      .imageAnimationWrap.left {
        .imageAnimation {
          width: 45%;

          &.active {
            transform: translateX(18vw);
          }
        }
      }
    }
  `}

  //- Small
  ${media.small`
    .con {
      padding-top: 100px;
    }

    .container {
      .headline {
        font-size: 28px;
      }

      .caption {
        font-size: 12px;
      }

      .subTitle {
        font-size: 22px;
      }

      ul {
        gap: 24px;

        li {
          gap: 12px;

          span:nth-child(1) {
            font-size: 14px;
            font-weight: 600;
          }

          span:not(:nth-child(1)) {
            font-size: 14px;
            margin-left: 16px;
          }
        }
      }
    }

    .con6,
    .con7,
    .con8 {
      padding-top: 40px;
      padding-bottom: 40px;

      .container {
        padding: 40px 0;
      }
    }

    .fadeUp {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;

      &.active {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .con2 {
      .headline {
        font-size: 32px;
      }
      
      .normalText {
        font-size: 14px;
      }
    }

    .con3 {
      .bannerWrap {
        .bannerContainer {
          width: 3200px;
        }
      }
    }

    .con4 {
      margin-top: 120px;

      .mockUpImgWrap {
        width: 80%;
        margin-top: 5%;
      }

      .container {
        .headline {
          font-size: 32px;
          word-break: keep-all;
        }

        .normalText {
          font-size: 14px;
          word-break: keep-all;
        }
      }
    }

    .con5 {
      .textWrap {
        gap: 14px;

        width: 80%;

        top: 40%;

        .subTitle {
          font-size: 14px;
        }
      }
    }

    .con6 {
      .backgroundWrap {
        .fadeUp {
          width: 80%;
        }
      }
    }

    .con8 {
      .imageAnimationWrap {
        width: 100%;

        padding-top: 0px;
        background-size: 45%;

        position: relative;
      }
    }
  `}
`;
