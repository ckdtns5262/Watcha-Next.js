'use client'

import { useMemo } from "react";

const Footer = () => {

    return (
        <div className="flex justify-center items-center mt-24 relative  text-[#6e6f73] text-sm">
            <div className="">
                <a href="/zendesk" className="text-white ml-24">고객센터(이용 및 결제 문의)</a>
                <a href="mailto:cs@watcha.co.kr" className="text-[#eee] text-sm"> cs@watcha.co.kr</a>
                <span> • 02-515-9985 (유료) </span>
                <span>/ 제휴 및 대외 협력 <a href="https://watcha.team/contact" className="text-[#eee] text-sm">https://watcha.team/contact</a></span>
                <ul className="flex text-center justify-center items-center">
                    <li>주식회사 왓챠 / </li>
                    <li>대표 박태훈 / </li>
                    <li>서울특별시 서초구 강남대로 343 산덕빌딩 3층</li>
                    <li>사업자등록번호 211-88-66013</li>
                    <li>통신판매업 신고번호 제 2019-서울서초-0965호 </li>
                    <li>호스팅 서비스 제공자 아마존웹서비시즈코리아 유한회사</li>
                    </ul>
                    <ul className="flex text-center justify-center items-center">
                    <li> 대표번호 02-515-9985 / </li>
                    <li>이용약관 / </li>
                    <li>개인정보 처리 방침 / </li>
                    <li>청소년 보호정책</li>
                    </ul>
            </div>
        </div>
      );
}
 
export default Footer;