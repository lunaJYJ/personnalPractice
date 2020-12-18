const loggerMiddleware = store => next => action => {
    //미들웨어 기본구조

    console.group(action && action.type); // action type으로 log 그룹화
    console.log('Before : ',store.getState())
    console.log('action : ', action);
    next(action); //다음 미들웨어 또는 리듀서에게 전달.
    console.log('Next : ', store.getState());
    console.groupEnd(); //group end

};

export default loggerMiddleware;