class Get extends React.Component {

  state = {
    data: null,
    component: this.props.loading || ''
  }
  
  async componentDidMount () {
    const { url, delay, children, loading, error } = this.props;
    try {
      const result = await axios(url);
      
      this.setState({
        data: result.data
      }, () => {
        setTimeout(() => {
          this.setState({
            component: children(this.state.data)
          })
        }, delay || 0);
      });
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

export default Get;