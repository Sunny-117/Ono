import MyCheckboxList from './components/MyCheckboxList';
import studentsData from './students';

const { useCallback } = React;

function App () {

  const getCheckedData = useCallback((data) => {
    console.log(data);
  });

  return (
    <div>
      <MyCheckboxList
        data={ studentsData }
        headerCells={
          [
            '选择',
            'ID',
            '姓名',
            '分数',
            '删除'
          ]
        }
        allCheckedTip={
          {
            all: '全部选择',
            none: '全部撤销'
          }
        }
        onCheckedDataChange={ getCheckedData }
      ></MyCheckboxList>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)