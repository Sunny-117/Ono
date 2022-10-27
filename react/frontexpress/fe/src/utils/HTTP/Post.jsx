import qs from 'qs';

class Post extends React.Component {

  state = {
    data: null,
    component: this.props.loading || ''
  }
  
  async componentDidMount () {
    
    const { url, data, children, delay, error, dataOperator } = this.props;

    try {
      const result = await axios.post(url, qs.stringify(data));
      
      this.setState({
        data: dataOperator(result.data)
      }, () => {
        setTimeout(() => {
          this.setState({
            component: children(this.state.data)
          })
        }, delay || 0);
      })
    } catch (e) {
      this.setState({
        component: error || 'Error'
      });
      throw e;
    }
  }

  render () {
    return this.state.component;
  }
}

export default Post;