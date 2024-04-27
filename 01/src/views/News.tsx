import { useUserState } from "UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

function News() {
    const navigate = useNavigate();

    /**
     * TODO: 로그인 user정보
     * context or session or Redux(Recoil)
     */
    const { user } = useUserState();
    // console.log("context User : ", user);

    //임시
    let isLogin = true
    return (
        <div id="container">
            <section>
                <div className="contents">
                    <div className="newsList">
                        <ul>
                            <li>
                                <a href="/pub/newsView">
                                    <strong>이벤트 입니다.</strong>
                                    <em>2020-07-01 21:21:22</em>
                                </a>
                            </li>
                            <li>
                                <a href="/pub/newsView">
                                    <strong>뉴스 게시판 입니다.</strong>
                                    <em>2020-07-01 21:21:22</em>
                                </a>
                            </li>
                            <li>
                                <a href="/pub/newsView">
                                    <strong>공지사항 입니다</strong>
                                    <em>2020-07-01 21:21:22</em>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copy">
                    <span>유니마인드랩 주식회사 · 대표이사 : 최우주 · 사업자등록번호 : 461-81-02935</span>
                    <span>주소 : 서울시 성동구 광나루로 286 8층 (소셜캠퍼스온 서울1)</span>
                    <span>전화 : 070-7014-0304 · 이메일 : uni@unimindlab.com</span>
                    <span>ⓒ 2022 UNIMIND LAB Inc.</span>
                </div>
            </section>
        </div>
    );
}

export default News;
