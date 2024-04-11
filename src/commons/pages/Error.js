import React, {Component} from "react";
import loadable from '@loadable/component';

const ErrorDisplay = loadable(() => import('../components/ErrorDisplay'));

// 클래스형 컴포넌트 형으로 구성
class ErrorPage extends Component {
    state = {
        message: '', // 메세지만 있으면 에러 출력 한다는 상태값 입력
    }
    componentDidCatch(error, info) { 
        if (error) {
            this.setState({message: error.message});
            console.error(error, info);
        }
    }

    render() { // 출력하는 페이지인 렌더함수 정의
        const { children } = this.props;
        const {message} = this.state;
        return message ? <ErrorDisplay>{message}</ErrorDisplay> : children; // children은 태그 안쪽의 내용을 보여준다
    }
}

export default React.memo(ErrorPage);