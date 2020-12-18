import React,{Component} from 'react'

class Historytest extends Component {
  handleGoBack= () => {
    this.props.history.goBack();
  }
  
  handleGoHome = () => {
    this.props.history.push('/')
  }

  componentDidMount() {
    //이것을 설정하면, 페이지 변화가 생길때 나갈 것인지 질문.
    this.unblock = this.props.history.block('Really want to leave?');
  }

  componentWillUnmount() {
    if(this.unblock) //HistoryTest가 unmount 되면 alert 멈춤 
      this.unblock()
  }


  render() {
    return (
      <div>
        <button onClick={this.handleGoHome}>Go Home</button>
        <button onClick={this.handleGoBack}>Go Back</button>
      </div>
    )
  }
}

export default Historytest;