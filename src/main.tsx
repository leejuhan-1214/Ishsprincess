import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './styles.css';
class ErrorBoundary extends React.Component<{children:React.ReactNode},{error:boolean}>{state={error:false};static getDerivedStateFromError(){return {error:true};}render(){return this.state.error?<div className="recovery"><h1>잠깐, 페이지가 접혔어요.</h1><p>저장된 기록은 그대로 있어요. 페이지를 다시 열어 주세요.</p><button onClick={()=>location.reload()}>다시 열기</button></div>:this.props.children;}}
createRoot(document.getElementById('root')!).render(<React.StrictMode><ErrorBoundary><App/></ErrorBoundary></React.StrictMode>);
