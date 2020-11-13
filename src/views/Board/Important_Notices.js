import React, { Component } from 'react';
import "../../assets/css/Notice.css";
import Notices from "assets/img/20.jpg";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";

const useStyles = makeStyles();
export default function Important_Notices(props) {
    const classes = useStyles();
    const { ...rest } = props;
        return (
            
            <form class="f_board">
                 <Header
                    brand="HOUR PAT"
                    src="/"
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="red"
                    changeColorOnScroll={{
                    height: 500,
                    color: "white"
                    }}
                    {...rest}
                />
                <h1>  </h1>
                <h2 id="N_board"> 
                <Link to="Boardlist" id ="Important_Notices"className={classes.link}> 공지사항 </Link>
                </h2>
                <img class="B_img"src={Notices}></img>
                 
                <div class="surch">
                    <select class="sfl">
                    <option class="S_name" value="">제목</option>
                    <option class="S_content" value="">내용</option>
                    <option class="S_user" value="">작성자</option>
            
                    </select>
                    <input type="text" class="frm" value="" required="" id="stx" size="10" maxlength="255" ></input>
                    <input type="submit" value="검색" class="btn_submit"></input>
                </div>

                <div class="bo_fx">
                    <div id="bo_list_total">
                    <span>Total 33건</span>
                    1 페이지
                    </div>
                    <ul class="btn_bo_user">
                        <li><a href="" class="btn_b02">글 안쓸꺼자나</a></li>
                        <li><a href="" class="btn_b02">글쓰기</a></li>
                    </ul>
                 </div>
                   
                <table class="b_table">
                    <tr calss="">
                        <th calss="c_column">번호</th>
                        <th calss="c_column">제목</th>
                        <th calss="c_column">작성자</th>
                        <th calss="c_column">조회수</th>
                    </tr>
                    <tr>
                        <td class="d_content"></td>
                        <td class="d_content"></td>
                        <td class="d_content"></td>
                        <td class="d_content"></td>
                    </tr>
                    
                </table>
                
                <div class="surch2">
                    <select class="sfl">
                    <option value="">제목</option>
                    <option value="">내용</option>
                    <option value="">작성자</option>
            
                    </select>
                    <input type="text" class="frm2" value="" required="" id="stx" size="10" maxlength="255" ></input>
                    <input type="submit" value="검색" class="btn_submit"></input>
                </div>
              
                <nav class="pg_wrap">
                    <span class="pg">
                        <span class="sound_only"></span>
                    <strong class="pg_current">1</strong><span class="sound_only"></span>
                    <a href="./board.php?bo_table=jejubbs_comm_free&amp;page=2" class="pg_page"><span class="sound_only">2</span></a>
                    <a href="./board.php?bo_table=jejubbs_comm_free&amp;page=3" class="pg_page"><span class="sound_only">3</span></a>
                    <a href="./board.php?bo_table=jejubbs_comm_free&amp;page=4" class="pg_page"><span class="sound_only">4</span></a>
                    <a href="./board.php?bo_table=jejubbs_comm_free&amp;page=4" class="pg_page pg_end">맨끝</a>
                    </span>
                </nav>
            </form>
        );
    }

