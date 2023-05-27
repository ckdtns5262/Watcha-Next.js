"use client";

import { useCallback, useState } from "react";
import CheckBox from "./CheckBox";




const Register = () => {

    const [checked, setChecked] = useState(false)

    const handleCheckClick = useCallback(()=>{
    
        if(!checked) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    },[])


  return (
    <div className="mt-6">
      <ul className="text-white text-xs space-y-2">
      <li className="space-x-2">
          <CheckBox id="checkall" onChange={onchange}  />
          <label htmlFor="" className="hover:cursor-pointer">
            전체 약관에 동의합니다
          </label>
        </li>
        <li className="space-x-2">
          <CheckBox id="check1" onChange={onchange} />
          <label htmlFor="check1" className="hover:cursor-pointer">
            만 14세 이상입니다.
          </label>
        </li>
        <li className="space-x-2">
          <CheckBox id="check2" onChange={onchange} />
          <label htmlFor="check2" className="hover:cursor-pointer">
            왓챠피디아 서비스 이용약관에 동의합니다 (필수)
          </label>
        </li>
        <li className="space-x-2">
          <CheckBox id="check3" onChange={onchange} />
          <label htmlFor="check3" className="hover:cursor-pointer">
            왓챠 서비스 이용약관에 동의합니다 (필수)
          </label>
        </li>
        <li className="space-x-2">
          <CheckBox id="check4" onChange={onchange} />
          <label htmlFor="check4" className="hover:cursor-pointer">
            개인정보 수집 및 이용에 대한 안내에 동의합니다 (필수)
          </label>
        </li>
        <li className="space-x-2">
          <CheckBox id="check5" onChange={onchange} />
          <label htmlFor="check5" className="hover:cursor-pointer">
            신작 알림 이벤트 정보 수신에 동의합니다 (선택)
          </label>
        </li>
      </ul>
      <button className="bg-[#F82F62] rounded-full mt-4 py- w-full text-white h-12">
              게정 생성하기
            </button>
    <span className="flex text-white text-xs mt-3 justify-center">결제 정보요? 충분히 둘러보시고 입력해도 늦지 않아요</span>
    </div>
    
  );
};

export default Register;
