import React from "react";
import memberOnly from "../../commons/components/auth/memberOnly";
import MemberOnly from "../../commons/components/auth/memberOnly";

const MypageMain = () => {
 return ( 
    <MemberOnly>
        <h1>마이페이지</h1>
    </MemberOnly>
    );
};

export default React.memo(MypageMain)