import React, {useState, useCallback } from "react";
import JoinForm from '../components/JoinForm';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const JoinContainer = () => {
    // 양식 데이터
    const [form, setForm] = useState({
        agree: false, 
    }); 

    // 양식 항목별 에러 메시지
    const [errors, setErrors] = useState({}); 

    const { t } = useTranslation();

    const navigate = useNavigate();
   
    /**
     *회원 가입 처리
     * 
     * 1. 데이터 검증
     *      1) 필수 항목 체크 - 이메일, 비밀번호, 비번확인, 회원명, 약관동의
     *      2) 이메일 중복 여부, 이메일 형식 체크 (정의 표현식 및 서버)
     *      3) 비번 복잡성 체크
     *      4) 비번과 비번 확인 일치 여부 
     * 
     * 2. 가입 처리 - 영구 저장
     * 3. 로그인 페이지 이동
     */
    
    const onSubmit = useCallback((e) => {
        e.preventDefault();

        const _errors = {};
        let hasErrors = false; // 에러 유무 

        /* 데이터 검증 - 필수 항목 체크 B */
        const requireFields = {
            email: t('이메일을_입력하세요.'),
            password: t('비밀번호를_입력하세요.'),
            confirmPassword: t('비밀번호를_확인하세요.'),
            name: t('회원명을_입력하세요.'),
            agree: t('회원가입_약관에_동의하세요.'),
        };

        // field -> email~agree 가르킴 , msg -> 위에 적혀있는 text 의미
        // (!form[field] || !form[field].trim()) -> 값의 공백 체크 및 그에 대한 반응 구현
        for (const [field, msg] of Object.entries(requireFields)) {
            // !form[field] - null, undefined, '' 체크, !form[field].trim() - '   '
            if (!form[field] || (typeof form[field] === 'string' && !form[field].trim())) {
                _errors[field] = _errors[field] || [];
                _errors[field].push(msg);
                hasErrors = true;
            }
        }
        /* 데이터 검증 - 필수 항목 체크 D */

        /* 데이터 검증 - 비번과 비번 확인 일치 여부 B */
        if (form.password && form.confirmPassword && form.password !== form.confirmPassword
        ) {
            _errors.confirmPassword = _errors.confirmPassword || [];
            _errors.confirmPassword.push(t('비밀번호가_정확하지_않습니다.'));
            hasErrors = true;
        }
        /* 데이터 검증 - 비번과 비번 확인 일치 여부 D */

        setErrors(_errors);

        if (hasErrors) { // 검증 실패시 가입 처리 X
            return; // 흐름을 끊는 역할 하단의 기능은 실행되지 않도록 
        }

        /* 가입처리 */

        /* 가입완료 후 로그인 페이지 이동 B */
        navigate("/member/login", { replace: true }); // replace: true -> 방문기록 X

    }, 
    [t, form, navigate],
);


    
    const onChange = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value.trim();
        setForm((form) => ({...form, [name]: value}) )
    }, []);

    const onToggle = useCallback(() => {
        setForm((form) => ({ ...form, agree: !form.agree }));
    }, []);

    const onReset = useCallback(() => {
        setForm({ agree: false });
    }, []);

    return <JoinForm form={form} errors={errors} 
    onSubmit={onSubmit} 
    onChange={onChange} 
    onToggle={onToggle} 
    onReset={onReset}
    />
}; 

export default React.memo(JoinContainer);